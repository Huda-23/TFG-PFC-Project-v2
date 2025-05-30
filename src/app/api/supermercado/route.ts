import { NextResponse } from "next/server";
import { getPedidosSupermercado } from "@/utils/getPedidosSupermercado";

export async function GET() {
    try {
        const pedidos = await getPedidosSupermercado();
        return NextResponse.json(pedidos);
    } catch (error) {
        console.error("Error al obtener los pedidos del supermercado:", error);
        return new NextResponse("Error interno del servidor", { status: 500 });
    }
}
