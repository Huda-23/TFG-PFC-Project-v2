"use client";

export default function PasoCalidad() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-amber-600 mb-2">
        Paso 4: Control de calidad
      </h2>
      <p className="text-gray-600 mb-6">
        Introduce los datos del control de calidad realizado tras la
        clasificación del producto.
      </p>

      <form className="space-y-6">
        {/* ID del supervisor */}
        <div className="relative">
          <input
            type="text"
            name="supervisorId"
            id="supervisorId"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="supervisorId"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-amber-600"
          >
            ID del supervisor
          </label>
        </div>

        {/* Análisis */}
        <div className="relative">
          <input
            type="text"
            name="analisis"
            id="analisis"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="analisis"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-amber-600"
          >
            Resultado del análisis
          </label>
        </div>

        {/* Incidencias */}
        <div className="relative">
          <textarea
            name="incidencias"
            id="incidencias"
            rows={4}
            placeholder=" "
            className="peer w-full md:w-2/3 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none resize-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="incidencias"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-amber-600"
          >
            Incidencias detectadas
          </label>
        </div>
      </form>
    </section>
  );
}
