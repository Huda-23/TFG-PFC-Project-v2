// src/app/landing/page.tsx
import Hero from '@/components/hero'
import QuienesSomos from '@/components/quienesSomos'
import QueHacemos from '@/components/queHacemos'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'
import Navbar from '@/components/navbarLanding'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <QuienesSomos />
        <QueHacemos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

