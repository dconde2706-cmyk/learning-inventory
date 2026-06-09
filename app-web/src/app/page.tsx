'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category_name: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error cargando productos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Inventario de Productos</h1>
        <p className="text-gray-600 mb-6">Datos en tiempo real desde Neon Postgres Serverless</p>

        {loading ? (
          <p className="text-blue-500 animate-pulse">Cargando productos de la base de datos...</p>
        ) : products.length === 0 ? (
          <p className="text-amber-600 bg-amber-50 p-4 rounded-lg">No hay productos registrados en el inventario.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full table-auto text-left">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 font-semibold text-gray-700">Producto</th>
                  <th className="px-6 py-3 font-semibold text-gray-700">Categoría</th>
                  <th className="px-6 py-3 font-semibold text-gray-700 text-right">Precio</th>
                  <th className="px-6 py-3 font-semibold text-gray-700 text-right">Stock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium">{product.name}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                        {product.category_name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono">${Number(product.price).toFixed(2)}</td>
                    <td className="px-6 py-4 text-right font-mono">{product.stock} u.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}