"use client";
import { useState } from "react";
import WizardSidebarAgr from "./wizardSidebarAgr";

import PasoDatosParcela from "./PasoDatosParcela";
import PasoActividades from "./PasoActividades";
import PasoTratamientos from "./PasoTratamientos";
import PasoCosecha from "./PasoCosecha";
import PasoControlSanitario from "./PasoControlSanitario";
import PasoDestino from "./PasoDestino";
import PasoSensores from "./PasoSensores";

//? Esto sirve de contenedor y cerebro del wizard y de los componentes con cada apartado de el formulario.
export default function WizardAgricultor() {
  const [step, setStep] = useState(0);

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <PasoDatosParcela />;
      case 1:
        return <PasoActividades />;
      case 2:
        return <PasoTratamientos />;
      case 3:
        return <PasoCosecha />;
      case 4:
        return <PasoControlSanitario />;
      case 5:
        return <PasoDestino />;
      case 6:
        return <PasoSensores />;
      default:
        return <p>Paso no encontrado</p>;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Sidebar con los pasos */}
      <WizardSidebarAgr currentStep={step} setStep={setStep} />

      {/* Contenido del paso actual */}
      <div className="flex-1">{renderStepContent()}</div>
    </div>
  );
}
