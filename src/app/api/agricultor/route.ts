import { NextResponse } from "next/server";
import { getParcelasRegistradas } from "@/utils/getParcelas";

export async function GET() {
    try {
        const parcelas = await getParcelasRegistradas();
        return NextResponse.json(parcelas);
    } catch (err) {
        console.error("Error en la API de parcelas:", err);
        return new NextResponse("Error obteniendo parcelas", { status: 500 });
    }
}
