import React, { useState, useRef } from 'react';
import { Product } from '../types';
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Search, 
  PlusCircle, 
  Check, 
  FileText, 
  Layers, 
  Utensils, 
  Cpu, 
  Box, 
  Sparkles,
  X,
  Grid,
  List,
  Filter,
  RotateCcw
} from 'lucide-react';

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
  const [selectedGroup, setSelectedGroup] = useState<'todos' | 'alimentos' | 'corte_laser' | 'otros'>('todos');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllSubcategoriesGrid, setShowAllSubcategoriesGrid] = useState<boolean>(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const subcategoriesRef = useRef<HTMLDivElement>(null);

  const mainGroups = [
    { 
      id: 'todos', 
      label: 'Todos los Equipos', 
      desc: 'Catálogo industrial completo',
      icon: Layers, 
      count: products.length 
    },
    { 
      id: 'alimentos', 
      label: 'Maquinaria de Alimentos', 
      desc: 'Procesamiento e higiene Inox',
      icon: Utensils, 
      count: products.filter(p => !p.group || p.group === 'alimentos').length 
    },
    { 
      id: 'corte_laser', 
      label: 'Corte Láser CNC', 
      desc: 'Servicio maquila metalmecánica',
      icon: Cpu, 
      count: products.filter(p => p.group === 'corte_laser').length 
    },
    { 
      id: 'otros', 
      label: 'Otros / Accesorios', 
      desc: 'Repuestos & consumibles',
      icon: Box, 
      count: products.filter(p => p.group === 'otros').length 
    }
  ];

  // Dynamically extract unique categories present in the products list with item counts
  const availableCategories = React.useMemo(() => {
    const activeProducts = selectedGroup === 'todos' 
      ? products 
      : products.filter(p => (p.group || 'alimentos') === selectedGroup);

    const categoryMap = new Map<string, { label: string; count: number }>();
    
    activeProducts.forEach(p => {
      if (p.category && p.categoryLabel) {
        const existing = categoryMap.get(p.category);
        if (existing) {
          existing.count += 1;
        } else {
          categoryMap.set(p.category, { label: p.categoryLabel, count: 1 });
        }
      }
    });

    const list = Array.from(categoryMap.entries()).map(([id, data]) => ({ 
      id, 
      label: data.label,
      count: data.count 
    }));

    return [{ id: 'todos', label: 'Todas las Subcategorías', count: activeProducts.length }, ...list];
  }, [products, selectedGroup]);

  const handleGroupChange = (groupId: 'todos' | 'alimentos' | 'corte_laser' | 'otros') => {
    setSelectedGroup(groupId);
    setSelectedCategory('todos');
  };

  const filteredProducts = products.filter((p) => {
    // Group filter
    const matchesGroup = selectedGroup === 'todos' || 
      (p.group ? p.group === selectedGroup : selectedGroup === 'alimentos');
    
    // Subcategory filter
    const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory;
    
    // Search query
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesGroup && matchesCategory && matchesSearch;
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

  const scrollSubcategories = (direction: 'left' | 'right') => {
    if (subcategoriesRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      subcategoriesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const hasActiveFilters = selectedGroup !== 'todos' || selectedCategory !== 'todos' || searchQuery !== '';

  const activeGroupObj = mainGroups.find(g => g.id === selectedGroup);
  const activeCategoryObj = availableCategories.find(c => c.id === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-[#0d1117] border-y border-[#212836] text-white" id="productos">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16202e] border border-[#273447] text-[#9fcaff] text-xs font-mono-code mb-3 uppercase tracking-wider font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#9fcaff]" />
              <span>Serie Industrial Acero Inox 304</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Catálogo de Maquinaria & Servicios
            </h2>
            <p className="font-body text-base text-[#9ea7b8] mt-2 max-w-2xl">
              Selecciona una categoría o utiliza los filtros para explorar nuestros equipos de alto rendimiento para la industria alimentaria y metalmecánica.
            </p>
          </div>

          {/* Carousel Controls for Desktop */}
          <div className="hidden md:flex items-center gap-3 bg-[#131924] p-2 rounded-2xl border border-[#222c3c]">
            <span className="text-xs font-mono-code text-[#717d93] px-2">Navegar catálogo:</span>
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-xl border border-[#2c3749] bg-[#1a2332] flex items-center justify-center text-white hover:bg-[#0061a4] hover:border-[#9fcaff] hover:scale-105 transition-all cursor-pointer shadow-sm"
              title="Anterior equipo"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-xl border border-[#2c3749] bg-[#1a2332] flex items-center justify-center text-white hover:bg-[#0061a4] hover:border-[#9fcaff] hover:scale-105 transition-all cursor-pointer shadow-sm"
              title="Siguiente equipo"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            PASO 1: MACRO CATEGORY SELECTION (Spacious, prominent 4-card selector)
           ========================================================================= */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#9fcaff] font-bold flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>1. Categoría Principal</span>
            </span>
            <span className="text-xs font-mono-code text-[#717d93]">
              {products.length} equipos registrados
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-2.5 bg-[#131924] border border-[#222c3c] rounded-2xl shadow-inner">
            {mainGroups.map((group) => {
              const Icon = group.icon;
              const isActive = selectedGroup === group.id;

              return (
                <button
                  key={group.id}
                  onClick={() => handleGroupChange(group.id as any)}
                  className={`group relative flex flex-col justify-between p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-br from-[#00528c] to-[#003861] text-white shadow-xl border-2 border-[#9fcaff] ring-2 ring-[#0061a4]/40 scale-[1.01]'
                      : 'bg-[#18202d] text-[#a0aabf] hover:text-white hover:bg-[#202b3d] border border-[#263346]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-[#9fcaff] text-[#0d1117]' : 'bg-[#121824] text-[#9fcaff] group-hover:bg-[#253247]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-mono-code font-bold ${
                      isActive 
                        ? 'bg-[#0d1117] text-[#9fcaff] border border-[#9fcaff]/30' 
                        : 'bg-[#121824] text-[#717d93] group-hover:text-white'
                    }`}>
                      {group.count} ítems
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-display text-sm md:text-base font-bold leading-snug mb-0.5 ${
                      isActive ? 'text-white' : 'text-white group-hover:text-[#9fcaff]'
                    }`}>
                      {group.label}
                    </h3>
                    <p className={`text-xs font-body ${isActive ? 'text-[#d0e4ff]' : 'text-[#717d93]'}`}>
                      {group.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            PASO 2: SEARCH & SUBCATEGORY NAVIGATION PANEL (Spacious & Scrollable)
           ========================================================================= */}
        <div className="mb-8 p-4 md:p-6 bg-[#131924] border border-[#222c3c] rounded-2xl space-y-6 shadow-xl">
          
          {/* Top Control Bar: Search Input + Clear Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-4 border-b border-[#222c3c]">
            {/* Search Input Box */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#717d93] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por modelo, nombre o capacidad..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a2332] border border-[#2c384c] text-white text-sm placeholder-[#717d93] rounded-xl pl-10 pr-10 py-2.5 font-body focus:outline-none focus:border-[#9fcaff] focus:ring-1 focus:ring-[#9fcaff] transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#717d93] hover:text-white p-1 rounded-full hover:bg-[#253247] cursor-pointer"
                  title="Limpiar búsqueda"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Status & Global Clear Button */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-mono-code text-[#9ea7b8] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>
                  Encontrados: <strong className="text-white text-sm">{filteredProducts.length}</strong> de {products.length}
                </span>
              </span>

              {hasActiveFilters && (
                <button
                  onClick={() => { 
                    setSelectedGroup('todos'); 
                    setSelectedCategory('todos'); 
                    setSearchQuery(''); 
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold bg-[#2b1717] text-[#ff9999] border border-[#522323] hover:bg-[#3d1e1e] hover:text-white transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpiar Filtros</span>
                </button>
              )}
            </div>
          </div>

          {/* Subcategories Section (if in 'todos' or 'alimentos') */}
          {(selectedGroup === 'todos' || selectedGroup === 'alimentos') ? (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#717d93] font-bold flex items-center gap-2">
                  <span>2. Subcategorías disponibles ({availableCategories.length - 1}):</span>
                </span>

                <div className="flex items-center gap-2">
                  {/* Toggle Grid View vs Scroll View */}
                  <button
                    onClick={() => setShowAllSubcategoriesGrid(!showAllSubcategoriesGrid)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code text-[#9fcaff] bg-[#1a2332] hover:bg-[#253247] border border-[#2a374c] transition-all cursor-pointer"
                    title={showAllSubcategoriesGrid ? "Ver en línea desplazable" : "Ver todas las subcategorías en rejilla"}
                  >
                    {showAllSubcategoriesGrid ? (
                      <>
                        <List className="w-3.5 h-3.5" />
                        <span>Modo Barra</span>
                      </>
                    ) : (
                      <>
                        <Grid className="w-3.5 h-3.5" />
                        <span>Ver Todas ({availableCategories.length})</span>
                      </>
                    )}
                  </button>

                  {/* Scroll Left/Right arrows for line mode */}
                  {!showAllSubcategoriesGrid && (
                    <div className="hidden sm:flex items-center gap-1">
                      <button
                        onClick={() => scrollSubcategories('left')}
                        className="w-7 h-7 rounded-lg bg-[#1a2332] hover:bg-[#253247] border border-[#2a374c] flex items-center justify-center text-[#9fcaff] hover:text-white transition-all cursor-pointer"
                        title="Desplazar a la izquierda"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => scrollSubcategories('right')}
                        className="w-7 h-7 rounded-lg bg-[#1a2332] hover:bg-[#253247] border border-[#2a374c] flex items-center justify-center text-[#9fcaff] hover:text-white transition-all cursor-pointer"
                        title="Desplazar a la derecha"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Grid Mode */}
              {showAllSubcategoriesGrid ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 p-1 animate-fade-in">
                  {availableCategories.map((cat) => {
                    const isCatActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-mono-code font-medium text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isCatActive
                            ? 'bg-[#9fcaff] text-[#0d1117] font-bold shadow-md ring-2 ring-[#9fcaff]/40'
                            : 'bg-[#18202d] text-[#b0bacb] hover:bg-[#253247] hover:text-white border border-[#263346]'
                        }`}
                      >
                        <span className="truncate">{cat.label}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-bold ${
                          isCatActive ? 'bg-[#0d1117] text-white' : 'bg-[#121824] text-[#717d93]'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Horizontal Scroll Mode */
                <div className="relative group/subnav">
                  {/* Left Scroll Button on mobile/tablet */}
                  <button
                    onClick={() => scrollSubcategories('left')}
                    className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#0d1117]/90 text-[#9fcaff] border border-[#2c384c] flex items-center justify-center shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div
                    ref={subcategoriesRef}
                    className="flex gap-2.5 overflow-x-auto hide-scrollbar py-1 px-0.5 scroll-smooth"
                  >
                    {availableCategories.map((cat) => {
                      const isCatActive = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-mono-code whitespace-nowrap transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                            isCatActive
                              ? 'bg-[#9fcaff] text-[#0d1117] font-bold shadow-lg ring-2 ring-[#9fcaff]/30 scale-[1.02]'
                              : 'bg-[#18202d] text-[#b0bacb] hover:bg-[#253247] hover:text-white border border-[#263346]'
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
                            isCatActive ? 'bg-[#00497d] text-white' : 'bg-[#121824] text-[#717d93]'
                          }`}>
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Scroll Button on mobile/tablet */}
                  <button
                    onClick={() => scrollSubcategories('right')}
                    className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#0d1117]/90 text-[#9fcaff] border border-[#2c384c] flex items-center justify-center shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-xs font-mono-code text-[#9fcaff] flex items-center gap-2 bg-[#18202d] p-3 rounded-xl border border-[#263346]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <span>
                Filtro especializado activo: <strong>{selectedGroup === 'corte_laser' ? 'Corte Láser CNC y Maquila Metalmecánica' : 'Accesorios & Repuestos Industriales'}</strong>
              </span>
            </div>
          )}
        </div>

        {/* =========================================================================
            ACTIVE FILTER SUMMARY BADGES (Shows exact current selection)
           ========================================================================= */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono-code bg-[#131924]/60 p-3 rounded-xl border border-[#222c3c]">
            <span className="text-[#717d93] uppercase font-bold text-[11px] mr-1">Filtros Aplicados:</span>
            
            {selectedGroup !== 'todos' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#00497d] text-white font-semibold border border-[#0061a4]">
                <span>Grupo: {activeGroupObj?.label}</span>
                <button 
                  onClick={() => setSelectedGroup('todos')}
                  className="hover:text-[#9fcaff] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {selectedCategory !== 'todos' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#162a3f] text-[#9fcaff] font-semibold border border-[#2a4667]">
                <span>Subcategoría: {activeCategoryObj?.label}</span>
                <button 
                  onClick={() => setSelectedCategory('todos')}
                  className="hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#273244] text-white font-semibold border border-[#3b4b63]">
                <span>Búsqueda: "{searchQuery}"</span>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="hover:text-[#9fcaff] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* =========================================================================
            CATALOG PRODUCT CAROUSEL / GRID
           ========================================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-[#131924] border border-dashed border-[#273244] rounded-2xl p-8">
            <Search className="w-12 h-12 text-[#717d93] mx-auto mb-3 opacity-50" />
            <h3 className="font-display text-lg font-bold text-white mb-1">
              No se encontraron equipos coincidentes
            </h3>
            <p className="font-body text-sm text-[#9ea7b8] max-w-md mx-auto mb-4">
              Intenta cambiar el término de búsqueda o selecciona otra categoría de maquinaria.
            </p>
            <button
              onClick={() => { setSelectedGroup('todos'); setSelectedCategory('todos'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-mono-code font-bold bg-[#9fcaff] text-[#0d1117] hover:bg-white transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restablecer Todos los Filtros</span>
            </button>
          </div>
        ) : (
          <div className="relative">
            {/* Scroll indicators on mobile */}
            <div className="md:hidden flex justify-between items-center mb-2 px-1 text-[11px] font-mono-code text-[#717d93]">
              <span>Desliza para ver más equipos →</span>
              <span>{filteredProducts.length} ítems</span>
            </div>

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 pt-1 snap-x scroll-smooth"
            >
              {filteredProducts.map((product) => {
                const inCart = cartProductIds.includes(product.id);

                return (
                  <div
                    key={product.id}
                    className="min-w-[290px] sm:min-w-[340px] md:min-w-[360px] max-w-[380px] snap-start shrink-0 group border border-[#232c3a] hover:border-[#9fcaff] rounded-2xl p-4 bg-[#141a24] hover:bg-[#18202d] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Container with REF tag */}
                      <div className="bg-[#1b2331] group-hover:bg-[#222c3d] h-60 mb-4 flex items-center justify-center p-4 relative overflow-hidden rounded-xl transition-colors border border-[#273244]">
                        <span className="absolute top-3 right-3 bg-[#0d1117]/90 text-[#9fcaff] border border-[#2c384c] font-mono-code text-[10px] px-2.5 py-1 rounded-md font-semibold z-10 tracking-wider shadow-sm">
                          REF: {product.ref}
                        </span>

                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-[#994700] text-white font-mono-code text-[10px] px-2.5 py-1 rounded-md font-bold uppercase z-10 shadow-sm">
                            {product.badge}
                          </span>
                        )}

                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-contain w-full h-full group-hover:scale-108 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="px-1">
                        <div className="mb-1">
                          <span className="text-[10px] font-mono-code text-[#717d93] uppercase tracking-wider block">
                            {product.categoryLabel || 'Maquinaria'}
                          </span>
                          <h4 className="font-display text-lg font-bold text-white line-clamp-1 group-hover:text-[#9fcaff] transition-colors">
                            {product.name}
                          </h4>
                        </div>
                        
                        <p className="font-mono-code text-xs text-[#a0aabf] mb-4 line-clamp-2 leading-relaxed h-8">
                          {product.shortDesc}
                        </p>

                        {/* Specs pills */}
                        <div className="grid grid-cols-2 gap-2 mb-4 bg-[#0d1117] p-2.5 rounded-xl border border-[#212836]">
                          <div>
                            <span className="block text-[10px] font-mono-code text-[#7c889e] uppercase">Potencia</span>
                            <span className="font-body text-xs font-semibold text-white truncate block">{product.power}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] font-mono-code text-[#7c889e] uppercase">Capacidad</span>
                            <span className="font-body text-xs font-semibold text-white truncate block">{product.capacity}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-[#222a38] flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="inline-flex items-center gap-1 text-xs font-mono-code text-[#9fcaff] hover:text-white font-semibold transition-colors cursor-pointer py-1"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Ficha Técnica</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onAddToCart(product)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          inCart
                            ? 'bg-[#00497d] text-white border border-[#0061a4]'
                            : 'bg-[#9fcaff] text-[#0d1117] hover:bg-white font-bold shadow-md'
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
          </div>
        )}
      </div>
    </section>
  );
};

