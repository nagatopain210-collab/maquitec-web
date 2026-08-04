import React, { useState, useRef } from 'react';
import { Product } from '../types';
import { ArrowLeft, ArrowRight, ChevronRight, Search, PlusCircle, Check, FileText } from 'lucide-react';

interface CatalogSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  cartProductIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Equipos' },
    { id: 'molinos', label: 'Molinos de Carne' },
    { id: 'wafleras', label: 'Wafleras' },
    { id: 'granizadoras', label: 'Granizadoras' },
    { id: 'licuadoras', label: 'Licuadoras' },
    { id: 'embutidoras', label: 'Embutidoras' },
    { id: 'empacadoras', label: 'Empacadoras al Vacío' }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="productos">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1a1c1e]">
              Catálogo de Maquinaria
            </h2>
            <p className="font-body text-base text-[#414750] mt-1">
              Equipos fabricados para trabajo pesado continuo en acero 304 quirúrgico.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-[#c1c7d2] flex items-center justify-center text-[#1a1c1e] hover:bg-[#e2e2e5] hover:scale-105 transition-all cursor-pointer"
              title="Anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-[#c1c7d2] flex items-center justify-center text-[#1a1c1e] hover:bg-[#e2e2e5] hover:scale-105 transition-all cursor-pointer"
              title="Siguiente"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Category Chips */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full sm:w-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#1a1c1e] text-white font-bold shadow-xs'
                      : 'bg-[#f3f4f6] text-[#414750] hover:bg-[#e2e2e5]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#717782] absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por modelo o nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f3f4f6] border border-[#c1c7d2] rounded pl-9 pr-3 py-1.5 text-xs font-body focus:outline-none focus:border-[#1a1c1e]"
              />
            </div>
          </div>
        </div>

        {/* Carousel / Product List */}
        {filteredProducts.length === 0 ? (
          <div className="py-12 text-center bg-[#f8f9ff] border border-dashed border-[#c1c7d2] rounded">
            <p className="font-body text-sm text-[#717782]">
              No se encontraron equipos con el filtro o término especificado.
            </p>
            <button
              onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
              className="mt-3 text-xs font-mono-code text-[#0061a4] underline"
            >
              Restablecer búsqueda
            </button>
          </div>
        ) : (
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 snap-x"
          >
            {filteredProducts.map((product) => {
              const inCart = cartProductIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="min-w-[290px] md:min-w-[360px] max-w-[380px] snap-start shrink-0 group border border-[#c1c7d2] rounded p-4 bg-white hover:border-[#1a1c1e] transform hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container with REF tag */}
                    <div className="bg-[#eff4ff] h-60 mb-4 flex items-center justify-center p-4 relative overflow-hidden rounded-sm group-hover:bg-[#dce9ff] transition-colors">
                      <span className="absolute top-3 right-3 bg-[#1a1c1e] text-white font-mono-code text-[10px] px-2 py-1 rounded font-semibold z-10 tracking-wider">
                        REF: {product.ref}
                      </span>

                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#994700] text-white font-mono-code text-[10px] px-2 py-0.5 rounded font-bold uppercase z-10">
                          {product.badge}
                        </span>
                      )}

                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain w-full h-full group-hover:scale-108 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-1">
                      <h4 className="font-display text-lg font-bold text-[#1a1c1e] mb-1 line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="font-mono-code text-xs text-[#454749] mb-4 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>

                      {/* Specs pills */}
                      <div className="grid grid-cols-2 gap-2 mb-4 bg-[#f8f9ff] p-2.5 rounded border border-[#e5e7eb]">
                        <div>
                          <span className="block text-[10px] font-mono-code text-[#717782] uppercase">Potencia</span>
                          <span className="font-body text-xs font-semibold text-[#1a1c1e]">{product.power}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-mono-code text-[#717782] uppercase">Capacidad</span>
                          <span className="font-body text-xs font-semibold text-[#1a1c1e]">{product.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-[#f3f4f6] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="inline-flex items-center gap-1 text-xs font-mono-code text-[#1a1c1e] hover:text-[#0061a4] hover:underline font-semibold transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ver Ficha Técnica</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onAddToCart(product)}
                      className={`px-3 py-1.5 rounded text-xs font-mono-code font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                        inCart
                          ? 'bg-[#00497d] text-white'
                          : 'bg-[#1a1c1e] text-white hover:bg-[#454749]'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Agregado</span>
                        </>
                      ) : (
                        <>
                          <PlusCircle className="w-3.5 h-3.5" />
                          <span>+ Cotizar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
