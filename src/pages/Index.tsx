
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Shield, Truck, Clock, Award, Lock, Menu, X } from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ReviewsSection } from "@/components/ReviewsSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ProductGrid } from "@/components/ProductGrid";
import { DiscountBanner } from "@/components/DiscountBanner";
import { ShippingInfo } from "@/components/ShippingInfo";
import { ReturnPolicy } from "@/components/ReturnPolicy";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-cyan-200/50 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-transparent">
                TechStore
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-cyan-700 font-medium transition-colors">Productos</a>
              <a href="#" className="text-slate-600 hover:text-cyan-700 font-medium transition-colors">Ofertas</a>
              <a href="#" className="text-slate-600 hover:text-cyan-700 font-medium transition-colors">Soporte</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="outline" size="icon" className="relative hover:bg-cyan-50 border-cyan-200">
                  <ShoppingCart className="h-5 w-5 text-cyan-700" />
                  {cartItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-cyan-500 to-teal-600">
                      {cartItems}
                    </Badge>
                  )}
                </Button>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden hover:bg-cyan-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5 text-cyan-700" /> : <Menu className="h-5 w-5 text-cyan-700" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Discount Banner */}
      <DiscountBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-700 to-slate-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tecnología de
              <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Última Generación
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-2xl mx-auto leading-relaxed">
              Descubre los productos más innovadores con los mejores precios del mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 text-lg px-8 py-4 h-auto font-semibold">
                🚀 Ver Ofertas Especiales
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-700 text-lg px-8 py-4 h-auto font-semibold">
                📱 Explorar Catálogo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Products Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Productos Destacados
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Los favoritos de nuestros clientes con las mejores valoraciones
            </p>
          </div>
          <ProductCarousel onAddToCart={addToCart} />
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              🔥 Ofertas por Tiempo Limitado
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ¡No te pierdas estas increíbles ofertas que terminan pronto!
            </p>
          </div>
          <CountdownTimer />
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Más Productos
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explora nuestra amplia selección de productos tecnológicos
            </p>
          </div>
          <ProductGrid onAddToCart={addToCart} />
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Shipping Info */}
      <ShippingInfo />

      {/* Return Policy */}
      <ReturnPolicy />

      {/* Footer */}
      <footer className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <h4 className="text-2xl font-bold">TechStore</h4>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Tu tienda de confianza para productos tecnológicos de alta calidad con garantía oficial y soporte profesional.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center hover:bg-cyan-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                  <span className="text-white font-bold">📷</span>
                </div>
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">🐦</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-6 text-cyan-300">Atención al Cliente</h5>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">📞 Contacto</li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">❓ FAQ</li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">🛠️ Soporte Técnico</li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">💬 Chat en Vivo</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-6 text-cyan-300">Información Legal</h5>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">📄 Términos y Condiciones</li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">🔒 Política de Privacidad</li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">↩️ Devoluciones</li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">🚚 Envíos</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-300 text-lg">
              &copy; 2024 TechStore. Todos los derechos reservados. | Diseñado con ❤️ para la mejor experiencia de compra
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
