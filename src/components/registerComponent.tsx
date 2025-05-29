"use client";

import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { registerAction } from "@/actions/registerAction";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

const initialState = { success: false, error: undefined };

export default function RegisterPage() {
  const [verPass, setVerPass] = useState(false);
  const [formState, formAction] = useActionState(registerAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (formState.success) {
      router.push("/login");
    }
  }, [formState.success, router]);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Registrarse</h1>
          <Image
            src="/images/SmartFarmLogo.png"
            alt="Logo empresa"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>

        <form action={formAction} className="space-y-5" noValidate>
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-1"
            >
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 placeholder:text-gray-400 text-gray-800"
              placeholder="Elige un nombre de usuario"
              required
              aria-invalid={!!formState.error}
              aria-describedby="register-error"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-1"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={verPass ? "text" : "password"}
                autoComplete="new-password"
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 placeholder:text-gray-400 text-gray-800"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setVerPass(!verPass)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer focus:outline-none"
                aria-label={
                  verPass ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                {verPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {formState.error && (
            <p id="register-error" className="text-red-600 text-sm text-center">
              {formState.error}
            </p>
          )}

          <p className="text-center text-sm text-gray-600 mt-2">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Inicia sesión aquí
            </a>
          </p>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition disabled:opacity-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            disabled={formState.success}
          >
            {formState.success ? "Registrando..." : "Registrarse"}
          </button>
        </form>
      </div>
    </main>
  );
}
