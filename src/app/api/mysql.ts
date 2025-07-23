"use server"
import mysql from 'mysql2';
export default async function ConnectMysql() {
    
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Mw@s3r@bw@nj1@2025",
      database: "collegenetwork",
    });
    return connection;
}