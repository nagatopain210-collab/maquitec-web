import { useState, useEffect } from 'react';

const STORAGE_PREFIX = 'maquitec_custom_product_image_';

// Clean up legacy localStorage base64 overrides on page load so static /images/ remain predetermined defaults
if (typeof window !== 'undefined') {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(STORAGE_PREFIX)) {
        const productId = key.replace(STORAGE_PREFIX, '');
        const dataUrl = localStorage.getItem(key);
        if (productId && dataUrl && dataUrl.startsWith('data:image')) {
          // Sync to server if possible, then remove from localStorage to avoid bloat and ensure static priority
          fetch('/api/save-product-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, dataUrl })
          }).catch(() => {
            // Server might be in production static mode
          });
        }
      }
    });
  } catch {
    // ignore
  }
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
    
    // Also persist permanently to project static /public/images folder via dev server
    fetch('/api/save-product-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, dataUrl })
    }).catch(err => {
      console.warn('Persistent image save notification:', err);
    });
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
  // If the product has a predetermined static image (/images/...), use it directly as default
  const isStaticDefault = !!(fallbackImage && fallbackImage.startsWith('/images/'));

  const [image, setImage] = useState<string>(() => {
    if (isStaticDefault) {
      return fallbackImage;
    }
    return getCustomProductImage(productId) || fallbackImage;
  });
  const [isCustom, setIsCustom] = useState<boolean>(() => {
    if (isStaticDefault) {
      return false;
    }
    return !!getCustomProductImage(productId);
  });

  useEffect(() => {
    // When the page loads, always establish the static catalog image as predetermined default
    if (isStaticDefault) {
      setImage(fallbackImage);
      setIsCustom(false);
    } else {
      const stored = getCustomProductImage(productId);
      if (stored) {
        setImage(stored);
        setIsCustom(true);
      } else {
        setImage(fallbackImage);
        setIsCustom(false);
      }
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
  }, [productId, fallbackImage, isStaticDefault]);

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

