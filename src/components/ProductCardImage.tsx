import React from 'react';
import { ImageOff, ZoomIn } from 'lucide-react';

interface ProductCardImageProps {
  productId?: string;
  productName: string;
  refCode: string;
  badge?: string;
  defaultImage: string;
  onOpenZoom?: (imgUrl: string) => void;
  className?: string;
}

export const ProductCardImage: React.FC<ProductCardImageProps> = ({
  productName,
  refCode,
  badge,
  defaultImage,
  onOpenZoom,
  className = "h-56 mb-4"
}) => {
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
      {defaultImage && (
        <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1.5">
          <span className="bg-[#0b1b11]/90 border border-[#22c55e]/40 text-[#4ade80] font-mono-code text-[9px] px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
            Fotografía Real
          </span>
        </div>
      )}

      {/* Quick Zoom Button */}
      {defaultImage && onOpenZoom && (
        <div className="absolute bottom-2 right-2 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenZoom(defaultImage);
            }}
            title="Ver fotografía en alta resolución"
            className="p-1.5 bg-[#141a24]/90 hover:bg-[#202938] text-white rounded border border-[#2f3b4e] shadow transition-colors cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Static Image display */}
      {defaultImage ? (
        <img
          src={defaultImage}
          alt={productName}
          loading="lazy"
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 bg-[#0d1117]"
          onError={(e) => {
            const currentSrc = e.currentTarget.src;
            if (currentSrc.includes('/images/') && !currentSrc.includes('./images/')) {
              const filename = currentSrc.split('/images/')[1];
              if (filename) {
                e.currentTarget.src = `./images/${filename}`;
              }
            }
          }}
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
