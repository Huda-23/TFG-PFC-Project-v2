"use client";
import React from "react";

type WizardSidebarProps = {
  currentStep: number;
  setStep: (step: number) => void;
};

const steps = [
  "Recogida y control",
  "Almacenamiento (opcional)",
  "Transporte y entrega",
];

export default function WizardSidebarBroker({
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
                    ? "bg-blue-100 text-blue-800 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              <span
                className={`h-6 w-6 flex items-center justify-center rounded-full border-2 text-sm 
                  ${
                    isCompleted
                      ? "bg-blue-500 text-white border-blue-500"
                      : isActive
                      ? "border-blue-600"
                      : "border-gray-400"
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
