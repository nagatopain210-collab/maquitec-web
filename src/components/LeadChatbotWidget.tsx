import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareCode, X, Send, Bot, User, CheckCircle2, ChevronRight, Sparkles, Phone, MapPin, ShieldCheck } from 'lucide-react';

interface LeadChatbotWidgetProps {
  logoUrl?: string;
}

type ChatStep = 'SERVICE_SELECTION' | 'LEAD_FORM' | 'SUBMITTED';

export const LeadChatbotWidget: React.FC<LeadChatbotWidgetProps> = ({
  logoUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLtY8b4G6SgC04hU3Fz-t5P3p7Z3F_Y3G6A49V2M1L2N9Z0_Q=s300'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>('SERVICE_SELECTION');
  const [selectedService, setSelectedService] = useState('');
  
  // Lead Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bogotá');
  const [messageDetails, setMessageDetails] = useState('');
  const [hasNewNotice, setHasNewNotice] = useState(true);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const servicesList = [
    { id: 'maquinaria', label: '🥩 Cotizar Maquinaria de Alimentos', detail: 'Molinos, Desmechadoras, Embutidoras, Granizadoras' },
    { id: 'corte_laser', label: '⚡ Servicio Corte Láser CNC & Doblez', detail: 'Corte de lámina en Acero 304 / Prototipado' },
    { id: 'visita_local', label: '📍 Ubicación Boutique / Fábrica Bogotá', detail: 'Calle 9 # 26-03 local 1 y Cr 27 # 7-28' },
    { id: 'asesor_humano', label: '💬 Hablar con Asesor Técnico Comercial', detail: 'Atención directa para plantas y licitaciones' }
  ];

  const handleSelectService = (serviceLabel: string) => {
    setSelectedService(serviceLabel);
    setStep('LEAD_FORM');
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const formattedMessage = `*SOLICITUD ASISTIDA CHATBOT MAQUITEC*\n\n` +
      `👤 *Cliente:* ${name.trim()}\n` +
      `📞 *Teléfono / WhatsApp:* ${phone.trim()}\n` +
      `📍 *Ciudad:* ${city.trim() || 'Bogotá'}\n` +
      `🛠️ *Interés:* ${selectedService}\n` +
      (messageDetails.trim() ? `📝 *Detalles:* ${messageDetails.trim()}\n\n` : '\n') +
      `Solicito precio, disponibilidad y asesoría comercial técnica.`;

    const whatsappUrl = `https://wa.me/573508826094?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
    setStep('SUBMITTED');
  };

  const resetChat = () => {
    setStep('SERVICE_SELECTION');
    setSelectedService('');
    setName('');
    setPhone('');
    setMessageDetails('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (hasNewNotice) setHasNewNotice(false);
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Placed right above WhatsApp Button) */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-2">
        {/* Callout Prompt Tooltip (visible initially) */}
        {!isOpen && hasNewNotice && (
          <div className="bg-[#1a1c1e] text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-[#35383c] flex items-center gap-2 max-w-[240px] animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0"></span>
            <span className="font-body">¿Cotizar equipo o corte láser? ¡Habla con nuestro chatbot!</span>
            <button
              onClick={() => setHasNewNotice(false)}
              className="text-gray-400 hover:text-white p-0.5"
              title="Cerrar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={toggleChat}
          className="relative bg-[#0061a4] hover:bg-[#00497d] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          title="Asistente Virtual Maquitec"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#25D366] border-2 border-white rounded-full"></span>
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Box Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-4 sm:right-6 z-50 w-[94vw] sm:w-[390px] max-h-[580px] bg-white border border-[#c1c7d2] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#1a1c1e] text-white p-4 flex items-center justify-between border-b border-[#35383c]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#00497d] flex items-center justify-center text-white border border-[#0061a4]">
                  <Bot className="w-5 h-5 text-[#9fcaff]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#1a1c1e] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                  <span>Asesor Virtual Maquitec</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#9fcaff]" />
                </h3>
                <p className="text-[11px] text-[#9fcaff] font-mono-code">
                  En línea • Respuesta Inmediata
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-[#35383c] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader info bar */}
          <div className="bg-[#f8f9ff] px-4 py-2 border-b border-[#e5eeff] text-[11px] text-[#414750] font-mono-code flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0061a4]" />
              Atención Boutique & Fábrica
            </span>
            <span className="text-[#00497d] font-bold">Bogotá, Colombia</span>
          </div>

          {/* Chat Body Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[420px] bg-[#fbfcfd]">
            
            {/* Bot Welcome Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#00497d] flex items-center justify-center text-white shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-[#9fcaff]" />
              </div>
              <div className="bg-white border border-[#e1e2e5] rounded-2xl rounded-tl-xs p-3.5 text-xs text-[#1a1c1e] shadow-xs space-y-1.5 max-w-[85%]">
                <p className="font-medium">
                  👋 ¡Hola! Bienvenido a <strong>Maquitec Ingeniería</strong>.
                </p>
                <p className="text-[#414750] leading-relaxed">
                  Para brindarte la mejor atención y dirigir tu solicitud directamente a nuestro equipo técnico, dime: <strong>¿Qué necesitas cotizar hoy?</strong>
                </p>
              </div>
            </div>

            {/* Step 1: Service Selection */}
            {step === 'SERVICE_SELECTION' && (
              <div className="space-y-2 pt-1 pl-9">
                {servicesList.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSelectService(service.label)}
                    className="w-full text-left bg-white hover:bg-[#eff4ff] border border-[#c1c7d2] hover:border-[#0061a4] p-3 rounded-xl text-xs transition-all group flex items-start justify-between gap-2 shadow-2xs cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-[#1a1c1e] group-hover:text-[#00497d] block">
                        {service.label}
                      </span>
                      <span className="text-[11px] text-[#717782] block mt-0.5">
                        {service.detail}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0061a4] shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            )}

            {/* User Selection Bubble */}
            {selectedService && (
              <div className="flex justify-end">
                <div className="bg-[#0061a4] text-white rounded-2xl rounded-tr-xs p-3 text-xs max-w-[80%] font-medium">
                  {selectedService}
                </div>
              </div>
            )}

            {/* Step 2: Lead Form */}
            {step === 'LEAD_FORM' && (
              <>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#00497d] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-[#9fcaff]" />
                  </div>
                  <div className="bg-white border border-[#e1e2e5] rounded-2xl rounded-tl-xs p-3.5 text-xs text-[#1a1c1e] shadow-xs space-y-2 max-w-[88%]">
                    <p className="font-medium">
                      Excelente elección. Ingresa tus datos de contacto para enviarte la propuesta comercial y conectar por WhatsApp:
                    </p>

                    <form onSubmit={handleSendToWhatsApp} className="space-y-2.5 pt-1">
                      <div>
                        <label className="block text-[10px] font-mono-code uppercase text-[#717782] mb-1">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="ej. Carlos Mendoza"
                          className="w-full bg-[#f8f9ff] border border-[#c1c7d2] rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#0061a4]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono-code uppercase text-[#717782] mb-1">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="ej. 300 123 4567"
                          className="w-full bg-[#f8f9ff] border border-[#c1c7d2] rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#0061a4]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-mono-code uppercase text-[#717782] mb-1">
                            Ciudad
                          </label>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="ej. Bogotá"
                            className="w-full bg-[#f8f9ff] border border-[#c1c7d2] rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#0061a4]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono-code uppercase text-[#717782] mb-1">
                            Especificación
                          </label>
                          <input
                            type="text"
                            value={messageDetails}
                            onChange={(e) => setMessageDetails(e.target.value)}
                            placeholder="ej. Capacidad o Inox"
                            className="w-full bg-[#f8f9ff] border border-[#c1c7d2] rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#0061a4]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono-code text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all uppercase cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Abrir en WhatsApp</span>
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}

            {/* Step 3: Submitted Confirmation */}
            {step === 'SUBMITTED' && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#25D366]/30 rounded-2xl rounded-tl-xs p-3.5 text-xs text-[#1a1c1e] shadow-xs space-y-2 max-w-[88%]">
                  <p className="font-bold text-[#0061a4] flex items-center gap-1">
                    <span>¡Solicitud enviada a WhatsApp!</span>
                  </p>
                  <p className="text-[#414750] leading-relaxed">
                    Hemos abierto la ventana de WhatsApp con tu mensaje formateado. Si no se abrió automáticamente, haz clic a continuación:
                  </p>
                  
                  <div className="pt-1 flex flex-col gap-2">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="bg-[#25D366] text-white font-mono-code text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Reabrir WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={resetChat}
                      className="text-center text-[11px] text-[#0061a4] hover:underline font-mono-code pt-1"
                    >
                      Hacer otra consulta
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Chat Footer Info */}
          <div className="bg-[#f3f4f6] px-3 py-2 border-t border-[#c1c7d2] text-[10px] text-[#717782] font-mono-code flex items-center justify-between">
            <span>Maquitec Ingeniería SAS</span>
            <span>Tel: +57 350 882 6094</span>
          </div>

        </div>
      )}
    </>
  );
};
