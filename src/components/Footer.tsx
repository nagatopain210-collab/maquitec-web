import React from 'react';
import { Smartphone, Instagram, MapPin, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const logoWhite = "https://lh3.googleusercontent.com/aida-public/AB6AXuDC1frKWctmN832Pap6kVFm5jCkghbtqFAYISbPQs4TyB-Vx-zzgEEVmZZETi642dd_p4kX_pEodAoekeJnyGR0fIg8WFNK5CEMuWH0VsM5XgJVTBkcdPktAvbBQ4c3nm157SZ6kSEmt-oGd0y6XDIWf21lDGVPUAIaRjq_HZv1ca8s4KJiobxyZURxl4a7VlcqUfQnEXkfzXro8LDsbBkhd7TNgnyGqxFPxXgeK4G_yydOqv0Awu7vP0xSdJaAenlGBE8";

  return (
    <footer className="bg-[#1a1c1e] text-white py-16 border-t border-[#5d5e60]" id="contacto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <img
            src={logoWhite}
            alt="Logotipo Maquitec Ingeniería en blanco"
            className="h-12 w-auto object-contain filter invert brightness-0 mix-blend-screen hover:opacity-80 transition-opacity"
          />
          <p className="font-body text-sm text-[#d8d8da] max-w-md leading-relaxed">
            Soluciones integrales en acero inoxidable para la industria. Diseño, fabricación de maquinaria alimentaria y tecnología de corte láser CNC de vanguardia.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#9fcaff] bg-[#00497d] px-3 py-1 rounded">
            <ShieldCheck className="w-4 h-4" />
            <span>Fábrica Certificada ISO 9001:2015</span>
          </div>
        </div>

        {/* Links Column */}
        <div className="space-y-3">
          <h4 className="font-mono-code text-xs text-white uppercase border-b border-[#5d5e60] pb-1 inline-block">
            Enlaces
          </h4>
          <ul className="space-y-2 font-body text-sm">
            <li>
              <a href="#productos" className="text-[#d8d8da] hover:text-white hover:underline transition-all">
                Catálogo de Productos
              </a>
            </li>
            <li>
              <a href="#corte-laser" className="text-[#d8d8da] hover:text-white hover:underline transition-all">
                Corte Láser CNC
              </a>
            </li>
            <li>
              <a href="#nosotros" className="text-[#d8d8da] hover:text-white hover:underline transition-all">
                Nuestra Fábrica
              </a>
            </li>
            <li>
              <a href="#" className="text-[#d8d8da] hover:text-white hover:underline transition-all">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="text-[#d8d8da] hover:text-white hover:underline transition-all">
                Soporte y Garantías
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-3">
          <h4 className="font-mono-code text-xs text-white uppercase border-b border-[#5d5e60] pb-1 inline-block">
            Contacto Comercial
          </h4>
          <ul className="space-y-2.5 font-body text-sm">
            <li>
              <a
                href="https://wa.me/573508826094"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d8d8da] hover:text-white flex items-center gap-2 transition-all"
              >
                <Smartphone className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +57 350 882 6094</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-[#d8d8da] hover:text-white flex items-center gap-2 transition-all">
                <Instagram className="w-4 h-4" />
                <span>@MaquitecIngenieria</span>
              </a>
            </li>
            <li className="flex items-start gap-2 text-[#d8d8da]">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Zona Industrial Metalmecánica, Colombia</span>
            </li>
            <li className="flex items-center gap-2 text-[#d8d8da]">
              <Mail className="w-4 h-4 shrink-0" />
              <span>contacto@maquitecingenieria.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-10 mt-12 pt-4 border-t border-[#5d5e60] text-center md:text-left">
        <p className="font-body text-xs text-[#d8d8da]">
          © 2026 Maquitec Ingeniería. Todos los derechos reservados. Diseñado bajo estándares sanitarios e industriales internacionales.
        </p>
      </div>
    </footer>
  );
};
