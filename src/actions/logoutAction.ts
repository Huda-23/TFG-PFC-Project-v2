"use server";

import { cookies } from "next/headers";

export async function logoutAction() {
    const cookieStore = await cookies(); // await porque sino peta
    cookieStore.set("usuario", "", {
        path: "/",
        expires: new Date(0),
    });
}
