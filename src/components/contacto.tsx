"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full bg-gray-50 py-20 px-4 sm:px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contacto
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Tienes alguna duda o necesitas ayuda? Aquí estamos para lo que haga
          falta.
        </motion.p>

        {/* Tarjetas */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Tarjeta 1: Contacto directo */}
          <motion.div
            className="flex-1 bg-white p-6 text-gray-700 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaEnvelope className="text-gray-800 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Contacto directo</h3>
            <ul className="space-y-2 text-gray-600">
              <li>📍 Valencia, España</li>
              <li>✉️ info@smartfarm.com</li>
              <li>📞 +34 600 123 456</li>
            </ul>
          </motion.div>

          {/* Tarjeta 2: Ayuda */}
          <motion.div
            className="flex-1 bg-white p-6 text-gray-700 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaQuestionCircle className="text-gray-800 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-4 gray-700">
              ¿Necesitas ayuda?
            </h3>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#" className="hover:underline">
                  📘 Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  🔒 Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  📜 Aviso legal
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
