"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarApp() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname.startsWith(path)
      ? "text-green-400 font-semibold transition"
      : "text-white transition hover:text-green-400";

  return (
    <header
      id="main-header"
      className="fixed top-0 w-full z-50 transition-colors duration-500 bg-[rgba(28,28,28,1)] backdrop-blur-md"
    >
      <div className="w-full px-4 py-3 flex items-center justify-between">
        {/* Logo y nombre */}
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

        {/* Enlaces */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/landing" className={linkClass("/landing")}>
            Inicio
          </Link>
          <Link href="/app" className={linkClass("/app")}>
            Gestión
          </Link>
          <Link href="/app/blockchain" className={linkClass("/app/blockchain")}>
            BlockChain
          </Link>
        </nav>

        {/* Botón login o perfil (ajustable) */}
        <Link href="/login">
          <button className="bg-white text-[#1c1c1c] font-medium px-3 py-1.5 text-sm rounded border-2 border-white hover:bg-[#1c1c1c] hover:text-white transition duration-200 cursor-pointer">
            Cerrar sesión
          </button>
        </Link>
      </div>
    </header>
  );
}
