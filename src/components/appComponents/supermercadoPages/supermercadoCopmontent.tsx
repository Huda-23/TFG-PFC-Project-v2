"use client";
import { useEffect, useState } from "react";

export default function PasoSupermercado() {
  const [fechaHoy, setFechaHoy] = useState("");

  useEffect(() => {
    const hoy = new Date().toISOString().split("T")[0];
    setFechaHoy(hoy);
  }, []);

  return (
    <section className="bg-yellow-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-yellow-700 mb-2">
        Paso: Datos del supermercado
      </h2>
      <p className="text-gray-700 mb-6">
        Rellena los datos del lote recibido en el supermercado.
      </p>

      <form className="space-y-6">
        {/* Variedad */}
        <div className="relative">
          <select
            name="variedad"
            id="variedad"
            defaultValue=""
            className="peer w-full md:w-1/2 border-2 border-yellow-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-yellow-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-yellow-200"
          >
            <option disabled value="">
              Selecciona la variedad
            </option>
            <option>Tomate del Perelló</option>
            <option>Tomate valenciano</option>
          </select>
        </div>

        {/* Cantidad en kilos */}
        <div className="relative">
          <input
            type="number"
            name="kilos"
            id="kilos"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-yellow-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-yellow-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-yellow-200"
          />
          <label
            htmlFor="kilos"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-yellow-600"
          >
            Cantidad en kilos
          </label>
        </div>

        {/* Fecha */}
        <div className="relative">
          <input
            type="date"
            name="fecha"
            id="fecha"
            value={fechaHoy}
            readOnly
            className="peer w-full md:w-1/2 border-2 border-yellow-300 rounded-lg px-4 py-3 text-gray-800 bg-gray-100 focus:outline-none"
          />
          <label
            htmlFor="fecha"
            className="absolute left-4 top-3 text-gray-500 text-sm"
          >
            Fecha actual
          </label>
        </div>
      </form>
    </section>
  );
}
