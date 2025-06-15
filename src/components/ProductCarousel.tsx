
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  discount: number;
  badge?: string;
}

interface ProductCarouselProps {
  onAddToCart: () => void;
}

export const ProductCarousel = ({ onAddToCart }: ProductCarouselProps) => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Smartphone Pro Max 256GB",
      price: 899,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 2847,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      discount: 25,
      badge: "Más Vendido"
    },
    {
      id: 2,
      name: "Laptop Gaming RGB 16GB",
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 1523,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      discount: 19,
      badge: "Oferta Flash"
    },
    {
      id: 3,
      name: "Auriculares Inalámbricos Pro",
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 3921,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      discount: 33,
      badge: "Nuevo"
    },
    {
      id: 4,
      name: "Tablet 12.9 pulgadas 128GB",
      price: 649,
      originalPrice: 799,
      rating: 4.6,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      discount: 19
    },
    {
      id: 5,
      name: "Smartwatch Series 9",
      price: 349,
      originalPrice: 449,
      rating: 4.8,
      reviews: 1672,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      discount: 22
    }
  ];

  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-0 bg-gradient-to-br from-white to-cyan-50">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 font-semibold">
                      {product.badge}
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white border-0 font-bold">
                    -{product.discount}%
                  </Badge>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-slate-700 rounded-full"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart className={`h-5 w-5 ${favorites.has(product.id) ? 'fill-teal-500 text-teal-500' : ''}`} />
                  </Button>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-slate-800 line-clamp-2 leading-tight">
                    {product.name}
                  </h4>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 ml-2 font-medium">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-teal-600">
                        ${product.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-600 font-medium">Ahorras</div>
                      <div className="text-lg font-bold text-cyan-600">
                        ${product.originalPrice - product.price}
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={onAddToCart}
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Añadir al Carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-cyan-50 border-2 border-slate-200" />
      <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-cyan-50 border-2 border-slate-200" />
    </Carousel>
  );
};
