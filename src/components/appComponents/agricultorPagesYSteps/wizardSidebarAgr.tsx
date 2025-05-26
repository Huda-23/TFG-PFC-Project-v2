"use client";
import React from "react";

type WizardSidebarProps = {
  currentStep: number;
  setStep: (step: number) => void;
};

const steps = [
  "Datos parcela",
  "Actividades",
  "Actividades adicionales",
  "Tratamientos",
  "Cosecha",
  "Control sanitario",
  "Destino",
  "Sensores",
];

export default function WizardSidebarAgr({
  currentStep,
  setStep,
}: WizardSidebarProps) {
  return (
    <aside className="w-full sm:w-1/4 max-w-xs p-4 border-r border-gray-200">
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
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }
              `}
            >
              <span
                className={`h-6 w-6 flex items-center justify-center rounded-full border-2 text-sm 
                  ${
                    isCompleted
                      ? "bg-green-500 text-white border-green-500"
                      : isActive
                      ? "border-green-600"
                      : "border-gray-400"
                  }
                `}
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
