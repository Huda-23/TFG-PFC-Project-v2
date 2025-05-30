"use client";

import { useState, useEffect } from "react";
import { useActionState } from "react";
import BotonMinado from "@/components/appComponents/botonMinado";
import { saveSupermercadoAction } from "@/actions/supermercadoAction";

type FormState = {
  success: boolean;
  error?: string;
};

const initialState: FormState = { success: false };

type Pedido = {
  id: number;
  variedad: string;
  cantidad_kg: number;
  fecha: string;
  hash_synchro: string | null;
};

export default function PasoSupermercado() {
  const [fechaHoy, setFechaHoy] = useState("");
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const [, action, loading] = useActionState(
    saveSupermercadoAction,
    initialState
  );

  useEffect(() => {
    const hoy = new Date().toISOString().split("T")[0];
    setFechaHoy(hoy);

    // Llamada a la API
    fetch("/api/supermercado")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener pedidos");
        return res.json();
      })
      .then((data: Pedido[]) => {
        setPedidos(data);
      })
      .catch((error) => {
        console.error("Error al cargar los pedidos:", error);
      });
  }, []);

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg flex flex-col lg:flex-row gap-8">
      {/* Formulario */}
      <div className="lg:w-1/2">
        <h2 className="text-xl font-bold text-purple-700 mb-2">
          Datos del supermercado
        </h2>
        <p className="text-gray-700 mb-6">
          Rellena los datos del pedido que el supermercado enviará al bróker.
        </p>

        <form className="space-y-6" action={action}>
          {/* Variedad */}
          <div className="relative">
            <select
              name="variedad"
              id="variedad"
              defaultValue=""
              required
              className="peer w-full border-2 border-purple-300 rounded-lg px-4 py-[0.83rem] text-gray-800 bg-white focus:border-purple-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-purple-200"
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
              name="cantidad_kg"
              id="cantidad_kg"
              placeholder=" "
              required
              className="peer w-full border-2 border-purple-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-purple-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-purple-200"
            />
            <label
              htmlFor="cantidad_kg"
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
              className="peer w-full border-2 border-purple-300 rounded-lg px-4 py-3 text-gray-800 bg-gray-100 focus:outline-none focus:border-purple-500 transition-shadow duration-200 focus:shadow-md focus:shadow-purple-100"
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

          {/* Botón de minado */}
          <div className="mt-4">
            <BotonMinado loading={loading} />
          </div>
        </form>
      </div>

      {/* Lista de pedidos */}
      <div className="lg:w-1/2 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-inner">
        <h3 className="text-lg font-semibold text-purple-700 mb-4">
          Pedidos realizados
        </h3>
        {pedidos.length > 0 ? (
          <ul className="space-y-4 max-h-[400px] overflow-y-auto">
            {pedidos.map((pedido) => {
              const estado = pedido.hash_synchro ? "Procesado" : "Pendiente";
              const colorEstado = pedido.hash_synchro
                ? "text-green-600"
                : "text-orange-500";

              return (
                <li
                  key={pedido.id}
                  className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm"
                >
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Variedad:</span>{" "}
                    {pedido.variedad}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Cantidad:</span>{" "}
                    {pedido.cantidad_kg} kg
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Fecha:</span>{" "}
                    {pedido.fecha}
                  </p>
                  <p className={`text-sm font-semibold mt-1 ${colorEstado}`}>
                    Estado: {estado}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No hay pedidos aún.</p>
        )}
      </div>
    </section>
  );
}
