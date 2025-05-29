"use server";

import connection from "@/lib/connection";
import { BLOCKCHAIN_PASSWORD, simularBlockChain } from "@/utils/hash";

type HashFinalRow = {
    hash_final: string;
};

export const saveUbicacionAction = async (form: FormData) => {
    try {
        const entries = form.getAll("parcelas[]");

        for (const entry of entries) {
            const { parcela_id, ubicacion } = JSON.parse(entry as string);

            // Obtener el hash_final desde agricultor_actividades
            const [rows] = await connection.execute(
                `SELECT hash_final FROM agricultor_actividades WHERE parcela_id = ?`,
                [parcela_id]
            );

            const hash_final = (rows as HashFinalRow[])[0]?.hash_final;

            if (!hash_final) {
                throw new Error(`No se encontró hash_final para la parcela_id ${parcela_id}`);
            }

            const hashUbicacion = simularBlockChain(hash_final, ubicacion, BLOCKCHAIN_PASSWORD);

            // Insertar en la tabla cooperativa + hashUbicacion (creado arriba)
            await connection.execute(
                `INSERT INTO cooperativa (hash_mercancia, ubicacion, hash_ubicacion) VALUES (?, ?, ?)`,
                [hash_final, parseInt(ubicacion), hashUbicacion]
            );
        }

        return { success: true };
    } catch (error) {
        console.error("Error al guardar ubicaciones:", error);
        return { success: false, error };
    }
};
