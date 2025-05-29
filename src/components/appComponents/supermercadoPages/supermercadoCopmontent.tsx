"use client";
import { useEffect, useState } from "react";

export default function PasoSupermercado() {
  const [fechaHoy, setFechaHoy] = useState("");

  useEffect(() => {
    const hoy = new Date().toISOString().split("T")[0];
    setFechaHoy(hoy);
  }, []);

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-purple-700 mb-2">
        Datos del supermercado
      </h2>
      <p className="text-gray-700 mb-6">
        Rellena los datos del pedido que el supermercado enviará al broker.
      </p>

      <form className="space-y-6">
        {/* Variedad */}
        <div className="relative">
          <select
            name="variedad"
            id="variedad"
            defaultValue=""
            className="peer w-full md:w-1/2 border-2 border-purple-300 rounded-lg px-4 py-[0.83rem] text-gray-800 bg-white focus:border-purple-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-purple-200"
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
            className="peer w-full md:w-1/2 border-2 border-purple-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-purple-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-purple-200"
          />
          <label
            htmlFor="kilos"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-purple-600"
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
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-purple-300 rounded-lg px-4 py-3 text-gray-800 bg-gray-100 focus:outline-none focus:border-purple-500 transition-shadow duration-200 focus:shadow-md focus:shadow-purple-100"
          />
          <label
            htmlFor="fecha"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
            peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600
            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-purple-600"
          >
            Fecha actual
          </label>
        </div>
      </form>
    </section>
  );
}
//           className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
