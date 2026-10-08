import React, { useRef } from 'react';
import { Camera, ImageOff, RefreshCw, ZoomIn } from 'lucide-react';
import { useCustomProductImage } from '../utils/customImageStorage';

interface ProductCardImageProps {
  productId: string;
  productName: string;
  refCode: string;
  badge?: string;
  defaultImage: string;
  onOpenZoom?: (imgUrl: string) => void;
  className?: string;
}

export const ProductCardImage: React.FC<ProductCardImageProps> = ({
  productId,
  productName,
  refCode,
  badge,
  defaultImage,
  onOpenZoom,
  className = "h-56 mb-4"
}) => {
  const { image, isCustom, updateImageFile, resetImage } = useCustomProductImage(productId, defaultImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateImageFile(e.target.files[0]);
    }
  };

  return (
    <div className={`bg-[#0d1117] relative overflow-hidden rounded-xl border border-[#273244] group/img flex items-center justify-center ${className}`}>
      {/* REF Tag */}
      <span className="absolute top-2.5 right-2.5 bg-[#0d1117]/95 text-[#9fcaff] border border-[#2c384c] font-mono-code text-[10px] px-2 py-0.5 rounded font-semibold z-10 tracking-wider shadow">
        REF: {refCode}
      </span>

      {/* Badge (e.g. MÁS VENDIDO) */}
      {badge && (
        <span className="absolute top-2.5 left-2.5 bg-[#994700] text-white font-mono-code text-[10px] px-2 py-0.5 rounded font-bold uppercase z-10 shadow">
          {badge}
        </span>
      )}

      {/* Real Photo indicator */}
      {image && (
        <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1.5">
          <span className="bg-[#0b1b11]/90 border border-[#22c55e]/40 text-[#4ade80] font-mono-code text-[9px] px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
            {isCustom ? 'Foto Real Cargada (Con Fondo)' : 'Fotografía Real (Sin IA)'}
          </span>
        </div>
      )}

      {/* Quick Action buttons */}
      <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
        {image && onOpenZoom && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenZoom(image);
            }}
            title="Ver fotografía en alta resolución"
            className="p-1.5 bg-[#141a24]/90 hover:bg-[#202938] text-white rounded border border-[#2f3b4e] shadow transition-colors cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          title={`Cargar fotografía real (${productName})`}
          className="p-1.5 bg-[#00497d]/90 hover:bg-[#005fa3] text-white rounded border border-[#9fcaff]/40 shadow transition-colors cursor-pointer flex items-center gap-1 text-[10px] font-mono-code"
        >
          <Camera className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Foto Real</span>
        </button>

        {isCustom && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              resetImage();
            }}
            title="Restablecer a fotografía por defecto"
            className="p-1.5 bg-[#2d1b1b]/90 hover:bg-[#4a2222] text-[#fca5a5] rounded border border-[#7f1d1d] shadow transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Image display */}
      {image ? (
        <img
          src={image}
          alt={productName}
          referrerPolicy="no-referrer"
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 bg-[#0d1117]"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-[#717d93]">
          <ImageOff className="w-10 h-10 mb-1 opacity-40" />
          <span className="text-[11px] font-mono-code font-medium">Sin Imagen</span>
        </div>
      )}
    </div>
  );
};
