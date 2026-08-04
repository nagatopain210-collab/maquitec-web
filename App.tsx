import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, QuoteRequest } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { TechnicalSheetModal } from './components/TechnicalSheetModal';
import { AboutSection } from './components/AboutSection';
import { LaserCuttingSection } from './components/LaserCuttingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SuccessCasesSection } from './components/SuccessCasesSection';
import { AiEquipmentAdvisorModal } from './components/AiEquipmentAdvisorModal';
import { QuoteDrawer, CartItem } from './components/QuoteDrawer';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [laserDetailNote, setLaserDetailNote] = useState<string | undefined>(undefined);

  // Add product to quote cart
  const handleAddToCart = (product: Product, voltagePref?: string) => {
    const voltage = voltagePref || (product.voltage.includes('110V') ? '110V' : '220V');

    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, voltage }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1, voltage }];
      }
    });
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove single item from cart
  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Quick quote request from hero form
  const handleQuickQuoteSubmit = (quote: QuoteRequest) => {
    const matchedProduct = PRODUCTS.find((p) =>
      p.name.toLowerCase().includes(quote.machineInterest.toLowerCase())
    );

    if (matchedProduct) {
      handleAddToCart(matchedProduct);
    }
  };

  // Laser quote trigger from estimator
  const handleOpenLaserQuote = (laserDetails: string) => {
    setLaserDetailNote(laserDetails);
    setIsQuoteDrawerOpen(true);
  };

  const cartProductIds = cartItems.map((item) => item.product.id);
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1c1e] selection:bg-[#1a1c1e] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        quoteCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Quote Form */}
        <Hero onQuickQuoteSubmit={handleQuickQuoteSubmit} />

        {/* Product Catalogue with Carousel & Filters */}
        <CatalogSection
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product)}
          cartProductIds={cartProductIds}
        />

        {/* Laser Cutting Bento Grid & Interactive Estimator */}
        <LaserCuttingSection onOpenLaserQuote={handleOpenLaserQuote} />

        {/* Engineering & Factory Information */}
        <AboutSection />

        {/* Client Endorsement & Testimonials */}
        <TestimonialsSection />

        {/* Success Cases Metrics */}
        <SuccessCasesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Modals & Drawers */}
      <TechnicalSheetModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, v) => handleAddToCart(prod, v)}
        isInCart={selectedProduct ? cartProductIds.includes(selectedProduct.id) : false}
      />

      <AiEquipmentAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        products={PRODUCTS}
        onAddToCart={(prod) => handleAddToCart(prod)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => {
          setCartItems([]);
          setLaserDetailNote(undefined);
        }}
        laserDetailNote={laserDetailNote}
      />
    </div>
  );
}

