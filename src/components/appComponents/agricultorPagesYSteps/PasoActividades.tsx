"use client";

import { useState, useActionState, useEffect } from "react";
import BotonMinado from "@/components/appComponents/botonMinado";
import SelectorHashAnterior from "@/components/appComponents/SelectorHashAnterior";
import { saveActividadesAction } from "@/actions/agricultorAction";

type Parcela = string;

export default function PasoActividades() {
  const [, action, loading] = useActionState(saveActividadesAction, {
    success: false,
  });
  const [hashAnterior, setHashAnterior] = useState("");
  const [riego, setRiego] = useState(false);
  const [labrado, setLabrado] = useState(false);
  const [parcelas, setParcelas] = useState<Parcela[]>([]);

  useEffect(() => {
    const fetchParcelas = async () => {
      try {
        const res = await fetch("/api/agricultor");
        const data: Parcela[] = await res.json();
        setParcelas(data);
      } catch (error) {
        console.error("Error al cargar parcelas:", error);
      }
    };

    fetchParcelas();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-700 mb-2">
        Paso nuevo: Actividades del cultivo
      </h2>
      <p className="text-gray-600 mb-6">
        Indica qué actividades se han realizado y rellena los datos necesarios.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* FORMULARIO */}
        <form className="flex-1 space-y-6" action={action}>
          {/* Campo oculto para el hash */}
          <input type="hidden" name="hash_previo" value={hashAnterior} />

          {/* ID parcela */}
          <div className="relative">
            <select
              name="parcela_id"
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 text-gray-500 text-base focus:border-green-500 focus:outline-none bg-white"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona una parcela
              </option>
              {parcelas.map((parcela) => (
                <option key={parcela} value={parcela}>
                  {parcela}
                </option>
              ))}
            </select>
          </div>

          {/* Producción */}
          <div className="relative">
            <input
              type="number"
              name="produccion"
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="produccion"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600"
            >
              Producción estimada (kg)
            </label>
          </div>

          {/* RIEGO */}
          <input type="hidden" name="riego" value={riego ? "1" : "0"} />
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="riego"
              checked={riego}
              onChange={() => setRiego(!riego)}
              className="peer hidden"
            />
            <label
              htmlFor="riego"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  riego ? "bg-green-500 border-green-500" : "border-gray-400"
                }`}
              >
                {riego && (
                  <span className="text-white text-sm font-bold">✓</span>
                )}
              </span>
              <span className="text-gray-800 font-medium">
                ¿Se ha realizado riego?
              </span>
            </label>
          </div>

          {/* LABRADO */}
          <input type="hidden" name="labrado" value={labrado ? "1" : "0"} />
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="labrado"
              checked={labrado}
              onChange={() => setLabrado(!labrado)}
              className="peer hidden"
            />
            <label
              htmlFor="labrado"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  labrado ? "bg-green-500 border-green-500" : "border-gray-400"
                }`}
              >
                {labrado && (
                  <span className="text-white text-sm font-bold">✓</span>
                )}
              </span>
              <span className="text-gray-800 font-medium">
                ¿Se ha realizado labrado?
              </span>
            </label>
          </div>

          <BotonMinado loading={loading} />
        </form>

        {/* Selector hash a la derecha */}
        <SelectorHashAnterior
          actor="agricultor"
          onSeleccionar={setHashAnterior}
        />
      </div>
    </section>
  );
}
