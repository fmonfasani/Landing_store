
import { Shield, Lock, Award, Truck, HeartHandshake, CreditCard } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Compra Segura",
      description: "SSL 256-bit",
      color: "text-cyan-600"
    },
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "Pedidos +$50",
      color: "text-teal-600"
    },
    {
      icon: HeartHandshake,
      title: "Garantía",
      description: "2 años oficiales",
      color: "text-slate-600"
    },
    {
      icon: CreditCard,
      title: "Pagos Seguros",
      description: "Múltiples métodos",
      color: "text-cyan-700"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Productos originales",
      color: "text-teal-700"
    },
    {
      icon: Lock,
      title: "Datos Protegidos",
      description: "Privacidad total",
      color: "text-slate-700"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50 border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className={`p-3 rounded-xl bg-white shadow-md mb-4 group-hover:shadow-lg transition-shadow`}>
                <badge.icon className={`h-7 w-7 ${badge.color}`} />
              </div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">{badge.title}</h4>
              <p className="text-xs text-slate-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
