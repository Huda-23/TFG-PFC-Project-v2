"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [verPass, setVerPass] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/app");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Título + logo en fila */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Iniciar sesión</h1>
          <Image
            src="/images/SmartFarmLogo.png"
            alt="Logo empresa"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo usuario */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-1"
            >
              Usuario
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                focus:outline-none focus:border-green-600 
                placeholder:text-gray-500 text-gray-800"
              placeholder="Introduce tu usuario"
              required
            />
          </div>

          {/* Campo contraseña con botón mostrar */}
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-1"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              id="password"
              type={verPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg 
                focus:outline-none focus:border-green-600 
                placeholder:text-gray-500 text-gray-800"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setVerPass(!verPass)}
              className={`absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700`}
              aria-label="Mostrar contraseña"
            >
              {verPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Error */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Botón login */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition cursor-pointer"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
