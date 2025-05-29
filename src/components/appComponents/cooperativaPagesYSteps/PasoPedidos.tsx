"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PasoPedidos() {
  const [tipoPedido, setTipoPedido] = useState("");

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-amber-600 mb-2">
        Paso 8: Elaboración de pedidos
      </h2>
      <p className="text-gray-600 mb-6">
        Indica el tipo de pedido y, en caso de ser internacional, especifica el
        idioma del etiquetado.
      </p>

      <form className="space-y-6">
        {/* Tipo de pedido */}
        <div className="relative">
          <select
            name="tipoPedido"
            id="tipoPedido"
            value={tipoPedido}
            onChange={(e) => setTipoPedido(e.target.value)}
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          >
            <option disabled value="">
              Tipo de pedido
            </option>
            <option>Nacional</option>
            <option>Local</option>
            <option>Internacional</option>
          </select>
        </div>

        {/* Idioma si es internacional */}
        <AnimatePresence>
          {tipoPedido === "Internacional" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="relative mt-4">
                <input
                  type="text"
                  name="idioma"
                  id="idioma"
                  placeholder=" "
                  className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
                />
                <label
                  htmlFor="idioma"
                  className="absolute left-4 top-3 text-gray-500 text-base transition-all
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                    peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
                    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
                >
                  Idioma para el etiquetado
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
}
