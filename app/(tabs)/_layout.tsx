import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

export default function RootLayout() {
  useEffect(() => {
    async function initDB() {
      // Abrimos o creamos la base de datos local
      const db = await SQLite.openDatabaseAsync('primer_empleo.db');
      
      // Creamos la tabla de postulaciones si no existe (Esto es para nuestro CRUD)
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS postulaciones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          puesto TEXT NOT NULL,
          empresa TEXT NOT NULL,
          nombre TEXT NOT NULL,
          correo TEXT NOT NULL,
          telefono TEXT NOT NULL,
          fecha_postulacion TEXT NOT NULL
        );
      `);
      console.log("¡Base de datos y tabla de postulaciones listas!");
    }
    initDB();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="ofertas" />
      <Stack.Screen name="postular" />
    </Stack>
  );
}