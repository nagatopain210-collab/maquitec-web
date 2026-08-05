import React from 'react';
import { Cpu, ArrowUpRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface LaserCuttingSectionProps {
  onOpenLaserQuote: (materialDetails: string) => void;
}

export const LaserCuttingSection: React.FC<LaserCuttingSectionProps> = ({ onOpenLaserQuote }) => {
  const handleQuoteClick = () => {
    const detailString = `Consulta por Servicio de Corte Láser Especializado (Planos DXF / DWG o Prototipado en Acero 304)`;
    onOpenLaserQuote(detailString);
  };

  const laserImageHeader = "https://lh3.googleusercontent.com/aida-public/AB6AXuBl6VX7it7_rkD6JSs-Dy4kLf6WKYvFzqEPc47Cv7T3R0uyyZCZDs24VhERRNMefQG2MhsZv6r5vWXodrhd8XNryoqlISbuhfxPXVVxAuw6u0R1NQiKEkYeGirkodAxJKXC3kRuAyXyBYiP8RpkjrVa4rWdbcLAV1oT-UHdObqIv2qShVR0neQUxbInjYj0uEWFQPe8fF61YhC36XKbydbphR3vHghFvdcndJrbIhTMGwEH72rma6ik2Q";
  const laserCutImg2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Y94PCIb_-KpFXQjvYwwXsebmQNlzQQYyeeX6GPJm7P1zUkNnng_6-tT_QCbzjr-KwXybVse8jpeERiC6fTv03tApyZkFqBeJ2s36YSh1yMXdMoq0Ni5EWQBYGxPF2O4IBJfbd_p-R5sBc7C67FxUv6xBpRCt4yuJ5NOnK9lnDSyvENJH3Kwa_ZF-G0g8Q3h_Mj2X6KlANMKnx4zzeUUJzj-ne9hnubMC9ZYxIowsmEnXvPd5q9hUsg";
  const laserCutImg3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuB1NM7zrxBWzGHUGy9Cptwvjp3Do8ioyx2Fj27JqEkql3Y6mK9r34t4uOWdTTjSJMDtrx0ccR7RPT5w_km1l3pKLiKr-3CsGuAlboc8vY2-CwcSPJMc9uAUr7lSdSjKPDBnJpAgUJDEfB38JaCse3DXhVCxXBRtInRVaFkdyh38epS-AHWXqnS8-_DMGoogjU8DJIiblDvgJQL4vsqe0lfJ2h3Zvm5r9NaimOje-3gOPn_YQ8pbbLSC2w";

  return (
    <section className="py-16 md:py-24 bg-[#0a0d14] text-white border-y border-[#1f2838]" id="corte-laser">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 space-y-12">
        
        {/* Main Header & Image Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Technical Specifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#162235] px-3.5 py-1.5 rounded-full text-xs font-mono-code text-[#9fcaff] border border-[#263750] shadow-sm">
              <Cpu className="w-4 h-4 text-[#9fcaff]" />
              <span>Corte por Fibra Óptica High-Power 6000W</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Servicio de Corte Láser CNC
            </h2>

            <p className="font-body text-base text-[#a0aabf] leading-relaxed">
              Precisión micrométrica para maquetación y producción metalmecánica. Cortamos láminas de acero inoxidable 304, acero al carbono y aluminio con bordes impecables, listos para plegado y soldadura.
            </p>

            {/* Technical Parameters Pill List */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#121824] p-3 rounded-xl border border-[#212b3c]">
                <span className="block font-mono-code text-[10px] text-[#717d93] uppercase font-semibold">Tolerancia Máxima</span>
                <span className="font-mono-code text-base font-bold text-white">± 0.05 mm</span>
              </div>
              <div className="bg-[#121824] p-3 rounded-xl border border-[#212b3c]">
                <span className="block font-mono-code text-[10px] text-[#717d93] uppercase font-semibold">Espesor Inox 304</span>
                <span className="font-mono-code text-base font-bold text-[#9fcaff]">Hasta 16 mm</span>
              </div>
              <div className="bg-[#121824] p-3 rounded-xl border border-[#212b3c]">
                <span className="block font-mono-code text-[10px] text-[#717d93] uppercase font-semibold">Mesa de Trabajo</span>
                <span className="font-mono-code text-xs font-bold text-white">1500 x 3000 mm</span>
              </div>
              <div className="bg-[#121824] p-3 rounded-xl border border-[#212b3c]">
                <span className="block font-mono-code text-[10px] text-[#717d93] uppercase font-semibold">Formatos DXF / DWG</span>
                <span className="font-mono-code text-xs font-bold text-emerald-400">Lectura Directa</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/573508826094?text=${encodeURIComponent("Hola Maquitec, deseo cotizar un proyecto de corte láser CNC. Adjunto planos en DXF/DWG.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-mono-code text-xs px-6 py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all cursor-pointer uppercase font-bold shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Planos por WhatsApp</span>
              </a>

              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center justify-center gap-2 border border-[#303f56] bg-[#141b28] text-white font-mono-code text-xs px-5 py-3.5 rounded-xl hover:bg-[#1f2b3e] hover:border-[#9fcaff] transition-all cursor-pointer font-bold uppercase"
              >
                <span>Solicitar Asesoría</span>
                <ArrowUpRight className="w-4 h-4 text-[#9fcaff]" />
              </button>
            </div>
          </div>

          {/* Right Professional Image Showcase Container */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#223147] bg-[#0d121c] shadow-2xl group ring-1 ring-[#9fcaff]/20">
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] bg-[#121824] overflow-hidden">
                <img
                  src={laserImageHeader}
                  alt="Planta de Corte Láser CNC Maquitec"
                  className="w-full h-full object-cover brightness-95 transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Top Badge Overlay */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-[#06090f]/90 via-[#06090f]/40 to-transparent flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1422]/90 border border-[#9fcaff]/40 text-[#9fcaff] text-xs font-mono-code font-bold backdrop-blur-md shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PLANTA DE CORTE LÁSER FIBRA ÓPTICA 6000W</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#000000]/60 border border-white/20 text-white text-[11px] font-mono-code">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Corte CNC Acero 304</span>
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#06090f]/95 via-[#06090f]/70 to-transparent flex items-center justify-between z-10">
                <div>
                  <span className="block text-sm font-mono-code text-white font-bold leading-tight">
                    Procesamiento Industrial de Acero Inoxidable
                  </span>
                  <span className="text-xs font-mono-code text-[#9ea7b8]">
                    Planta Especializada Maquitec
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Image Grid Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#121824] rounded-xl p-3 border border-[#212b3c] flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#2c3a4f]">
                  <img src={laserCutImg2} alt="Prototipado Láser" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-mono-code text-xs font-bold text-white uppercase">Prototipado Rápido</h4>
                  <p className="font-body text-[11px] text-[#8fa0ba]">Cortes de muestras en 24 horas</p>
                </div>
              </div>

              <div className="bg-[#121824] rounded-xl p-3 border border-[#212b3c] flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#2c3a4f]">
                  <img src={laserCutImg3} alt="Maquila Metalmecánica" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-mono-code text-xs font-bold text-white uppercase">Ingeniería Inversa</h4>
                  <p className="font-body text-[11px] text-[#8fa0ba]">Digitalización desde piezas físicas</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Gallery of Cut Metal Pieces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#121824] p-5 rounded-2xl border border-[#212b3c] hover:border-[#9fcaff]/50 transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#1b2638] text-[#9fcaff] flex items-center justify-center font-mono-code font-bold">01</div>
              <h3 className="font-display text-base font-bold text-white">Piezas y Engranajes de Alta Precisión</h3>
            </div>
            <p className="font-mono-code text-xs text-[#9ea7b8] leading-relaxed">
              Geometrías complejas y perforaciones circulares con acabado libre de rebabas para la industria alimentaria y automotriz.
            </p>
          </div>

          <div className="bg-[#121824] p-5 rounded-2xl border border-[#212b3c] hover:border-[#9fcaff]/50 transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#1b2638] text-[#9fcaff] flex items-center justify-center font-mono-code font-bold">02</div>
              <h3 className="font-display text-base font-bold text-white">Corte de Chapa y Lámina Inoxidable</h3>
            </div>
            <p className="font-mono-code text-xs text-[#9ea7b8] leading-relaxed">
              Mecanizado limpio en acero inox 304/316 con protección anticorrosiva para tolvas, tanques y estructuras de procesamiento.
            </p>
          </div>

          <div className="bg-[#121824] p-5 rounded-2xl border border-[#212b3c] hover:border-[#9fcaff]/50 transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#1b2638] text-[#9fcaff] flex items-center justify-center font-mono-code font-bold">03</div>
              <h3 className="font-display text-base font-bold text-white">Prototipado Rápido e Industrial</h3>
            </div>
            <p className="font-mono-code text-xs text-[#9ea7b8] leading-relaxed">
              Desarrollo de piezas únicas o series masivas directo desde archivos CAD con tiempos de entrega garantizados.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};


