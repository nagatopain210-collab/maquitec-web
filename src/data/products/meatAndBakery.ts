import { Product } from '../../types';
import desmechadoraImg from '../../assets/images/desmechadora_maquitec_exact_1785870731540.jpg';
import molinoTk8Img from '../../assets/images/molino_tk8_maquitec_1785963477701.jpg';
import molinoTk12Img from '../../assets/images/molino_tk12_maquitec_1785963488387.jpg';
import molinoTk22Img from '../../assets/images/molino_tk22_maquitec_1785963496549.jpg';
import molinoTk32Img from '../../assets/images/molino_tk32_maquitec_1785963505326.jpg';

export const meatAndBakeryProducts: Product[] = [
  // Molinos de Carne
  {
    id: 'molino-carne-8',
    ref: 'MC-TK08',
    name: 'Molino de Carne Eléctrico TK 8',
    category: 'molinos',
    group: 'alimentos',
    categoryLabel: 'Molinos de Carne',
    image: molinoTk8Img,
    shortDesc: 'Molino eléctrico compacto con motor de 450W y rendimiento de hasta 80 kg por hora.',
    fullDesc: 'Molino de carne industrial TK 8 con cuerpo y estructura elaborados en acero inoxidable de grado alimenticio. Diseñado para la molienda continua de res, pollo y cerdo. Incluye switch de encendido con función de reversa para evitar atascamientos.',
    power: '450 Watts',
    capacity: 'Hasta 80 kg por hora',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: '110 V',
    dimensions: '360 x 220 x 380 mm',
    weight: '19 kg',
    badge: 'COMPACTO',
    specs: [
      { label: 'Productividad Estimada', value: 'Hasta 80 kg por hora' },
      { label: 'Proteínas', value: 'Diseñado para molienda de carne de res, pollo y cerdo' },
      { label: 'Potencia del Motor', value: '450 Watts' },
      { label: 'Voltaje', value: '110 V' },
      { label: 'Materiales', value: 'Cuerpo, estructura, cuchillas y discos en acero inoxidable' },
      { label: 'Sistema de Control', value: 'Switch de encendido con función de reversa' },
      { label: 'Accesorios Incluidos', value: '2 Discos de molienda, 2 Cuchillas de corte y 1 Bastón empujador' }
    ],
    highlights: [
      'Procesa hasta 80 kg/h de res, pollo y cerdo',
      'Cuerpo y accesorios en acero inoxidable de grado alimenticio',
      'Switch de encendido con marcha en reversa anti-atascamiento',
      'Incluye set de 2 discos, 2 cuchillas y empujador'
    ]
  },
  {
    id: 'molino-tk-12',
    ref: 'MC-TK12',
    name: 'Molino de Carne Eléctrico TK 12 Clásico',
    category: 'molinos',
    group: 'alimentos',
    categoryLabel: 'Molinos de Carne',
    image: molinoTk12Img,
    shortDesc: 'Molino industrial de 750W (190 RPM) con rendimiento de hasta 120 kg por hora.',
    fullDesc: 'Molino de carne TK 12 Clásico con cuerpo en acero inoxidable de grado alimenticio y piñonería interna en hierro de alta durabilidad para trabajo pesado. Velocidad de 190 RPM con reversa de seguridad.',
    power: '750 Watts',
    capacity: 'Hasta 120 kg por hora (190 RPM)',
    material: 'Acero Inoxidable y Piñonería en Hierro',
    voltage: '110 V',
    dimensions: '420 x 280 x 400 mm',
    weight: '27 kg',
    badge: 'MÁS VENDIDO',
    specs: [
      { label: 'Productividad / Efectividad', value: 'Hasta 120 kg por hora' },
      { label: 'Velocidad de Rotación', value: '190 RPM' },
      { label: 'Potencia del Motor', value: '750 Watts' },
      { label: 'Voltaje', value: '110 V' },
      { label: 'Transmisión Interna', value: 'Piñonería en hierro de alta durabilidad' },
      { label: 'Control', value: 'Switch de encendido con función de reversa' },
      { label: 'Accesorios Incluidos', value: '1 Empujador, 1 Embutidor plástico, 2 Discos y 2 Cuchillas' }
    ],
    highlights: [
      'Procesa hasta 120 kg/hora a 190 RPM',
      'Piñonería interna en hierro ultra resistente',
      'Motor de 750W con marcha reversible',
      'Incluye embutidor plástico y 2 juegos de cuchillas/discos'
    ]
  },
  {
    id: 'molino-carne-22',
    ref: 'MC-TK22',
    name: 'Molino de Carne Eléctrico TK 22 Clásico',
    category: 'molinos',
    group: 'alimentos',
    categoryLabel: 'Molinos de Carne',
    image: molinoTk22Img,
    shortDesc: 'Molino industrial de 850W (190 RPM) para rendimiento de hasta 150 kg por hora.',
    fullDesc: 'Molino de carne TK 22 Clásico con motor de 850 Watts, piñonería interna en hierro para trabajo pesado y cuerpo en acero inoxidable. Procesa hasta 150 kg de carne por hora.',
    power: '850 Watts',
    capacity: 'Hasta 150 kg por hora (190 RPM)',
    material: 'Acero Inoxidable y Piñonería en Hierro',
    voltage: '110 V',
    dimensions: '490 x 320 x 480 mm',
    weight: '36 kg',
    badge: 'TRABAJO PESADO',
    specs: [
      { label: 'Productividad / Efectividad', value: 'Hasta 150 kg por hora' },
      { label: 'Velocidad de Rotación', value: '190 RPM' },
      { label: 'Potencia del Motor', value: '850 Watts' },
      { label: 'Voltaje', value: '110 V' },
      { label: 'Transmisión', value: 'Piñonería en hierro de alta resistencia' },
      { label: 'Control', value: 'Switch de marcha con función de reversa' },
      { label: 'Accesorios Incluidos', value: '1 Empujador, 1 Embutidor plástico, 2 Discos y 2 Cuchillas' }
    ],
    highlights: [
      'Rendimiento continuo de hasta 150 kg por hora',
      'Motor industrial de 850W con rotación de 190 RPM',
      'Piñonería metálica pesada y reversa de seguridad',
      'Accesorios completos para molienda y embutido'
    ]
  },
  {
    id: 'molino-carne-32',
    ref: 'MC-TK32',
    name: 'Molino de Carne Eléctrico TK 32 Clásico',
    category: 'molinos',
    group: 'alimentos',
    categoryLabel: 'Molinos de Carne',
    image: molinoTk32Img,
    shortDesc: 'Molino de carne eléctrico industrial de 1500W (190 RPM) con rendimiento de hasta 350 kg por hora.',
    fullDesc: 'El molino de carne TK 32 Clásico es un equipo imprescindible para carnicerías, charcuterías, salsamentarias, restaurantes, hamburgueserías y plantas de procesamiento de alimentos. Diseñado para optimizar los tiempos de molido de carnes y preparación de embutidos, garantiza un rendimiento constante y facilita el trabajo diario del personal.',
    power: '1500 Watts',
    capacity: 'Hasta 350 kg por hora (190 RPM)',
    material: 'Acero Inoxidable de Grado Alimenticio y Piñonería en Hierro',
    voltage: '110V',
    dimensions: '580 x 380 x 540 mm',
    weight: '58 kg',
    badge: 'INDUSTRIAL',
    specs: [
      { label: 'Productividad / Efectividad', value: 'Hasta 350 kg por hora' },
      { label: 'Velocidad de Rotación', value: '190 RPM' },
      { label: 'Potencia del Motor', value: '1500 Watts' },
      { label: 'Voltaje', value: '110V' },
      { label: 'Cuerpo y Componentes', value: 'Elaborado en acero inoxidable de grado alimenticio para máxima higiene' },
      { label: 'Mecanismo Interno', value: 'Piñonería en hierro de alta durabilidad y resistencia al trabajo pesado' },
      { label: 'Control de Marcha', value: 'Switch de encendido con función de reversa para liberar obstrucciones' },
      { label: 'Accesorios Incluidos', value: '1 Empujador de alimentos, 1 Embutidor plástico, 2 Discos de molienda, 2 Cuchillas de corte' }
    ],
    highlights: [
      'Productividad industrial de hasta 350 kg por hora a 190 RPM',
      'Potente motor de 1500 Watts alimentado a 110V',
      'Cuerpo en acero inoxidable de grado alimenticio e interna en piñonería de hierro',
      'Switch de encendido con marcha en reversa anti-obstrucción',
      'Incluye empujador, embutidor plástico, 2 discos y 2 cuchillas'
    ]
  },

  // Desmechadoras
  {
    id: 'desmechadora-manual',
    ref: 'DM-MAN',
    name: 'Desmechadora de Carne y Pollo Manual',
    category: 'desmechadoras',
    group: 'alimentos',
    categoryLabel: 'Desmechadoras',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Desmechadora manual a manivela para carne, pollo y cerdo hasta 25 kg/h.',
    fullDesc: 'Desmechadora manual fabricada en acero inoxidable 304 y teflón de uso gastronómico. Deshebra carne de res, pollo y cerdo con un rendimiento de hasta 25 kg/h. Incluye base soporte especial para anclar a mesas de trabajo.',
    power: 'Manual',
    capacity: 'Hasta 25 kg por hora',
    material: 'Acero Inoxidable 304 y Teflón Gastronómico',
    voltage: 'N/A',
    dimensions: '40 × 34 × 29.5 cm',
    weight: '8.5 kg',
    specs: [
      { label: 'Efectividad y Producción', value: 'Hasta 25 kg por hora' },
      { label: 'Procesamiento de Proteínas', value: 'Deshebra carne de res, pollo, cerdo y fibra cárnica' },
      { label: 'Dimensiones', value: '40 × 34 × 29.5 cm' },
      { label: 'Materiales', value: 'Acero inoxidable 304 y componentes en teflón gastronómico' },
      { label: 'Fijación y Soporte', value: 'Base soporte especial para anclar a mesas de trabajo' },
      { label: 'Operación', value: 'Manejo intuitivo, desmontaje sencillo y rápido mantenimiento' }
    ],
    highlights: [
      'Deshebra pollo, res y cerdo hasta 25 kg/h',
      'Construcción en acero inox 304 y teflón alimenticio',
      'Base soporte para anclaje firme en mesa de trabajo',
      'Desmontaje rápido y limpieza sin complicaciones'
    ]
  },
  {
    id: 'desmechadora-dm-50',
    ref: 'DM-ELEC1HP',
    name: 'Desmechadora de Carne y Pollo Eléctrica',
    category: 'desmechadoras',
    group: 'alimentos',
    categoryLabel: 'Desmechadoras',
    image: desmechadoraImg,
    shortDesc: 'Desmechadora industrial de 1 HP con rendimiento de hasta 150 kg por hora.',
    fullDesc: 'Desmechadora eléctrica industrial con motor de 1 HP para trabajo continuo. Procesa carne de res, pollo y cerdo a una velocidad de hasta 150 kg por hora en hebras perfectas y homogéneas.',
    power: 'Motor 1 HP',
    capacity: 'Hasta 150 kg por hora',
    material: 'Acero Inoxidable 304 y Teflón Gastronómico',
    voltage: '110V - 60Hz',
    dimensions: '47 x 50 x 28 cm',
    weight: '34 kg',
    badge: 'MÁS SOLICITADO',
    specs: [
      { label: 'Efectividad y Producción', value: 'Hasta 150 kg por hora' },
      { label: 'Procesamiento de Proteínas', value: 'Deshebra fibra cárnica a escala industrial' },
      { label: 'Dimensiones', value: '47 x 50 x 28 cm' },
      { label: 'Potencia del Motor', value: 'Motor de 1 HP de alto desempeño para trabajo continuo' },
      { label: 'Materiales', value: 'Acero inoxidable 304 y componentes de teflón gastronómico' },
      { label: 'Operación', value: 'Manejo intuitivo, mantenimiento rápido y desinfección sencilla' }
    ],
    highlights: [
      'Capacidad industrial: hasta 150 kg por hora',
      'Potente motor de 1 HP de trabajo continuo',
      'Construcción higiénica en Acero 304 y Teflón',
      'Garantiza hebras uniformes a gran velocidad'
    ]
  },

  // Embutidoras
  {
    id: 'embutidora-manual-3l',
    ref: 'EB-3LMAN',
    name: 'Embutidora Industrial Manual 3 Litros',
    category: 'embutidoras',
    group: 'alimentos',
    categoryLabel: 'Embutidoras',
    image: '/src/assets/images/embutidora_manual_inox_1785874184302.jpg',
    shortDesc: 'Embutidora manual vertical de 3L en acero 304 con kit de 4 boquillas.',
    fullDesc: 'Embutidora manual industrial vertical de 3 Litros fabricada enteramente en acero inoxidable de grado alimenticio. Incluye kit de 4 boquillas intercambiables para 4 grosores de embutido.',
    power: 'Manual',
    capacity: '3 Litros',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: 'N/A',
    dimensions: '300 x 260 x 530 mm',
    weight: '9.5 kg',
    specs: [
      { label: 'Capacidad', value: '3 Litros' },
      { label: 'Orientación', value: 'Configuración vertical de mesa' },
      { label: 'Boquillas Intercambiables', value: 'Kit de 4 boquillas para 4 grosores' },
      { label: 'Materiales', value: 'Acero inoxidable de grado alimenticio' }
    ],
    highlights: ['Diseño vertical compacto de mesa', 'Kit de 4 boquillas intercambiables', 'Estructura en acero inox higiénico']
  },
  {
    id: 'embutidora-manual-10l',
    ref: 'EB-10LMAN',
    name: 'Embutidora Industrial Manual 10 Litros',
    category: 'embutidoras',
    group: 'alimentos',
    categoryLabel: 'Embutidoras',
    image: '/src/assets/images/embutidora_manual_inox_1785874184302.jpg',
    shortDesc: 'Embutidora manual vertical de 10L en acero inox con 4 embudos.',
    fullDesc: 'Embutidora manual de 10 Litros para charcuterías y cárnicas. Construida totalmente en acero inoxidable con 4 embudos para distintos calibres.',
    power: 'Manual',
    capacity: '10 Litros',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: 'N/A',
    dimensions: '410 x 310 x 650 mm',
    weight: '18 kg',
    specs: [
      { label: 'Capacidad', value: '10 Litros' },
      { label: 'Mecanismo', value: 'Manual vertical con engranajes reforzados' },
      { label: 'Accesorios', value: '4 Boquillas de embutido intercambiables' }
    ],
    highlights: ['Capacidad de 10 Litros de masa', 'Acero inoxidable 304 de fácil aseo', '4 calibres de embutido']
  },
  {
    id: 'embutidora-manual-15l',
    ref: 'EB-15LMAN',
    name: 'Embutidora Industrial Manual 15 Litros',
    category: 'embutidoras',
    group: 'alimentos',
    categoryLabel: 'Embutidoras',
    image: '/src/assets/images/embutidora_manual_inox_1785874184302.jpg',
    shortDesc: 'Embutidora manual vertical de 15L para lotes masivos de embutidos.',
    fullDesc: 'Embutidora manual industrial de 15 Litros. Chasis y cilindro de acero inoxidable resistente con kit de 4 boquillas.',
    power: 'Manual',
    capacity: '15 Litros',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: 'N/A',
    dimensions: '450 x 330 x 780 mm',
    weight: '23 kg',
    specs: [
      { label: 'Capacidad', value: '15 Litros' },
      { label: 'Boquillas', value: '4 tubos intercambiables' }
    ],
    highlights: ['Cilindro de 15L', 'Totalmente en acero 304', 'Ideal para chorizerías industriales']
  },
  {
    id: 'embutidora-electrica-10l',
    ref: 'EB-10ELEC',
    name: 'Embutidora de Chorizos Eléctrica 10 Litros',
    category: 'embutidoras',
    group: 'alimentos',
    categoryLabel: 'Embutidoras',
    image: '/src/assets/images/embutidora_manual_inox_1785874184302.jpg',
    shortDesc: 'Embutidora eléctrica de 10L con control por pedal, purga de aire y parada automática.',
    fullDesc: 'Embutidora eléctrica de 10 Litros con motor de 120W accionada por pedal para trabajo manos libres. Incluye 4 boquillas (16, 22, 32 y 38 mm), válvula de purga de aire en el pistón para evitar burbujas y parada automática inteligente.',
    power: '120 W',
    capacity: '10 Litros (Cilindro 22 cm diá. × 28 cm alto)',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: '110 V',
    dimensions: '32 cm × 41,5 cm × 64,5 cm',
    weight: '26 kg',
    badge: 'AUTOMÁTICA',
    specs: [
      { label: 'Capacidad del Cilindro', value: '10 Litros (Diámetro 22 cm / Altura 28 cm)' },
      { label: 'Boquillas de Llenado', value: 'Incluye 4 tubos intercambiables (16, 22, 32 y 38 mm)' },
      { label: 'Dimensiones Generales', value: '32 cm × 41,5 cm × 64,5 cm' },
      { label: 'Potencia y Voltaje', value: '120 W – 110 V' },
      { label: 'Estructura y Cilindro', value: 'Acero inoxidable de grado alimenticio resistente a corrosión' },
      { label: 'Control por Pedal', value: 'Permite operar el pistón con los pies manteniendo manos libres' },
      { label: 'Válvula de Purga', value: 'Evita burbujas o bolsas de aire en la masa embutida' },
      { label: 'Parada Automática', value: 'Se detiene automáticamente al agotarse la masa en el cilindro' }
    ],
    highlights: [
      'Accionamiento por pedal para trabajo con manos libres',
      'Válvula de desaireación en pistón anti-burbujas',
      'Incluye 4 boquillas de llenado (16, 22, 32 y 38 mm)',
      'Sistema inteligente de parada automática'
    ]
  },
  {
    id: 'embutidora-electrica-15l',
    ref: 'EB-15ELEC',
    name: 'Embutidora de Chorizos Eléctrica 15 Litros',
    category: 'embutidoras',
    group: 'alimentos',
    categoryLabel: 'Embutidoras',
    image: '/src/assets/images/embutidora_manual_inox_1785874184302.jpg',
    shortDesc: 'Embutidora eléctrica de 15L con control por pedal, purga de aire y parada automática.',
    fullDesc: 'Embutidora eléctrica industrial de 15 Litros con motor de 120W accionada por pedal. Cilindro en acero inoxidable de 24 cm de diámetro por 41 cm de alto, válvula de purga de aire y kit de 4 boquillas.',
    power: '120 W',
    capacity: '15 Litros (Cilindro 24 cm diá. × 41 cm alto)',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: '110 V',
    dimensions: '32 cm × 41,5 cm × 80 cm',
    weight: '32 kg',
    specs: [
      { label: 'Capacidad del Cilindro', value: '15 Litros (Diámetro 24 cm / Altura 41 cm)' },
      { label: 'Boquillas de Llenado', value: 'Incluye 4 tubos intercambiables (16, 22, 32 y 38 mm)' },
      { label: 'Dimensiones Generales', value: '32 cm × 41,5 cm × 80 cm' },
      { label: 'Potencia y Voltaje', value: '120 W – 110 V' },
      { label: 'Estructura y Cilindro', value: 'Acero inoxidable de grado alimenticio sanitizable' },
      { label: 'Control por Pedal', value: 'Operación manos libres por pedal neumático/eléctrico' },
      { label: 'Válvula de Purga', value: 'Purga automática de aire en el pistón' },
      { label: 'Parada Automática', value: 'Detención automática al llegar al final del recorrido' }
    ],
    highlights: [
      'Cilindro de gran capacidad de 15 Litros',
      'Operación inteligente manos libres mediante pedal',
      'Válvula de purga de aire para chorizos firmes sin aire',
      'Parada automática al agotar la masa cárnica'
    ]
  },

  // Mojadoras / Amasadoras / Panadería
  {
    id: 'mojadora-7lb',
    ref: 'MZ-08L',
    name: 'Batidora / Mezcladora Industrial 8 Litros',
    category: 'panaderia',
    group: 'alimentos',
    categoryLabel: 'Panadería & Amasadoras',
    image: '/src/assets/images/mojadora_amasadora_1785874194892.jpg',
    shortDesc: 'Mezcladora industrial de 8 Litros (hasta 3.63 kg de harina / 2.72 kg de masa).',
    fullDesc: 'Batidora / Mezcladora industrial de 8 Litros con tazón estático (sin recipiente giratorio) y 2 velocidades ajustables. Diseñada para amase y batido continuo de mezclas de media a alta densidad.',
    power: '0,73 kW',
    capacity: '8 Litros (Harina máx: 3.63 kg / Masa máx: 2.72 kg)',
    material: 'Acero Inoxidable Grado Alimenticio',
    voltage: '110V Monofásico',
    dimensions: '400 x 300 x 520 mm',
    weight: '38 kg',
    specs: [
      { label: 'Capacidad del Tazón', value: '8 Litros de volumen' },
      { label: 'Capacidad Máxima Harina', value: '3,63 kg' },
      { label: 'Capacidad Máxima Masa', value: '2,72 kg' },
      { label: 'Potencia', value: '0,73 kW' },
      { label: 'Voltaje y Fases', value: '110V – Monofásico' },
      { label: 'Velocidades', value: '2 niveles ajustables' },
      { label: 'Tazón', value: 'Estático (sin recipiente giratorio)' },
      { label: 'Accesorios Incluidos', value: 'Incluye recipiente / tazón' }
    ],
    highlights: [
      'Capacidad de 8L: procesa hasta 3.63 kg de harina',
      '2 velocidades de trabajo ajustables',
      'Tazón estático robusto en acero inoxidable',
      'Diseñada para amasado de densidad media y alta'
    ]
  },
  {
    id: 'mojadora-20lb',
    ref: 'AM-20LB',
    name: 'Amasadora Industrial Importada 20 Libras (1/2 Arroba)',
    category: 'panaderia',
    group: 'alimentos',
    categoryLabel: 'Panadería & Amasadoras',
    image: '/src/assets/images/mojadora_amasadora_1785874194892.jpg',
    shortDesc: 'Amasadora de ½ Arroba en acero inox con transmisión combinada correa/cadena y temporizador.',
    fullDesc: 'Amasadora industrial importada de ½ Arroba de capacidad. Fabricada íntegramente en acero inoxidable de grado alimenticio con 2 velocidades fijas, transmisión de correa en V y cadena, temporizador, rejilla protectora y función de reversa.',
    power: '1.5 HP',
    capacity: '½ Arroba (Modelo 20 Litros: 73 cm × 39 cm × 81 cm)',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: '110V / 220V',
    dimensions: '73 cm × 39 cm × 81 cm',
    weight: '72 kg',
    badge: 'POPULAR',
    specs: [
      { label: 'Capacidad de Producción', value: '½ Arroba (20 Libras)' },
      { label: 'Velocidades de Trabajo', value: '2 velocidades fijas' },
      { label: 'Dimensiones', value: '73 cm × 39 cm × 81 cm' },
      { label: 'Material', value: 'Fabricada íntegramente en acero inoxidable de grado alimenticio' },
      { label: 'Sistema de Tracción', value: 'Transmisión combinada de correa en V y cadena' },
      { label: 'Seguridad y Control', value: 'Temporizador analógico/digital y rejilla de protección' },
      { label: 'Función Reversa', value: 'Botón selector para hacer girar el bowl en sentido antihorario' }
    ],
    highlights: [
      'Procesa ½ Arroba de masa pesada de forma homogénea',
      'Transmisión combinada correa en V y cadena silenciosa',
      'Temporizador programable y microswitch en rejilla',
      'Función de reversa para giro antihorario del bowl'
    ]
  },
  {
    id: 'mojadora-30lb',
    ref: 'AM-30LB',
    name: 'Amasadora Industrial Importada 30 Libras (1 Arroba)',
    category: 'panaderia',
    group: 'alimentos',
    categoryLabel: 'Panadería & Amasadoras',
    image: '/src/assets/images/mojadora_amasadora_1785874194892.jpg',
    shortDesc: 'Amasadora industrial de 1 Arroba con 2 velocidades, transmisión correa/cadena y reversa.',
    fullDesc: 'Amasadora industrial importada para 1 Arroba de masa. Estructura total en acero inoxidable, 2 velocidades, tracción por correa en V y cadena, temporizador y botón selector de reversa.',
    power: '2.5 HP',
    capacity: '1 Arroba (Modelo 30 Litros: 74 cm × 40 cm × 81 cm)',
    material: 'Acero Inoxidable de Grado Alimenticio',
    voltage: '220 V',
    dimensions: '74 cm × 40 cm × 81 cm',
    weight: '115 kg',
    badge: 'ALTO RENDIMIENTO',
    specs: [
      { label: 'Capacidad de Producción', value: '1 Arroba (30 Libras)' },
      { label: 'Velocidades de Trabajo', value: '2 velocidades fijas' },
      { label: 'Dimensiones', value: '74 cm × 40 cm × 81 cm' },
      { label: 'Material', value: 'Fabricada íntegramente en acero inoxidable de grado alimenticio' },
      { label: 'Sistema de Tracción', value: 'Transmisión combinada de correa en V y cadena' },
      { label: 'Seguridad y Control', value: 'Temporizador analógico/digital y rejilla de protección' },
      { label: 'Función Reversa', value: 'Botón selector para girar el bowl en sentido antihorario' }
    ],
    highlights: [
      'Gran capacidad de 1 Arroba para panificación industrial',
      'Doble velocidad fija con transmisión por correa y cadena',
      'Rejilla de seguridad con paro automático de emergencia',
      'Botón de reversa para extracción limpia de la masa'
    ]
  },

  // Batidoras Industriales
  {
    id: 'batidora-7l-mesa',
    ref: 'BT-07SEM',
    name: 'Máquina Batidora 7 Litros Semi-Industrial',
    category: 'panaderia',
    group: 'alimentos',
    categoryLabel: 'Panadería & Amasadoras',
    image: '/src/assets/images/batidora_planetaria_1785874206280.jpg',
    shortDesc: 'Batidora de 7 Litros semi-industrial en aluminio con globo, gancho y paleta.',
    fullDesc: 'Máquina batidora de 7 litros para trabajo semi-industrial. Fabricada en aluminio y acero inoxidable. Incluye los 3 implementos de trabajo esenciales: globo, gancho y paleta.',
    power: 'Eléctrica 110V',
    capacity: '7 Litros',
    material: 'Aluminio y Bowl en Acero Inoxidable',
    voltage: '110 Voltios',
    dimensions: '380 x 240 x 410 mm',
    weight: '14.5 kg',
    specs: [
      { label: 'Implementos Incluidos', value: 'Globo, gancho y paleta' },
      { label: 'Capacidad de Producción', value: '7 litros' },
      { label: 'Tipo de Trabajo', value: 'Trabajo semi-industrial' },
      { label: 'Material de Fabricación', value: 'Aluminio y acero inoxidable' },
      { label: 'Sistema de Operación', value: 'Eléctrica – 110 Voltios' }
    ],
    highlights: [
      'Trabajo semi-industrial versátil',
      'Incluye set completo de 3 implementos (globo, gancho, paleta)',
      'Operación eléctrica estándar de 110V'
    ]
  },
  {
    id: 'batidora-7l-industrial',
    ref: 'BT-53PLAN',
    name: 'Batidora Planetaria Profesional Casera 5.3 Litros',
    category: 'panaderia',
    group: 'alimentos',
    categoryLabel: 'Panadería & Amasadoras',
    image: '/src/assets/images/batidora_planetaria_1785874206280.jpg',
    shortDesc: 'Batidora planetaria de 5.3L (500W) con doble gancho y 6 velocidades en acabado negro.',
    fullDesc: 'Batidora planetaria profesional de 5.3 Litros con motor de 500 Watts y 6 niveles de velocidad. Equipada con tecnología de doble gancho para amasado eficiente y cobertura planetaria del 100% del contenedor.',
    power: '500 Watts',
    capacity: '5,3 Litros',
    material: 'Acero Inox y Estructura en Negro Elegante',
    voltage: '110 V',
    dimensions: '35,5 cm profundidad × 33,5 cm altura',
    weight: '7.5 kg',
    specs: [
      { label: 'Capacidad del Bowl', value: '5,3 Litros' },
      { label: 'Sistema de Batido', value: 'Acción planetaria que cubre el 100% del contenedor' },
      { label: 'Equipamiento', value: 'Tecnología de doble gancho para amasado eficiente' },
      { label: 'Potencia del Motor', value: '500 Watts' },
      { label: 'Velocidades', value: 'Selector de 6 niveles de velocidad ajustable' },
      { label: 'Dimensiones Compactas', value: '35,5 cm de profundidad × 33,5 cm de altura' },
      { label: 'Presentación', value: 'Elegante acabado en color negro' }
    ],
    highlights: [
      'Acción planetaria con cobertura del 100% del bowl',
      'Tecnología de doble gancho amasador',
      'Motor de 500W con 6 niveles de velocidad',
      'Componentes desmontables de fácil aseo'
    ]
  },
  {
    id: 'batidora-10l-industrial',
    ref: 'BT-10IND',
    name: 'Máquina Batidora Industrial 10 Litros',
    category: 'panaderia',
    group: 'alimentos',
    categoryLabel: 'Panadería & Amasadoras',
    image: '/src/assets/images/batidora_planetaria_1785874206280.jpg',
    shortDesc: 'Batidora industrial de 10L en acero inox, motor silencioso, 3 velocidades y rejilla.',
    fullDesc: 'Máquina batidora industrial de 10 litros fabricada en acero inoxidable cumpliendo normas higiénicas. Motor silencioso de alta eficiencia, 3 velocidades, rejilla de seguridad e incluye 3 accesorios (globo, paleta y gancho).',
    power: 'Eléctrica 110V',
    capacity: '10 Litros',
    material: 'Acero Inoxidable Grado Alimenticio',
    voltage: '110 Voltios – 60 Hz',
    dimensions: '40 × 37 × 60 cm',
    weight: '48 kg',
    specs: [
      { label: 'Conexión Eléctrica', value: '110 voltios – 60 Hz' },
      { label: 'Material de Fabricación', value: 'Acero inoxidable (estándares de higiene)' },
      { label: 'Dimensiones', value: '40 × 37 × 60 cm' },
      { label: 'Capacidad de Mezcla', value: '10 litros' },
      { label: 'Accesorios de Trabajo', value: 'Incluye 3 accesorios: globo, paleta y gancho' },
      { label: 'Sistema de Velocidades', value: 'Tres velocidades e incluye rejilla de seguridad' },
      { label: 'Motor', value: 'Motor silencioso de alta eficiencia' }
    ],
    highlights: [
      'Fabricada en acero inoxidable grado alimenticio',
      'Motor silencioso de alta eficiencia',
      '3 velocidades de marcha + rejilla de seguridad',
      'Incluye accesorios completos: globo, paleta y gancho'
    ]
  },
  {
    id: 'batidora-20l-industrial',
    ref: 'BT-20IND',
    name: 'Máquina Batidora Industrial 20 Litros',
    category: 'panaderia',
    group: 'alimentos',
    categoryLabel: 'Panadería & Amasadoras',
    image: '/src/assets/images/batidora_planetaria_1785874206280.jpg',
    shortDesc: 'Batidora industrial pesada de 20 Litros con 3 velocidades y rejilla de seguridad.',
    fullDesc: 'Batidora industrial de 20 litros diseñada para optimizar tiempos en panaderías y pastelerías. Estructura de acero inoxidable, 3 velocidades de transmisión, rejilla de seguridad y set de 3 accesorios.',
    power: 'Eléctrica 110V',
    capacity: '20 Litros',
    material: 'Acero Inoxidable Grado Alimenticio',
    voltage: '110 Voltios – 60 Hz',
    dimensions: '530 x 440 x 780 mm',
    weight: '78 kg',
    badge: 'GRAN CAPACIDAD',
    specs: [
      { label: 'Capacidad de Mezcla', value: '20 litros' },
      { label: 'Alimentación Eléctrica', value: '110 voltios – 60 Hz' },
      { label: 'Estructura', value: 'Acero inoxidable' },
      { label: 'Accesorios de Trabajo', value: 'Incluye 3 accesorios: globo, paleta y gancho' },
      { label: 'Velocidades y Seguridad', value: 'Tres velocidades e incluye rejilla de seguridad' }
    ],
    highlights: [
      'Gran bowl de 20 litros en acero inoxidable',
      'Caja de 3 velocidades fijas para trabajo pesado',
      'Rejilla de protección con microswitch de corte',
      'Accesorios estándar incluidos'
    ]
  }
];
