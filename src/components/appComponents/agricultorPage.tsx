"use client";
// import { useState } from "react";

export default function FormAgricultor() {
  //   const [formData, setFormData] = useState({});

  return (
    <div className="max-w-3xl mx-auto py-8 bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">
        Registro de actividad agrícola
      </h1>

      {/* Bloque 1: Datos de la parcela */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Datos de la parcela</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="ID de parcela" className="input" />
          <input type="text" placeholder="Coordenadas" className="input" />
          <input type="text" placeholder="Tamaño (ha)" className="input" />
          <select className="input">
            <option>Selecciona variedad</option>
            <option>Tomate pera</option>
            <option>Tomate valenciano</option>
            <option>Otro</option>
          </select>
          <div className="flex items-center gap-4">
            <label>Ecológico</label>
            <input type="radio" name="cultivo" value="ecologico" />
            <label>Convencional</label>
            <input type="radio" name="cultivo" value="convencional" />
          </div>
        </div>
      </section>

      {/* Bloque 2: Actividades */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Actividades realizadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Labranza",
            "Fertilización",
            "Poda",
            "Riego",
            "Fumigación",
            "Contratación de personal",
          ].map((actividad) => (
            <label key={actividad} className="flex items-center gap-2">
              <input type="checkbox" />
              {actividad}
            </label>
          ))}
        </div>
      </section>

      {/* Bloque 3: Tratamientos */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Tratamientos aplicados</h2>
        <div className="mb-4">
          <h3 className="font-medium">Fertilizantes</h3>
          <input type="text" placeholder="Cantidad/ha" className="input" />
          <input type="text" placeholder="Marca" className="input" />
          <input type="file" />
        </div>
        <div>
          <h3 className="font-medium">Pesticidas</h3>
          <input type="text" placeholder="Cantidad/ha" className="input" />
          <input type="text" placeholder="Marca" className="input" />
          <input type="file" />
        </div>
      </section>

      {/* Bloque 4: Cosecha */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Cosecha</h2>
        <input type="date" className="input" />
        <input type="number" placeholder="Cantidad (kg)" className="input" />
        <select className="input">
          <option>Punto de maduración</option>
          <option>Verde</option>
          <option>Medio</option>
          <option>Maduro</option>
        </select>
        <textarea placeholder="Incidencias" className="input" />
      </section>

      {/* Bloque 5: Controles sanitarios */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Control sanitario</h2>
        <label className="flex items-center gap-2 mb-2">
          <input type="checkbox" />
          Inspección realizada
        </label>
        <input type="text" placeholder="Organismo" className="input" />
        <input type="date" className="input" />
        <input type="text" placeholder="Resultado" className="input" />
        <input type="file" />
      </section>

      {/* Bloque 6: Precio y destino */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Destino de la cosecha</h2>
        <input
          type="number"
          placeholder="Precio por kg (€)"
          className="input"
        />
        <select className="input">
          <option>Selecciona cooperativa</option>
          <option>Cooperativa del Perelló</option>
          <option>Cooperativa X</option>
        </select>
        <input
          type="text"
          placeholder="Matrícula del transporte"
          className="input"
        />
        <input type="text" placeholder="Vehículo" className="input" />
      </section>

      {/* Bloque 7: Datos de sensores (simulado) */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Datos ambientales (simulados)
        </h2>
        <input type="number" placeholder="Temperatura (°C)" className="input" />
        <input type="number" placeholder="Humedad (%)" className="input" />
      </section>

      {/* Submit */}
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Enviar datos
      </button>
    </div>
  );
}
