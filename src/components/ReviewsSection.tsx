
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, User } from "lucide-react";

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "María González",
      rating: 5,
      comment: "Excelente calidad de productos y envío súper rápido. El smartphone llegó en perfectas condiciones.",
      product: "Smartphone Pro Max",
      date: "Hace 2 días",
      verified: true
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Atención al cliente increíble. Me ayudaron a elegir la laptop perfecta para mi trabajo.",
      product: "Laptop Gaming RGB",
      date: "Hace 1 semana",
      verified: true
    },
    {
      id: 3,
      name: "Ana Martín",
      rating: 4,
      comment: "Los auriculares tienen una calidad de sonido espectacular. Muy recomendados.",
      product: "Auriculares Pro",
      date: "Hace 3 días",
      verified: true
    },
    {
      id: 4,
      name: "Luis Fernández",
      rating: 5,
      comment: "Precios competitivos y productos originales. Ya es mi segunda compra y no será la última.",
      product: "Smartwatch Series 9",
      date: "Hace 5 días",
      verified: true
    }
  ];

  const stats = [
    { label: "Clientes Satisfechos", value: "50,000+", icon: "👥" },
    { label: "Calificación Promedio", value: "4.8/5", icon: "⭐" },
    { label: "Productos Vendidos", value: "100,000+", icon: "📦" },
    { label: "Años de Experiencia", value: "8+", icon: "🏆" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">¿Qué Dicen Nuestros Clientes?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de clientes confían en nosotros. Lee sus experiencias reales.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  {review.verified && (
                    <Badge variant="secondary" className="text-xs">
                      ✓ Verificado
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm mb-3 line-clamp-4">
                  "{review.comment}"
                </p>
                
                <div className="text-xs text-gray-500 font-medium">
                  Producto: {review.product}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 p-6 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">100% Productos Originales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Garantía Oficial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
