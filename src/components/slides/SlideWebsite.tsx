import Card from "../Card";
import { Info, Stethoscope, CalendarCheck, Database } from "lucide-react";

const SlideWebsite = () => {
  const modules = [
    {
      icon: Info,
      title: "Información del laboratorio",
      items: ["Precios", "Indicaciones", "Horarios", "Dirección", "Servicios", "Teléfonos"],
    },
    {
      icon: Stethoscope,
      title: "Consultas Médicas",
      items: ["Especialidades", "Doctores por especialidad", "Tipo de consulta: con cita o por orden de llegada", "Cupos mañana/tarde administrados automáticamente"],
    },
    {
      icon: CalendarCheck,
      title: "Exámenes que requieren cita",
      items: ["Agenda automática por WhatsApp", "Verificación de disponibilidad", "Reprogramar/cancelar citas", "Registro interno del paciente"],
    },
    {
      icon: Database,
      title: "Integración tecnológica",
      items: ["WhatsApp Business API", "Supabase (base de datos + sistema de cupos)", "Google Calendar (agenda de exámenes y consultas)", "Servidor inteligente (automatización + LLM)"],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-foreground">Alcance del proyecto</h2>
          <p className="text-secondary text-lg">El Agente de IA para Cendilab incluirá</p>
        </div>

        {/* Modules Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl font-semibold">{module.title}</h3>
                </div>
                <ul className="space-y-2 pl-4">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-foreground/80 text-sm sm:text-base leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
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

export default SlideWebsite;
