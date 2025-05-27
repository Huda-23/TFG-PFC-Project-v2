import { NextResponse } from "next/server";
import { getParcelasConRiegoYLabrado } from "@/utils/getParcelasAgricultor";

export async function GET() {
    try {
        const parcelas = await getParcelasConRiegoYLabrado();
        return NextResponse.json(parcelas);
    } catch (error) {
        console.error("Error en la API de cooperativa/parcelas:", error);
        return new NextResponse("Error obteniendo parcelas", { status: 500 });
    }
}
