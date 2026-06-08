
INSERT INTO categories (name, description) VALUES 
('Electrónica', 'Dispositivos tecnológicos, gadgets y hardware'),
('Hogar', 'Muebles, decoración y accesorios para el hogar'),
('Libros', 'Literatura, textos educativos y cómics');


INSERT INTO products (name, price, stock, category_id) VALUES 
('Teclado Mecánico RGB', 89.99, 50, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Monitor 4K 27"', 349.50, 15, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Sofá 3 Plazas', 599.00, 5, (SELECT id FROM categories WHERE name = 'Hogar'));


UPDATE products 
SET stock = stock - 1 
WHERE name = 'Teclado Mecánico RGB' AND stock > 0;