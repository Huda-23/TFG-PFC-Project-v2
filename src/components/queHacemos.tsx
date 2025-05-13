"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaDatabase,
  FaNetworkWired,
  FaFileAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function QueHacemos() {
  const cards = [
    {
      icon: <FaCheckCircle className="text-[#28a745] text-3xl mb-4" />,
      title: "Verificación en origen",
      description:
        "Verificamos cada actividad agrícola, desde la labranza hasta la cosecha.",
    },
    {
      icon: <FaDatabase className="text-[#28a745] text-3xl mb-4" />,
      title: "Registro inmutable",
      description:
        "Cada acción queda almacenada con fecha, ubicación y prueba.",
    },
    {
      icon: <FaNetworkWired className="text-[#28a745] text-3xl mb-4" />,
      title: "Conexión entre actores",
      description:
        "Unimos agricultores, cooperativas y brokers en una red segura.",
    },
    {
      icon: <FaFileAlt className="text-[#28a745] text-3xl mb-4" />,
      title: "Informes fiables",
      description:
        "Generamos reportes descargables y auditables con toda la trazabilidad.",
    },
  ];

  return (
    <section
      id="que-hacemos"
      className="w-full bg-gray-50 py-5 px-4 sm:px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <motion.h2
          className="text-3xl md:text-4xl font-inter font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ¿Qué hacemos?
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
          {/* Imagen a la izquierda */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/mercado.jpg"
              alt="Mercado"
              width={491}
              height={350}
              className="rounded-xl shadow-lg object-contain"
            />
          </motion.div>

          {/* Tarjetas a la derecha */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {card.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
