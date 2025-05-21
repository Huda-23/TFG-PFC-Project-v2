"use client";

export default function PasoSensores() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 7: Datos de sensores (opcional)
      </h2>
      <p className="text-gray-600 mb-6">
        Puedes añadir lecturas si tienes sensores instalados en el cultivo.
      </p>

      <form className="space-y-6">
        {/* pH */}
        <div className="flex flex-col gap-2">
          <label htmlFor="ph" className="text-gray-700 font-medium">
            Nivel de pH del suelo
          </label>
          <input
            type="number"
            id="ph"
            name="ph"
            min="0"
            max="14"
            step="0.1"
            placeholder="pH (0 - 14)"
            className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Humedad */}
        <div className="flex flex-col gap-2">
          <label htmlFor="humedad" className="text-gray-700 font-medium">
            Humedad relativa del entorno (%)
          </label>
          <input
            type="number"
            id="humedad"
            name="humedad"
            min="0"
            max="100"
            step="0.1"
            placeholder="Humedad (%)"
            className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Temperatura */}
        <div className="flex flex-col gap-2">
          <label htmlFor="temperatura" className="text-gray-700 font-medium">
            Temperatura ambiente (°C)
          </label>
          <input
            type="number"
            id="temperatura"
            name="temperatura"
            step="0.1"
            placeholder="Temperatura (°C)"
            className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </form>
    </section>
  );
}
