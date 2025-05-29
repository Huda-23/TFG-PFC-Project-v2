"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PasoLavado() {
  const [lavado, setLavado] = useState(false);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-amber-600 mb-2">
        Paso 3: Lavado y acondicionado
      </h2>
      <p className="text-gray-600 mb-6">
        Indica si se ha realizado el lavado del producto y rellena los datos
        correspondientes.
      </p>

      <form className="space-y-6">
        {/* Checkbox estilo Asana */}
        <div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="lavado"
              checked={lavado}
              onChange={() => setLavado(!lavado)}
              className="peer hidden"
            />
            <label
              htmlFor="lavado"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all
                  ${
                    lavado ? "bg-amber-500 border-amber-500" : "border-gray-400"
                  }`}
              >
                {lavado && (
                  <span className="text-white text-sm font-bold">✓</span>
                )}
              </span>
              <span className="text-gray-800 font-medium">
                ¿Se ha realizado el lavado?
              </span>
            </label>
          </div>

          <AnimatePresence>
            {lavado && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4 space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Producto utilizado"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Disolución (% o proporción)"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Temperatura (°C)"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ID del sensor"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </section>
  );
}
