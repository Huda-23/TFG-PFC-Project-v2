"use client";
import { useState } from "react";
import BotonMinado from "@/components/appComponents/botonMinado";
import { AnimatePresence, motion } from "framer-motion";

export default function PasoActividades() {
  const [labranza, setLabranza] = useState(false);
  const [poda, setPoda] = useState(false);
  const [fumigacion, setFumigacion] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [loading] = useState(false);

  const handleCardClick = (e: React.MouseEvent, toggle: () => void) => {
    const tag = (e.target as HTMLElement).tagName;
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON", "LABEL"].includes(tag))
      return;
    toggle();
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-700 mb-2">
        Paso 3: Actividades adicionales realizadas
      </h2>
      <p className="text-gray-600 mb-6">
        Marca las tareas que se han realizado y completa sus fechas o datos.
      </p>

      <form className="space-y-6">
        {/* Labranza */}
        <div
          className={`border-2 rounded-lg p-4 transition ${
            labranza ? "border-green-500 bg-green-50" : "border-gray-300"
          } cursor-pointer`}
          onClick={(e) => handleCardClick(e, () => setLabranza(!labranza))}
        >
          <div className="flex items-center gap-3">
            <div
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                labranza ? "bg-green-500 border-green-500" : "border-gray-400"
              }`}
            >
              {labranza && (
                <span className="text-white text-sm font-bold">✓</span>
              )}
            </div>
            <span className="text-gray-800 font-medium">
              Labranza realizada
            </span>
          </div>
          <AnimatePresence>
            {labranza && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <input
                  type="date"
                  name="fechaLabranza"
                  className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Poda */}
        <div
          className={`border-2 rounded-lg p-4 transition ${
            poda ? "border-green-500 bg-green-50" : "border-gray-300"
          } cursor-pointer`}
          onClick={(e) => handleCardClick(e, () => setPoda(!poda))}
        >
          <div className="flex items-center gap-3">
            <div
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                poda ? "bg-green-500 border-green-500" : "border-gray-400"
              }`}
            >
              {poda && <span className="text-white text-sm font-bold">✓</span>}
            </div>
            <span className="text-gray-800 font-medium">Poda realizada</span>
          </div>
          <AnimatePresence>
            {poda && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <input
                  type="date"
                  name="fechaPoda"
                  className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Fumigación */}
        <div
          className={`border-2 rounded-lg p-4 transition ${
            fumigacion ? "border-green-500 bg-green-50" : "border-gray-300"
          } cursor-pointer`}
          onClick={(e) => handleCardClick(e, () => setFumigacion(!fumigacion))}
        >
          <div className="flex items-center gap-3">
            <div
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                fumigacion ? "bg-green-500 border-green-500" : "border-gray-400"
              }`}
            >
              {fumigacion && (
                <span className="text-white text-sm font-bold">✓</span>
              )}
            </div>
            <span className="text-gray-800 font-medium">
              Fumigación realizada
            </span>
          </div>
          <AnimatePresence>
            {fumigacion && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <input
                  type="date"
                  name="fechaFumigacion"
                  className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contratación de personal */}
        <div
          className={`border-2 rounded-lg p-4 transition ${
            personal ? "border-green-500 bg-green-50" : "border-gray-300"
          } cursor-pointer`}
          onClick={(e) => handleCardClick(e, () => setPersonal(!personal))}
        >
          <div className="flex items-center gap-3">
            <div
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                personal ? "bg-green-500 border-green-500" : "border-gray-400"
              }`}
            >
              {personal && (
                <span className="text-white text-sm font-bold">✓</span>
              )}
            </div>
            <span className="text-gray-800 font-medium">
              Se ha contratado personal
            </span>
          </div>
          <AnimatePresence>
            {personal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <input
                  type="number"
                  placeholder="Número de personas"
                  className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Periodo de cosecha */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-800 font-medium">Periodo de cosecha</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              name="cosechaInicio"
              className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
            />
            <input
              type="date"
              name="cosechaFin"
              className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-2">
          <BotonMinado loading={loading} />
        </div>
      </form>
    </section>
  );
}
