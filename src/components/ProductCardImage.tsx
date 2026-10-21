import React from 'react';
import { ImageOff, ZoomIn } from 'lucide-react';

interface ProductCardImageProps {
  productId?: string;
  productName: string;
  refCode: string;
  badge?: string;
  image?: string;
  defaultImage?: string;
  onOpenZoom?: (imgUrl: string) => void;
  className?: string;
}

export const ProductCardImage: React.FC<ProductCardImageProps> = ({
  productName,
  refCode,
  badge,
  image,
  defaultImage,
  onOpenZoom,
  className = "h-56 mb-4"
}) => {
  const [loadError, setLoadError] = React.useState(false);
  const displayImage = image ?? defaultImage ?? '';

  // Reset error when image path changes
  React.useEffect(() => {
    setLoadError(false);
  }, [displayImage]);

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
      {displayImage && !loadError && (
        <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1.5">
          <span className="bg-[#0b1b11]/90 border border-[#22c55e]/40 text-[#4ade80] font-mono-code text-[9px] px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
            Fotografía Real
          </span>
        </div>
      )}

      {/* Quick Zoom Button */}
      {displayImage && !loadError && onOpenZoom && (
        <div className="absolute bottom-2 right-2 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenZoom(displayImage);
            }}
            title="Ver fotografía en alta resolución"
            className="p-1.5 bg-[#141a24]/90 hover:bg-[#202938] text-white rounded border border-[#2f3b4e] shadow transition-colors cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Static Image display or clean waiting placeholder */}
      {displayImage && !loadError ? (
        <img
          src={displayImage}
          alt={productName}
          loading="lazy"
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 bg-[#0d1117]"
          onError={(e) => {
            const currentSrc = e.currentTarget.src;
            const attempts = parseInt(e.currentTarget.getAttribute('data-retry-count') || '0', 10);
            if (attempts >= 3) {
              setLoadError(true);
              return;
            }
            e.currentTarget.setAttribute('data-retry-count', String(attempts + 1));

            const filename = currentSrc.split('/').pop()?.split('?')[0];
            if (!filename) {
              setLoadError(true);
              return;
            }

            const cleanRef = refCode.toLowerCase().replace(/[^a-z0-9_-]/g, '-');

            if (attempts === 0) {
              if (currentSrc.includes('/images/')) {
                e.currentTarget.src = `/${filename}`;
              } else {
                e.currentTarget.src = `/images/${filename}`;
              }
            } else if (attempts === 1) {
              e.currentTarget.src = `/${cleanRef}.jpg`;
            } else if (attempts === 2) {
              e.currentTarget.src = `/images/${cleanRef}.jpg`;
            }
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-[#717d93] px-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#141a24] border border-[#273244] flex items-center justify-center mb-2">
            <ImageOff className="w-6 h-6 opacity-60 text-[#717d93]" />
          </div>
          <span className="text-[11px] font-mono-code font-semibold text-[#8b9bb4]">
            {displayImage ? 'Pendiente de Fotografía Real' : 'Sin Imagen'}
          </span>
          <span className="text-[10px] text-[#55637a] mt-0.5 font-mono-code">
            {displayImage ? `Archivo: ${displayImage.replace(/^\/(images\/)?/, '')}` : 'Consulte con asesor'}
          </span>
        </div>
      )}
    </div>
  );
};
