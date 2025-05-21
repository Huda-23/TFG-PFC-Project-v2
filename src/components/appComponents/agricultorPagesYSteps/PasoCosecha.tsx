"use client";
// import { useState } from "react";

export default function PasoCosecha() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 4: Datos de la cosecha
      </h2>
      <p className="text-gray-600 mb-6">
        Rellena la información relacionada con la recolección de los tomates.
      </p>

      <form className="space-y-6">
        {/* Fecha de cosecha */}
        <div className="relative">
          <input
            type="date"
            name="fechaCosecha"
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
            placeholder=" "
          />
          <label
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-blue-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-blue-600"
          >
            Fecha de la cosecha
          </label>
        </div>

        {/* Cantidad cosechada */}
        <div className="relative">
          <input
            type="number"
            name="cantidadKg"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
          />
          <label
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-blue-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-blue-600"
          >
            Cantidad recolectada (kg)
          </label>
        </div>

        {/* Punto de maduración */}
        <div className="relative">
          <select
            name="maduracion"
            defaultValue=""
            className="appearance-none w-full border-2 border-gray-300 rounded-lg px-4 py-[0.75rem] text-gray-800 focus:border-blue-500 focus:outline-none"
          >
            <option disabled value="">
              Selecciona punto de maduración
            </option>
            <option>Verde</option>
            <option>Envero</option>
            <option>Maduro</option>
            <option>Sobremaduro</option>
          </select>
        </div>

        {/* Incidencias */}
        <div className="relative">
          <textarea
            name="incidencias"
            placeholder="Indica cualquier anomalía, plaga o problema detectado durante la cosecha..."
            rows={4}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none resize-none"
          ></textarea>
        </div>
      </form>
    </section>
  );
}
