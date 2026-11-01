import React from 'react';
import { Smartphone, ShoppingBag } from 'lucide-react';

interface MobileBottomCtaBarProps {
  onOpenQuoteDrawer: () => void;
  quoteCount: number;
}

export const MobileBottomCtaBar: React.FC<MobileBottomCtaBarProps> = ({
  onOpenQuoteDrawer,
  quoteCount
}) => {
  const whatsappUrl = `https://wa.me/573508826094?text=${encodeURIComponent(
    'Hola Maquitec Ingeniería, deseo asesoría técnica y cotización de maquinaria de alimentos / corte láser.'
  )}`;

  return (
    <aside
      aria-label="Barra de contacto rápido móvil"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b0f17]/95 backdrop-blur-md border-t border-[#1f2838] px-3.5 py-2.5 shadow-2xl safe-area-inset-bottom"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Primary Contact CTA (WhatsApp Direct) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[48px] bg-[#25D366] active:bg-[#1fa851] text-white font-mono-code text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 active:scale-[0.98] transition-all"
        >
          <Smartphone className="w-4 h-4 shrink-0" />
          <span className="truncate">Cotizar por WhatsApp</span>
        </a>

        {/* Quote Cart CTA */}
        <button
          type="button"
          onClick={onOpenQuoteDrawer}
          className="relative min-h-[48px] px-3.5 bg-[#0061a4] active:bg-[#004d82] text-white font-mono-code text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#0061a4]/20 active:scale-[0.98] transition-all cursor-pointer shrink-0"
          aria-label={`Ver cotización (${quoteCount} equipos)`}
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span className="hidden xs:inline">Cotización</span>
          {quoteCount > 0 && (
            <span className="bg-[#ff6b00] text-white text-[10px] min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center font-bold border border-[#0b0f17]">
              {quoteCount}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};
