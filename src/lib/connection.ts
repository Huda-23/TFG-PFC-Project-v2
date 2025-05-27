import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: process.env.DB_HOST || '',
    user: process.env.BB_USER || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_SCHEMA || '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default connection;
