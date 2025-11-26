import Card from "../Card";
import { UserCheck, SmilePlus, Calendar, TrendingUp } from "lucide-react";

const SlideImpact = () => {
  const impacts = [
    {
      icon: UserCheck,
      title: "Menor Carga Operativa",
      description: "El personal deja de responder preguntas repetitivas para enfocarse en atención real y tareas de mayor valor, optimizando recursos humanos.",
    },
    {
      icon: SmilePlus,
      title: "Mejora en la Experiencia del Paciente",
      description: "Atención inmediata 24/7 sin tiempos de espera, con respuestas precisas sobre precios, indicaciones, disponibilidad y gestión de citas de forma automática.",
    },
    {
      icon: Calendar,
      title: "Control Automatizado de Cupos y Citas",
      description: "Sistema inteligente que administra automáticamente cupos por turno, agenda de exámenes y consultas médicas, eliminando la gestión manual y errores.",
    },
    {
      icon: TrendingUp,
      title: "Sistema Escalable",
      description: "Arquitectura flexible preparada para futuras mejoras como integración con sistemas internos, análisis de datos y nuevas funcionalidades según las necesidades de Cendilab.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Impacto Esperado</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl">{impact.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                  {impact.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideImpact;
