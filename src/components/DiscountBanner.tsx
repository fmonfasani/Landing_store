
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Gift, Copy, Check } from "lucide-react";

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
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <Gift className="h-5 w-5" />
            <span className="font-semibold">
              🎉 ¡Descuento del 15% en tu primera compra!
            </span>
            
            {!showCode ? (
              <div className="flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Tu email aquí..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-64 text-black"
                />
                <Button
                  onClick={handleSubscribe}
                  variant="secondary"
                  size="sm"
                >
                  Obtener Código
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                  PRIMERA15
                </Badge>
                <Button
                  onClick={copyCode}
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "¡Copiado!" : "Copiar"}
                </Button>
              </div>
            )}
          </div>
          
          <Button
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
