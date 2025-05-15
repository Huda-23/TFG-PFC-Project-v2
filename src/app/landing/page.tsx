// src/app/landing/page.tsx
import Hero from "@/components/hero";
import QuienesSomos from "@/components/quienesSomos";
import QueHacemos from "@/components/queHacemos";
import Contacto from "@/components/contacto";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <main>
        <QuienesSomos />
        <QueHacemos />
        <Contacto />
      </main>
    </>
  );
}
