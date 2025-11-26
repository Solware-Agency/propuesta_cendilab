import Card from "../Card";

const SlideDiagnosis = () => {
  const challenges = [
    {
      title: "Consultas Repetitivas y Personal Saturado",
      description:
        "Pacientes preguntan precios, indicaciones y horarios constantemente, generando tiempos de espera y saturación del personal que pierde tiempo en respuestas repetitivas.",
    },
    {
      title: "Sin Control Automatizado de Cupos",
      description:
        "No existe un control automatizado de cupos por turno (mañana/tarde) para consultas médicas, generando desorganización y falta de control sobre los cupos del día.",
    },
    {
      title: "Gestión de Citas Descentralizada",
      description:
        "Algunas consultas se manejan por orden de llegada, otras por cita, y este criterio no está centralizado. Exámenes que requieren cita no tienen una agenda centralizada.",
    },
    {
      title: "Información de Pacientes Desorganizada",
      description:
        "La información del paciente no queda almacenada de forma organizada, dificultando el seguimiento, la gestión administrativa y el control operativo.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          La necesidad de Cendilab
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} variant="neuo" className="space-y-3">
              <h3 className="text-primary">{challenge.title}</h3>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                {challenge.description}
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

export default SlideDiagnosis;
