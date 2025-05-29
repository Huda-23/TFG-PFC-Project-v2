import crypto from "crypto";

export function hashPassword(password: string) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

export const BLOCKCHAIN_PASSWORD = "admin123" as const;

export function simularBlockChain(valor1: string, valor2: string, password: string) {

    if (password !== BLOCKCHAIN_PASSWORD) {
        throw new Error("Contraseña incorrecta");
    }

    return crypto.createHash("sha256").update(valor1 + valor2).digest("hex");

}