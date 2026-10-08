import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, MessageSquareCode } from 'lucide-react';
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
    <section className="relative bg-[#ffffff] border-b border-[#c1c7d2] py-12 md:py-20 overflow-hidden bg-industrial-pattern">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Hero Content */}
        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#e2e2e5] px-3 py-1.5 rounded hover:bg-[#c6c6c9] transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#1a1c1e]" />
            <span className="font-mono-code text-xs text-[#1a1c1e] font-semibold uppercase tracking-wider">
              Calidad Certificada ISO 9001
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#1a1c1e] leading-tight tracking-tight">
            Maquinaria de Alto Rendimiento: Más Velocidad y Ganancia para su Restaurante
          </h1>

          <p className="font-body text-base md:text-lg text-[#414750] uppercase tracking-wide leading-relaxed max-w-xl">
            MAQUITEC INGENIERÍA: EXPERTOS EN FABRICACIÓN DE MAQUINARIA PARA ALIMENTOS. AYUDAMOS A LOS RESTAURANTES A TENER MAYOR VELOCIDAD Y MÁS GANANCIA EN SUS NEGOCIOS.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 bg-[#1a1c1e] text-white font-mono-code text-xs px-6 py-3 rounded shadow-md hover:bg-[#454749] transition-all"
            >
              <span>Ver Catálogo 2026</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#corte-laser"
              className="inline-flex items-center gap-2 bg-white text-[#1a1c1e] border border-[#717782] font-mono-code text-xs px-6 py-3 rounded hover:bg-[#eff4ff] transition-all"
            >
              <span>Servicio Corte Láser</span>
            </a>
          </div>
        </div>

        {/* Right Quote Card Form */}
        <div className="bg-white p-6 md:p-8 border border-[#c1c7d2] rounded shadow-lg relative z-10 ring-2 ring-[#1a1c1e] ring-offset-4">
          <div className="mb-6 border-b border-[#c1c7d2] pb-3">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#1a1c1e]">
              Cotización Inmediata
            </h3>
            <p className="font-body text-sm text-[#414750] mt-1">
              Solicite especificaciones técnicas y precios sin compromiso.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#eff4ff] border border-[#d3e4fe] p-6 rounded text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 bg-[#00497d] text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-display text-lg font-bold text-[#1a1c1e]">
                ¡Solicitud Recibida!
              </h4>
              <p className="font-body text-sm text-[#414750]">
                Gracias <strong>{fullName}</strong>. Un ingeniero comercial de Maquitec se pondrá en contacto al número <strong>{phone}</strong> con la ficha técnica para <em>{machineInterest}</em>.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/573508826094?text=${encodeURIComponent(`Hola Maquitec, acabo de solicitar información en la web para ${machineInterest}. Mi nombre es ${fullName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-mono-code text-xs py-3 rounded font-bold hover:brightness-105 transition-all shadow-sm"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Acelerar Respuesta por WhatsApp</span>
                </a>
                
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#0061a4] underline font-mono-code"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#1a1c1e] mb-1.5 uppercase">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Ing. Roberto Torres"
                  className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2.5 font-body text-sm focus:outline-none focus:border-[#1a1c1e] focus:ring-1 focus:ring-[#1a1c1e] transition-all"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#1a1c1e] mb-1.5 uppercase">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+57 300 000 0000"
                  className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2.5 font-body text-sm focus:outline-none focus:border-[#1a1c1e] focus:ring-1 focus:ring-[#1a1c1e] transition-all"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#1a1c1e] mb-1.5 uppercase">
                  Máquina de Interés
                </label>
                <select
                  value={machineInterest}
                  onChange={(e) => setMachineInterest(e.target.value)}
                  className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2.5 font-body text-sm focus:outline-none focus:border-[#1a1c1e] focus:ring-1 focus:ring-[#1a1c1e] transition-all cursor-pointer"
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
                className="w-full bg-[#1a1c1e] text-white font-mono-code text-xs py-3.5 rounded shadow-md hover:bg-[#454749] hover:scale-[1.01] transition-all uppercase font-bold mt-2 cursor-pointer"
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
