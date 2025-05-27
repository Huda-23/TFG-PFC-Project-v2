import connection from "@/lib/connection";

type ParcelaRow = { parcela_id: string };

export async function getParcelasRegistradas(): Promise<string[]> {
    const [rows] = await connection.query("SELECT parcela_id FROM agricultor_registro");
    return (rows as ParcelaRow[]).map((row) => row.parcela_id);
}
