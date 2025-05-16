"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function PasoTratamientos() {
  const [usarFertilizante, setUsarFertilizante] = useState(false);
  const [usarPesticida, setUsarPesticida] = useState(false);
  const [fertilizanteFoto, setFertilizanteFoto] = useState<File | null>(null);
  const [pesticidaFoto, setPesticidaFoto] = useState<File | null>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: (file: File | null) => void
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  return (
    <section className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Paso 3: Tratamientos aplicados
      </h2>
      <p className="text-gray-600 mb-6">
        Indica si has utilizado fertilizantes o pesticidas, y rellena los
        detalles.
      </p>

      <form className="space-y-8">
        {/* Fertilizante */}
        <div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="fertilizante"
              checked={usarFertilizante}
              onChange={() => setUsarFertilizante(!usarFertilizante)}
              className="peer hidden"
            />
            <label
              htmlFor="fertilizante"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  usarFertilizante
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-400"
                }`}
              >
                {usarFertilizante && (
                  <span className="text-white text-sm font-bold">✓</span>
                )}
              </span>
              <span className="text-gray-800 font-medium">
                ¿Se ha usado fertilizante?
              </span>
            </label>
          </div>

          <AnimatePresence>
            {usarFertilizante && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Inputs */}
                  <div className="space-y-4 self-start">
                    <input
                      type="number"
                      placeholder="Cantidad por hectárea (kg/ha)"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Disolución (%, ml/L, etc)"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Marca del fertilizante"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Imagen */}
                  <div className="space-y-2 self-center">
                    <label className="block text-gray-700 font-medium mb-1">
                      Foto del fertilizante:
                    </label>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-lg px-4 py-4 cursor-pointer hover:bg-blue-50 transition text-sm">
                      <span className="text-blue-600 font-medium">
                        📎 Selecciona una imagen
                      </span>
                      <span className="text-gray-500">PNG, JPG... máx 5MB</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageChange(e, setFertilizanteFoto)
                        }
                        className="hidden"
                      />
                    </label>

                    {fertilizanteFoto && (
                      <div className="mt-2">
                        <Image
                          src={URL.createObjectURL(fertilizanteFoto)}
                          alt="Foto fertilizante"
                          width={128}
                          height={128}
                          unoptimized
                          className="object-cover rounded border"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pesticida */}
        <div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="pesticida"
              checked={usarPesticida}
              onChange={() => setUsarPesticida(!usarPesticida)}
              className="peer hidden"
            />
            <label
              htmlFor="pesticida"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  usarPesticida
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-400"
                }`}
              >
                {usarPesticida && (
                  <span className="text-white text-sm font-bold">✓</span>
                )}
              </span>
              <span className="text-gray-800 font-medium">
                ¿Se ha usado pesticida?
              </span>
            </label>
          </div>

          <AnimatePresence>
            {usarPesticida && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Inputs */}
                  <div className="space-y-4 self-start">
                    <input
                      type="number"
                      placeholder="Cantidad por hectárea (kg/ha)"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Disolución (%, ml/L, etc)"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Marca del pesticida"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Imagen */}
                  <div className="space-y-2 self-center">
                    <label className="block text-gray-700 font-medium mb-1">
                      Foto del pesticida:
                    </label>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-lg px-4 py-4 cursor-pointer hover:bg-blue-50 transition text-sm">
                      <span className="text-blue-600 font-medium">
                        📎 Selecciona una imagen
                      </span>
                      <span className="text-gray-500">PNG, JPG... máx 5MB</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setPesticidaFoto)}
                        className="hidden"
                      />
                    </label>

                    {pesticidaFoto && (
                      <div className="mt-2">
                        <Image
                          src={URL.createObjectURL(pesticidaFoto)}
                          alt="Foto pesticida"
                          width={128}
                          height={128}
                          unoptimized
                          className="object-cover rounded border"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </section>
  );
}
