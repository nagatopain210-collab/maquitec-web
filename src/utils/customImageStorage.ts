import { useState, useEffect } from 'react';

const STORAGE_PREFIX = 'maquitec_custom_product_image_';

// Ensure stale cached override for molino-carne-22 is cleared so new official photo is shown
try {
  if (typeof window !== 'undefined' && window.localStorage) {
    const key = `${STORAGE_PREFIX}molino-carne-22`;
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  }
} catch {
  // ignore
}

export function getCustomProductImage(productId: string): string | null {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}${productId}`);
  } catch {
    return null;
  }
}

export function saveCustomProductImage(productId: string, dataUrl: string): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${productId}`, dataUrl);
    window.dispatchEvent(new CustomEvent('custom-product-image-updated', { detail: { productId, dataUrl } }));
  } catch (err) {
    console.error('Error saving custom image to localStorage:', err);
  }
}

export function removeCustomProductImage(productId: string): void {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${productId}`);
    window.dispatchEvent(new CustomEvent('custom-product-image-updated', { detail: { productId, dataUrl: null } }));
  } catch (err) {
    console.error('Error removing custom image:', err);
  }
}

export function useCustomProductImage(productId: string, fallbackImage: string) {
  const [image, setImage] = useState<string>(() => {
    return getCustomProductImage(productId) || fallbackImage;
  });
  const [isCustom, setIsCustom] = useState<boolean>(() => {
    return !!getCustomProductImage(productId);
  });

  useEffect(() => {
    // Check initial
    const stored = getCustomProductImage(productId);
    if (stored) {
      setImage(stored);
      setIsCustom(true);
    } else {
      setImage(fallbackImage);
      setIsCustom(false);
    }

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ productId: string; dataUrl: string | null }>;
      if (customEvent.detail && customEvent.detail.productId === productId) {
        if (customEvent.detail.dataUrl) {
          setImage(customEvent.detail.dataUrl);
          setIsCustom(true);
        } else {
          setImage(fallbackImage);
          setIsCustom(false);
        }
      }
    };

    window.addEventListener('custom-product-image-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('custom-product-image-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [productId, fallbackImage]);

  const updateImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        saveCustomProductImage(productId, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetImage = () => {
    removeCustomProductImage(productId);
  };

  return { image, isCustom, updateImageFile, resetImage };
}
