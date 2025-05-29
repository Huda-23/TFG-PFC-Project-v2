"use client";
import React from "react";

type WizardSidebarProps = {
  currentStep: number;
  setStep: (step: number) => void;
};

const steps = [
  "Recepción",
  "Etiquetado",
  "Lavado",
  "Clasificación",
  "Calidad",
  "Empaquetado",
  "Almacenaje",
  "Pedidos",
  "Pasaporte",
  "Transporte",
];

// Usamos tonos más suaves de naranja (amber de Tailwind)
export default function WizardSidebarCooperativa({
  currentStep,
  setStep,
}: WizardSidebarProps) {
  return (
    <aside className="w-full md:w-1/4 max-w-xs p-4 border-r border-amber-200">
      <ul className="space-y-4">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <li
              key={index}
              onClick={() => setStep(index)}
              className={`cursor-pointer flex items-center gap-3 p-2 rounded-lg transition 
                ${
                  isActive
                    ? "bg-amber-100 text-amber-800 font-semibold"
                    : "hover:bg-amber-50 text-gray-700"
                }`}
            >
              <span
                className={`h-6 w-6 flex items-center justify-center rounded-full border-2 text-sm 
                  ${
                    isCompleted
                      ? "bg-amber-500 text-white border-amber-400"
                      : isActive
                      ? "border-amber-600"
                      : "border-gray-500"
                  }`}
              >
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
