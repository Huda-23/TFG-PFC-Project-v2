"use server";

import connection from "@/lib/connection";
import { hashPassword } from "@/utils/hash";

type LoginResult = {
    success: boolean;
    error?: string;
};

export async function loginAction(
    _: LoginResult,
    formData: FormData
): Promise<LoginResult> {
    try {
        const username = formData.get("username")?.toString() || "";
        const password = formData.get("password")?.toString() || "";

        if (!username || !password) {
            return { success: false, error: "Faltan datos" };
        }

        const [rows] = await connection.query(
            "SELECT * FROM usuarios WHERE username = ?",
            [username]
        );

        const users = rows as { username: string; password: string }[];

        if (users.length === 0) {
            return { success: false, error: "Usuario no encontrado" };
        }

        const user = users[0];
        const inputPasswordHash = hashPassword(password);

        if (inputPasswordHash !== user.password) {
            return { success: false, error: "Contraseña incorrecta" };
        }

        return { success: true };
    } catch (error) {
        console.error("Error en login:", error);
        return { success: false, error: "Error interno" };
    }
}
