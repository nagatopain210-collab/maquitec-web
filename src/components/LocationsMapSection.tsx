import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink, Building2, Factory, ShieldCheck, MessageSquare } from 'lucide-react';

export const LocationsMapSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'boutique' | 'fabrica'>('boutique');

  const locations = {
    boutique: {
      id: 'boutique',
      title: 'Maquitec Boutique (Punto de Venta)',
      subtitle: 'Exhibición Comercial & Venta Directa de Equipos',
      address: 'Calle 9 # 26-03 Local 1, Bogotá, Colombia',
      neighborhood: 'Sector Ricaurte / Paloquemao',
      phone: '+57 350 882 6094',
      email: 'maquitecingenieria@gmail.com',
      hours: 'Lunes a Viernes: 8:00 am - 5:30 pm | Sábados: 8:00 am - 1:00 pm',
      services: [
        'Exhibición de molinos, desmechadoras, embutidoras y granizadoras',
        'Venta de repuestos, discos y empaques en Acero 304',
        'Asesoría comercial personalizada y demo de equipos'
      ],
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Calle 9 # 26-03 local 1, Bogota, Colombia")}`,
      wazeUrl: `https://waze.com/ul?q=${encodeURIComponent("Calle 9 # 26-03 Bogota")}`,
      embedMapUrl: `https://maps.google.com/maps?q=${encodeURIComponent("Calle 9 # 26-03 local 1, Bogota, Colombia")}&t=&z=16&ie=UTF8&iwloc=&output=embed`
    },
    fabrica: {
      id: 'fabrica',
      title: 'Planta de Fabricación & Taller Láser CNC',
      subtitle: 'Centro de Transformación Metalmecánica e Ingeniería',
      address: 'Carrera 27 # 7-28, Bogotá, Colombia',
      neighborhood: 'Zona Industrial Ricaurte',
      phone: '+57 350 882 6094',
      email: 'maquitecingenieria@gmail.com',
      hours: 'Lunes a Viernes: 7:00 am - 5:00 pm | Sábados: 7:00 am - 12:00 pm',
      services: [
        'Corte por láser de fibra óptica (espesores de 0.5 a 16 mm)',
        'Doblez industrial CNC, soldado TIG/MIG y ensamble',
        'Recepción de lámina y archivos de ingeniería (DXF / DWG / STEP)'
      ],
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Carrera 27 # 7-28, Bogota, Colombia")}`,
      wazeUrl: `https://waze.com/ul?q=${encodeURIComponent("Carrera 27 # 7-28 Bogota")}`,
      embedMapUrl: `https://maps.google.com/maps?q=${encodeURIComponent("Carrera 27 # 7-28, Bogota, Colombia")}&t=&z=16&ie=UTF8&iwloc=&output=embed`
    }
  };

  const currentLocation = locations[activeTab];

  return (
    <section className="py-16 md:py-24 bg-[#141820] text-white border-b border-[#273244]" id="ubicaciones">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2536] border border-[#2c3b54] text-[#9fcaff] text-xs font-mono-code uppercase font-bold tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Puntos de Atención Presencial en Bogotá</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white">
            Nuestras Ubicaciones en Bogotá
          </h2>
          <p className="font-body text-base text-[#9ea7b8]">
            Visita nuestra boutique de exhibición para ver la maquinaria en vivo o nuestra fábrica principal para tus proyectos de corte láser CNC.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('boutique')}
            className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono-code text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'boutique'
                ? 'bg-[#0061a4] text-white shadow-lg border border-[#9fcaff]/40'
                : 'bg-[#1b2331] text-[#9ea7b8] hover:text-white hover:bg-[#232d3f] border border-[#273244]'
            }`}
          >
            <Building2 className={`w-4 h-4 ${activeTab === 'boutique' ? 'text-[#9fcaff]' : 'text-gray-400'}`} />
            <span>PUNTO DE VENTA (BOUTIQUE)</span>
          </button>

          <button
            onClick={() => setActiveTab('fabrica')}
            className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono-code text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'fabrica'
                ? 'bg-[#0061a4] text-white shadow-lg border border-[#9fcaff]/40'
                : 'bg-[#1b2331] text-[#9ea7b8] hover:text-white hover:bg-[#232d3f] border border-[#273244]'
            }`}
          >
            <Factory className={`w-4 h-4 ${activeTab === 'fabrica' ? 'text-[#9fcaff]' : 'text-gray-400'}`} />
            <span>FÁBRICA PRINCIPAL & LÁSER CNC</span>
          </button>
        </div>

        {/* Main Grid: Map Embed & Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Info Card */}
          <div className="lg:col-span-5 bg-[#1b2331] border border-[#28354a] rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#2c3b54] pb-4">
                <div>
                  <span className="font-mono-code text-[11px] text-[#9fcaff] uppercase font-bold tracking-wide">
                    {activeTab === 'boutique' ? 'Local Comercial & Showroom' : 'Planta Industrial Metalmecánica'}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {currentLocation.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00497d] flex items-center justify-center text-[#9fcaff] shrink-0">
                  {activeTab === 'boutique' ? <Building2 className="w-5 h-5" /> : <Factory className="w-5 h-5" />}
                </div>
              </div>

              <p className="text-xs text-[#9ea7b8] font-body">
                {currentLocation.subtitle}
              </p>

              {/* Info Rows */}
              <div className="space-y-3 font-body text-sm pt-2">
                <div className="flex items-start gap-3 text-gray-200">
                  <MapPin className="w-4 h-4 text-[#9fcaff] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-xs font-mono-code text-[#9ea7b8] uppercase">Dirección Exacta:</strong>
                    <span className="text-white font-semibold">{currentLocation.address}</span>
                    <span className="block text-xs text-gray-400 mt-0.5">{currentLocation.neighborhood}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-200">
                  <Clock className="w-4 h-4 text-[#9fcaff] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-xs font-mono-code text-[#9ea7b8] uppercase">Horarios de Atención:</strong>
                    <span className="text-gray-200 text-xs">{currentLocation.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-200">
                  <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-xs font-mono-code text-[#9ea7b8] uppercase">Teléfono / WhatsApp:</strong>
                    <a
                      href={`https://wa.me/573508826094?text=${encodeURIComponent(`Hola Maquitec, deseo visitarlos en ${currentLocation.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-[#25D366] transition-colors"
                    >
                      {currentLocation.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-200">
                  <Mail className="w-4 h-4 text-[#9fcaff] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-xs font-mono-code text-[#9ea7b8] uppercase">Correo Electrónico:</strong>
                    <a href={`mailto:${currentLocation.email}`} className="text-gray-200 text-xs hover:text-white transition-colors">
                      {currentLocation.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-[#141a24] p-4 rounded-xl border border-[#273244] space-y-2 mt-4">
                <h4 className="font-mono-code text-xs text-[#9fcaff] uppercase font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Servicios disponibles en este punto:</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300 font-body">
                  {currentLocation.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#9fcaff] mt-0.5">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-2 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={currentLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0061a4] hover:bg-[#00497d] text-white font-mono-code text-xs font-bold py-3 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={currentLocation.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#33ccff] hover:bg-[#29b8ea] text-[#0d1117] font-mono-code text-xs font-bold py-3 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Waze</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <a
                href={`https://wa.me/573508826094?text=${encodeURIComponent(`Hola Maquitec, solicito indicaciones para llegar a la dirección: ${currentLocation.address}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-mono-code text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md uppercase"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar Visita por WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed iframe */}
          <div className="lg:col-span-7 bg-[#1b2331] border border-[#28354a] rounded-2xl overflow-hidden shadow-xl min-h-[380px] lg:min-h-[500px] flex flex-col relative">
            <div className="bg-[#141a24] px-4 py-2.5 border-b border-[#28354a] flex items-center justify-between text-xs font-mono-code text-[#9ea7b8]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                <span className="text-white font-bold">{currentLocation.title}</span>
              </div>
              <span className="hidden sm:inline">Bogotá, D.C.</span>
            </div>

            <iframe
              title={`Mapa de ubicación ${currentLocation.title}`}
              src={currentLocation.embedMapUrl}
              className="w-full flex-1 min-h-[340px] border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
