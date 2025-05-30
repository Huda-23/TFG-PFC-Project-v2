import connection from "@/lib/connection";

export async function getPedidosSupermercado() {
    try {
        const [rows] = await connection.query(
            `SELECT id, variedad, cantidad_kg, fecha, hash_synchro FROM supermercado`
        );

        return rows as {
            id: number;
            variedad: string;
            cantidad_kg: number;
            fecha: string;
            hash_synchro: string | null;
        }[];
    } catch (error) {
        console.error("Error al obtener los pedidos del supermercado:", error);
        throw error;
    }
}
