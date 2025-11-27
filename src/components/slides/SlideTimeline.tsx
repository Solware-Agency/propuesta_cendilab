import Card from "../Card";

const SlideTimeline = () => {
  const phases = [
    {
      week: "Semana 1",
      title: "Configuración y base técnica",
      activities:
        "Configuración de WhatsApp Business API, conexión con Meta Business, creación de tablas en Supabase, integración con Google Calendar y arquitectura del agente (n8n).",
    },
    {
      week: "Semana 2",
      title: "Programación del Agente",
      activities:
        "Flujos conversacionales, módulo de precios e indicaciones, módulo de cupos diarios, registro de datos y manejo de transferencia usuario → humano.",
    },
    {
      week: "Semana 3",
      title: "Programación del Agente",
      activities:
        "Continuación de desarrollo: módulo de citas, integración completa de componentes, optimización de flujos y pruebas unitarias de módulos.",
    },
    {
      week: "Semana 4",
      title: "Pruebas, ajustes e inducción",
      activities: "Pruebas internas (QA técnico), pruebas con Cendilab, ajustes finales, inducción al personal y entrega del proyecto.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Timeline de implementación
        </h2>

        <div className="space-y-4">
          {phases.map((phase, index) => (
            <Card key={index} variant="glass" className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-primary font-bold text-lg">{phase.week}</span>
                <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                  {phase.title}
                </h3>
              </div>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-0 sm:pl-20 text-justify">
                {phase.activities}
              </p>
            </Card>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideTimeline;
