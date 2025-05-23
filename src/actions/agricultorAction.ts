"use server";

import connection from "@/lib/connection";

export async function saveParcelaAction(state: { success: boolean }, formData: FormData) {

    try {
        const datos = Object.fromEntries(formData.entries());
        console.log("🚀 Datos a minar:", datos);
        const { nombre, ejercicio, parcela_id, coordenadas, tamano, variedad, tipo_cultivo, hash_final } = datos;

        await connection.execute(
            'INSERT INTO agricultor_registro VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, NULL)',
            [nombre, ejercicio, parcela_id, coordenadas, tamano, variedad, tipo_cultivo, hash_final]
        );


        // Aquí irá tu lógica real (API o smart contract)
        await new Promise((res) => setTimeout(res, 2000)); // Simulación

        console.log("[DB] Insert successful");
        return { success: true };

    } catch (error) {
        console.error("Error al guardar los datos:", error);
        return {
            success: false,
            error: "An error occurred while saving the data.",
        };
    }
}