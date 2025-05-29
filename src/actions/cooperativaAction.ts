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


// Obtener los registros que aún no han sido etiquetados
export const getMercanciaNoEtiquetada = async () => {
    try {
        const [rows] = await connection.execute(
            `SELECT id, hash_mercancia FROM cooperativa WHERE etiquetado = 0`
        );
        return rows as { id: number; hash_mercancia: string }[];
    } catch (error) {
        console.error("Error al obtener mercancía sin etiquetar:", error);
        return [];
    }
};

// Guardar el etiquetado
export const saveEtiquetadoAction = async (form: FormData) => {
    try {
        const rawId = form.get("id");
        const rawHash = form.get("hash_mercancia");

        if (typeof rawId !== "string" || typeof rawHash !== "string") {
            throw new Error("Faltan datos válidos en el formulario.");
        }

        const id = parseInt(rawId, 10);
        const hash_mercancia = rawHash;

        if (isNaN(id)) {
            throw new Error("El ID no es un número válido.");
        }

        // Hasheo "1" porque el valor de etiquetado es 1, significa que se ha realizado, y saldrá un hash totalmente diferente.
        const hash_etiquetado = simularBlockChain(hash_mercancia, "1", BLOCKCHAIN_PASSWORD);

        await connection.execute(
            `UPDATE cooperativa SET etiquetado = 1, hash_etiquetado = ? WHERE id = ?`,
            [hash_etiquetado, id]
        );

        return { success: true };
    } catch (error) {
        console.error("Error al guardar el etiquetado:", error);
        return { success: false, error };
    }
};
