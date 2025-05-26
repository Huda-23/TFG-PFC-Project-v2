"use server";

import connection from "@/lib/connection";

export async function saveParcelaAction(state: { success: boolean }, formData: FormData) {

    try {
        const datos = Object.fromEntries(formData.entries());
        // console.log("🚀 Datos a minar:", datos);
        const { nombre, ejercicio, parcela, coordenadas, tamano, variedad, tipo_cultivo } = datos; // al final falta hash_final (esto es temporal, puede que ni se añada después)

        console.log("Insertando en DB con:", {
            nombre, ejercicio, parcela, coordenadas, tamano, variedad, tipo_cultivo
        });

        await connection.execute(
            `INSERT INTO agricultor_registro 
        (nombre, ejercicio, parcela_id, coordenadas, tamano, variedad, tipo_cultivo)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [nombre, ejercicio, parcela, coordenadas, tamano, variedad, tipo_cultivo]
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