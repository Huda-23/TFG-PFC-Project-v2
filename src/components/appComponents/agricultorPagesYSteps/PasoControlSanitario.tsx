"use client";
import { useState } from "react";
import Image from "next/image";

export default function PasoControlSanitario() {
  const [fotoCertificado, setFotoCertificado] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFotoCertificado(e.target.files[0]);
    } else {
      setFotoCertificado(null);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-700 mb-2">
        Paso 6: Control sanitario
      </h2>
      <p className="text-gray-600 mb-6">
        Rellena los datos relacionados con las inspecciones realizadas.
      </p>

      <form className="space-y-6">
        {/* Fecha de inspección */}
        <div className="relative">
          <input
            type="date"
            name="fechaControl"
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
            placeholder=" "
          />
          <label
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-green-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-green-600"
          >
            Fecha de inspección
          </label>
        </div>

        {/* Organismo que inspecciona */}
        <div className="relative">
          <input
            type="text"
            name="organismo"
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
          />
          <label
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:top-0
              peer-focus:text-sm
              peer-focus:text-green-600
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-sm
              peer-not-placeholder-shown:text-green-600"
          >
            Organismo que inspecciona
          </label>
        </div>

        {/* Resolución */}
        <div className="relative">
          <textarea
            name="resolucion"
            placeholder="Resultado del control, observaciones..."
            rows={4}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Imagen del certificado */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium mb-1">
            Documento del control (foto):
          </label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-green-400 rounded-lg px-4 py-4 cursor-pointer hover:bg-green-50 transition text-sm">
            <span className="text-green-600 font-medium">
              Selecciona una imagen
            </span>
            <span className="text-gray-500">PNG, JPG... máx 5MB</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {fotoCertificado && (
            <div className="mt-2">
              <Image
                src={URL.createObjectURL(fotoCertificado)}
                alt="Certificado control sanitario"
                width={128}
                height={128}
                unoptimized
                className="object-cover rounded border"
              />
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
