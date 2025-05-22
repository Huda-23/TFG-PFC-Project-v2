"use client";
import { useEffect, useState } from "react";

type Props = {
  actor: string;
  onSeleccionar: (hash: string) => void;
};

// Esto es la tabla que aparecerá en las páginas de los pasos, dentro de los formularios. Para poder seleccionar el hash anterior de un actor (O PASO?).
export default function SelectorHashAnterior({ actor, onSeleccionar }: Props) {
  const [hashes, setHashes] = useState<string[]>([]);
  const [seleccionado, setSeleccionado] = useState("");

  useEffect(() => {
    fetch(`/api/hashes/${actor}`)
      .then((res) => res.json())
      .then((data) => setHashes(data.map((d: any) => d.hash_datos)));
  }, [actor]);

  return (
    <div className="md:w-80 w-full border border-gray-300 rounded-lg p-4 h-fit mt-8 md:mt-0">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Selecciona un hash anterior de {actor}
      </h3>
      <ul className="space-y-3 max-h-[220px] overflow-y-auto">
        {hashes.map((hash) => (
          <li key={hash} className="flex items-center gap-2">
            <input
              type="radio"
              name="hashSeleccionado"
              value={hash}
              checked={seleccionado === hash}
              onChange={() => {
                setSeleccionado(hash);
                onSeleccionar(hash);
              }}
              className="accent-green-600"
            />
            <span className="font-mono text-xs truncate">{hash}</span>
          </li>
        ))}
        {hashes.length === 0 && (
          <li className="text-gray-400 text-sm">
            No hay hashes disponibles aún
          </li>
        )}
      </ul>
    </div>
  );
}
