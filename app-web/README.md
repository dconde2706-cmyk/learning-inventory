This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🚀 Investigación: Abstracción con ORMs (Drizzle ORM)

En proyectos de producción a gran escala, escribir SQL puro directamente en los strings del backend puede volverse difícil de mantener y propenso a errores tipográficos. Para solucionar esto, se utilizan los **ORMs (Object-Relational Mapping)**.

### 1. Ventajas de usar un ORM Tipado (TypeScript + Drizzle)
* **Type Safety (Seguridad de Tipos):** El ORM autogenera tipos de TypeScript basados en el esquema de la base de datos. Si intentas consultar una columna que no existe o insertar un texto en un campo numérico, el editor te mostrará un error en tiempo de compilación, antes de que el código llegue a ejecutarse.
* **Autocompletado (IntelliSense):** Al escribir consultas, el editor te sugiere los nombres de las tablas y columnas automáticamente.
* **Mantenibilidad:** Si cambias el nombre de una columna en el esquema, TypeScript te avisará inmediatamente de todos los archivos de tu backend que se han roto y necesitan actualizarse.

---

### 2. Implementación Técnica de Ejemplo (Drizzle ORM)

Para integrar Drizzle ORM en este proyecto de inventario, se seguirían los siguientes pasos arquitectónicos:

#### Paso A: Instalación de dependencias
```bash
npm install drizzle-orm @neondatabase/serverless
npm install -D drizzle-kit pg @types/pg