import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageSquare, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
  voltage: string;
}

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  laserDetailNote?: string;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  laserDetailNote
}) => {
  if (!isOpen) return null;

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientComments, setClientComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    let itemsText = items
      .map(
        (i) =>
          `• ${i.product.name} (REF: ${i.product.ref}) x${i.quantity} [Voltaje: ${i.voltage}]`
      )
      .join('\n');

    if (laserDetailNote) {
      itemsText += `\n• ${laserDetailNote}`;
    }

    const message = `*SOLICITUD DE COTIZACIÓN TÉCNICA MAQUITEC*\n\n*Cliente:* ${clientName}\n*Teléfono:* ${clientPhone}\n*Ciudad:* ${clientCity || 'No especificada'}\n\n*Equipos Seleccionados:*\n${itemsText}\n\n*Comentarios:* ${clientComments || 'Ninguno'}\n\n*Solicitud:* Requiero precio oficial y tiempos de entrega vía WhatsApp.`;

    const url = `https://wa.me/573508826094?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#c1c7d2] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="bg-[#1a1c1e] text-white px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <h3 className="font-display text-lg font-bold uppercase tracking-wider">
                Resumen de Cotización
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-[#454749]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {submitted ? (
              <div className="bg-[#eff4ff] border border-[#d3e4fe] p-6 rounded text-center space-y-4 my-auto">
                <CheckCircle2 className="w-12 h-12 text-[#00497d] mx-auto" />
                <h4 className="font-display text-xl font-bold text-[#1a1c1e]">
                  ¡Cotización Enviada!
                </h4>
                <p className="font-body text-xs text-[#414750]">
                  Hemos abierto la ventana de comunicación directa por WhatsApp con el equipo comercial de Maquitec. Un asesor técnico dará seguimiento prioritario a su listado.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full bg-[#1a1c1e] text-white font-mono-code text-xs py-2.5 rounded font-bold uppercase"
                >
                  Cerrar
                </button>
              </div>
            ) : items.length === 0 && !laserDetailNote ? (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#c1c7d2] mx-auto" />
                <p className="font-body text-sm text-[#717782]">
                  No tiene equipos agregados a la cotización todavía.
                </p>
                <button
                  onClick={onClose}
                  className="text-xs font-mono-code text-[#0061a4] underline"
                >
                  Explorar Catálogo de Equipos
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-4">
                  <h4 className="font-mono-code text-xs font-semibold text-[#717782] uppercase border-b border-[#c1c7d2] pb-1">
                    Equipos en Cotizador ({items.length})
                  </h4>

                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="border border-[#c1c7d2] p-3 rounded bg-[#f8f9ff] flex items-center justify-between gap-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 object-contain mix-blend-multiply"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="font-mono-code text-[10px] bg-[#1a1c1e] text-white px-1.5 py-0.5 rounded">
                          REF: {item.product.ref}
                        </span>
                        <h5 className="font-display text-xs font-bold text-[#1a1c1e] truncate">
                          {item.product.name}
                        </h5>
                        <p className="font-mono-code text-[11px] text-[#414750]">
                          Voltaje: {item.voltage}
                        </p>
                        <span className="font-mono-code text-[11px] text-[#0061a4] font-semibold block">
                          Cotizar precio por WhatsApp
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center border border-[#c1c7d2] rounded bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="px-2 py-0.5 text-xs font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-mono-code font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="px-2 py-0.5 text-xs font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#ba1a1a] hover:opacity-80 p-1"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {laserDetailNote && (
                    <div className="border border-[#0061a4] p-3 rounded bg-[#eff4ff] text-xs font-mono-code text-[#00497d]">
                      <strong>Especificación Láser:</strong> {laserDetailNote}
                    </div>
                  )}
                </div>

                {/* WhatsApp Direct Quote Notice */}
                <div className="bg-[#eff4ff] border border-[#d3e4fe] p-3.5 rounded font-mono-code space-y-1">
                  <span className="text-xs text-[#00497d] font-bold block uppercase">COTIZACIÓN DIRECTA VÍA WHATSAPP</span>
                  <p className="text-[11px] text-[#414750] font-body leading-relaxed">
                    Al enviar esta solicitud, nuestro equipo comercial calculará los precios finales, descuentos por volumen y costos de envío a su ciudad.
                  </p>
                </div>

                {/* Client Contact Form */}
                <form onSubmit={handleSendWhatsApp} className="space-y-3 pt-2">
                  <h4 className="font-mono-code text-xs font-semibold text-[#717782] uppercase border-b border-[#c1c7d2] pb-1">
                    Datos del Cliente
                  </h4>

                  <div>
                    <label className="block font-mono-code text-[11px] text-[#1a1c1e] font-semibold uppercase mb-1">
                      Nombre o Razón Social *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ej. Rest. El Parrillón"
                      className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-mono-code text-[11px] text-[#1a1c1e] font-semibold uppercase mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+57 300 000 0000"
                        className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
                      />
                    </div>
                    <div>
                      <label className="block font-mono-code text-[11px] text-[#1a1c1e] font-semibold uppercase mb-1">
                        Ciudad / Municipio
                      </label>
                      <input
                        type="text"
                        value={clientCity}
                        onChange={(e) => setClientCity(e.target.value)}
                        placeholder="Bogotá, Medellín, etc."
                        className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-[#1a1c1e] font-semibold uppercase mb-1">
                      Comentarios o Requerimientos Especiales
                    </label>
                    <textarea
                      rows={2}
                      value={clientComments}
                      onChange={(e) => setClientComments(e.target.value)}
                      placeholder="Ej. Requiere transporte a planta o instalación..."
                      className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded px-3 py-2 text-xs font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] text-white font-mono-code text-xs py-3.5 rounded font-bold uppercase hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enviar Cotización por WhatsApp</span>
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
