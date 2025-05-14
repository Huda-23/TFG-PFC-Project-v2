// src/app/landing/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-200 font-sans text-sm px-5 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Columna 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">SmartFarm</h3>
            <p>Valencia, España</p>
            <p>
              <a
                href="mailto:info@smartfarm.com"
                className="text-gray-400 hover:text-white hover:underline"
              >
                info@smartfarm.com
              </a>
            </p>
          </div>

          {/* Columna 2 */}
          <div className="pr-8 flex justify-center md:justify-start items-center">
            <Image
              src="/images/SmartFarmLogo.png"
              alt="Logo SmartFarm"
              width={130}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/app"
                  className="text-gray-400 hover:text-white hover:underline"
                >
                  Gestión
                </a>
              </li>
              <li>
                <a
                  href="#quienes-somos"
                  className="text-gray-400 hover:text-white hover:underline"
                >
                  Quiénes somos
                </a>
              </li>
              <li>
                <a
                  href="#que-hacemos"
                  className="text-gray-400 hover:text-white hover:underline"
                >
                  Qué hacemos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-white hover:underline"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
          © 2025 SmartFarm
        </div>
      </div>
    </footer>
  );
}
