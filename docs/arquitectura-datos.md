# Análisis Arquitectónico de Datos

## Significado de `category_id` como Foreign Key
Una **Clave Foránea (Foreign Key)** es una columna que crea un vínculo directo entre dos tablas. En este proyecto, `category_id` en la tabla `products` apunta al `id` único de la tabla `categories`. Esto asegura la **integridad referencial**: el sistema nunca te dejará crear un producto asignado a una categoría que no existe.

## Comportamiento ante borrados: ON DELETE CASCADE vs ON DELETE RESTRICT
Para un inventario de tienda, el comportamiento más seguro es **`ON DELETE RESTRICT`**.
- **RESTRICT**: Si intentas borrar la categoría "Electrónica" pero aún tienes televisores y teclados guardados con esa categoría, la base de datos bloqueará el borrado para proteger tus datos.
- **CASCADE**: Si borras la categoría, borraría automáticamente todos los productos asociados. Sería muy peligroso en producción (podrías perder miles de productos por un error humano al borrar una categoría).