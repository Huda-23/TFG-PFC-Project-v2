"use client";

import { useEffect, useState } from "react";

type Parcela = {
  parcela_id: string;
};

export default function PasoUbicacion() {
  const [parcelas, setParcelas] = useState<Parcela[]>([]);
  const [ubicaciones, setUbicaciones] = useState<Record<string, number>>({});

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
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-orange-600 mb-2">
        Paso 1: Ubicación de la mercancía
      </h2>
      <p className="text-gray-700 mb-4">
        Selecciona una ubicación de carga (1–16) para cada parcela que ha
        realizado riego y labrado.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Parcelas con riego y labrado completados:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="px-4 py-2 text-left">Parcela</th>
              <th className="px-4 py-2 text-left">Asignar ubicación</th>
            </tr>
          </thead>
          <tbody>
            {parcelas.map((parcela) => (
              <tr
                key={parcela.parcela_id}
                className="border-t text-gray-800 text-sm"
              >
                <td className="px-4 py-2">{parcela.parcela_id}</td>
                <td className="px-4 py-2">
                  <select
                    value={ubicaciones[parcela.parcela_id] || ""}
                    onChange={(e) =>
                      handleUbicacionChange(
                        parcela.parcela_id,
                        parseInt(e.target.value)
                      )
                    }
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <option value="">Seleccionar</option>
                    {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {parcelas.length === 0 && (
              <tr>
                <td colSpan={2} className="px-4 py-4 text-center text-gray-400">
                  No hay parcelas disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
