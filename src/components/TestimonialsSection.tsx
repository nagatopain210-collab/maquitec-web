import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-24 bg-white" id="respaldo">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1c1e]">
            Respaldo Industrial
          </h2>
          <p className="font-body text-sm sm:text-base text-[#414750] mt-1.5 sm:mt-2">
            La industria colombiana confía en nuestra ingeniería y continuidad operativa.
          </p>
        </div>

        {/* Testimonial Cards Grid (1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="border border-[#c1c7d2] p-5 sm:p-8 rounded-2xl bg-white shadow-xs flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Logo Circle */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border border-[#c1c7d2] p-2 overflow-hidden shadow-xs">
                <img
                  src={t.logo}
                  alt={t.company}
                  className="w-full h-full object-contain grayscale"
                />
              </div>

              <h5 className="font-display text-lg font-bold text-[#1a1c1e] mb-2">
                {t.company}
              </h5>

              <Quote className="w-8 h-8 text-[#1a1c1e] mb-4" />

              <p className="font-body text-sm text-[#414750] flex-grow mb-6 italic leading-relaxed">
                {t.quote}
              </p>

              <div className="border-t border-[#c1c7d2] pt-3 mt-auto w-full">
                <p className="font-display text-base font-semibold text-[#1a1c1e]">
                  {t.authorName}
                </p>
                <p className="font-mono-code text-xs text-[#454749] uppercase">
                  {t.authorRole}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
