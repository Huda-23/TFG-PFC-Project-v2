"use client";

export default function PasoRecepcion() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 1: Recepción del producto
      </h2>
      <p className="text-gray-600 mb-6">
        Registra los datos básicos en el momento de recepción de los tomates.
      </p>

      <form className="space-y-6">
        {/* Fecha de recepción */}
        <div className="relative">
          <input
            type="date"
            name="fechaRecepcion"
            id="fechaRecepcion"
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="fechaRecepcion"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-blue-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-blue-600"
          >
            Fecha de recepción
          </label>
        </div>

        {/* Variedad */}
        <div className="relative">
          <input
            type="text"
            name="variedad"
            id="variedad"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="variedad"
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
            Variedad de tomate
          </label>
        </div>

        {/* Cantidad en kilos */}
        <div className="relative">
          <input
            type="number"
            name="cantidadKg"
            id="cantidadKg"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="cantidadKg"
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
            Cantidad en kilos (kg)
          </label>
        </div>

        {/* Punto de maduración */}
        <div className="relative">
          <select
            name="maduracion"
            id="maduracion"
            defaultValue=""
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          >
            <option disabled value="">
              Punto de maduración
            </option>
            <option>Verde</option>
            <option>Envero</option>
            <option>Maduro</option>
            <option>Sobremaduro</option>
          </select>
          {/* <label
            htmlFor="maduracion"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-blue-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-blue-600"
          >
            Punto de maduración
          </label> */}
        </div>

        {/* Transportista */}
        <div className="relative">
          <input
            type="text"
            name="transportista"
            id="transportista"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="transportista"
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
            Nombre del transportista
          </label>
        </div>

        {/* Matrícula y tipo de vehículo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="matricula"
            id="matricula"
            placeholder="Matrícula del vehículo"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />

          <select
            name="tipoVehiculo"
            id="tipoVehiculo"
            defaultValue=""
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          >
            <option disabled value="">
              Tipo de vehículo
            </option>
            <option>Furgoneta</option>
            <option>Camión</option>
            <option>Trailer refrigerado</option>
            <option>Otro</option>
          </select>
        </div>
      </form>
    </section>
  );
}
