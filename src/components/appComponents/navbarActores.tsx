"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const actors = [
  { name: "Campo", path: "/app/agricultor" },
  { name: "Cooperativa", path: "/app/cooperativa" },
  { name: "Broker", path: "/app/broker" },
  { name: "Supermercado", path: "/app/supermercado" },
];

export default function ActorNavbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[73px] z-40 bg-gray-100 border-b border-gray-300 shadow-sm">
      <ul className="flex gap-10 px-8 pt-5 pb-4 text-xl font-bold">
        {actors.map((actor) => {
          const active = pathname === actor.path;

          return (
            <li key={actor.path} className="relative">
              <Link
                href={actor.path}
                className={`pb-1 transition-colors ${
                  active ? "text-black" : "text-gray-700 hover:text-black"
                }`}
              >
                {actor.name}
              </Link>

              {/* Subrayado solo si activo */}
              {active && (
                <span className="absolute left-0 -bottom-[17px] w-full h-[3px] bg-black" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
