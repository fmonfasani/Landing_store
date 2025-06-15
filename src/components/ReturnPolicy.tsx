
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Shield, Clock, CheckCircle } from "lucide-react";

export const ReturnPolicy = () => {
  const policyPoints = [
    {
      icon: Clock,
      title: "30 Días para Devolver",
      description: "Tienes 30 días completos desde la recepción del producto para solicitar una devolución.",
      highlight: false
    },
    {
      icon: RotateCcw,
      title: "Proceso Simple",
      description: "Solo necesitas contactarnos y te enviaremos una etiqueta de devolución gratuita.",
      highlight: true
    },
    {
      icon: Shield,
      title: "Reembolso Completo",
      description: "Devolvemos el 100% del dinero si el producto no cumple tus expectativas.",
      highlight: false
    },
    {
      icon: CheckCircle,
      title: "Sin Preguntas",
      description: "No hacemos preguntas incómodas. Tu satisfacción es nuestra prioridad.",
      highlight: false
    }
  ];

  const steps = [
    "Contacta a nuestro servicio al cliente",
    "Recibe la etiqueta de devolución gratuita",
    "Empaca el producto en su estado original",
    "Envía el paquete usando nuestra etiqueta",
    "Recibe tu reembolso en 3-5 días hábiles"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">🔄 Política de Devoluciones</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compra con total confianza. Si no estás 100% satisfecho, devolvemos tu dinero.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {policyPoints.map((point, index) => (
            <Card key={index} className={`text-center ${point.highlight ? 'border-2 border-green-500 bg-green-50' : ''}`}>
              <CardContent className="p-6">
                {point.highlight && (
                  <Badge className="mb-4 bg-green-500">Destacado</Badge>
                )}
                <point.icon className={`h-12 w-12 mx-auto mb-4 ${point.highlight ? 'text-green-600' : 'text-blue-600'}`} />
                <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">¿Cómo Funciona el Proceso?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conditions */}
        <div className="mt-12 bg-white p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-4 text-center">Condiciones de Devolución</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-3 text-green-600">✅ Aceptamos Devoluciones</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Productos en estado original y sin uso</li>
                <li>• Empaque y accesorios incluidos</li>
                <li>• Productos defectuosos o dañados</li>
                <li>• Error en el envío del producto</li>
                <li>• Cambio de opinión del cliente</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-red-600">❌ No Aceptamos Devoluciones</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Productos personalizados o modificados</li>
                <li>• Software descargado o activado</li>
                <li>• Productos con más de 30 días</li>
                <li>• Daños causados por mal uso</li>
                <li>• Productos de higiene personal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
          <h4 className="font-bold text-lg mb-2">¿Necesitas Ayuda con una Devolución?</h4>
          <p className="text-gray-600 mb-4">Nuestro equipo está aquí para ayudarte</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold">📧 Email:</span>
              <span>devoluciones@techstore.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold">📞 Teléfono:</span>
              <span>1-800-TECHSTORE</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold">💬 Chat:</span>
              <span>Disponible 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
