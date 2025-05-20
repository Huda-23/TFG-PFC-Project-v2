"use client";

export default function PasoEmpaquetado() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 5: Empaquetado
      </h2>
      <p className="text-gray-600 mb-6">
        Selecciona el tipo de empaquetado que se ha utilizado según el destino
        del producto.
      </p>

      <form className="space-y-6">
        {/* Tipo de empaquetado */}
        <div className="relative">
          <select
            name="empaquetado"
            id="empaquetado"
            defaultValue=""
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          >
            <option disabled value="">
              Tipo de empaquetado
            </option>
            <option>Cajas</option>
            <option>Bandejas de plástico</option>
            <option>Bandejas de cartón</option>
          </select>
        </div>
      </form>
    </section>
  );
}
