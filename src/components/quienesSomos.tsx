"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="w-full bg-gray-50 py-20 px-4 sm:px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-inter font-bold text-gray-800   mb-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ¿Quiénes somos?
        </motion.h2>

        {/* Contenido: texto + imagen */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Texto */}
          <motion.div
            className="flex-1 text-gray-700 text-base md:text-lg font-inter leading-relaxed tracking-normal"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              Somos <strong>SmartFarm</strong>, un proyecto nacido en Valencia
              con el compromiso de garantizar la transparencia y seguridad en la
              cadena agroalimentaria.
            </p>
            <p className="mb-4">
              Nuestra misión es ofrecer a agricultores, cooperativas y brokers
              una plataforma sencilla que permita registrar cada paso del
              cultivo y verificar su autenticidad usando tecnología blockchain.
            </p>
            <h3 className="text-xl font-bold italic mb-4">
              ¿Por qué Blockchain?
            </h3>
            <p className="mb-4">
              Utilizamos tecnología blockchain porque es la forma más segura y
              transparente de almacenar información.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Inmutable</strong>: una vez registrado, el dato no se
                puede modificar.
              </li>
              <li>
                <strong>Distribuido</strong>: la información no está en un solo
                servidor, sino replicada en miles de nodos.
              </li>
              <li>
                <strong>Trazable</strong>: cada acción queda registrada con
                fecha, autor y prueba digital.
              </li>
              <li>
                <strong>Pública y verificable</strong>: cualquiera puede auditar
                lo que se ha hecho, sin depender de un tercero.
              </li>
            </ul>
            <p>
              Esto garantiza que <strong>cada paso del proceso agrícola</strong>{" "}
              esté protegido contra manipulaciones, engaños o errores, y que el
              consumidor o el broker tenga <strong>total confianza</strong> en
              el producto.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/tractor.jpg"
              alt="Tractor en el campo"
              width={450}
              height={300}
              className="rounded-xl shadow-lg object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
