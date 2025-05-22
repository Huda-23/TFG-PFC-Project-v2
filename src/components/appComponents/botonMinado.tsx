"use client";

import { Cpu, Loader2 } from "lucide-react";

type BotonMinadoProps = {
  loading?: boolean;
  label?: string;
};

export default function BotonMinadoSubmit({
  loading = false,
  label = "Minar datos",
}: BotonMinadoProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex items-center gap-2 mt-8 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Minando...
        </>
      ) : (
        <>
          <Cpu className="h-4 w-4" />
          {label}
        </>
      )}
    </button>
  );
}
