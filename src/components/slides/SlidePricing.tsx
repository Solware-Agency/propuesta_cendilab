import Card from "../Card";
import { DollarSign, Calendar, Server, Wrench } from "lucide-react";

const SlidePricing = () => {
  const items = [
    {
      icon: DollarSign,
      title: "Costo Total del Proyecto",
      value: "$1,200 USD (equivalente a Bs. según tasa BCV)",
    },
    {
      icon: Calendar,
      title: "Forma de Pago (3 cuotas)",
      value:
        "Primer pago (30%) – $360 USD para iniciar el desarrollo; Segundo pago (50%) – $600 USD 30 días después del primer pago; Pago final (20%) – $240 USD al momento de la entrega final del proyecto.",
    },
    {
      icon: Server,
      title: "Mensualidad",
      value: "$150 USD por mantener y garantizar la eficiencia del servicio. Los costos de WhatsApp Business son cubiertos por el cliente.",
    },
    {
      icon: Wrench,
      title: "Tecnología",
      value: "Sistema construido con WhatsApp Business API, Supabase (base de datos + gestión de cupos), Google Calendar (agenda) y servidor inteligente con automatización mediante n8n y LLM.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Inversión y Condiciones de Pago
        </h2>

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-0 sm:pl-16 text-justify">
                  {item.value}
                </p>
              </Card>
            );
          })}
        </div>

        <Card variant="glass" className="mt-8">
          <p className="text-center text-foreground/70 text-sm italic text-justify">
            Con este proyecto, Cendilab contará con un sistema inteligente que reduce carga operativa, mejora la atención al paciente y organiza toda la gestión de citas y cupos en una sola plataforma automatizada por WhatsApp.
          </p>
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlidePricing;
