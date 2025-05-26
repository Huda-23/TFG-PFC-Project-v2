"use client";

import { useRouter } from "next/navigation";
import { logoutAction } from "@/actions/logoutAction";

export default function BotonLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction(); // Server Action que borra la cookie
    router.push("/landing"); // Redirige al landing después
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-white text-[#1c1c1c] font-medium px-3 py-1.5 text-sm rounded border-2 border-white hover:bg-[#1c1c1c] hover:text-white transition duration-200 cursor-pointer"
    >
      Cerrar sesión
    </button>
  );
}
