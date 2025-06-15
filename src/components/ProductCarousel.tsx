
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
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
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      {product.badge}
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2 bg-green-500">
                    -{product.discount}%
                  </Badge>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={onAddToCart}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Añadir al Carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
