"use client";

export default function PasoAlmacenado() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-amber-600 mb-2">
        Paso 6: Almacenado
      </h2>
      <p className="text-gray-600 mb-6">
        Introduce la información registrada durante el proceso de almacenamiento
        del producto.
      </p>

      <form className="space-y-8">
        {/* Número de almacén */}
        <div className="relative">
          <input
            type="text"
            name="almacen"
            id="almacen"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="almacen"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Nº de almacén
          </label>
        </div>

        {/* Humedad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              name="humedad"
              id="humedad"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
            />
            <label
              htmlFor="humedad"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
            >
              Humedad (%)
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="sensorHumedad"
              id="sensorHumedad"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
            />
            <label
              htmlFor="sensorHumedad"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
            >
              ID sensor de humedad
            </label>
          </div>
        </div>

        {/* Temperatura */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              name="temperatura"
              id="temperatura"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
            />
            <label
              htmlFor="temperatura"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
            >
              Temperatura (°C)
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="sensorTemperatura"
              id="sensorTemperatura"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
            />
            <label
              htmlFor="sensorTemperatura"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
            >
              ID sensor de temperatura
            </label>
          </div>
        </div>

        {/* Tiempo de almacenaje */}
        <div className="relative">
          <input
            type="number"
            name="horasAlmacenaje"
            id="horasAlmacenaje"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="horasAlmacenaje"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Tiempo de almacenaje (horas)
          </label>
        </div>

        {/* Punto de maduración entrada/salida */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select
              name="maduracionEntrada"
              id="maduracionEntrada"
              defaultValue=""
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
            >
              <option disabled value="">
                Punto de maduración de entrada
              </option>
              <option>Verde</option>
              <option>Envero</option>
              <option>Maduro</option>
              <option>Sobremaduro</option>
            </select>
          </div>

          <div className="relative">
            <select
              name="maduracionSalida"
              id="maduracionSalida"
              defaultValue=""
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
            >
              <option disabled value="">
                Punto de maduración de salida
              </option>
              <option>Verde</option>
              <option>Envero</option>
              <option>Maduro</option>
              <option>Sobremaduro</option>
            </select>
          </div>
        </div>
      </form>
    </section>
  );
}
