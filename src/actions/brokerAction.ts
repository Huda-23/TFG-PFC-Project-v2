"use server";

import connection from "@/lib/connection";
import { simularBlockChain, BLOCKCHAIN_PASSWORD } from "@/utils/hash";

// Acción del bróker: vincular pedido con mercancía ya etiquetada
export async function saveBrokerAction(formData: FormData) {
    try {
        const datos = Object.fromEntries(formData.entries());
        const hash_etiquetado = datos.hash_etiquetado?.toString() || "";
        const hash_pedido = datos.hash_pedido?.toString() || "";

        if (!hash_etiquetado || !hash_pedido) {
            throw new Error("Faltan datos obligatorios del formulario.");
        }

        console.log(hash_etiquetado);

        // Generar hash_sincro combinando hash_etiquetado + hash_pedido
        const hash_synchro = simularBlockChain(hash_etiquetado, hash_pedido, BLOCKCHAIN_PASSWORD);

        // Actualizar el hash_synchro en la tabla cooperativa y supermercado (sincronización)
        await connection.execute(
            `UPDATE cooperativa SET hash_synchro = ? WHERE hash_etiquetado = ?`,
            [hash_synchro, hash_etiquetado]
        );

        await connection.execute(
            `UPDATE supermercado SET hash_synchro = ? WHERE hash_pedido = ?`,
            [hash_synchro, hash_pedido]
        );

        console.log("[Broker] Sincronización exitosa");
        return { success: true };
    } catch (error) {
        console.error("Error en la sincronización del bróker:", error);
        return {
            success: false,
            error: "Error al sincronizar.",
        };
    }
}
