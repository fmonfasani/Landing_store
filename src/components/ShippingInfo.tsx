
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Clock, MapPin } from "lucide-react";

export const ShippingInfo = () => {
  const shippingOptions = [
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "En pedidos superiores a $50",
      time: "3-5 días hábiles",
      price: "Gratis",
      highlight: true
    },
    {
      icon: Package,
      title: "Envío Estándar",
      description: "Entrega regular",
      time: "5-7 días hábiles",
      price: "$9.99",
      highlight: false
    },
    {
      icon: Clock,
      title: "Envío Express",
      description: "Entrega rápida",
      time: "1-2 días hábiles",
      price: "$19.99",
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">📦 Opciones de Envío</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tus necesidades. Envío gratis en pedidos superiores a $50.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {shippingOptions.map((option, index) => (
            <Card key={index} className={`text-center ${option.highlight ? 'border-2 border-green-500 bg-green-50' : ''}`}>
              <CardContent className="p-6">
                {option.highlight && (
                  <div className="bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                    🎉 MÁS POPULAR
                  </div>
                )}
                <option.icon className={`h-12 w-12 mx-auto mb-4 ${option.highlight ? 'text-green-600' : 'text-blue-600'}`} />
                <h4 className="text-xl font-bold mb-2">{option.title}</h4>
                <p className="text-gray-600 mb-3">{option.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tiempo:</span>
                    <span className="font-semibold">{option.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Precio:</span>
                    <span className={`font-bold text-lg ${option.highlight ? 'text-green-600' : 'text-blue-600'}`}>
                      {option.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Areas */}
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <h4 className="text-xl font-bold">Cobertura de Envío</h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-3 text-green-600">✅ Envío Gratis Disponible</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Ciudad de México y área metropolitana</li>
                <li>• Guadalajara y zona conurbada</li>
                <li>• Monterrey y área metropolitana</li>
                <li>• Puebla, Tijuana, León</li>
                <li>• Más de 200 ciudades principales</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-blue-600">🚚 Envío Estándar</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Cobertura nacional completa</li>
                <li>• Áreas rurales y remotas</li>
                <li>• Islas y zonas especiales</li>
                <li>• Entrega hasta tu domicilio</li>
                <li>• Seguimiento en tiempo real</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
