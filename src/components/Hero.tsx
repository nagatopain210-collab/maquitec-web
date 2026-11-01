import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, MessageSquareCode, Smartphone, Sparkles } from 'lucide-react';
import { QuoteRequest } from '../types';

interface HeroProps {
  onQuickQuoteSubmit: (quote: QuoteRequest) => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickQuoteSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [machineInterest, setMachineInterest] = useState('Molino de Carne Industrial');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    onQuickQuoteSubmit({
      fullName,
      phone,
      machineInterest
    });

    setSubmitted(true);
  };

  return (
    <section className="relative bg-[#ffffff] border-b border-[#c1c7d2] py-8 sm:py-10 md:py-20 overflow-hidden bg-industrial-pattern">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Hero Content - Above the fold on mobile */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10 text-left">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f0f1f4] px-3 py-1.5 rounded-lg border border-[#d6d9e0]">
            <ShieldCheck className="w-4 h-4 text-[#0061a4] shrink-0" />
            <span className="font-mono-code text-[11px] sm:text-xs text-[#1a1c1e] font-semibold uppercase tracking-wider">
              Garantía Directa de Fábrica · Acero Inox 304
            </span>
          </div>

          {/* Main Headline: text-2xl on mobile, text-3xl on tablet, text-5xl on desktop */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1a1c1e] leading-[1.2] md:leading-tight tracking-tight text-balance">
            Maquinaria de Alto Rendimiento: Más Velocidad y Ganancia para su Restaurante
          </h1>

          {/* Value Proposition */}
          <p className="font-body text-sm sm:text-base md:text-lg text-[#414750] leading-relaxed max-w-xl">
            Expertos en fabricación y comercialización de equipos industriales en acero inoxidable 304. Automatice sus procesos, reduzca tiempos de cocina y maximice su rentabilidad.
          </p>

          {/* Immediate Above-the-fold Mobile CTAs (min-h-[48px] touch targets) */}
          <div className="pt-1 flex flex-col sm:flex-row gap-2.5 sm:gap-4 items-stretch sm:items-center">
            <a
              href="#productos"
              className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#1a1c1e] hover:bg-[#35383c] active:bg-[#000000] text-white font-mono-code text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md active:scale-[0.98] transition-all font-bold uppercase"
            >
              <span>Ver Catálogo 2026 (93 Equipos)</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            
            <a
              href={`https://wa.me/573508826094?text=${encodeURIComponent('Hola Maquitec, deseo consultar maquinaria de alimentos disponible para entrega inmediata.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20be5a] active:bg-[#199e49] text-white font-mono-code text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md active:scale-[0.98] transition-all font-bold"
            >
              <Smartphone className="w-4 h-4 shrink-0" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Quick social proof markers */}
          <div className="pt-2 flex items-center gap-4 text-xs font-mono-code text-[#717782] flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              Entrega en todo Colombia
            </span>
            <span>·</span>
            <span>Planta & Boutique Bogotá</span>
            <span>·</span>
            <span>Corte Láser CNC</span>
          </div>
        </div>

        {/* Right Quote Card Form - Compact & touch-optimized on mobile */}
        <div className="bg-white p-5 sm:p-6 md:p-8 border border-[#c1c7d2] rounded-2xl shadow-xl relative z-10 ring-1 ring-[#1a1c1e]/10">
          <div className="mb-4 sm:mb-6 border-b border-[#e1e4ea] pb-3">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-[#1a1c1e]">
                Cotización Inmediata
              </h2>
              <span className="text-[11px] font-mono-code text-[#0061a4] font-semibold bg-[#eff4ff] px-2.5 py-1 rounded-md">
                Respuesta en minutos
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-[#414750] mt-1">
              Reciba ficha técnica completa y precios mayoristas sin compromiso.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#eff4ff] border border-[#d3e4fe] p-5 sm:p-6 rounded-xl text-center space-y-3.5 animate-fade-in">
              <div className="w-12 h-12 bg-[#00497d] text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1a1c1e]">
                ¡Solicitud Recibida!
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#414750]">
                Gracias <strong>{fullName}</strong>. Un ingeniero comercial se pondrá en contacto al <strong>{phone}</strong> con la propuesta técnica para <em>{machineInterest}</em>.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/573508826094?text=${encodeURIComponent(`Hola Maquitec, acabo de solicitar información en la web para ${machineInterest}. Mi nombre es ${fullName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1fa851] text-white font-mono-code text-xs sm:text-sm py-3 rounded-xl font-bold active:scale-[0.98] transition-all shadow-sm"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Acelerar Respuesta por WhatsApp</span>
                </a>
                
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="min-h-[44px] flex items-center justify-center text-xs text-[#0061a4] hover:underline font-mono-code cursor-pointer"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#1a1c1e] mb-1 uppercase">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Roberto Torres"
                  className="w-full min-h-[48px] bg-[#f8f9fb] border border-[#c1c7d2] rounded-xl px-3.5 py-2.5 font-body text-base md:text-sm focus:outline-none focus:border-[#0061a4] focus:ring-2 focus:ring-[#0061a4]/20 transition-all"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#1a1c1e] mb-1 uppercase">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 300 123 4567"
                  className="w-full min-h-[48px] bg-[#f8f9fb] border border-[#c1c7d2] rounded-xl px-3.5 py-2.5 font-body text-base md:text-sm focus:outline-none focus:border-[#0061a4] focus:ring-2 focus:ring-[#0061a4]/20 transition-all"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#1a1c1e] mb-1 uppercase">
                  Máquina de Interés
                </label>
                <select
                  value={machineInterest}
                  onChange={(e) => setMachineInterest(e.target.value)}
                  className="w-full min-h-[48px] bg-[#f8f9fb] border border-[#c1c7d2] rounded-xl px-3.5 py-2.5 font-body text-base md:text-sm focus:outline-none focus:border-[#0061a4] focus:ring-2 focus:ring-[#0061a4]/20 transition-all cursor-pointer"
                >
                  <option value="Molino de Carne TK-12">Molino de Carne TK-12</option>
                  <option value="Desmechadora de Carne o Pollo Eléctrica">Desmechadora de Carne o Pollo Eléctrica</option>
                  <option value="Granizadora Doble Tanque 24L">Granizadora Doble Tanque 24L</option>
                  <option value="Licuadora Industrial Alta Capacidad 4L">Licuadora Industrial Alta Capacidad 4L</option>
                  <option value="Embutidora Hidráulica 15L">Embutidora Hidráulica 15L</option>
                  <option value="Empacadora al Vacío Doble Campana">Empacadora al Vacío Doble Campana</option>
                  <option value="Servicio de Corte Láser CNC">Servicio de Corte Láser CNC</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-[#1a1c1e] hover:bg-[#35383c] active:bg-[#000000] text-white font-mono-code text-xs sm:text-sm py-3.5 rounded-xl shadow-md active:scale-[0.98] transition-all uppercase font-bold mt-1 cursor-pointer"
              >
                Solicitar Cotización Técnica
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

