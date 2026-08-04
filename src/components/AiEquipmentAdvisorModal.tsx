import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Bot, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';

interface AiEquipmentAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const AiEquipmentAdvisorModal: React.FC<AiEquipmentAdvisorModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddToCart,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const [businessType, setBusinessType] = useState('restaurante');
  const [dailyVolume, setDailyVolume] = useState('medio');
  const [primaryGoal, setPrimaryGoal] = useState('velocidad');
  const [customText, setCustomText] = useState('');
  const [recommendations, setRecommendations] = useState<Product[] | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    setRecommendations(null);

    setTimeout(() => {
      let recs: Product[] = [];

      if (businessType === 'carniceria' || primaryGoal === 'cárnicos') {
        recs = products.filter(p => p.category === 'molinos' || p.category === 'embutidoras');
      } else if (businessType === 'cafe' || primaryGoal === 'bebidas') {
        recs = products.filter(p => p.category === 'wafleras' || p.category === 'granizadoras' || p.category === 'licuadoras');
      } else if (businessType === 'planta') {
        recs = products.filter(p => p.category === 'molinos' || p.category === 'empacadoras' || p.category === 'embutidoras');
      } else {
        // default restaurant
        recs = products.slice(0, 3);
      }

      setRecommendations(recs);
      setAnalyzing(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white border border-[#c1c7d2] rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#414750] hover:text-[#1a1c1e] p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 border-b border-[#c1c7d2] pb-4">
          <div className="p-2 bg-[#eff4ff] text-[#00497d] rounded-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#1a1c1e]">
              Asistente de Selección de Maquinaria
            </h3>
            <p className="font-body text-xs text-[#414750]">
              Indique su tipo de negocio y volumen estimado para recibir recomendación técnica instantánea.
            </p>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleAnalyze} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div>
              <label className="block font-mono-code text-xs text-[#1a1c1e] font-semibold uppercase mb-1">
                Tipo de Negocio
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
              >
                <option value="restaurante">Restaurante / Hamburguesería</option>
                <option value="carniceria">Carnicería / Salsamentaria</option>
                <option value="cafe">Cafetería / Heladería / Bar</option>
                <option value="planta">Planta Industrial de Alimentos</option>
                <option value="metalmecanica">Taller / Metalmecánica</option>
              </select>
            </div>

            <div>
              <label className="block font-mono-code text-xs text-[#1a1c1e] font-semibold uppercase mb-1">
                Volumen Diario
              </label>
              <select
                value={dailyVolume}
                onChange={(e) => setDailyVolume(e.target.value)}
                className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
              >
                <option value="bajo">Bajo (Producción estándar)</option>
                <option value="medio">Medio (Operación comercial regular)</option>
                <option value="alto">Alto (Heavy duty 24/7)</option>
              </select>
            </div>

            <div>
              <label className="block font-mono-code text-xs text-[#1a1c1e] font-semibold uppercase mb-1">
                Objetivo Principal
              </label>
              <select
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
              >
                <option value="velocidad">Aumentar velocidad de despacho</option>
                <option value="cárnicos">Procesamiento de cárnicos</option>
                <option value="bebidas">Granizados y licuados masivos</option>
                <option value="empaque">Vida útil y empaque al vacío</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block font-mono-code text-xs text-[#1a1c1e] font-semibold uppercase mb-1">
              Detalle adicional (Opcional):
            </label>
            <input
              type="text"
              placeholder="Ej: Necesitamos procesar 80kg de carne para hamburguesas por hora"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
            />
          </div>

          <button
            type="submit"
            disabled={analyzing}
            className="w-full bg-[#1a1c1e] text-white font-mono-code text-xs py-3 rounded font-bold uppercase hover:bg-[#454749] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {analyzing ? (
              <span>Analizando Especificaciones...</span>
            ) : (
              <>
                <Bot className="w-4 h-4" />
                <span>Generar Recomendación Técnica</span>
              </>
            )}
          </button>
        </form>

        {/* Results */}
        {recommendations && (
          <div className="space-y-4 pt-4 border-t border-[#c1c7d2] animate-fade-in">
            <h4 className="font-display text-sm font-bold text-[#1a1c1e] uppercase tracking-wider flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00497d]" />
              <span>Equipos Sugeridos para su Perfil ({businessType.toUpperCase()}):</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((item) => (
                <div key={item.id} className="border border-[#c1c7d2] p-4 rounded bg-[#f8f9ff] flex gap-3">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mix-blend-multiply" />
                  <div className="flex-1 space-y-1">
                    <span className="bg-[#1a1c1e] text-white text-[10px] font-mono-code px-1.5 py-0.5 rounded">
                      REF: {item.ref}
                    </span>
                    <h5 className="font-display text-sm font-bold text-[#1a1c1e]">{item.name}</h5>
                    <p className="font-body text-[11px] text-[#414750] line-clamp-2">{item.shortDesc}</p>

                    <div className="pt-2 flex gap-2">
                      <button
                        onClick={() => { onClose(); onSelectProduct(item); }}
                        className="text-[11px] font-mono-code text-[#0061a4] underline"
                      >
                        Ficha Técnica
                      </button>
                      <button
                        onClick={() => { onAddToCart(item); }}
                        className="text-[11px] font-mono-code bg-[#1a1c1e] text-white px-2 py-0.5 rounded"
                      >
                        + Cotizar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
