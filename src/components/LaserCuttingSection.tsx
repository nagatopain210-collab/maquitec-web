import React from 'react';
import { Cpu, Shield, ArrowUpRight, MessageSquare } from 'lucide-react';

interface LaserCuttingSectionProps {
  onOpenLaserQuote: (materialDetails: string) => void;
}

export const LaserCuttingSection: React.FC<LaserCuttingSectionProps> = ({ onOpenLaserQuote }) => {
  const handleQuoteClick = () => {
    const detailString = `Consulta por Servicio de Corte Láser Especializado (Planos DXF / DWG o Prototipado en Acero 304)`;
    onOpenLaserQuote(detailString);
  };

  const laserCutImg1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBl6VX7it7_rkD6JSs-Dy4kLf6WKYvFzqEPc47Cv7T3R0uyyZCZDs24VhERRNMefQG2MhsZv6r5vWXodrhd8XNryoqlISbuhfxPXVVxAuw6u0R1NQiKEkYeGirkodAxJKXC3kRuAyXyBYiP8RpkjrVa4rWdbcLAV1oT-UHdObqIv2qShVR0neQUxbInjYj0uEWFQPe8fF61YhC36XKbydbphR3vHghFvdcndJrbIhTMGwEH72rma6ik2Q";
  const laserCutImg2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Y94PCIb_-KpFXQjvYwwXsebmQNlzQQYyeeX6GPJm7P1zUkNnng_6-tT_QCbzjr-KwXybVse8jpeERiC6fTv03tApyZkFqBeJ2s36YSh1yMXdMoq0Ni5EWQBYGxPF2O4IBJfbd_p-R5sBc7C67FxUv6xBpRCt4yuJ5NOnK9lnDSyvENJH3Kwa_ZF-G0g8Q3h_Mj2X6KlANMKnx4zzeUUJzj-ne9hnubMC9ZYxIowsmEnXvPd5q9hUsg";
  const laserCutImg3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuB1NM7zrxBWzGHUGy9Cptwvjp3Do8ioyx2Fj27JqEkql3Y6mK9r34t4uOWdTTjSJMDtrx0ccR7RPT5w_km1l3pKLiKr-3CsGuAlboc8vY2-CwcSPJMc9uAUr7lSdSjKPDBnJpAgUJDEfB38JaCse3DXhVCxXBRtInRVaFkdyh38epS-AHWXqnS8-_DMGoogjU8DJIiblDvgJQL4vsqe0lfJ2h3Zvm5r9NaimOje-3gOPn_YQ8pbbLSC2w";

  return (
    <section className="py-16 md:py-24 bg-[#1a1c1e] text-white border-y border-[#5d5e60]" id="corte-laser">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 space-y-12">
        
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#454749] px-3 py-1 rounded text-xs font-mono-code text-[#e2e2e5]">
              <Cpu className="w-4 h-4 text-white" />
              <span>Corte por Fibra Óptica 6000W</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Corte Láser Especializado
            </h2>

            <p className="font-body text-base text-[#d8d8da] leading-relaxed">
              Precisión micrométrica para la industria metalmecánica. Procesamos láminas de acero inoxidable con acabados limpios y sin rebabas, listos para ensamblaje.
            </p>

            <div className="flex gap-6 pt-2">
              <div className="flex flex-col gap-1">
                <span className="font-mono-code text-xs text-white border-b border-[#5d5e60] pb-1 uppercase">
                  Tolerancia
                </span>
                <span className="font-mono-code text-sm text-[#d8d8da]">± 0.1 mm</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono-code text-xs text-white border-b border-[#5d5e60] pb-1 uppercase">
                  Capacidad Max
                </span>
                <span className="font-mono-code text-sm text-[#d8d8da]">16 mm (Acero 304)</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/573508826094?text=${encodeURIComponent("Hola Maquitec, deseo cotizar un proyecto de corte láser CNC. Adjunto información de lámina/planos.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-mono-code text-xs px-6 py-3.5 rounded hover:brightness-105 transition-all cursor-pointer uppercase font-bold shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotizar Servicio por WhatsApp</span>
              </a>

              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2 border border-white text-white font-mono-code text-xs px-5 py-3.5 rounded hover:bg-white hover:text-[#1a1c1e] transition-all cursor-pointer uppercase font-bold"
              >
                <span>Solicitar Asesoría Técnica</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Bento Grid Gallery */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            
            {/* Big Card */}
            <div className="col-span-2 bg-[#5d5e60] h-56 md:h-64 rounded p-4 flex items-end relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale mix-blend-overlay opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: `url('${laserCutImg1}')` }}
              />
              <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                <span className="font-mono-code text-xs text-white uppercase tracking-wider block">
                  TECNOLOGÍA CNC
                </span>
                <h4 className="font-display text-xl font-bold text-white">
                  Corte CNC Automatizado
                </h4>
              </div>
            </div>

            {/* Sub Card 1 */}
            <div className="bg-[#5d5e60] h-40 rounded p-4 flex items-end relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale mix-blend-overlay opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: `url('${laserCutImg2}')` }}
              />
              <h5 className="relative z-10 font-mono-code text-xs text-white uppercase transform group-hover:-translate-y-1 transition-transform duration-300">
                Prototipado Rápido
              </h5>
            </div>

            {/* Sub Card 2 */}
            <div className="bg-[#5d5e60] h-40 rounded p-4 flex items-end relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale mix-blend-overlay opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: `url('${laserCutImg3}')` }}
              />
              <h5 className="relative z-10 font-mono-code text-xs text-white uppercase transform group-hover:-translate-y-1 transition-transform duration-300">
                Ingeniería Inversa
              </h5>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
