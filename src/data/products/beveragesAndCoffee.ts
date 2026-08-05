import { Product } from '../../types';

export const beveragesAndCoffeeProducts: Product[] = [
  // Máquinas de Café Express
  {
    id: 'cafe-importada-1g',
    ref: 'CF-IMP1G',
    name: 'Máquina de Café Espresso Importada 1 Grupo',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: '/src/assets/images/maquina_cafe_espresso_1785874261644.jpg',
    shortDesc: 'Máquina de espresso profesional de 1 grupo con caldera en cobre de 6L.',
    fullDesc: 'Máquina de café comercial importada para cafeterías de especialidad y restaurantes. Sistema termosifónico con bomba volumétrica rotativa e indicador barométrico doble. Control de temperatura por termosifón y sistema de pre-infusión.',
    power: '2000W / 12A',
    capacity: '1 Grupo Espresso (aprox 120 tazas/h)',
    material: 'Acero Inoxidable AISI 304 y Caldera de Cobre',
    voltage: '110V / 220V - 60Hz',
    dimensions: '480 x 530 x 520 mm',
    weight: '38 kg',
    badge: 'ESPECIALIDAD',
    specs: [
      { label: 'Caldera de Agua', value: '6 Litros en cobre con llenado automático' },
      { label: 'Lancetas y Grifos', value: '1 Lanceta de vapor orientable + 1 Grifo agua caliente' },
      { label: 'Bomba de Presión', value: 'Bomba rotativa volumétrica incorporada (9 bar)' },
      { label: 'Manómetro', value: 'Doble lectura barométrica (Presión de bomba y caldera)' },
      { label: 'Portafiltros', value: 'Incluye 1 portafiltro sencillo + 1 portafiltro doble' }
    ],
    highlights: [
      'Bomba volumétrica incorporada de 9 bar',
      'Caldera en cobre de 6 Litros con recarga automática',
      'Manómetro doble para presión de bomba y caldera',
      'Lanceta de vapor ergonómica en acero inox'
    ]
  },
  {
    id: 'cafe-importada-2g',
    ref: 'CF-IMP2G',
    name: 'Máquina de Café Espresso Importada 2 Grupos',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: '/src/assets/images/maquina_cafe_espresso_1785874261644.jpg',
    shortDesc: 'Máquina comercial de 2 grupos con caldera en cobre de 11L para alto flujo.',
    fullDesc: 'Estación de café comercial importada de 2 grupos de erogación independientes. Ideal para tiendas de café y barras de alto tráfico (hasta 240 tazas/hora). Teclado electrónico de 4 dosis volumétricas por grupo.',
    power: '3300W / 16A',
    capacity: '2 Grupos (aprox 240 tazas/h)',
    material: 'Acero Inoxidable AISI 304 de Alta Calidad',
    voltage: '220V Monofásico / Bifásico - 60Hz',
    dimensions: '710 x 530 x 520 mm',
    weight: '56 kg',
    badge: 'ALTO TRÁFICO',
    specs: [
      { label: 'Caldera de Agua', value: '11 Litros en cobre con alta recuperación térmica' },
      { label: 'Lancetas de Vapor', value: '2 Lancetas de vapor multidireccionales en acero inox' },
      { label: 'Grifo de Agua Caliente', value: '1 Grifo dosificador de agua caliente para té/infusiones' },
      { label: 'Erogación Volumétrica', value: 'Teclado suave programable de 4 dosis por grupo + continuo' },
      { label: 'Manómetros', value: 'Doble indicador barométrico analógico' }
    ],
    highlights: [
      '2 Lancetas de vapor multidireccionales en acero inox',
      'Teclado volumétrico programable de 4 dosis por grupo',
      'Caldera de cobre de 11 Litros de rápida recuperación',
      'Chasis antivibratorio y térmicamente aislado'
    ]
  },
  {
    id: 'cafe-nacional-1g',
    ref: 'CF-NAC1G',
    name: 'Máquina de Café Nacional 1 Grupo Maquitec',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: '/src/assets/images/maquina_cafe_espresso_1785874261644.jpg',
    shortDesc: 'Fabricación nacional robusta en acero 304 con repuestos inmediatos.',
    fullDesc: 'Desarrollada y ensamblada por Maquitec Ingeniería para el mercado colombiano. Construcción integral en acero inoxidable 304, mantenimiento económico y repuestos 100% disponibles.',
    power: '1800W',
    capacity: '1 Grupo de erogación',
    material: 'Acero Inoxidable 304',
    voltage: '110V - 60Hz',
    dimensions: '450 x 500 x 500 mm',
    weight: '32 kg',
    specs: [
      { label: 'Origen y Respaldo', value: 'Fabricación Nacional Maquitec Colombia' },
      { label: 'Estructura', value: '100% Acero inoxidable 304 grado alimenticio' },
      { label: 'Alimentación Eléctrica', value: '110V - 60Hz (Enchufe estándar)' },
      { label: 'Mantenimiento', value: 'Componentes accesibles y repuestos económicos inmediatos' }
    ],
    highlights: [
      'Garantía local directa con repuestos inmediatos',
      'Excelente estabilidad de temperatura para espresso',
      'Fácil manejo y bajo costo de mantenimiento'
    ]
  },
  {
    id: 'cafe-nacional-2g',
    ref: 'CF-NAC2G',
    name: 'Máquina de Café Nacional 2 Grupos Maquitec',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: '/src/assets/images/maquina_cafe_espresso_1785874261644.jpg',
    shortDesc: 'Máquina nacional de 2 grupos reforzada para alto rendimiento comercial.',
    fullDesc: 'Caldera de gran capacidad térmica en cobre y chasis en acero 304. Soporta largas jornadas de trabajo continuo en tiendas de café y restaurantes de gran concurrencia.',
    power: '3000W',
    capacity: '2 Grupos de extracción',
    material: 'Acero Inoxidable 304',
    voltage: '220V - 60Hz',
    dimensions: '680 x 500 x 500 mm',
    weight: '48 kg',
    specs: [
      { label: 'Caldera de Agua', value: '10 Litros en cobre macizo' },
      { label: 'Origen', value: 'Diseñada y fabricada por Maquitec Colombia' },
      { label: 'Vaporizadores', value: '2 Lancetas de alta presión' }
    ],
    highlights: [
      'Componentes de alta durabilidad en cobre y acero 304',
      'Soporte técnico nacional capacitado directamente',
      'Económica operativamente'
    ]
  },

  // Dispensadores de Jugo
  {
    id: 'dispensador-jugo-12l',
    ref: 'DJ-12L',
    name: 'Dispensador de Jugos 12 L (1 Tanque)',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Refrigerador de bebidas de 12 Litros con paleta mezcladora continua.',
    fullDesc: 'Dispensador de bebidas frías de 1 tanque de 12L en policarbonato irrompible. Mantiene jugos naturales, avenas, limonadas y tés a temperatura de 3°C a 8°C mediante agitación suave por paleta.',
    power: '280W (Compresor hermético)',
    capacity: '12 Litros',
    material: 'Tanque de Policarbonato Alta Densidad / Chasis Acero Inox',
    voltage: '110V - 60Hz',
    dimensions: '300 x 420 x 670 mm',
    weight: '18 kg',
    specs: [
      { label: 'Capacidad Tanque', value: '12 Litros en policarbonato de impacto' },
      { label: 'Rango de Temperatura', value: '3°C a 8°C control de termostato automático' },
      { label: 'Sistema de Mezcla', value: 'Paleta giratoria anti-espuma para bebidas densas' },
      { label: 'Grifo Dispensador', value: 'Acero inoxidable anti-goteo accionable por empuje' },
      { label: 'Refrigerante', value: 'R134a ecológico de alta eficiencia' }
    ],
    highlights: [
      'Grifo de acero inox antigoteo de alta durabilidad',
      'Compresor silencioso ecológico R134a',
      'Tanque graduado desmontable sin herramientas',
      'Mantiene la mezcla homogénea sin sedimentación'
    ]
  },
  {
    id: 'dispensador-jugo-18l',
    ref: 'DJ-18L',
    name: 'Dispensador de Jugos 18 L Heavy Duty',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Dispensador de bebidas de gran capacidad 18 Litros.',
    fullDesc: 'Tanque amplio de 18 Litros en policarbonato transparente con agitación constante. Ideal para hoteles, casinos de alimentos, cafeterías y autoservicios.',
    power: '320W',
    capacity: '18 Litros',
    material: 'Policarbonato Alimenticio / Acero 304',
    voltage: '110V - 60Hz',
    dimensions: '350 x 450 x 720 mm',
    weight: '22 kg',
    specs: [
      { label: 'Capacidad de Tanque', value: '18 Litros' },
      { label: 'Refrigeración', value: 'Compresor reforzado con condensador de aire' },
      { label: 'Control Termostático', value: 'Regulable digitalmente' }
    ],
    highlights: [
      'Limpieza ultrarrápida sin herramientas',
      'Mantiene la temperatura fría constante en clima cálido'
    ]
  },

  // Granizadoras
  {
    id: 'granizadora-gz-200',
    ref: 'GZ-200',
    name: 'Granizadora Doble Tanque 24 L (2 x 12L)',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvcxmeOTi8VzCLv95ipxAIoXgFNJKUF2iwTmUdIRXDqu_HyP2sDjjXGbQzrDkunPK85hxLU_tv4nRVPEwNJFt_3Zo6-xrJ0wz2bGHgo-G4alxKZxHnNFmJj88JmT7WQiKiVGCBlD5rqn5T9S04_gUGdtCZ_vZVEPXrYUiArqTJWOFmYmW94i_nTPfa4KzO-ESuAwAHDKM1m7kax8x4BdcWltiCnE9SkU5ZpP4Ta2Hpe6ASTYAmU8uLVQBJRV3XzZN59vU',
    shortDesc: 'Sistema de congelación con transmisor magnético y compresor europeo de 700W.',
    fullDesc: 'Granizadora profesional de 2 tanques de 12L (24L total). Transmisión magnética patentada anti-fugas sin sellos mecánicos. Ajuste de densidad de nieve para bebidas congeladas, frappés, margaritas y cocteles.',
    power: '700W (Compresor Embraco)',
    capacity: '24 Litros (2 tanques x 12L)',
    material: 'Tanques Policarbonato Libre de BPA / Cuerpo Acero Inox 304',
    voltage: '110V - 60Hz',
    dimensions: '430 x 530 x 780 mm',
    weight: '45 kg',
    badge: 'ALTA EFICIENCIA',
    specs: [
      { label: 'Capacidad Total', value: '24 Litros (2 cuencos independientes de 12L)' },
      { label: 'Compresor', value: 'Embraco / Tecumseh ecológico R404a' },
      { label: 'Sistema de Impulsión', value: 'Eje de acoplamiento magnético sin fuga de retén' },
      { label: 'Iluminación', value: 'Tapa con luz LED interna de alto impacto visual' },
      { label: 'Modos de Trabajo', value: 'Modo Granizado (Nieve) + Modo Bebida Fría (Néctar)' }
    ],
    highlights: [
      'Transmisión magnética patentada anti-fugas',
      'Luz LED interna para exhibición llamativa',
      'Compresor Embraco de rápido congelamiento',
      'Bandejas de goteo con indicador de nivel'
    ]
  },
  {
    id: 'granizadora-3-tanques',
    ref: 'GZ-300',
    name: 'Granizadora Triple Tanque 36 L (3 x 12L)',
    category: 'bebidas_cafe',
    group: 'alimentos',
    categoryLabel: 'Bebidas, Granizadoras & Café',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvcxmeOTi8VzCLv95ipxAIoXgFNJKUF2iwTmUdIRXDqu_HyP2sDjjXGbQzrDkunPK85hxLU_tv4nRVPEwNJFt_3Zo6-xrJ0wz2bGHgo-G4alxKZxHnNFmJj88JmT7WQiKiVGCBlD5rqn5T9S04_gUGdtCZ_vZVEPXrYUiArqTJWOFmYmW94i_nTPfa4KzO-ESuAwAHDKM1m7kax8x4BdcWltiCnE9SkU5ZpP4Ta2Hpe6ASTYAmU8uLVQBJRV3XzZN59vU',
    shortDesc: 'Tres tanques independientes de 12L para ofrecer 3 sabores simultáneos.',
    fullDesc: 'Granizadora industrial de 3 tanques con mandos digitales independientes por tazón. Ideal para parques de atracciones, cines, heladerías y centros comerciales.',
    power: '900W',
    capacity: '36 Litros (3 tanques x 12L)',
    material: 'Policarbonato Grado Alimenticio / Acero Inox 304',
    voltage: '110V / 220V',
    dimensions: '630 x 530 x 780 mm',
    weight: '62 kg',
    badge: 'MÁXIMO SABOR',
    specs: [
      { label: 'Capacidad de Tanques', value: '3 x 12 Litros (36 Litros totales)' },
      { label: 'Potencia de Congelación', value: '900 Watts' },
      { label: 'Mando Independiente', value: 'Controles de frío por cada tanque' }
    ],
    highlights: [
      'Control de densidad de nieve digital',
      '3 sabores distintos de granizado a la vez',
      'Grifos de servido de respuesta rápida'
    ]
  }
];
