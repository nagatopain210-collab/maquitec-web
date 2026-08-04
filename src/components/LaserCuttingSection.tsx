import React, { useState } from 'react';
import { Cpu, Calculator, Shield, ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface LaserCuttingSectionProps {
  onOpenLaserQuote: (materialDetails: string) => void;
}

export const LaserCuttingSection: React.FC<LaserCuttingSectionProps> = ({ onOpenLaserQuote }) => {
  // Laser Estimator State
  const [material, setMaterial] = useState<'acero_304' | 'acero_carbono' | 'aluminio'>('acero_304');
  const [thicknessMm, setThicknessMm] = useState<number>(3);
  const [widthMm, setWidthMm] = useState<number>(1000);
  const [lengthMm, setLengthMm] = useState<number>(2000);
  const [quantity, setQuantity] = useState<number>(1);

  // Density in g/cm³
  const densities = {
    acero_304: 7.93,
    acero_carbono: 7.85,
    aluminio: 2.7
  };

  // Base price COP per kg of cut processing
  const baseCutRatePerKg = {
    acero_304: 18500,
    acero_carbono: 12500,
    aluminio: 22000
  };

  // Calculations:
  // Volume in cm³ = (widthMm / 10) * (lengthMm / 10) * (thicknessMm / 10)
  const volumeCm3 = (widthMm / 10) * (lengthMm / 10) * (thicknessMm / 10);
  const weightKgPerPiece = (volumeCm3 * densities[material]) / 1000;
  const totalWeightKg = weightKgPerPiece * quantity;
  const estimatedCostCop = Math.round(totalWeightKg * baseCutRatePerKg[material]);

  const handleQuoteClick = () => {
    const matLabel = material === 'acero_304' ? 'Acero Inox 304' : material === 'acero_carbono' ? 'Acero al Carbono' : 'Aluminio Industrial';
    const detailString = `Proyecto Láser CNC: ${quantity} pieza(s) en ${matLabel} de ${thicknessMm}mm (${widthMm}x${lengthMm}mm). Peso aprox: ${totalWeightKg.toFixed(2)}kg. Est. $${estimatedCostCop.toLocaleString('es-CO')} COP`;
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

            <div className="pt-2">
              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2 border border-white text-white font-mono-code text-xs px-6 py-3 rounded hover:bg-white hover:text-[#1a1c1e] transition-all cursor-pointer uppercase font-bold"
              >
                <span>Cotizar Proyecto Láser</span>
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

        {/* Interactive Estimator Calculator */}
        <div className="bg-[#213145] border border-[#5d5e60] rounded-lg p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#5d5e60] pb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#9fcaff]" />
              <h3 className="font-display text-lg font-bold text-white">
                Calculadora & Estimador de Corte Láser
              </h3>
            </div>
            <span className="font-mono-code text-xs text-[#9fcaff] bg-[#00497d] px-2.5 py-1 rounded">
              Cálculo de Masa & Costo Aprox
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* Material */}
            <div>
              <label className="block font-mono-code text-[11px] text-[#d8d8da] mb-1.5 uppercase">
                Material
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value as any)}
                className="w-full bg-[#1a1c1e] text-white border border-[#717782] rounded px-3 py-2 text-xs font-mono-code focus:outline-none focus:border-[#9fcaff]"
              >
                <option value="acero_304">Acero Inox 304</option>
                <option value="acero_carbono">Acero al Carbono (HR/CR)</option>
                <option value="aluminio">Aluminio Industrial</option>
              </select>
            </div>

            {/* Thickness */}
            <div>
              <label className="block font-mono-code text-[11px] text-[#d8d8da] mb-1.5 uppercase">
                Espesor ({thicknessMm} mm)
              </label>
              <input
                type="range"
                min="1"
                max="16"
                step="0.5"
                value={thicknessMm}
                onChange={(e) => setThicknessMm(parseFloat(e.target.value))}
                className="w-full cursor-pointer accent-[#9fcaff] mt-2"
              />
            </div>

            {/* Width */}
            <div>
              <label className="block font-mono-code text-[11px] text-[#d8d8da] mb-1.5 uppercase">
                Ancho (mm)
              </label>
              <input
                type="number"
                min="100"
                max="3000"
                step="50"
                value={widthMm}
                onChange={(e) => setWidthMm(parseInt(e.target.value) || 100)}
                className="w-full bg-[#1a1c1e] text-white border border-[#717782] rounded px-3 py-2 text-xs font-mono-code"
              />
            </div>

            {/* Length */}
            <div>
              <label className="block font-mono-code text-[11px] text-[#d8d8da] mb-1.5 uppercase">
                Largo (mm)
              </label>
              <input
                type="number"
                min="100"
                max="6000"
                step="50"
                value={lengthMm}
                onChange={(e) => setLengthMm(parseInt(e.target.value) || 100)}
                className="w-full bg-[#1a1c1e] text-white border border-[#717782] rounded px-3 py-2 text-xs font-mono-code"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block font-mono-code text-[11px] text-[#d8d8da] mb-1.5 uppercase">
                Cantidad
              </label>
              <input
                type="number"
                min="1"
                max="1000"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-full bg-[#1a1c1e] text-white border border-[#717782] rounded px-3 py-2 text-xs font-mono-code"
              />
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="bg-[#1a1c1e] p-4 rounded border border-[#5d5e60] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-xs font-mono-code">
              <div>
                <span className="text-[#717782] block">PESO UNITARIO:</span>
                <span className="text-white font-bold">{weightKgPerPiece.toFixed(2)} kg</span>
              </div>
              <div>
                <span className="text-[#717782] block">PESO TOTAL:</span>
                <span className="text-white font-bold">{totalWeightKg.toFixed(2)} kg</span>
              </div>
              <div>
                <span className="text-[#717782] block">TOLERANCIA CNC:</span>
                <span className="text-[#9fcaff] font-bold">±0.1 mm</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div>
                <span className="text-[10px] text-[#717782] font-mono-code block">ESTIMACIÓN CORTE LÁSER:</span>
                <span className="font-display text-xl font-extrabold text-[#9fcaff]">
                  ${estimatedCostCop.toLocaleString('es-CO')} COP
                </span>
              </div>
              <button
                onClick={handleQuoteClick}
                className="bg-[#0061a4] hover:bg-[#00497d] text-white font-mono-code text-xs px-4 py-2.5 rounded font-bold uppercase cursor-pointer"
              >
                Enviar a Cotización
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
