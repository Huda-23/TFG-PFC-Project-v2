"use client";

import { useEffect, useState } from "react";
import {
  getMercanciaNoEtiquetada,
  saveEtiquetadoAction,
} from "@/actions/cooperativaAction";
import BotonMinado from "@/components/appComponents/botonMinado";

type Mercancia = {
  id: number;
  hash_mercancia: string;
};

export default function PasoEtiquetado() {
  const [mercancias, setMercancias] = useState<Mercancia[]>([]);
  const [seleccionado, setSeleccionado] = useState<Mercancia | null>(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const datos = await getMercanciaNoEtiquetada();
      setMercancias(datos);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!seleccionado || !checked) return;

    const form = new FormData();
    form.append("id", seleccionado.id.toString());
    form.append("hash_mercancia", seleccionado.hash_mercancia);

    setLoading(true);
    await saveEtiquetadoAction(form);
    setChecked(false);
    setSeleccionado(null);

    // Refrescar lista
    const datos = await getMercanciaNoEtiquetada();
    setMercancias(datos);
    setLoading(false);
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-amber-600 mb-4">
        Paso 2: Etiquetado
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Selecciona un hash_mercancia:
          </label>
          <select
            value={seleccionado?.id || ""}
            onChange={(e) => {
              const id = parseInt(e.target.value);
              const item = mercancias.find((m) => m.id === id);
              setSeleccionado(item || null);
            }}
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 text-gray-500 text-base focus:border-amber-500 focus:outline-none bg-white"
            required
          >
            <option value="">Seleccionar</option>
            {mercancias.map((m) => (
              <option key={m.id} value={m.id}>
                {m.hash_mercancia}
              </option>
            ))}
          </select>
        </div>

        {/* Campo oculto para enviar 0 o 1 */}
        <input type="hidden" name="etiquetado" value={checked ? "1" : "0"} />

        {/* Checkbox visual */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="etiquetado"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="peer hidden"
          />
          <label
            htmlFor="etiquetado"
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <span
              className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                checked ? "bg-green-500 border-green-500" : "border-gray-400"
              }`}
            >
              {checked && (
                <span className="text-white text-sm font-bold">✓</span>
              )}
            </span>
            <span className="text-gray-800 font-medium">
              ¿Se ha realizado el etiquetado?
            </span>
          </label>
        </div>

        <BotonMinado loading={loading} />
      </form>
    </section>
  );
}
