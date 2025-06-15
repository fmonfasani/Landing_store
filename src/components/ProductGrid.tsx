
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  category: string;
}

interface ProductGridProps {
  onAddToCart: () => void;
}

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const products: Product[] = [
    {
      id: 6,
      name: "Cámara DSLR Profesional",
      price: 899,
      originalPrice: 1099,
      rating: 4.7,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      discount: 18,
      category: "Fotografía"
    },
    {
      id: 7,
      name: "Monitor Gaming 27 4K",
      price: 449,
      originalPrice: 599,
      rating: 4.8,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      discount: 25,
      category: "Gaming"
    },
    {
      id: 8,
      name: "Teclado Mecánico RGB",
      price: 129,
      originalPrice: 179,
      rating: 4.6,
      reviews: 1243,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      discount: 28,
      category: "Gaming"
    },
    {
      id: 9,
      name: "Altavoces Bluetooth Premium",
      price: 199,
      rating: 4.5,
      reviews: 334,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      category: "Audio"
    },
    {
      id: 10,
      name: "Drone 4K con Cámara",
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400",
      discount: 25,
      category: "Tecnología"
    },
    {
      id: 11,
      name: "Router WiFi 6 Mesh",
      price: 249,
      originalPrice: 329,
      rating: 4.4,
      reviews: 223,
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
      discount: 24,
      category: "Redes"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.discount && (
                <Badge className="absolute top-2 left-2 bg-red-500">
                  -{product.discount}%
                </Badge>
              )}
              <Badge className="absolute top-2 right-2 bg-blue-500">
                {product.category}
              </Badge>
              
              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Button variant="secondary" size="sm" className="mr-2">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2 line-clamp-2">
                {product.name}
              </h4>
              
              <div className="flex items-center mb-3">
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
                  <span className="text-xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <div className="text-right">
                    <div className="text-xs text-gray-600">Ahorras</div>
                    <div className="text-sm font-bold text-red-500">
                      ${product.originalPrice - product.price}
                    </div>
                  </div>
                )}
              </div>
              
              <Button
                onClick={onAddToCart}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Añadir al Carrito
              </Button>
              
              {/* Cross-selling suggestion */}
              <p className="text-xs text-gray-500 mt-2 text-center">
                💡 Combínalo con otros productos y ahorra más
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
