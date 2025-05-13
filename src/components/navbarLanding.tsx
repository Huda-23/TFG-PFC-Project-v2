'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-[rgba(28,28,28,0.8)] backdrop-blur-md'
          : 'bg-[rgba(28,28,28,1)]'
      }`}
    >
      <div className="w-full px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/SmartFarmLogo.png"
            alt="Logo SmartFarm"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-green-500 text-xl font-bold">SmartFarm</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="enlace-app" className="text-white hover:text-green-400 transition">
            Gestión
          </a>
          <a href="#quienes-somos" className="text-white hover:text-green-400 transition">
            ¿Quiénes somos?
          </a>
          <a href="#que-hacemos" className="text-white hover:text-green-400 transition">
            ¿Qué hacemos?
          </a>
          <a href="#contacto" className="text-white hover:text-green-400 transition">
            Contacto
          </a>
        </nav>

        <Link href="/login">
          <button className="bg-white text-[#1c1c1c] font-medium px-3 py-1.5 text-sm rounded border-2 border-white hover:bg-[#1c1c1c] hover:text-white transition duration-200 cursor-pointer">
            Inicia sesión
          </button>
        </Link>
      </div>
    </header>
  );
}
