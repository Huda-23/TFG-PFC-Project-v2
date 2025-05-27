import connection from "@/lib/connection";

export type ParcelaConId = { id: number; parcela_id: string };

export async function getParcelasConRiegoYLabrado(): Promise<ParcelaConId[]> {
    const [rows] = await connection.query(
        `SELECT parcela_id
     FROM agricultor_actividades
     WHERE riego = 1 AND labrado = 1`
    );

    return rows as ParcelaConId[];
}
