"use client";
import { useRouter } from "next/navigation";

export default function BotonLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout"); // Abajo de este archivo esta el código de api/logout/route.ts
    router.push("/landing");
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

/*
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookieStore = cookies();
  cookieStore.set("usuario", "", {
    path: "/",
    maxAge: 0,
  });

  return NextResponse.redirect(new URL("/login", req.url));
}
*/
