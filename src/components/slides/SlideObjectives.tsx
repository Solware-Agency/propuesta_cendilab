import Card from "../Card";
import { MessageSquare, Database, Calendar, Users, Shield, ArrowRightLeft, Headphones } from "lucide-react";

const SlideObjectives = () => {
  const objectives = [
    {
      icon: MessageSquare,
      text: "Atención inmediata por WhatsApp 24/7 sin depender del personal operativo.",
    },
    {
      icon: Database,
      text: "Precios e indicaciones de más de 350 exámenes con información clara, precisa y en segundos.",
    },
    {
      icon: Calendar,
      text: "Control de cupos por turno con cupos diarios actualizados automáticamente.",
    },
    {
      icon: Users,
      text: "Agenda de exámenes y consultas integrada con Google Calendar para ver disponibilidad, agendar, reprogramar y cancelar.",
    },
    {
      icon: Shield,
      text: "Gestión de consultas médicas: consultas con cita mediante Calendar y consultas por orden de llegada con validación automática de cupos.",
    },
    {
      icon: Database,
      text: "Registro estructurado del paciente donde nombre, cédula, teléfono y motivos quedan guardados en una base de datos segura.",
    },
    {
      icon: ArrowRightLeft,
      text: "Transferencia a humano: cuando el paciente lo solicite, el agente se detiene y transfiere la conversación al personal.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">¿Qué soluciona Solware con este proyecto?</h2>

        <Card variant="glass" className="space-y-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pt-2">
                  {objective.text}
                </p>
              </div>
            );
          })}
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideObjectives;
