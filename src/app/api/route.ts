// app/api/usuarios/route.ts
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || '',
      user: process.env.BB_USER || '',
      password: process.env.DB_PASS || '',
      database: process.env.DB_SCHEMA || ''
    });

    const [rows] = await connection.execute('SELECT * FROM users');
    
    console.log('Usuarios desde la base de datos:', rows); // Imprime en consola del servidor

    await connection.end();

    return NextResponse.json({ users: rows });
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos:', error);
    return new NextResponse('Error al consultar la base de datos', { status: 500 });
  }
}
