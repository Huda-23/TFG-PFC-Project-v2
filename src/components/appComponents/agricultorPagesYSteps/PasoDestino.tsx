"use client";
import { useState } from "react";

export default function PasoDestino() {
  const cooperativas = [
    {
      nombre: "Unipro Perelló",
      direccion: "C/ La Mar, 12 - El Perelló, Valencia",
      cif: "U12345678",
      habilitada: true,
    },
    { nombre: "Anecoop", direccion: "", cif: "", habilitada: false },
    { nombre: "Unifresh", direccion: "", cif: "", habilitada: false },
    { nombre: "Eurogrup", direccion: "", cif: "", habilitada: false },
  ];

  const [cooperativaSeleccionada, setCooperativaSeleccionada] = useState<
    string | ""
  >("");
  const [direccion, setDireccion] = useState("");
  const [cif, setCif] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nombreSeleccionado = e.target.value;
    setCooperativaSeleccionada(nombreSeleccionado);

    const coop = cooperativas.find((c) => c.nombre === nombreSeleccionado);
    if (coop && coop.habilitada) {
      setDireccion(coop.direccion);
      setCif(coop.cif);
    } else {
      setDireccion("");
      setCif("");
    }
  };

  return (
    <section className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 6: Cooperativa de destino
      </h2>
      <p className="text-gray-600 mb-6">
        Selecciona la cooperativa a la que se entregará el producto.
      </p>

      <form className="space-y-6">
        {/* Dropdown cooperativas */}
        <div className="relative">
          <select
            name="cooperativa"
            value={cooperativaSeleccionada}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Selecciona una cooperativa
            </option>
            {cooperativas.map((coop) => (
              <option
                key={coop.nombre}
                value={coop.nombre}
                disabled={!coop.habilitada}
                className={!coop.habilitada ? "text-gray-400" : ""}
              >
                {coop.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Dirección */}
        <div className="relative">
          <input
            type="text"
            value={direccion}
            readOnly
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-800"
            placeholder="Dirección de la cooperativa"
          />
        </div>

        {/* CIF */}
        <div className="relative">
          <input
            type="text"
            value={cif}
            readOnly
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-800"
            placeholder="CIF de la cooperativa"
          />
        </div>
      </form>
    </section>
  );
}
