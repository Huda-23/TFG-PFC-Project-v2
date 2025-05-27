// import { NextResponse } from "next/server";
// import connection from "@/lib/connection";

// export async function GET() {
//     try {
//         const [parcelas] = await connection.query(
//             `SELECT id, parcela_id
//        FROM agricultor_actividades
//        WHERE riego = 1 AND labrado = 1`
//         );

//         return NextResponse.json(parcelas);
//     } catch (error) {
//         console.error("Error al obtener parcelas:", error);
//         return new NextResponse("Error del servidor", { status: 500 });
//     }
// }
