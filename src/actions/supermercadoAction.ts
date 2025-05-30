"use server";

import connection from "@/lib/connection";
import { BLOCKCHAIN_PASSWORD, simularBlockChain } from "@/utils/hash";

// Función para guardar los datos del pedido del supermercado
export async function saveSupermercadoAction(state: { success: boolean }, formData: FormData) {

    try {
        const datos = Object.fromEntries(formData.entries());
        // El eslint me tira un error cuando hago el hash, por lo que fuerzo los valores a string
        const variedad = datos.variedad?.toString() ?? "";
        const cantidad_kg = datos.cantidad_kg?.toString() ?? "";
        const fecha = datos.fecha?.toString() ?? "";

        if (!variedad || !cantidad_kg || !fecha) {
            return { success: false, error: "Todos los campos son obligatorios." };
        }

        //? para hacer 'hash_pedido' voy a hacer 1 hash de variedad + cantidad_kg, después ese hash -> lo hasheare con fecha
        const hash1 = simularBlockChain(variedad, cantidad_kg, BLOCKCHAIN_PASSWORD);
        const hash_pedido = simularBlockChain(hash1, fecha, BLOCKCHAIN_PASSWORD);

        await connection.execute(
            `INSERT INTO supermercado 
        (variedad, cantidad_kg, fecha, hash_pedido) VALUES (?, ?, ?, ?)`,
            [variedad, cantidad_kg, fecha, hash_pedido]
        );

        await new Promise((res) => setTimeout(res, 2000)); // Simulación de espera para simular la blockchain

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

/* Función antigua (sin hash_pedido)
export async function saveSupermercadoAction(state: { success: boolean }, formData: FormData) {

    try {
        const datos = Object.fromEntries(formData.entries());
        const { variedad, cantidad_kg, fecha } = datos;

        if (!variedad || !cantidad_kg || !fecha) {
            return { success: false, error: "Todos los campos son obligatorios." };
        }

        // hash_pedido??

        await connection.execute(
            `INSERT INTO supermercado 
        (variedad, cantidad_kg, fecha) VALUES (?, ?, ?)`,
            [variedad, cantidad_kg, fecha]
        );

        await new Promise((res) => setTimeout(res, 2000)); // Simulación de espera para simular la blockchain

        console.log("[DB] Insert successful");
        return { success: true };

    } catch (error) {
        console.error("Error al guardar los datos:", error);
        return {
            success: false,
            error: "An error occurred while saving the data.",
        };
    }
} */