"use server";

import { hashPassword } from "@/utils/hash";
import connection from "@/lib/connection";
import { RowDataPacket } from "mysql2";

type State = {
    success: boolean;
    error?: string;
};

export async function registerAction(
    _: State,
    formData: FormData
): Promise<State> {
    const username = formData.get("username")?.toString().trim();
    const password = formData.get("password")?.toString();

    if (!username || !password) {
        return { success: false, error: "Todos los campos son obligatorios." };
    }

    try {
        // Comprobar si ya existe el usuario
        const [rows] = await connection.execute<RowDataPacket[]>(
            "SELECT id FROM usuarios WHERE username = ? LIMIT 1",
            [username]
        );

        if (rows.length > 0) {
            return { success: false, error: "El usuario ya existe." };
        }

        // Hashear la contraseña
        const hashedPassword = hashPassword(password);

        // Insertar nuevo usuario
        await connection.execute(
            "INSERT INTO usuarios (username, password) VALUES (?, ?)",
            [username, hashedPassword]
        );

        return { success: true };
    } catch (err) {
        console.error("Error en registerAction:", err);
        return { success: false, error: "Error al registrar. Inténtalo más tarde." };
    }
}
