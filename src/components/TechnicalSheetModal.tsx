import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, ShieldCheck, Zap, Scale, Box, Award, MessageSquare, Plus, CheckCircle2 } from 'lucide-react';

interface TechnicalSheetModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, voltage: string) => void;
  isInCart: boolean;
}

export const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart
}) => {
  if (!product) return null;

  const [selectedVoltage, setSelectedVoltage] = useState(product.voltage.includes('110V') ? '110V' : '220V');
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedVoltage);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const whatsappMessage = `Hola Maquitec Ingeniería, requiero cotización y asesoría técnica para el equipo *${product.name} (REF: ${product.ref})* en voltaje ${selectedVoltage}.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div
        className="relative bg-white border border-[#c1c7d2] rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-white border-b border-[#c1c7d2] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="bg-[#1a1c1e] text-white font-mono-code text-xs px-2.5 py-1 rounded font-bold">
              REF: {product.ref}
            </span>
            <span className="font-mono-code text-xs text-[#717782] uppercase">
              | {product.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#414750] hover:text-[#1a1c1e] hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Main Hero row: Image + Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Box */}
            <div className="bg-[#eff4ff] border border-[#d3e4fe] p-6 rounded-lg flex items-center justify-center relative min-h-[260px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-56 object-contain filter drop-shadow-md"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-[#c1c7d2] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00497d]" />
                <span className="font-mono-code text-[10px] text-[#1a1c1e] font-semibold uppercase">
                  Garantía Maquitec 1 Año
                </span>
              </div>
            </div>

            {/* Title & Desc */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#1a1c1e]">
                {product.name}
              </h3>

              <p className="font-body text-sm text-[#414750] leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Price Range Estimate */}
              <div className="bg-[#f8f9ff] border border-[#e5eeff] p-3 rounded">
                <span className="block font-mono-code text-[11px] text-[#717782] uppercase">
                  Precio Estimado Referencial
                </span>
                <span className="font-display text-xl font-extrabold text-[#1a1c1e]">
                  ${product.priceEstimate.toLocaleString('es-CO')} COP
                </span>
                <span className="block text-[10px] text-[#414750] font-body mt-0.5">
                  *Sujeto a variación por accesorios y entrega de impuestos de ley.
                </span>
              </div>

              {/* Voltage Selector */}
              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#1a1c1e] mb-1.5 uppercase">
                  Voltaje de Operación Preferido:
                </label>
                <div className="flex gap-3">
                  {['110V', '220V'].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSelectedVoltage(v)}
                      className={`flex-1 py-2 px-3 rounded font-mono-code text-xs font-bold border transition-all cursor-pointer ${
                        selectedVoltage === v
                          ? 'bg-[#1a1c1e] text-white border-[#1a1c1e]'
                          : 'bg-white text-[#414750] border-[#c1c7d2] hover:bg-gray-50'
                      }`}
                    >
                      {v} Monofásico / Bifásico
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div>
            <h4 className="font-display text-lg font-bold text-[#1a1c1e] mb-3 flex items-center gap-2 border-b border-[#c1c7d2] pb-2">
              <Zap className="w-5 h-5 text-[#0061a4]" />
              <span>Ficha Técnica Detallada</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-[#f3f4f6] p-3 rounded flex justify-between items-center text-xs font-body"
                >
                  <span className="font-mono-code text-[#717782] uppercase font-semibold">
                    {spec.label}:
                  </span>
                  <span className="font-semibold text-[#1a1c1e] text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Certifications */}
          <div>
            <h4 className="font-display text-lg font-bold text-[#1a1c1e] mb-3 flex items-center gap-2 border-b border-[#c1c7d2] pb-2">
              <Award className="w-5 h-5 text-[#0061a4]" />
              <span>Ventajas y Garantías de Ingeniería</span>
            </h4>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-body text-[#414750]">
                  <CheckCircle2 className="w-4 h-4 text-[#00497d] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-[#c1c7d2] px-6 py-4 flex flex-col sm:flex-row gap-3 items-center justify-between z-10">
          <a
            href={`https://wa.me/573508826094?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-mono-code text-xs px-5 py-3 rounded font-bold hover:brightness-105 transition-all cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar Asesor vía WhatsApp</span>
          </a>

          <button
            onClick={handleAdd}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono-code text-xs px-6 py-3 rounded font-bold uppercase transition-all cursor-pointer ${
              addedNotice
                ? 'bg-[#00497d] text-white'
                : 'bg-[#1a1c1e] text-white hover:bg-[#454749]'
            }`}
          >
            {addedNotice ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Agregado a Cotización!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>{isInCart ? 'Actualizar en Cotizador' : 'Agregar a la Cotización'}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
