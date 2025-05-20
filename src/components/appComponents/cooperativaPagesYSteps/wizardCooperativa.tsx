"use client";

import { useState } from "react";
import WizardSidebarCooperativa from "./WizardSidebarCooperativa";

// IMPORTS de todos los pasos
import PasoRecepcion from "./PasoRecepcion";
import PasoLavado from "./PasoLavado";
import PasoClasificacion from "./PasoClasificacion";
import PasoCalidad from "./PasoCalidad";
import PasoEmpaquetado from "./PasoEmpaquetado";
import PasoAlmacenado from "./PasoAlmacenado";
import PasoPedidos from "./PasoPedidos";
import PasoPasaporte from "./PasoPasaporte";
import PasoTransporte from "./PasoTransporte";

export default function WizardCooperativa() {
  const [currentStep, setStep] = useState(0);

  const pasos = [
    <PasoRecepcion key="recepcion" />,
    <PasoLavado key="lavado" />,
    <PasoClasificacion key="clasificacion" />,
    <PasoCalidad key="calidad" />,
    <PasoEmpaquetado key="empaquetado" />,
    <PasoAlmacenado key="almacenado" />,
    <PasoPedidos key="pedidos" />,
    <PasoPasaporte key="pasaporte" />,
    <PasoTransporte key="transporte" />,
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <WizardSidebarCooperativa currentStep={currentStep} setStep={setStep} />
      <div className="flex-1">{pasos[currentStep]}</div>
    </div>
  );
}
