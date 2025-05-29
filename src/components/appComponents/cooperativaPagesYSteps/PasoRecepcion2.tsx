"use client";

import { useEffect, useState } from "react";
import { saveUbicacionAction } from "@/actions/cooperativaAction";
import BotonMinado from "@/components/appComponents/botonMinado";

type Parcela = {
  parcela_id: string;
};

export default function PasoUbicacion() {
  const [parcelas, setParcelas] = useState<Parcela[]>([]);
  const [ubicaciones, setUbicaciones] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchParcelas = async () => {
      try {
        const res = await fetch("/api/cooperativa/");
        const data = await res.json();
        setParcelas(data);
      } catch (error) {
        console.error("Error al cargar parcelas:", error);
      }
    };

    fetchParcelas();
  }, []);

  const handleUbicacionChange = (parcela_id: string, ubicacion: number) => {
    setUbicaciones((prev) => ({
      ...prev,
      [parcela_id]: ubicacion,
    }));
    setError("");
  };

  const ubicacionesUsadas = new Set(Object.values(ubicaciones));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const valores = Object.values(ubicaciones);
    const hayDuplicados = new Set(valores).size !== valores.length;

    if (hayDuplicados) {
      setError(
        "Cada ubicación debe ser única. Revisa los valores seleccionados."
      );
      return;
    }

    const form = new FormData();
    Object.entries(ubicaciones).forEach(([parcela_id, ubicacion]) => {
      form.append("parcelas[]", JSON.stringify({ parcela_id, ubicacion }));
    });

    setLoading(true);
    await saveUbicacionAction(form);
    setLoading(false);
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-amber-600 mb-2">
        Paso 1: Ubicación de la mercancía
      </h2>
      <p className="text-gray-700 mb-5">
        Selecciona una ubicación de carga (1–16) para cada parcela que ha
        realizado riego y labrado.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Parcelas con riego y labrado completados:
      </p>

      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-orange-200">
              <tr className="text-gray-800 text-sm">
                <th className="px-6 py-3 text-left font-semibold tracking-wide">
                  Parcela
                </th>
                <th className="px-6 py-3 text-left font-semibold tracking-wide">
                  Asignar ubicación
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {parcelas.map((parcela) => (
                <tr
                  key={parcela.parcela_id}
                  className="hover:bg-orange-50 transition-colors duration-200 text-sm text-gray-800"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    🌱 {parcela.parcela_id}
                  </td>
                  <td className="px-6 py-4">
                    <select
                      required
                      value={ubicaciones[parcela.parcela_id] || ""}
                      onChange={(e) =>
                        handleUbicacionChange(
                          parcela.parcela_id,
                          parseInt(e.target.value)
                        )
                      }
                      className="w-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    >
                      <option value="">Seleccionar</option>
                      {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => {
                        const yaUsado = [...ubicacionesUsadas].includes(n);
                        const esSeleccionActual =
                          ubicaciones[parcela.parcela_id] === n;

                        return (
                          <option
                            key={n}
                            value={n}
                            disabled={yaUsado && !esSeleccionActual}
                          >
                            {n}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              ))}
              {parcelas.length === 0 && (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-6 text-center text-gray-400 text-sm"
                  >
                    No hay parcelas disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 font-medium">{error}</p>
        )}

        <div className="mt-4">
          <BotonMinado loading={loading} />
        </div>
      </form>
    </section>
  );
}
