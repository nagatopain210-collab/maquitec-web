import React, { useState } from 'react';
import { MapPin, Wrench, ShieldCheck, Factory, CheckCircle, X } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  const factoryImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuBl6VX7it7_rkD6JSs-Dy4kLf6WKYvFzqEPc47Cv7T3R0uyyZCZDs24VhERRNMefQG2MhsZv6r5vWXodrhd8XNryoqlISbuhfxPXVVxAuw6u0R1NQiKEkYeGirkodAxJKXC3kRuAyXyBYiP8RpkjrVa4rWdbcLAV1oT-UHdObqIv2qShVR0neQUxbInjYj0uEWFQPe8fF61YhC36XKbydbphR3vHghFvdcndJrbIhTMGwEH72rma6ik2Q";

  const handleScheduleVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone) return;
    setVisitSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-[#ffffff]" id="nosotros">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1a1c1e] mb-4">
            Nuestra Ingeniería, Su Éxito
          </h2>

          <ul className="space-y-5 font-body text-base md:text-lg text-[#414750]">
            <li className="flex items-start gap-3">
              <div className="p-2 bg-[#f3f4f6] rounded text-[#1a1c1e] shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-[#0061a4]" />
              </div>
              <div className="text-sm md:text-base">
                <strong className="text-[#1a1c1e] block text-base font-bold">Ubicaciones en Bogotá, Colombia</strong>
                <span className="block text-[#414750] mt-1">
                  • <strong>Punto de Venta (Maquitec Boutique):</strong> Calle 9 # 26-03 Local 1, Bogotá.
                </span>
                <span className="block text-[#414750] mt-0.5">
                  • <strong>Planta de Fabricación:</strong> Carrera 27 # 7-28, Bogotá.
                </span>
                <span className="block text-[#414750] mt-0.5">
                  • <strong>Atención al Cliente:</strong> maquitecingenieria@gmail.com | WhatsApp: +57 350 882 6094
                </span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="p-2 bg-[#f3f4f6] rounded text-[#1a1c1e] shrink-0 mt-1">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#1a1c1e] block">Especialistas en Acero 304</strong>
                <span>Expertos en fabricación y soldadura TIG/MIG de maquinaria alimentaria en Acero Inoxidable 304 quirúrgico.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="p-2 bg-[#f3f4f6] rounded text-[#1a1c1e] shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#1a1c1e] block">Garantía Directa de Fábrica</strong>
                <span>Durabilidad, velocidad de producción comprobada y soporte técnico especializado constante.</span>
              </div>
            </li>
          </ul>

          <div className="pt-4">
            <button
              onClick={() => setVisitModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#1a1c1e] text-white font-mono-code text-xs px-6 py-3.5 rounded shadow-md hover:bg-[#454749] hover:scale-102 transition-all cursor-pointer uppercase font-bold"
            >
              <Factory className="w-4 h-4" />
              <span>Conoce Nuestra Fábrica</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-[#eff4ff] rounded-lg overflow-hidden border border-[#c1c7d2] shadow-md group relative">
          <img
            src={factoryImg}
            alt="Interior de fábrica mostrando maquinaria industrial en proceso de ensamblaje"
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <span className="font-mono-code text-xs font-semibold uppercase block text-[#9fcaff]">
              Planta Metalmecánica Maquitec • Cr 27 # 7-28, Bogotá
            </span>
            <span className="font-body text-xs text-gray-300">
              Procesos automatizados de corte láser CNC, doblez industrial y ensamble TIG/MIG en Acero 304.
            </span>
          </div>
        </div>

      </div>

      {/* Schedule Visit Modal */}
      {visitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-[#c1c7d2] rounded-lg shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => { setVisitModalOpen(false); setVisitSubmitted(false); }}
              className="absolute top-4 right-4 text-[#414750] hover:text-[#1a1c1e]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-xl font-bold text-[#1a1c1e] mb-2">
              Agendar Visita a Planta
            </h3>
            <p className="font-body text-xs text-[#414750] mb-4">
              Conozca nuestros procesos de manufactura, laboratorios de prueba de maquinaria y hable directamente con nuestros ingenieros.
            </p>

            {visitSubmitted ? (
              <div className="bg-[#eff4ff] p-4 rounded text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-[#00497d] mx-auto" />
                <p className="font-body text-xs text-[#1a1c1e] font-semibold">
                  ¡Cita solicitada con éxito!
                </p>
                <p className="font-body text-xs text-[#414750]">
                  Nos comunicaremos al <strong>{visitorPhone}</strong> para confirmar la fecha y hora de su recorrido.
                </p>
                <button
                  onClick={() => { setVisitModalOpen(false); setVisitSubmitted(false); }}
                  className="bg-[#1a1c1e] text-white font-mono-code text-xs px-4 py-2 rounded"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleScheduleVisit} className="space-y-3">
                <div>
                  <label className="block font-mono-code text-[11px] text-[#1a1c1e] font-semibold uppercase mb-1">
                    Su Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Ej. Ing. Carlos Medina"
                    className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
                  />
                </div>
                <div>
                  <label className="block font-mono-code text-[11px] text-[#1a1c1e] font-semibold uppercase mb-1">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    required
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a1c1e] text-white font-mono-code text-xs py-2.5 rounded font-bold uppercase hover:bg-[#454749] transition-all cursor-pointer"
                >
                  Confirmar Pre-Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
