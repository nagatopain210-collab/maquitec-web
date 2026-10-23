import React, { useState, useRef, useEffect } from 'react';
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
  Package,
  Sparkles,
  X,
  Grid,
  List,
  Filter,
  RotateCcw,
  Play,
  Pause,
  ImageOff
} from 'lucide-react';
import { ProductCardImage } from './ProductCardImage';

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
  const [selectedGroup, setSelectedGroup] = useState<'todos' | 'alimentos' | 'empaque' | 'corte_laser' | 'otros'>('todos');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayMode, setDisplayMode] = useState<'carousel' | 'grid'>('carousel');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const subcategoriesRef = useRef<HTMLDivElement>(null);

  // Automatic animated carousel scroll effect
  useEffect(() => {
    if (displayMode !== 'carousel' || !isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // Reset to beginning if near end
        if (scrollLeft + clientWidth >= scrollWidth - 40) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [displayMode, isAutoPlaying, isHovered, products.length]);

  const mainGroups = [
    { 
      id: 'todos', 
      label: 'Todos los Equipos', 
      desc: 'Catálogo completo de maquinaria',
      icon: Layers, 
      count: products.length 
    },
    { 
      id: 'alimentos', 
      label: 'Maquinaria de Alimentos', 
      desc: 'Procesamiento, cárnicos & snacks',
      icon: Utensils, 
      count: products.filter(p => !p.group || p.group === 'alimentos').length 
    },
    { 
      id: 'empaque', 
      label: 'Línea de Empaque & Vacío', 
      desc: 'Empacadoras al vacío y selladoras',
      icon: Package, 
      count: products.filter(p => p.group === 'empaque').length 
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
      desc: 'Repuestos & consumibles inox',
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

  const handleGroupChange = (groupId: 'todos' | 'alimentos' | 'empaque' | 'corte_laser' | 'otros') => {
    setSelectedGroup(groupId);
    setSelectedCategory('todos');
  };

  const filteredProducts = products.filter((p) => {
    // Group filter
    const productGroup = p.group || 'alimentos';
    const matchesGroup = selectedGroup === 'todos' || productGroup === selectedGroup;
    
    // Subcategory filter
    const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory;
    
    // Real-time search query matching name or reference (accent and case-insensitive)
    if (!searchQuery.trim()) {
      return matchesGroup && matchesCategory;
    }

    const normalize = (text: string) =>
      (text || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const normalizedQuery = normalize(searchQuery.trim());
    const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

    const target = normalize(`${p.name} ${p.ref} ${p.categoryLabel || ''} ${p.shortDesc || ''}`);

    const matchesSearch = queryTerms.every((term) => target.includes(term));

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
    <section className="py-10 sm:py-14 md:py-24 bg-[#0d1117] border-y border-[#212836] text-white" id="productos">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16202e] border border-[#273447] text-[#9fcaff] text-xs font-mono-code mb-2.5 sm:mb-3 uppercase tracking-wider font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#9fcaff]" />
              <span>Serie Industrial Acero Inox 304</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Catálogo de Maquinaria & Servicios
            </h2>
            <p className="font-body text-sm sm:text-base text-[#9ea7b8] mt-1.5 sm:mt-2 max-w-2xl">
              Seleccione una categoría o utilice la búsqueda en tiempo real para explorar nuestros 93 equipos de alto rendimiento.
            </p>
          </div>

          {/* Carousel Controls for Desktop */}
          <div className="hidden md:flex items-center gap-3 bg-[#131924] p-2 rounded-2xl border border-[#222c3c]">
            <span className="text-xs font-mono-code text-[#717d93] px-2">Navegar catálogo:</span>
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-xl border border-[#2c3749] bg-[#1a2332] flex items-center justify-center text-white hover:bg-[#0061a4] hover:border-[#9fcaff] active:scale-95 transition-all cursor-pointer shadow-sm"
              title="Anterior equipo"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-xl border border-[#2c3749] bg-[#1a2332] flex items-center justify-center text-white hover:bg-[#0061a4] hover:border-[#9fcaff] active:scale-95 transition-all cursor-pointer shadow-sm"
              title="Siguiente equipo"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            BARRA DE BÚSQUEDA EN TIEMPO REAL (Touch-friendly & Responsive)
           ========================================================================= */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-5 md:p-7 bg-gradient-to-r from-[#111722] via-[#162130] to-[#111722] border-2 border-[#2b3c54] rounded-2xl shadow-xl relative overflow-hidden">
          {/* Decorative ambient glow */}
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#0061a4]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col gap-3 sm:gap-4 relative z-10">
            {/* Header: Label, Live pulse & Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label 
                htmlFor="catalog-realtime-search-top"
                className="text-xs sm:text-sm font-mono-code uppercase tracking-wider text-[#9fcaff] font-bold flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#9fcaff] shrink-0" />
                <span>Búsqueda en Tiempo Real por Nombre o Referencia</span>
              </label>

              <div className="flex items-center justify-between sm:justify-end gap-2.5">
                <span className="text-xs font-mono-code text-[#9ea7b8] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                  <span>
                    {searchQuery.trim() ? (
                      <>
                        Encontrados: <strong className="text-white font-bold">{filteredProducts.length}</strong> de {products.length}
                      </>
                    ) : (
                      <>{products.length} equipos registrados</>
                    )}
                  </span>
                </span>

                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      setSelectedGroup('todos');
                      setSelectedCategory('todos');
                      setSearchQuery('');
                    }}
                    className="min-h-[36px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code font-semibold bg-[#2b1717] text-[#ff9999] border border-[#522323] hover:bg-[#3d1e1e] hover:text-white active:scale-95 transition-all cursor-pointer"
                    title="Restablecer filtros y búsqueda"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Restablecer</span>
                  </button>
                )}
              </div>
            </div>

            {/* Large Interactive Search Input with min-h-[48px] */}
            <div className="relative">
              <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#717d93] pointer-events-none flex items-center">
                <Search className="w-5 h-5 text-[#9fcaff]" />
              </div>
              <input
                id="catalog-realtime-search-top"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por equipo o ref (ej: Molino, Embutidora, DZ-260, Licuadora...)"
                className="w-full min-h-[48px] bg-[#080c13] border-2 border-[#2b394e] text-white text-base md:text-sm placeholder-[#68768e] rounded-xl pl-11 sm:pl-12 pr-11 py-3 font-body focus:outline-none focus:border-[#9fcaff] focus:ring-2 focus:ring-[#9fcaff]/30 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#717d93] hover:text-white min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:bg-[#253247] transition-colors cursor-pointer"
                  title="Borrar término de búsqueda"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick search tags / filters - Horizontal touch-scrolling on mobile */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:flex-wrap hide-scrollbar -mx-1 px-1">
              <span className="text-[11px] font-mono-code text-[#717d93] shrink-0 mr-1">
                Frecuentes:
              </span>
              {[
                'Molino',
                'Embutidora',
                'Batidora',
                'Crispetera',
                'Algodonera',
                'Licuadora',
                'Waflera',
                'Crepera',
                'Empacadora',
                'Mojadora',
                'Exprimidor',
                'Corte Láser'
              ].map((term) => {
                const isActive = searchQuery.toLowerCase().trim() === term.toLowerCase();
                return (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      if (isActive) {
                        setSearchQuery('');
                      } else {
                        setSearchQuery(term);
                      }
                    }}
                    className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all cursor-pointer shrink-0 active:scale-95 ${
                      isActive
                        ? 'bg-[#9fcaff] text-[#0d1117] font-bold shadow-sm ring-1 ring-[#9fcaff]'
                        : 'bg-[#18202d] text-[#8e9ab0] hover:text-white hover:bg-[#222d3e] border border-[#273447]'
                    }`}
                  >
                    {term}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            PASO 1: MACRO CATEGORY SELECTION (Horizontal swipe on mobile, grid on desktop)
           ========================================================================= */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#9fcaff] font-bold flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>1. Filtrar por Categoría Principal</span>
            </span>
            <span className="text-xs font-mono-code text-[#717d93] hidden sm:inline">
              Desliza o selecciona
            </span>
          </div>

          {/* Mobile: Horizontal scrollable swipe strip (snap-x). Desktop: Multi-column grid */}
          <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 sm:p-2.5 bg-[#131924] border border-[#222c3c] rounded-2xl shadow-inner snap-x hide-scrollbar">
            {mainGroups.map((group) => {
              const Icon = group.icon;
              const isActive = selectedGroup === group.id;

              return (
                <button
                  key={group.id}
                  onClick={() => handleGroupChange(group.id as any)}
                  className={`group relative min-w-[210px] sm:min-w-0 snap-start shrink-0 sm:shrink flex flex-col justify-between p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                    isActive
                      ? 'bg-gradient-to-br from-[#00528c] to-[#003861] text-white shadow-xl border-2 border-[#9fcaff] ring-2 ring-[#0061a4]/40 scale-[1.01]'
                      : 'bg-[#18202d] text-[#a0aabf] hover:text-white hover:bg-[#202b3d] border border-[#263346]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                    <div className={`p-2 sm:p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-[#9fcaff] text-[#0d1117]' : 'bg-[#121824] text-[#9fcaff] group-hover:bg-[#253247]'
                    }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className={`text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-mono-code font-bold ${
                      isActive 
                        ? 'bg-[#0d1117] text-[#9fcaff] border border-[#9fcaff]/30' 
                        : 'bg-[#121824] text-[#717d93] group-hover:text-white'
                    }`}>
                      {group.count}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-display text-sm sm:text-base font-bold leading-snug mb-0.5 ${
                      isActive ? 'text-white' : 'text-white group-hover:text-[#9fcaff]'
                    }`}>
                      {group.label}
                    </h3>
                    <p className={`text-xs font-body line-clamp-1 sm:line-clamp-none ${isActive ? 'text-[#d0e4ff]' : 'text-[#717d93]'}`}>
                      {group.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            PASO 2: SUBCATEGORY NAVIGATION PANEL (Horizontal swipe on mobile)
           ========================================================================= */}
        <div className="mb-6 sm:mb-8 p-3.5 sm:p-5 md:p-6 bg-[#131924] border border-[#222c3c] rounded-2xl space-y-3 sm:space-y-4 shadow-xl">
          
          {/* Subcategories Header Bar */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-start sm:items-center justify-between pb-2.5 sm:pb-3 border-b border-[#222c3c]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#9fcaff] font-bold flex items-center gap-2">
                <span>2. Subcategorías ({availableCategories.length - 1}):</span>
              </span>
              {searchQuery && (
                <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-[#1a2536] text-[#9fcaff] border border-[#2c3d56]">
                  "{searchQuery}"
                </span>
              )}
            </div>

            {/* Status & Global Clear Button */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-3">
              <span className="text-xs font-mono-code text-[#9ea7b8] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                <span>
                  Mostrando <strong className="text-white font-bold">{filteredProducts.length}</strong> de {products.length}
                </span>
              </span>

              {hasActiveFilters && (
                <button
                  onClick={() => { 
                    setSelectedGroup('todos'); 
                    setSelectedCategory('todos'); 
                    setSearchQuery(''); 
                  }}
                  className="min-h-[36px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code font-semibold bg-[#2b1717] text-[#ff9999] border border-[#522323] hover:bg-[#3d1e1e] hover:text-white active:scale-95 transition-all cursor-pointer"
                  title="Restablecer todos los filtros"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpiar</span>
                </button>
              )}
            </div>
          </div>

          {/* Subcategories - Swipeable horizontal pill strip on mobile, neat grid on tablet/desktop */}
          {(selectedGroup === 'todos' || selectedGroup === 'alimentos' || selectedGroup === 'empaque') ? (
            <div>
              <div className="flex overflow-x-auto gap-2 py-1 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 hide-scrollbar snap-x">
                {availableCategories.map((cat) => {
                  const isCatActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`min-h-[44px] shrink-0 sm:shrink snap-start px-3.5 py-2 rounded-xl text-xs font-mono-code font-medium text-left flex items-center justify-between gap-2.5 transition-all cursor-pointer active:scale-95 ${
                        isCatActive
                          ? 'bg-[#9fcaff] text-[#0d1117] font-bold shadow-md ring-2 ring-[#9fcaff]/40'
                          : 'bg-[#18202d] text-[#b0bacb] hover:bg-[#253247] hover:text-white border border-[#263346]'
                      }`}
                    >
                      <span className="truncate max-w-[150px] sm:max-w-none">{cat.label}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-bold ${
                        isCatActive ? 'bg-[#00497d] text-white' : 'bg-[#121824] text-[#717d93]'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-xs font-mono-code text-[#9fcaff] flex items-center gap-2 bg-[#18202d] p-3 rounded-xl border border-[#263346]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <span>
                Filtro especializado: <strong>{selectedGroup === 'corte_laser' ? 'Corte Láser CNC y Maquila Metalmecánica' : 'Accesorios & Repuestos Industriales'}</strong>
              </span>
            </div>
          )}
        </div>

        {/* =========================================================================
            ACTIVE FILTER SUMMARY BADGES (Shows exact current selection)
           ========================================================================= */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono-code bg-[#131924]/60 p-3 rounded-xl border border-[#222c3c]">
            <span className="text-[#717d93] uppercase font-bold text-[11px] mr-1">Filtros:</span>
            
            {selectedGroup !== 'todos' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00497d] text-white font-semibold border border-[#0061a4]">
                <span>Grupo: {activeGroupObj?.label}</span>
                <button 
                  onClick={() => setSelectedGroup('todos')}
                  className="hover:text-[#9fcaff] cursor-pointer p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {selectedCategory !== 'todos' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#162a3f] text-[#9fcaff] font-semibold border border-[#2a4667]">
                <span>Subcategoría: {activeCategoryObj?.label}</span>
                <button 
                  onClick={() => setSelectedCategory('todos')}
                  className="hover:text-white cursor-pointer p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#273244] text-white font-semibold border border-[#3b4b63]">
                <span>"{searchQuery}"</span>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="hover:text-[#9fcaff] cursor-pointer p-0.5"
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
        {/* View Mode Switcher & Item Counter Header */}
        {filteredProducts.length > 0 && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 sm:mb-6 bg-[#131924] p-3 sm:p-3.5 rounded-xl border border-[#222c3c]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <span className="text-xs md:text-sm font-mono-code text-[#9ea7b8]">
                Mostrando <strong className="text-white font-bold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'equipo' : 'equipos'}
                {selectedCategory !== 'todos' && activeCategoryObj ? (
                  <span> en <strong className="text-[#9fcaff] font-bold">{activeCategoryObj.label}</strong></span>
                ) : ''}
              </span>

              {/* Auto-play badge in carousel mode */}
              {displayMode === 'carousel' && (
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`min-h-[32px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code transition-all cursor-pointer border active:scale-95 ${
                    isAutoPlaying
                      ? 'bg-[#162a3f] text-[#9fcaff] border-[#294566] hover:bg-[#1e3854]'
                      : 'bg-[#18202d] text-[#717d93] border-[#263346] hover:text-white'
                  }`}
                  title={isAutoPlaying ? "Pausar avance automático" : "Activar avance automático"}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-[#9fcaff]" />
                      <span className="hidden xs:inline">Animado</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" />
                      <span className="hidden xs:inline">Pausado</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 bg-[#0d1117] p-1 rounded-lg border border-[#263346] w-full sm:w-auto justify-between sm:justify-start">
              <button
                type="button"
                onClick={() => setDisplayMode('carousel')}
                className={`flex-1 sm:flex-initial min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono-code transition-all cursor-pointer active:scale-95 ${
                  displayMode === 'carousel'
                    ? 'bg-[#9fcaff] text-[#0d1117] font-bold shadow-sm'
                    : 'text-[#717d93] hover:text-white hover:bg-[#18202d]'
                }`}
                title="Ver equipos en carrusel deslizable"
              >
                <List className="w-3.5 h-3.5" />
                <span>Carrusel Deslizable</span>
              </button>
              <button
                type="button"
                onClick={() => setDisplayMode('grid')}
                className={`flex-1 sm:flex-initial min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono-code transition-all cursor-pointer active:scale-95 ${
                  displayMode === 'grid'
                    ? 'bg-[#9fcaff] text-[#0d1117] font-bold shadow-sm'
                    : 'text-[#717d93] hover:text-white hover:bg-[#18202d]'
                }`}
                title="Ver todos los equipos en 1 columna en móvil"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Rejilla ({filteredProducts.length})</span>
              </button>
            </div>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="py-12 sm:py-16 text-center bg-[#131924] border border-dashed border-[#273244] rounded-2xl p-6 sm:p-8">
            <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#717d93] mx-auto mb-3 opacity-50" />
            <h3 className="font-display text-base sm:text-lg font-bold text-white mb-1">
              No se encontraron equipos coincidentes
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#9ea7b8] max-w-md mx-auto mb-4">
              Intente cambiar el término de búsqueda o seleccione otra categoría de maquinaria.
            </p>
            <button
              onClick={() => { setSelectedGroup('todos'); setSelectedCategory('todos'); setSearchQuery(''); }}
              className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-mono-code font-bold bg-[#9fcaff] text-[#0d1117] hover:bg-white active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restablecer Todos los Filtros</span>
            </button>
          </div>
        ) : displayMode === 'grid' ? (
          /* GRID MODE: Strictly 1 column on mobile screens (grid-cols-1), 2 on sm, 3 on lg, 4 on 2xl */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 pb-6 pt-1">
            {filteredProducts.map((product) => {
              const inCart = cartProductIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="w-full group border border-[#232c3a] hover:border-[#9fcaff] rounded-2xl p-4 sm:p-5 bg-[#141a24] hover:bg-[#18202d] transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container with REF tag and consistent aspect ratio */}
                    <ProductCardImage
                      productId={product.id}
                      productName={product.name}
                      refCode={product.ref}
                      badge={product.badge}
                      image={product.image}
                      onOpenZoom={(url) => setZoomedImage(url)}
                      className="h-48 sm:h-56 mb-3 sm:mb-4"
                    />

                    {/* Content */}
                    <div className="px-0.5">
                      <div className="mb-2">
                        <span className="text-[10px] font-mono-code text-[#717d93] uppercase tracking-wider block mb-0.5">
                          {product.categoryLabel || 'Maquinaria'}
                        </span>
                        <h4 className="font-display text-base md:text-lg font-bold text-white group-hover:text-[#9fcaff] transition-colors leading-snug min-h-[2.5rem] flex items-center">
                          {product.name}
                        </h4>
                      </div>
                      
                      <p className="font-mono-code text-xs text-[#a0aabf] mb-3 leading-relaxed min-h-[2.5rem] line-clamp-2">
                        {product.shortDesc}
                      </p>

                      {/* Specs pills */}
                      <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4 bg-[#0d1117] p-2.5 sm:p-3 rounded-xl border border-[#212836]">
                        <div>
                          <span className="block text-[10px] font-mono-code text-[#7c889e] uppercase mb-0.5">Potencia</span>
                          <span className="font-body text-xs font-semibold text-white block leading-snug truncate">{product.power}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-mono-code text-[#7c889e] uppercase mb-0.5">Capacidad</span>
                          <span className="font-body text-xs font-semibold text-white block leading-snug truncate">{product.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Minimum 48px Touch Target & Tactile Active States */}
                  <div className="pt-3 border-t border-[#222a38] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="min-h-[48px] inline-flex items-center gap-1.5 text-xs font-mono-code text-[#9fcaff] hover:text-white font-semibold transition-colors cursor-pointer py-2 px-2.5 rounded-xl hover:bg-[#182335] active:bg-[#1e2d42] active:scale-[0.98]"
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span>Ficha Técnica</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className={`min-h-[48px] px-4 py-2.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.98] ${
                        inCart
                          ? 'bg-[#00497d] text-white border border-[#0061a4]'
                          : 'bg-[#9fcaff] text-[#0d1117] hover:bg-white shadow-md'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-4 h-4 shrink-0" />
                          <span>Agregado</span>
                        </>
                      ) : (
                        <>
                          <PlusCircle className="w-4 h-4 shrink-0" />
                          <span>+ Cotizar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* CAROUSEL MODE: Horizontal swipeable strip with touch snap and comfortable mobile cards */
          <div className="relative group/carousel">
            {/* Carousel navigation controls on sides (desktop only to prevent clutter on mobile) */}
            <button
              onClick={scrollLeft}
              className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0d1117]/90 text-[#9fcaff] hover:text-white border border-[#2c384c] items-center justify-center shadow-2xl opacity-80 hover:opacity-100 transition-all cursor-pointer active:scale-95"
              title="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollRight}
              className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0d1117]/90 text-[#9fcaff] hover:text-white border border-[#2c384c] items-center justify-center shadow-2xl opacity-80 hover:opacity-100 transition-all cursor-pointer active:scale-95"
              title="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile Swipe Hint */}
            <div className="flex justify-between items-center mb-2 px-1 text-[11px] font-mono-code text-[#717d93]">
              <span className="flex items-center gap-1.5 truncate">
                {isAutoPlaying && !isHovered && (
                  <span>Avanzando automáticamente</span>
                )}
                {isAutoPlaying && isHovered && (
                  <span className="text-[#9fcaff]">Pausado</span>
                )}
              </span>
              <span className="shrink-0">Desliza con el dedo →</span>
            </div>

            <div
              ref={carouselRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-6 pt-1 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {filteredProducts.map((product) => {
                const inCart = cartProductIds.includes(product.id);

                return (
                  <div
                    key={product.id}
                    className="min-w-[84vw] xs:min-w-[320px] sm:min-w-[340px] md:min-w-[360px] max-w-[380px] snap-center shrink-0 group border border-[#232c3a] hover:border-[#9fcaff] rounded-2xl p-4 sm:p-5 bg-[#141a24] hover:bg-[#18202d] transition-all duration-300 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Container with REF tag */}
                      <ProductCardImage
                        productId={product.id}
                        productName={product.name}
                        refCode={product.ref}
                        badge={product.badge}
                        image={product.image}
                        onOpenZoom={(url) => setZoomedImage(url)}
                        className="h-48 sm:h-56 mb-3 sm:mb-4"
                      />

                      {/* Content */}
                      <div className="px-0.5">
                        <div className="mb-2">
                          <span className="text-[10px] font-mono-code text-[#717d93] uppercase tracking-wider block mb-0.5">
                            {product.categoryLabel || 'Maquinaria'}
                          </span>
                          <h4 className="font-display text-base md:text-lg font-bold text-white group-hover:text-[#9fcaff] transition-colors leading-snug min-h-[2.5rem] flex items-center">
                            {product.name}
                          </h4>
                        </div>
                        
                        <p className="font-mono-code text-xs text-[#a0aabf] mb-3 leading-relaxed min-h-[2.5rem] line-clamp-2">
                          {product.shortDesc}
                        </p>

                        {/* Specs pills */}
                        <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4 bg-[#0d1117] p-2.5 sm:p-3 rounded-xl border border-[#212836]">
                          <div>
                            <span className="block text-[10px] font-mono-code text-[#7c889e] uppercase mb-0.5">Potencia</span>
                            <span className="font-body text-xs font-semibold text-white block leading-snug truncate">{product.power}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] font-mono-code text-[#7c889e] uppercase mb-0.5">Capacidad</span>
                            <span className="font-body text-xs font-semibold text-white block leading-snug truncate">{product.capacity}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions: Minimum 48px Touch Target & Tactile Active States */}
                    <div className="pt-3 border-t border-[#222a38] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="min-h-[48px] inline-flex items-center gap-1.5 text-xs font-mono-code text-[#9fcaff] hover:text-white font-semibold transition-colors cursor-pointer py-2 px-2.5 rounded-xl hover:bg-[#182335] active:bg-[#1e2d42] active:scale-[0.98]"
                      >
                        <FileText className="w-4 h-4 shrink-0" />
                        <span>Ficha Técnica</span>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className={`min-h-[48px] px-4 py-2.5 rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.98] ${
                          inCart
                            ? 'bg-[#00497d] text-white border border-[#0061a4]'
                            : 'bg-[#9fcaff] text-[#0d1117] hover:bg-white shadow-md'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-4 h-4 shrink-0" />
                            <span>Agregado</span>
                          </>
                        ) : (
                          <>
                            <PlusCircle className="w-4 h-4 shrink-0" />
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

      {/* High-Resolution Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-[#0d1117] border border-[#232c3a] rounded-2xl p-4 overflow-hidden shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#232c3a]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span className="text-white font-mono-code text-xs font-semibold">Fotografía Real Auténtica (Inspección en detalle)</span>
              </div>
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                className="p-1.5 text-[#717d93] hover:text-white rounded-lg hover:bg-[#1a2230] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto flex items-center justify-center max-h-[75vh]">
              <img
                src={zoomedImage}
                alt="Fotografía Real Inspección"
                className="max-h-[72vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

