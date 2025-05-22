"use client";

import { useEffect, useState } from "react";
import BotonMinado from "@/components/appComponents/botonMinado";
import SelectorHashAnterior from "@/components/appComponents/SelectorHashAnterior";

export default function PasoDatosParcela() {
  const [ejercicio, setEjercicio] = useState("");
  const [tipoCultivo, setTipoCultivo] = useState("");
  const [loading, setLoading] = useState(false);
  const [hashAnterior, setHashAnterior] = useState("");

  useEffect(() => {
    const fecha = new Date();
    setEjercicio(fecha.getFullYear().toString());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const datos = Object.fromEntries(formData.entries());

    datos.tipoCultivo = tipoCultivo;
    datos.ejercicio = ejercicio;
    datos.hash_previo = hashAnterior;

    console.log("🚀 Datos a minar:", datos);

    // Aquí irá tu lógica real (API o smart contract)
    await new Promise((res) => setTimeout(res, 2000)); // Simulación
    // Entiendo que exsto se cambiará para que esperé la respuesta de la API y pare la animación de loading.
    setLoading(false);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-700 mb-2">
        Paso 1: Información general de la parcela
      </h2>
      <p className="text-gray-600 mb-6">
        Introduce los datos básicos identificativos del agricultor y su parcela.
      </p>

      {/* Aquí el layout dividido */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* FORMULARIO */}
        <form
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Nombre del agricultor */}
          <div className="relative">
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="nombre"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600"
            >
              Nombre del agricultor
            </label>
          </div>

          {/* Ejercicio */}
          <div className="relative">
            <input
              type="text"
              id="ejercicio"
              name="ejercicio"
              value={ejercicio}
              readOnly
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-gray-100 focus:border-green-500 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="ejercicio"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600"
            >
              Ejercicio (año)
            </label>
          </div>

          {/* ID parcela */}
          <div className="relative">
            <input
              type="text"
              id="parcela"
              name="parcela"
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="parcela"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600"
            >
              ID de parcela
            </label>
          </div>

          {/* Coordenadas */}
          <div className="relative">
            <input
              type="text"
              id="coordenadas"
              name="coordenadas"
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="coordenadas"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600"
            >
              Coordenadas (lat, long)
            </label>
          </div>

          {/* Tamaño parcela */}
          <div className="relative">
            <input
              type="number"
              id="tamaño"
              name="tamaño"
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="tamaño"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-green-600"
            >
              Tamaño de la parcela (ha)
            </label>
          </div>

          {/* Variedad */}
          <div className="relative">
            <select
              id="variedad"
              name="variedad"
              className="appearance-none w-full border-2 border-gray-300 rounded-lg px-4 py-[0.75rem] text-gray-800 focus:border-green-500 focus:outline-none"
              defaultValue=""
            >
              <option disabled value="">
                Selecciona variedad cultivada
              </option>
              <option>Tomate perelló</option>
              <option>Tomate valenciano</option>
              <option>Otro</option>
            </select>
          </div>

          {/* Tipo de cultivo */}
          <div className="col-span-2">
            <p className="mb-2 font-medium text-gray-700">Tipo de cultivo</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="tipoCultivo"
                  value="ecologico"
                  className="accent-green-600"
                  checked={tipoCultivo === "ecologico"}
                  onChange={(e) => setTipoCultivo(e.target.value)}
                />
                Ecológico
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="tipoCultivo"
                  value="convencional"
                  className="accent-green-600"
                  checked={tipoCultivo === "convencional"}
                  onChange={(e) => setTipoCultivo(e.target.value)}
                />
                Convencional
              </label>
            </div>
          </div>

          <div className="col-span-2">
            <BotonMinado loading={loading} />
          </div>
        </form>

        {/* SELECTOR DE HASH A LA DERECHA */}
        <SelectorHashAnterior
          actor="agricultor"
          onSeleccionar={setHashAnterior}
        />
      </div>
    </section>
  );
}
