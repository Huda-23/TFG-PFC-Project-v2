"use client";

export default function PasoTransporte() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-amber-600 mb-2">
        Paso 10: Transporte del producto
      </h2>
      <p className="text-gray-600 mb-6">
        Introduce los datos relacionados con el transporte de la mercancía hasta
        el destino final.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Empresa de origen */}
        <div className="relative">
          <input
            type="text"
            name="empresaOrigen"
            id="empresaOrigen"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="empresaOrigen"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Empresa de origen
          </label>
        </div>

        {/* Lugar de carga */}
        <div className="relative">
          <input
            type="text"
            name="lugarCarga"
            id="lugarCarga"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="lugarCarga"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Lugar de carga
          </label>
        </div>

        {/* Mozo ID */}
        <div className="relative">
          <input
            type="text"
            name="mozoId"
            id="mozoId"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="mozoId"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Mozo ID
          </label>
        </div>

        {/* Total Kg */}
        <div className="relative">
          <input
            type="number"
            name="totalKg"
            id="totalKg"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="totalKg"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Total (kg)
          </label>
        </div>

        {/* CMR ID */}
        <div className="relative">
          <input
            type="text"
            name="cmrId"
            id="cmrId"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="cmrId"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            CMR ID
          </label>
        </div>

        {/* Chofer ID */}
        <div className="relative">
          <input
            type="text"
            name="choferId"
            id="choferId"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="choferId"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Chofer ID
          </label>
        </div>

        {/* Empresa destino */}
        <div className="relative">
          <input
            type="text"
            name="empresaDestino"
            id="empresaDestino"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="empresaDestino"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Empresa destino
          </label>
        </div>

        {/* Lugar de descarga */}
        <div className="relative">
          <input
            type="text"
            name="lugarDescarga"
            id="lugarDescarga"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="lugarDescarga"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Lugar de descarga
          </label>
        </div>

        {/* Sensor ID */}
        <div className="relative">
          <input
            type="text"
            name="sensorId"
            id="sensorId"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-amber-100"
          />
          <label
            htmlFor="sensorId"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-amber-600"
          >
            Sensor ID
          </label>
        </div>
      </form>
    </section>
  );
}
