export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  ref: string;
  name: string;
  category: 'molinos' | 'wafleras' | 'granizadoras' | 'licuadoras' | 'embutidoras' | 'empacadoras';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  power: string;
  capacity: string;
  material: string;
  voltage: string;
  dimensions: string;
  weight: string;
  priceEstimate: number; // in COP or USD
  badge?: string;
  specs: TechnicalSpec[];
  highlights: string[];
}

export interface Testimonial {
  id: string;
  company: string;
  logo: string;
  quote: string;
  authorName: string;
  authorRole: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email?: string;
  machineInterest: string;
  voltagePref?: string;
  city?: string;
  comments?: string;
}

export interface LaserProject {
  material: 'acero_304' | 'acero_carbono' | 'aluminio';
  thicknessMm: number;
  widthMm: number;
  lengthMm: number;
  quantity: number;
  serviceType: 'corte' | 'grabado' | 'prototipado' | 'ingenieria_inversa';
}
