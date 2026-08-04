import React from 'react';
import { TrendingDown, TrendingUp, ShieldCheck } from 'lucide-react';

export const SuccessCasesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#eff4ff] border-t border-[#c1c7d2]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1a1c1e]">
            Casos de Éxito Reales
          </h2>
          <p className="font-body text-base text-[#414750] mt-2">
            Resultados tangibles y medibles para su restaurante o planta de procesamiento.
          </p>
        </div>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 border border-[#c1c7d2] rounded bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#f3f4f6] rounded flex items-center justify-center text-[#1a1c1e] mb-4">
              <TrendingDown className="w-8 h-8" />
            </div>
            <h4 className="font-display text-xl font-bold text-[#1a1c1e] mb-2">
              Optimización de Procesos
            </h4>
            <p className="font-body text-sm text-[#414750] leading-relaxed">
              Reducción comprobada del <strong>40% en tiempo de procesamiento</strong> de líneas cárnicas y salsas industriales.
            </p>
          </div>

          <div className="p-8 border border-[#c1c7d2] rounded bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#f3f4f6] rounded flex items-center justify-center text-[#1a1c1e] mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h4 className="font-display text-xl font-bold text-[#1a1c1e] mb-2">
              Rentabilidad Máxima
            </h4>
            <p className="font-body text-sm text-[#414750] leading-relaxed">
              Incremento promedio del <strong>25% en la producción neta mensual</strong> minimizando desperdicio de materia prima.
            </p>
          </div>

          <div className="p-8 border border-[#c1c7d2] rounded bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#f3f4f6] rounded flex items-center justify-center text-[#1a1c1e] mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="font-display text-xl font-bold text-[#1a1c1e] mb-2">
              Calidad Quirúrgica
            </h4>
            <p className="font-body text-sm text-[#414750] leading-relaxed">
              Acabados en <strong>Acero 304 Certificado</strong> que cumplen rigurosamente con normativas sanitarias INVIMA e internacionales.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
