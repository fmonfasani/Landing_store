
import { Shield, Lock, Award, Truck, HeartHandshake, CreditCard } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Compra Segura",
      description: "SSL 256-bit"
    },
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "Pedidos +$50"
    },
    {
      icon: HeartHandshake,
      title: "Garantía",
      description: "2 años oficiales"
    },
    {
      icon: CreditCard,
      title: "Pagos Seguros",
      description: "Múltiples métodos"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Productos originales"
    },
    {
      icon: Lock,
      title: "Datos Protegidos",
      description: "Privacidad total"
    }
  ];

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <badge.icon className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-sm">{badge.title}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
