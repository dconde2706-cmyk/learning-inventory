import { neon } from '@neondatabase/serverless';

// 1. Verificamos que la contraseña de Neon exista en tu archivo .env.local
if (!process.env.DATABASE_URL) {
  throw new Error('La variable de entorno DATABASE_URL no está configurada.');
}

// 2. Creamos e exportamos la función 'sql' para poder usarla en otros archivos (como en la API)
export const sql = neon(process.env.DATABASE_URL);