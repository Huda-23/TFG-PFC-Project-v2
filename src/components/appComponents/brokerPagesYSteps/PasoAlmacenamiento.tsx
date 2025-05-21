"use client";

export default function PasoAlmacenamiento() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 2: Almacenamiento
      </h2>
      <p className="text-gray-600 mb-6">
        Registra la información relacionada con el almacenamiento del producto.
      </p>

      <form className="space-y-8">
        {/* Nº de almacén */}
        <div className="relative">
          <input
            type="text"
            name="almacen"
            id="almacen"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
              focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="almacen"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-blue-600"
          >
            Nº de almacén
          </label>
        </div>

        {/* Tiempo de almacenamiento */}
        <div className="relative">
          <input
            type="number"
            name="tiempoAlmacen"
            id="tiempoAlmacen"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
              focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="tiempoAlmacen"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-blue-600"
          >
            Tiempo de almacenamiento (horas)
          </label>
        </div>

        {/* Simulación sensores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Humedad */}
          <div className="relative">
            <input
              type="number"
              name="humedad"
              id="humedad"
              placeholder=" "
              defaultValue={65}
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="humedad"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-blue-600"
            >
              Humedad (%)
            </label>
          </div>

          {/* Temperatura */}
          <div className="relative">
            <input
              type="number"
              name="temperatura"
              id="temperatura"
              placeholder=" "
              defaultValue={8}
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="temperatura"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-blue-600"
            >
              Temperatura (°C)
            </label>
          </div>
        </div>

        {/* Punto de maduración entrada */}
        <div className="relative">
          <select
            name="maduracionEntrada"
            id="maduracionEntrada"
            defaultValue=""
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
              focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          >
            <option disabled value="">
              Punto de maduración al entrar
            </option>
            <option>Verde</option>
            <option>Envero</option>
            <option>Maduro</option>
            <option>Sobremaduro</option>
          </select>
        </div>

        {/* Punto de maduración salida */}
        <div className="relative">
          <select
            name="maduracionSalida"
            id="maduracionSalida"
            defaultValue=""
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
              focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          >
            <option disabled value="">
              Punto de maduración al salir
            </option>
            <option>Verde</option>
            <option>Envero</option>
            <option>Maduro</option>
            <option>Sobremaduro</option>
          </select>
        </div>
      </form>
    </section>
  );
}
