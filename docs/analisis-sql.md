# Análisis SQL: Diferencias entre JOINs

## INNER JOIN vs LEFT JOIN

### INNER JOIN (Coincidencia Estricta)
Une dos tablas y **solo** muestra las filas donde hay una coincidencia exacta en ambas partes.
- *Escenario real:* Mostrar una lista de facturas de envío. Solo quieres ver productos que tengan un proveedor asignado. Si hay un producto sin proveedor, no debe aparecer.

### LEFT JOIN (Inclusión del lado izquierdo)
Muestra **todos** los registros de la tabla de la izquierda (la primera que nombras), aunque no tengan correspondencia en la tabla de la derecha (donde pondrá valores `NULL`).
- *Escenario real:* Un reporte del panel de administración que muestre todas las categorías de la tienda y cuántos productos tienen. Si acabas de crear la categoría "Mascotas" y aún tiene 0 productos, `LEFT JOIN` la mostrará igual (marcando NULL o 0), mientras que `INNER JOIN` la ignoraría por completo.