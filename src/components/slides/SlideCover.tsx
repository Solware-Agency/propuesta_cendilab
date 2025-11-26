import Card from "../Card";

const SlideCover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card variant="glass" className="max-w-3xl w-full text-center space-y-6">

        {/* Title */}
        <h1 className="text-foreground">
          Agente de IA por WhatsApp para CENDILAB
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-primary font-semibold">
          Propuesta presentada por Solware Agency
        </p>

        {/* Description */}
        <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed text-justify">
          Cendilab busca optimizar su atención al cliente y mejorar la gestión de citas, cupos y
          consultas médicas. Solware propone la implementación de un Agente de Inteligencia Artificial
          por WhatsApp, totalmente personalizado para Cendilab, que automatiza la atención, organiza
          la agenda y reduce significativamente la carga operativa del equipo.
        </p>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </Card>
    </div>
  );
};

export default SlideCover;
