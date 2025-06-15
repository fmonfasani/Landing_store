
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Gift, Copy, Check, Sparkles } from "lucide-react";

export const DiscountBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setShowCode(true);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText("PRIMERA15");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 flex-1">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Gift className="h-6 w-6" />
              </div>
              <Sparkles className="h-5 w-5 text-yellow-200" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
              <span className="font-bold text-lg">
                🎉 ¡Descuento del 15% en tu primera compra!
              </span>
              
              {!showCode ? (
                <div className="flex items-center gap-3">
                  <Input
                    type="email"
                    placeholder="Tu email aquí..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-72 text-slate-800 bg-white/95 border-white/50 placeholder:text-slate-500 focus:border-white focus:ring-white"
                  />
                  <Button
                    onClick={handleSubscribe}
                    className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    size="default"
                  >
                    Obtener Código
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Badge className="text-lg font-bold px-4 py-2 bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
                    PRIMERA15
                  </Badge>
                  <Button
                    onClick={copyCode}
                    className="bg-white/20 hover:bg-white/30 border border-white/30 font-semibold text-white hover:text-yellow-100 transition-colors"
                    size="sm"
                  >
                    {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                    {copied ? "¡Copiado!" : "Copiar"}
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <Button
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 ml-4"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
