"use client";

export default function PasoClasificacion() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 3: Clasificación del producto
      </h2>
      <p className="text-gray-600 mb-6">
        Rellena los datos de clasificación tras el lavado y acondicionado.
      </p>

      <form className="space-y-6">
        {/* Variedad clasificada */}
        <div className="relative">
          <input
            type="text"
            name="variedadClasificada"
            id="variedadClasificada"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="variedadClasificada"
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
            Variedad clasificada
          </label>
        </div>

        {/* Calibre */}
        <div className="relative">
          <input
            type="text"
            name="calibre"
            id="calibre"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="calibre"
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
            Calibre
          </label>
        </div>
      </form>
    </section>
  );
}
