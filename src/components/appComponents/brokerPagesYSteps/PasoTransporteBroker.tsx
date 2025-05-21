"use client";

export default function PasoTransporteBroker() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 3: Transporte y entrega
      </h2>
      <p className="text-gray-600 mb-6">
        Rellena los datos del transporte hasta el destino final del producto.
      </p>

      <form className="space-y-6">
        {/* Empresa de origen */}
        <div className="relative">
          <input
            type="text"
            name="empresaOrigen"
            id="empresaOrigen"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
              focus:border-blue-500 focus:outline-none transition-shadow duration-200 
              focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="empresaOrigen"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
              peer-not-placeholder-shown:text-blue-600"
          >
            Empresa de origen (razón social)
          </label>
        </div>

        {/* Lugar de carga */}
        <div className="relative">
          <input
            type="text"
            name="lugarCarga"
            id="lugarCarga"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
              focus:border-blue-500 focus:outline-none transition-shadow duration-200 
              focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="lugarCarga"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
              peer-not-placeholder-shown:text-blue-600"
          >
            Lugar de carga
          </label>
        </div>

        {/* Mozo ID y CMR ID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="mozoId"
              id="mozoId"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 
                focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="mozoId"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
                peer-not-placeholder-shown:text-blue-600"
            >
              Mozo encargado (ID)
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="cmrId"
              id="cmrId"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 
                focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="cmrId"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
                peer-not-placeholder-shown:text-blue-600"
            >
              CMR ID
            </label>
          </div>
        </div>

        {/* Total de Kg y Chofer ID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              name="totalKg"
              id="totalKg"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 
                focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="totalKg"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
                peer-not-placeholder-shown:text-blue-600"
            >
              Total de kg transportados
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="choferId"
              id="choferId"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 
                focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="choferId"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
                peer-not-placeholder-shown:text-blue-600"
            >
              ID del chofer
            </label>
          </div>
        </div>

        {/* Empresa destino y lugar descarga */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="empresaDestino"
              id="empresaDestino"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 
                focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="empresaDestino"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
                peer-not-placeholder-shown:text-blue-600"
            >
              Empresa destino
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="lugarDescarga"
              id="lugarDescarga"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
                focus:border-blue-500 focus:outline-none transition-shadow duration-200 
                focus:shadow-md focus:shadow-blue-100"
            />
            <label
              htmlFor="lugarDescarga"
              className="absolute left-4 top-3 text-gray-500 text-base transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
                peer-not-placeholder-shown:text-blue-600"
            >
              Lugar de descarga
            </label>
          </div>
        </div>

        {/* Sensor ID */}
        <div className="relative">
          <input
            type="text"
            name="sensorId"
            id="sensorId"
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white 
              focus:border-blue-500 focus:outline-none transition-shadow duration-200 
              focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="sensorId"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600 
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm 
              peer-not-placeholder-shown:text-blue-600"
          >
            Sensor ID (monitorización)
          </label>
        </div>
      </form>
    </section>
  );
}
