"use client";

import { useEffect, useState } from "react";
import { saveBrokerAction } from "@/actions/brokerAction";

type Mercancia = {
  id: number;
  variedad: string;
  cantidad_kg: number;
  fecha: string;
  hash_mercancia: string;
  hash_etiquetado: string;
};

type Pedido = {
  id: number;
  variedad: string;
  cantidad_kg: number;
  fecha: string;
  hash_pedido: string;
};

export default function BrokerPage() {
  const [mercancias, setMercancias] = useState<Mercancia[]>([]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState("");
  const [mercanciaSeleccionada, setMercanciaSeleccionada] = useState("");

  useEffect(() => {
    fetch("/api/broker/mercancia") // Asegúrate de la ruta plural
      .then((res) => res.json())
      .then(setMercancias)
      .catch((err) => console.error("Error al cargar mercancías:", err));

    fetch("/api/broker/pedidos")
      .then((res) => res.json())
      .then(setPedidos)
      .catch((err) => console.error("Error al cargar pedidos:", err));
  }, []);

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Vista del bróker
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Mercancía de cooperativas */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            Mercancía disponible (cooperativas)
          </h2>
          <div className="space-y-4">
            {mercancias.map((item) => (
              <div
                key={item.hash_etiquetado}
                className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
              >
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700">
                    Hash mercancía:
                  </span>{" "}
                  {item.hash_mercancia}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700">Variedad:</span>{" "}
                  {item.variedad}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700">
                    KG disponibles:
                  </span>{" "}
                  {item.cantidad_kg} kg
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700">Fecha:</span>{" "}
                  {item.fecha}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">
                    Hash etiquetado:
                  </span>{" "}
                  {item.hash_etiquetado}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pedidos supermercado */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold text-green-600 mb-4">
            Pedidos de supermercados
          </h2>
          <div className="space-y-4">
            {pedidos.map((pedido) => (
              <div
                key={pedido.hash_pedido}
                className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
              >
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700">
                    Hash pedido:
                  </span>{" "}
                  {pedido.hash_pedido}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700">Variedad:</span>{" "}
                  {pedido.variedad}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700">Cantidad:</span>{" "}
                  {pedido.cantidad_kg} kg
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">Fecha:</span>{" "}
                  {pedido.fecha}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario de sincronización */}
      <div className="mt-10 bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-gray-700 mb-4">
          Sincronizar mercancía con pedido
        </h3>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const res = await saveBrokerAction(formData);

            if (res.success) {
              alert("Sincronización realizada con éxito");
              // Reiniciar selects si quieres
              setPedidoSeleccionado("");
              setMercanciaSeleccionada("");
            } else {
              alert("Error al sincronizar: " + (res.error || "desconocido"));
            }
          }}
          method="POST"
          className="space-y-4"
        >
          {/* Select pedido */}
          <div className="relative">
            <select
              name="hash_pedido"
              id="pedido"
              value={pedidoSeleccionado}
              onChange={(e) => setPedidoSeleccionado(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md"
              required
            >
              <option value="">Selecciona un pedido</option>
              {pedidos.map((pedido) => (
                <option key={pedido.hash_pedido} value={pedido.hash_pedido}>
                  {pedido.variedad} - {pedido.cantidad_kg}kg - {pedido.fecha}
                </option>
              ))}
            </select>
          </div>

          {/* Select mercancía */}
          <div className="relative">
            <select
              name="hash_etiquetado"
              id="mercancia"
              value={mercanciaSeleccionada}
              onChange={(e) => setMercanciaSeleccionada(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-green-500 focus:outline-none transition-shadow duration-200 focus:shadow-md"
              required
            >
              <option value="">Selecciona una mercancía</option>
              {mercancias.map((m) => (
                <option key={m.hash_etiquetado} value={m.hash_etiquetado}>
                  {m.variedad} - {m.cantidad_kg}kg - {m.fecha}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sincronizar
          </button>
        </form>
      </div>
    </section>
  );
}
