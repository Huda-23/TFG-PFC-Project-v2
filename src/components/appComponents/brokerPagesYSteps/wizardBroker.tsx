"use client";
import { useState } from "react";
import WizardSidebarBroker from "./wizardSidebarBroker";
import PasoRecogida from "./PasoRecogida";
import PasoAlmacenamiento from "./PasoAlmacenamiento";
import PasoTransporte from "./PasoTransporteBroker";

export default function WizardBroker() {
  const [currentStep, setStep] = useState(0);

  const pasos = [
    <PasoRecogida key="recogida" />,
    <PasoAlmacenamiento key="almacenamiento" />,
    <PasoTransporte key="transporte" />,
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <WizardSidebarBroker currentStep={currentStep} setStep={setStep} />
      <div className="flex-1">{pasos[currentStep]}</div>
    </div>
  );
}
