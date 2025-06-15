
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Shield, Truck, Clock, Award, Lock } from "lucide-react";
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

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">TechStore</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Discount Banner */}
      <DiscountBanner />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Tecnología de Última Generación
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubre los productos más innovadores con precios increíbles
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Ver Ofertas Especiales
          </Button>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Products Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Productos Destacados</h3>
          <ProductCarousel onAddToCart={addToCart} />
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🔥 Ofertas por Tiempo Limitado</h3>
            <p className="text-gray-600">¡No te pierdas estas increíbles ofertas!</p>
          </div>
          <CountdownTimer />
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Más Productos</h3>
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">TechStore</h4>
              <p className="text-gray-400">Tu tienda de confianza para productos tecnológicos</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Atención al Cliente</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Contacto</li>
                <li>FAQ</li>
                <li>Soporte Técnico</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Políticas</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Términos y Condiciones</li>
                <li>Política de Privacidad</li>
                <li>Devoluciones</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Síguenos</h5>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <div className="w-8 h-8 bg-pink-600 rounded"></div>
                <div className="w-8 h-8 bg-blue-400 rounded"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
