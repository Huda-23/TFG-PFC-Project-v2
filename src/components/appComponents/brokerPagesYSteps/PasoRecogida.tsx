"use client";

export default function PasoRecogida() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 1: Recogida y control
      </h2>
      <p className="text-gray-600 mb-6">
        Introduce los datos relacionados con la recogida del producto y el
        control de calidad inicial.
      </p>

      <form className="space-y-6">
        {/* Cooperativa de origen */}
        <div className="relative">
          <input
            type="text"
            name="cooperativa"
            id="cooperativa"
            placeholder=" "
            className="peer w-full md:w-2/3 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="cooperativa"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:top-0
            peer-focus:text-sm
            peer-focus:text-blue-600
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:text-blue-600"
          >
            Nombre de la cooperativa de origen
          </label>
        </div>

        {/* Fecha de recogida */}
        <div className="relative">
          <input
            type="date"
            name="fechaRecogida"
            id="fechaRecogida"
            className="peer w-full md:w-2/3 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="fechaRecogida"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
            peer-focus:top-0
            peer-focus:text-sm
            peer-focus:text-blue-600
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:text-blue-600"
          >
            Fecha de recogida
          </label>
        </div>

        {/* Lugar de carga */}
        <div className="relative">
          <input
            type="text"
            name="lugarCarga"
            id="lugarCarga"
            placeholder=" "
            className="peer w-full md:w-2/3 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-50"
          />
          <label
            htmlFor="lugarCarga"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:top-0
            peer-focus:text-sm
            peer-focus:text-blue-600
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:text-blue-600"
          >
            Lugar de carga
          </label>
        </div>

        {/* Observaciones del control de calidad */}
        <div className="relative">
          <textarea
            name="controlCalidad"
            id="controlCalidad"
            placeholder=" "
            rows={3}
            className="peer w-full md:w-2/3 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white resize-none focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="controlCalidad"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:top-0
            peer-focus:text-sm
            peer-focus:text-blue-600
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:text-blue-600"
          >
            Observaciones del control de calidad
          </label>
        </div>
      </form>
    </section>
  );
}
