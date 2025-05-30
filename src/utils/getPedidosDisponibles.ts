import connection from "@/lib/connection";

export async function getPedidosDisponibles() {
    try {
        const [rows] = await connection.query(
            `SELECT variedad, cantidad_kg, fecha, hash_pedido
       FROM supermercado
       WHERE hash_synchro IS NULL`
        );

        return rows as {
            id: number;
            variedad: string;
            cantidad_kg: number;
            fecha: string;
            hash_pedido: string;
        }[];
    } catch (error) {
        console.error("Error al obtener pedidos disponibles:", error);
        throw error;
    }
}
