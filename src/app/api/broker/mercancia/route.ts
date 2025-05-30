import { NextResponse } from "next/server";
import { getMercanciaDisponible } from "@/utils/getMercanciaDisponible";

export async function GET() {
    try {
        const mercancias = await getMercanciaDisponible();
        // console.log("API responde:", mercancias);
        return NextResponse.json(mercancias);
    } catch (error) {
        console.error("Error en la API de mercancias:", error);
        return new NextResponse("Error obteniendo mercancias", { status: 500 });
    }
}
