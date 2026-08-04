import React, { useState } from 'react';
import { Menu, X, ShoppingBag, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';

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
    <nav className="bg-white sticky top-0 z-50 border-b border-[#c1c7d2] shadow-xs">
      <div className="flex justify-between items-center h-20 px-4 md:px-10 max-w-[1280px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src={logoUrl}
            alt="Maquitec Ingeniería Logo"
            className="h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#productos"
            className="font-body text-sm font-semibold uppercase tracking-wider text-[#1a1c1e] hover:text-[#0061a4] border-b-2 border-transparent hover:border-[#1a1c1e] pb-1 transition-all"
          >
            Productos
          </a>
          <a
            href="#corte-laser"
            className="font-body text-sm uppercase tracking-wider text-[#414750] hover:text-[#1a1c1e] transition-colors"
          >
            Corte Láser
          </a>
          <a
            href="#nosotros"
            className="font-body text-sm uppercase tracking-wider text-[#414750] hover:text-[#1a1c1e] transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#respaldo"
            className="font-body text-sm uppercase tracking-wider text-[#414750] hover:text-[#1a1c1e] transition-colors"
          >
            Clientes
          </a>
          <a
            href="#contacto"
            className="font-body text-sm uppercase tracking-wider text-[#414750] hover:text-[#1a1c1e] transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAdvisor}
            className="inline-flex items-center gap-1.5 bg-[#eff4ff] text-[#00497d] border border-[#d3e4fe] font-mono-code text-xs px-3 py-2 rounded font-semibold hover:bg-[#dce9ff] transition-all"
            title="Asistente de Maquinaria"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0061a4]" />
            <span>Asistente IA</span>
          </button>

          <button
            onClick={onOpenQuoteDrawer}
            className="relative inline-flex items-center gap-2 bg-[#1a1c1e] text-white font-mono-code text-xs px-5 py-2.5 rounded shadow-sm hover:bg-[#454749] hover:scale-102 transition-all cursor-pointer uppercase"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Mi Cotización</span>
            {quoteCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#994700] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce">
                {quoteCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenQuoteDrawer}
            className="relative p-2 text-[#1a1c1e] bg-[#f3f4f6] rounded"
          >
            <ShoppingBag className="w-5 h-5" />
            {quoteCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#994700] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {quoteCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1a1c1e] hover:bg-gray-100 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#c1c7d2] px-6 py-4 space-y-3 animate-fade-in">
          <a
            href="#productos"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-body text-sm font-semibold uppercase text-[#1a1c1e] py-2 border-b border-gray-100"
          >
            Productos
          </a>
          <a
            href="#corte-laser"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-body text-sm uppercase text-[#414750] py-2 border-b border-gray-100"
          >
            Corte Láser
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-body text-sm uppercase text-[#414750] py-2 border-b border-gray-100"
          >
            Nosotros
          </a>
          <a
            href="#respaldo"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-body text-sm uppercase text-[#414750] py-2 border-b border-gray-100"
          >
            Clientes
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-body text-sm uppercase text-[#414750] py-2 border-b border-gray-100"
          >
            Contacto
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#eff4ff] text-[#00497d] font-mono-code text-xs py-2.5 rounded font-semibold border border-[#d3e4fe]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Asistente Técnico IA</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1a1c1e] text-white font-mono-code text-xs py-2.5 rounded font-semibold uppercase"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Solicitar Cotización</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
