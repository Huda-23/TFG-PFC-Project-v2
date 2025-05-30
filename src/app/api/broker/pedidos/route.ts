import { NextResponse } from "next/server";
import { getPedidosDisponibles } from "@/utils/getPedidosDisponibles";

export async function GET() {
    try {
        const pedidos = await getPedidosDisponibles();

        return NextResponse.json(pedidos);
    } catch (error) {
        console.error("Error en la API de pedidos:", error);
        return new NextResponse("Error obteniendo pedidos", { status: 500 });
    }
}
