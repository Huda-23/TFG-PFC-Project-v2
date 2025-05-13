"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCheckCircle,
  FaDatabase,
  FaNetworkWired,
  FaFileAlt,
} from "react-icons/fa";

export default function QueHacemos() {
  return (
    <section
      id="que-hacemos"
      className="w-full bg-white py-20 px-4 sm:px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Imagen */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/mercado.png"
            alt="Mercado"
            width={450}
            height={300}
            className="rounded-xl shadow-lg object-contain mt-10"
          />
        </motion.div>

        {/* Tarjetas */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Qué hacemos?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-black text-3xl mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-center">
                Verificación en origen
              </h3>
              <p className="text-sm text-center">
                Verificamos cada actividad agrícola, desde la labranza hasta la
                cosecha.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaDatabase className="text-black text-3xl mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-center">
                Registro inmutable
              </h3>
              <p className="text-sm text-center">
                Cada acción queda almacenada con fecha, ubicación y prueba.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaNetworkWired className="text-black text-3xl mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-center">
                Conexión entre actores
              </h3>
              <p className="text-sm text-center">
                Unimos agricultores, cooperativas y brokers en una red segura.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaFileAlt className="text-black text-3xl mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-center">
                Informes fiables
              </h3>
              <p className="text-sm text-center">
                Generamos reportes descargables y auditables con toda la
                trazabilidad.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
