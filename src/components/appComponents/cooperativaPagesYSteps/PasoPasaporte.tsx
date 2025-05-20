"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function PasoPasaporte() {
  const [codigoPasaporte, setCodigoPasaporte] = useState("");
  const [imagenPasaporte, setImagenPasaporte] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImagenPasaporte(e.target.files[0]);
    } else {
      setImagenPasaporte(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 8: Pasaporte fitosanitario
      </h2>
      <p className="text-gray-600 mb-6">
        Introduce el código del pasaporte fitosanitario y sube una imagen del
        documento.
      </p>

      <form className="space-y-8">
        {/* Código del pasaporte */}
        <div className="relative">
          <input
            type="text"
            name="codigoPasaporte"
            id="codigoPasaporte"
            value={codigoPasaporte}
            onChange={(e) => setCodigoPasaporte(e.target.value)}
            placeholder=" "
            className="peer w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:border-blue-500 focus:outline-none transition-shadow duration-200 focus:shadow-md focus:shadow-blue-100"
          />
          <label
            htmlFor="codigoPasaporte"
            className="absolute left-4 top-3 text-gray-500 text-base transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-blue-600"
          >
            Código del pasaporte (ej: ES-CV-12345-TOM)
          </label>
        </div>

        {/* Subida de imagen del pasaporte */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Imagen del pasaporte:
          </label>
          <div
            onClick={handleUploadClick}
            className="w-full md:w-1/2 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            {imagenPasaporte ? (
              <Image
                src={URL.createObjectURL(imagenPasaporte)}
                alt="Pasaporte fitosanitario"
                width={200}
                height={200}
                unoptimized
                className="mx-auto object-cover rounded border"
              />
            ) : (
              <p>Haz clic o arrastra una imagen aquí</p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={fileInputRef}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
