# Auditoría de Seguridad: Inyección SQL

## ¿Qué es la Inyección SQL (SQLi)?
Es una de las vulnerabilidades más críticas en desarrollo web. Ocurre cuando concatenamos directamente datos que escribe el usuario (como un input de texto) dentro de un comando de base de datos. Un atacante puede escribir código SQL malicioso en el formulario para alterar la consulta, saltarse el login o borrar la base de datos entera.

## Prevención mediante Consultas Parametrizadas
Para evitarlo, nunca debemos hacer esto:
`const query = "SELECT * FROM users WHERE id = " + inputDelUsuario;`

En su lugar, usamos **consultas parametrizadas (o Prepared Statements)**. Estas envían la estructura de la consulta por un lado y los datos del usuario por otro de forma aislada. El motor de la base de datos trata el texto del usuario estrictamente como texto literal, bloqueando cualquier intento de ejecución de código.