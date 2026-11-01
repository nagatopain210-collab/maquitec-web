import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin, Mail, Smartphone, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteDrawer: () => void;
  onOpenAdvisor: () => void;
  quoteCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteDrawer,
  onOpenAdvisor,
  quoteCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key or resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuC-bNUExvlaqt1oDvsigvtDf8dtvui6UG51vCQUyNK8DqCeBBQ4T-vekT12S5hyUg1LZ6jrUgyZguJ-hYU7WxaoPUiJ2-g4CwHtriPfxhB52hp013uMQ-V2p8yAXqLt62nTPFGFI9HLlSANXgnVlBkIUrv9Xa4e67LPvcqSI29pCuySYR18VshUPR7w_Kv36F2c1LQ3bK-nWA_plnNqddE1NszwiZ47X5heRmu34Wzv1TZLEgKlhbX71xqXTqk6y4kScTA";

  return (
    <header className="bg-[#0b0f17]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#1f2838] shadow-xl text-white">
      {/* Top Contact & Locations Bar (Desktop & Tablet only to preserve vertical space on mobile) */}
      <div className="hidden sm:block bg-[#06090f] text-[#a0aabf] text-[11px] font-mono-code py-1.5 md:py-2 px-4 md:px-10 border-b border-[#18202c]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-3 lg:gap-5 text-[#c5cede]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#9fcaff] shrink-0" />
              <strong className="text-white font-semibold">Boutique:</strong> Calle 9 # 26-03 Local 1, Bogotá
            </span>
            <span className="hidden lg:inline text-[#2d384a]">|</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#9fcaff] shrink-0" />
              <strong className="text-white font-semibold">Fábrica:</strong> Cr 27 # 7-28, Bogotá
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="mailto:maquitecingenieria@gmail.com" className="hover:text-[#9fcaff] flex items-center gap-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#717d93] shrink-0" />
              <span className="hidden md:inline">maquitecingenieria@gmail.com</span>
              <span className="md:hidden">Email</span>
            </a>
            <span className="text-[#2d384a]">|</span>
            <a href="https://wa.me/573508826094" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#45e582] flex items-center gap-1.5 font-bold transition-colors">
              <Smartphone className="w-3.5 h-3.5 shrink-0" />
              <span>+57 350 882 6094</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Compact height on mobile */}
      <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 px-3.5 sm:px-6 md:px-8 lg:px-10 max-w-[1400px] mx-auto gap-3">
        {/* Logo - max 40px in mobile */}
        <a href="#" className="flex items-center transition-transform duration-200 active:scale-95 hover:scale-[1.02] py-1 shrink-0">
          <div className="bg-black px-2.5 py-1 sm:px-3 sm:py-1 md:px-3.5 md:py-1.5 rounded-xl border-2 border-white/90 shadow-md inline-flex items-center justify-center">
            <img
              src={logoUrl}
              alt="Maquitec Ingeniería Logo"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain max-h-[36px] sm:max-h-[38px] md:max-h-[42px]"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap" aria-label="Navegación principal">
          <a
            href="#productos"
            className="font-mono-code text-xs xl:text-sm font-bold uppercase tracking-wider text-white hover:text-[#9fcaff] border-b-2 border-[#0061a4] pb-1 transition-all"
          >
            Productos
          </a>
          <a
            href="#corte-laser"
            className="font-mono-code text-xs xl:text-sm font-semibold uppercase tracking-wider text-[#a0aabf] hover:text-white transition-colors py-1"
          >
            Corte Láser
          </a>
          <a
            href="#nosotros"
            className="font-mono-code text-xs xl:text-sm font-semibold uppercase tracking-wider text-[#a0aabf] hover:text-white transition-colors py-1"
          >
            Nosotros
          </a>
          <a
            href="#ubicaciones"
            className="font-mono-code text-xs xl:text-sm font-bold uppercase tracking-wider text-[#9fcaff] hover:text-white transition-colors flex items-center gap-1 py-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Ubicaciones</span>
          </a>
          <a
            href="#respaldo"
            className="font-mono-code text-xs xl:text-sm font-semibold uppercase tracking-wider text-[#a0aabf] hover:text-white transition-colors py-1"
          >
            Clientes
          </a>
          <a
            href="#contacto"
            className="font-mono-code text-xs xl:text-sm font-semibold uppercase tracking-wider text-[#a0aabf] hover:text-white transition-colors py-1"
          >
            Contacto
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0 ml-auto lg:ml-0">
          <button
            onClick={onOpenAdvisor}
            className="inline-flex items-center gap-2 bg-[#162235] text-[#9fcaff] border border-[#263750] font-mono-code text-xs px-3 lg:px-3.5 py-2.5 rounded-xl font-bold hover:bg-[#1e2f47] hover:border-[#9fcaff] active:scale-95 transition-all cursor-pointer shadow-sm whitespace-nowrap min-h-[44px]"
            title="Asistente de Maquinaria"
          >
            <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#9fcaff] animate-pulse" />
            <span className="hidden sm:inline">Asistente IA</span>
          </button>

          <button
            onClick={onOpenQuoteDrawer}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#0061a4] to-[#00497d] text-white font-mono-code text-xs px-3.5 lg:px-4 py-2.5 rounded-xl border border-[#9fcaff]/40 shadow-lg hover:from-[#0073c4] hover:to-[#005794] active:scale-95 transition-all cursor-pointer font-bold uppercase whitespace-nowrap min-h-[44px]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Mi Cotización</span>
            {quoteCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ff6b00] text-white text-[10px] w-5.5 h-5.5 rounded-full flex items-center justify-center font-bold border-2 border-[#0b0f17] shadow-md">
                {quoteCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Interactive Triggers (Touch Hitbox >= 48px x 48px) */}
        <div className="flex lg:hidden items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={onOpenQuoteDrawer}
            className="relative min-w-[48px] min-h-[48px] flex items-center justify-center text-[#9fcaff] bg-[#162235] active:bg-[#202f47] border border-[#263750] rounded-xl active:scale-95 transition-transform"
            aria-label={`Ver cotización (${quoteCount} equipos)`}
          >
            <ShoppingBag className="w-5 h-5" />
            {quoteCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-[#ff6b00] text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold border border-[#0b0f17]">
                {quoteCount}
              </span>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[48px] min-h-[48px] flex items-center justify-center text-white bg-[#141b27] active:bg-[#1f2b3e] border border-[#263750] rounded-xl active:scale-95 transition-transform"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#9fcaff]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop blur and comfortable touch targets */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e141f] border-b border-[#212836] px-4 py-4 space-y-2 animate-fade-in text-white shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto">
          <nav className="space-y-1" aria-label="Enlaces de navegación móvil">
            <a
              href="#productos"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] px-3 rounded-xl font-mono-code text-sm font-bold uppercase text-white flex items-center justify-between hover:bg-[#16202e] active:bg-[#1f2b3d] active:scale-[0.99] transition-all border border-transparent hover:border-[#223145]"
            >
              <span className="flex items-center gap-2">
                <span>Catálogo de Equipos</span>
              </span>
              <span className="text-xs text-[#9fcaff] font-semibold bg-[#162235] px-2 py-0.5 rounded-md">93 Ítems</span>
            </a>

            <a
              href="#corte-laser"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] px-3 rounded-xl font-mono-code text-sm uppercase text-[#c5cede] flex items-center justify-between hover:bg-[#16202e] active:bg-[#1f2b3d] active:scale-[0.99] transition-all"
            >
              <span>Corte Láser CNC</span>
              <ChevronRight className="w-4 h-4 text-[#717d93]" />
            </a>

            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] px-3 rounded-xl font-mono-code text-sm uppercase text-[#c5cede] flex items-center justify-between hover:bg-[#16202e] active:bg-[#1f2b3d] active:scale-[0.99] transition-all"
            >
              <span>Nosotros & Fábrica</span>
              <ChevronRight className="w-4 h-4 text-[#717d93]" />
            </a>

            <a
              href="#ubicaciones"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] px-3 rounded-xl font-mono-code text-sm font-bold uppercase text-[#9fcaff] flex items-center justify-between hover:bg-[#16202e] active:bg-[#1f2b3d] active:scale-[0.99] transition-all"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9fcaff]" />
                <span>Puntos Bogotá (Local & Fábrica)</span>
              </span>
              <ChevronRight className="w-4 h-4 text-[#9fcaff]" />
            </a>

            <a
              href="#respaldo"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] px-3 rounded-xl font-mono-code text-sm uppercase text-[#c5cede] flex items-center justify-between hover:bg-[#16202e] active:bg-[#1f2b3d] active:scale-[0.99] transition-all"
            >
              <span>Clientes & Respaldo</span>
              <ChevronRight className="w-4 h-4 text-[#717d93]" />
            </a>

            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] px-3 rounded-xl font-mono-code text-sm uppercase text-[#c5cede] flex items-center justify-between hover:bg-[#16202e] active:bg-[#1f2b3d] active:scale-[0.99] transition-all"
            >
              <span>Contacto Directo</span>
              <ChevronRight className="w-4 h-4 text-[#717d93]" />
            </a>
          </nav>

          {/* Quick Action Buttons inside drawer */}
          <div className="pt-3 border-t border-[#1e2736] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#162235] text-[#9fcaff] font-mono-code text-xs px-4 rounded-xl font-bold border border-[#263750] active:scale-[0.98] transition-transform"
            >
              <Sparkles className="w-4 h-4 text-[#9fcaff]" />
              <span>Abrir Asistente Técnico IA</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteDrawer();
              }}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#0061a4] active:bg-[#004d82] text-white font-mono-code text-xs px-4 rounded-xl font-bold uppercase shadow-md active:scale-[0.98] transition-transform"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Cotización Actual ({quoteCount})</span>
            </button>

            <a
              href="https://wa.me/573508826094"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1fa851] text-white font-mono-code text-xs px-4 rounded-xl font-bold shadow-md active:scale-[0.98] transition-transform"
            >
              <Smartphone className="w-4 h-4" />
              <span>Atención Inmediata por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
