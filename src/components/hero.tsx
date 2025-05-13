"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <Image
        src="/images/tomate.jpg"
        alt="Fondo de SmartFarm"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Capa oscura opcional */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-inter font-bold mb-4">
          Bienvenido a SmartFarm
        </h1>
        <p className="text-lg md:text-2xl tracking-wide font-inter font-light mb-8 max-w-2xl">
          Trazabilidad alimentaria segura, eficiente y transparente con
          tecnología blockchain.
        </p>
        <a
          href="#quienes-somos"
          className="bg-white text-[#1c1c1c] px-6 py-3 rounded-md font-semibold hover:bg-green-600 hover:text-white transition"
        >
          Empezar ahora
        </a>
      </div>
    </section>
  );
}
