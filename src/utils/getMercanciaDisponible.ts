import connection from "@/lib/connection";

export async function getMercanciaDisponible() {
  try {
    const [rows] = await connection.query(
      `SELECT
         c.id AS cooperativa_id,
         c.hash_mercancia,
         c.hash_etiquetado,
         r.variedad,
         a.produccion AS cantidad_kg,
         a.fecha
       FROM cooperativa c
       JOIN agricultor_actividades a ON c.hash_mercancia = a.hash_final
       JOIN agricultor_registro r ON a.parcela_id = r.parcela_id
       WHERE c.hash_synchro IS NULL AND c.hash_etiquetado IS NOT NULL`
    );

    // console.log("Rows obtenidos:", rows);

    return rows as {
      cooperativa_id: number;
      hash_mercancia: string;
      hash_etiquetado: string; // <--- Añadido
      variedad: string;
      cantidad_kg: number;
      fecha: string;
    }[];
  } catch (error) {
    console.error("Error al obtener mercancias disponibles:", error);
    throw error;
  }
}



/* export async function getMercanciaDisponible() {
  try {
    const [rows] = await connection.query(
      `SELECT
         c.id AS cooperativa_id,
         c.hash_mercancia,
         r.variedad,
         a.produccion AS cantidad_kg,
         a.fecha
       FROM cooperativa c
       JOIN agricultor_actividades a ON c.hash_mercancia = a.hash_final
       JOIN agricultor_registro r ON a.parcela_id = r.parcela_id
       WHERE c.hash_synchro IS NULL AND c.hash_etiquetado IS NOT NULL`
    );

    // console.log("Rows obtenidos:", rows);

    return rows as {
      cooperativa_id: number;
      hash_mercancia: string;
      variedad: string;
      cantidad_kg: number;
      fecha: string;
    }[];
  } catch (error) {
    console.error("Error al obtener mercancias disponibles:", error);
    throw error;
  }
} */
