
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ShoppingCart } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      name: "MacBook Pro 14 pulgadas",
      price: 1899,
      originalPrice: 2399,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      discount: 21,
      stock: 5
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 1099,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      discount: 15,
      stock: 3
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Countdown Display */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Clock className="h-6 w-6 text-red-500" />
          <span className="text-lg font-semibold">Tiempo restante:</span>
        </div>
        <div className="flex justify-center gap-4">
          <div className="bg-red-500 text-white p-4 rounded-lg min-w-16 text-center">
            <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-sm">Horas</div>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg min-w-16 text-center">
            <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-sm">Minutos</div>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg min-w-16 text-center">
            <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-sm">Segundos</div>
          </div>
        </div>
      </div>

      {/* Limited Offers */}
      <div className="grid md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden border-2 border-red-200">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                  -{offer.discount}% OFF
                </Badge>
                <Badge className="absolute top-2 right-2 bg-orange-500">
                  Solo {offer.stock} disponibles
                </Badge>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{offer.name}</h4>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-green-600">
                      ${offer.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${offer.originalPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Ahorras</div>
                    <div className="text-lg font-bold text-red-500">
                      ${offer.originalPrice - offer.price}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-lg py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  ¡Comprar Ahora!
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
