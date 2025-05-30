"use server";

import connection from "@/lib/connection";
import { BLOCKCHAIN_PASSWORD, simularBlockChain } from "@/utils/hash";

// Función para guardar la parcela
export async function saveParcelaAction(state: { success: boolean }, formData: FormData) {

    try {
        const datos = Object.fromEntries(formData.entries());
        // console.log(" Datos a minar:", datos);
        const { nombre, ejercicio, parcela, coordenadas, tamano, variedad, tipo_cultivo } = datos; // al final falta hash_final (esto es temporal, puede que ni se añada después)

        // console.log("Insert en DB:", {
        //     nombre, ejercicio, parcela, coordenadas, tamano, variedad, tipo_cultivo
        // });

        await connection.execute(
            `INSERT INTO agricultor_registro 
        (nombre, ejercicio, parcela_id, coordenadas, tamano, variedad, tipo_cultivo)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [nombre, ejercicio, parcela, coordenadas, tamano, variedad, tipo_cultivo]
        );


        // Aquí irá la lógica real (API o smart contract)
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


// Función para guardar las actividades
export async function saveActividadesAction(state: { success: boolean }, formData: FormData) {
    try {
        const datos = Object.fromEntries(formData.entries());

        const parcela_id = datos.parcela_id?.toString() || "";
        const produccion = parseInt(datos.produccion as string, 10) || 0;

        // Convertimos checkbox a 1 o 0
        const riego = datos.riego === "1" ? 1 : 0;
        const labrado = datos.labrado === "1" ? 1 : 0;
        const hashFinal = simularBlockChain(parcela_id, String(produccion), BLOCKCHAIN_PASSWORD);

        await connection.execute(
            `INSERT INTO agricultor_actividades (parcela_id, produccion, riego, labrado, hash_final)
       VALUES (?, ?, ?, ?, ?)`,
            [parcela_id, produccion, riego, labrado, hashFinal]
        );

        console.log("[DB] insert successful");
        return { success: true };
    } catch (error) {
        console.error("Error al guardar actividades:", error);
        return {
            success: false,
            error: "An error occurred while saving the data.",
        };
    }
}
