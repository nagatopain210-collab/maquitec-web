import React, { useState } from 'react';
import { Menu, X, ShoppingBag, MapPin, Mail, Smartphone, Sparkles } from 'lucide-react';

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

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuC-bNUExvlaqt1oDvsigvtDf8dtvui6UG51vCQUyNK8DqCeBBQ4T-vekT12S5hyUg1LZ6jrUgyZguJ-hYU7WxaoPUiJ2-g4CwHtriPfxhB52hp013uMQ-V2p8yAXqLt62nTPFGFI9HLlSANXgnVlBkIUrv9Xa4e67LPvcqSI29pCuySYR18VshUPR7w_Kv36F2c1LQ3bK-nWA_plnNqddE1NszwiZ47X5heRmu34Wzv1TZLEgKlhbX71xqXTqk6y4kScTA";

  return (
    <nav className="bg-[#0b0f17]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#1f2838] shadow-xl text-white">
      {/* Top Contact & Locations Bar */}
      <div className="bg-[#06090f] text-[#a0aabf] text-[11px] font-mono-code py-2 px-4 md:px-10 border-b border-[#18202c]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-3 lg:gap-5 text-[#c5cede]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#9fcaff]" />
              <strong className="text-white font-semibold">Boutique:</strong> Calle 9 # 26-03 Local 1, Bogotá
            </span>
            <span className="hidden lg:inline text-[#2d384a]">|</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#9fcaff]" />
              <strong className="text-white font-semibold">Fábrica:</strong> Cr 27 # 7-28, Bogotá
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="mailto:maquitecingenieria@gmail.com" className="hover:text-[#9fcaff] flex items-center gap-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#717d93]" />
              <span className="hidden sm:inline">maquitecingenieria@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="text-[#2d384a]">|</span>
            <a href="https://wa.me/573508826094" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#45e582] flex items-center gap-1.5 font-bold transition-colors">
              <Smartphone className="w-3.5 h-3.5" />
              <span>+57 350 882 6094</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="flex justify-between items-center h-20 px-4 md:px-8 lg:px-10 max-w-[1400px] mx-auto gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-[1.02] py-1 shrink-0 mr-2 lg:mr-6">
          <div className="bg-black px-3 py-1 md:px-3.5 md:py-1.5 rounded-xl md:rounded-2xl border-2 md:border-[3px] border-white shadow-lg inline-flex items-center justify-center">
            <img
              src={logoUrl}
              alt="Maquitec Ingeniería Logo"
              className="h-7 md:h-9 w-auto object-contain max-h-[36px] md:max-h-[40px]"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7 whitespace-nowrap">
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
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0 ml-auto lg:ml-0">
          <button
            onClick={onOpenAdvisor}
            className="inline-flex items-center gap-2 bg-[#162235] text-[#9fcaff] border border-[#263750] font-mono-code text-xs px-3 lg:px-3.5 py-2 rounded-xl font-bold hover:bg-[#1e2f47] hover:border-[#9fcaff] transition-all cursor-pointer shadow-sm whitespace-nowrap"
            title="Asistente de Maquinaria"
          >
            <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#9fcaff] animate-pulse" />
            <span className="hidden sm:inline">Asistente IA</span>
          </button>

          <button
            onClick={onOpenQuoteDrawer}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#0061a4] to-[#00497d] text-white font-mono-code text-xs px-3.5 lg:px-4 py-2.5 rounded-xl border border-[#9fcaff]/40 shadow-lg hover:from-[#0073c4] hover:to-[#005794] hover:scale-102 transition-all cursor-pointer font-bold uppercase whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Mi Cotización</span>
            {quoteCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ff6b00] text-white text-[10px] w-5.5 h-5.5 rounded-full flex items-center justify-center font-bold border-2 border-[#0b0f17] shadow-md animate-bounce">
                {quoteCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile / Tablet Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={onOpenQuoteDrawer}
            className="relative p-2 text-[#9fcaff] bg-[#162235] border border-[#263750] rounded-xl"
            aria-label="Ver cotización"
          >
            <ShoppingBag className="w-5 h-5" />
            {quoteCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff6b00] text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold border border-[#0b0f17]">
                {quoteCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-[#162235] border border-[#263750] rounded-xl transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101724] border-b border-[#212836] px-6 py-5 space-y-3 animate-fade-in text-white shadow-2xl">
          <a
            href="#productos"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-code text-sm font-bold uppercase text-white py-2.5 border-b border-[#1e2736] flex items-center justify-between"
          >
            <span>Productos & Catálogo</span>
            <span className="text-xs text-[#9fcaff] font-normal">95 Ítems</span>
          </a>
          <a
            href="#corte-laser"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-code text-sm uppercase text-[#a0aabf] hover:text-white py-2.5 border-b border-[#1e2736]"
          >
            Corte Láser CNC
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-code text-sm uppercase text-[#a0aabf] hover:text-white py-2.5 border-b border-[#1e2736]"
          >
            Nosotros & Planta
          </a>
          <a
            href="#ubicaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-code text-sm font-bold uppercase text-[#9fcaff] py-2.5 border-b border-[#1e2736] flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#9fcaff]" />
            <span>Punto de Venta & Fábrica</span>
          </a>
          <a
            href="#respaldo"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-code text-sm uppercase text-[#a0aabf] hover:text-white py-2.5 border-b border-[#1e2736]"
          >
            Clientes & Respaldo
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-code text-sm uppercase text-[#a0aabf] hover:text-white py-2.5 border-b border-[#1e2736]"
          >
            Contacto Directo
          </a>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#162235] text-[#9fcaff] font-mono-code text-xs py-3 rounded-xl font-bold border border-[#263750]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Asistente Técnico IA</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#0061a4] text-white font-mono-code text-xs py-3 rounded-xl font-bold uppercase shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Solicitar Cotización ({quoteCount})</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
