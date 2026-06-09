import { NextResponse } from 'next/server';
// Cambia el '@/lib/db' por esto:
import { sql } from '../../../lib/db';
export async function GET() {
  try {
    const data = await sql`
      SELECT p.id, p.name, p.price, p.stock, c.name as category_name
      FROM products p
      INNER JOIN categories c ON p.category_id = c.id
      ORDER BY p.name ASC
    `;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error en GET /api/products:', error);
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, price, stock, category_id } = await request.json();

    if (!name || !price || !category_id) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO products (name, price, stock, category_id)
      VALUES (${name}, ${price}, ${stock || 0}, ${category_id})
      RETURNING id, name;
    `;

    return NextResponse.json({ success: true, product: result[0] }, { status: 201 });
  } catch (error) {
    console.error('Error en POST /api/products:', error);
    return NextResponse.json({ error: 'Error al insertar el producto' }, { status: 500 });
  }
}