Desafio LikeMe - Backend
Este es el backend del proyecto "LikeMe", que permite interactuar con una base de datos PostgreSQL para almacenar y gestionar registros de publicaciones. Se utilizan tecnologías como Express, PostgreSQL y CORS para hacer que la API sea segura y eficiente.

Requisitos
Node.js: Debes tener Node.js instalado en tu máquina.
PostgreSQL: Necesitarás tener una base de datos PostgreSQL corriendo en tu máquina o en un servidor remoto.
Paquete dotenv: Usamos dotenv para manejar las variables de entorno de manera segura.

Instalación
Clonar el repositorio:
git clone <url-del-repositorio>
cd desafioLikeMe/backend

Instalar dependencias: Ejecuta el siguiente comando para instalar las dependencias necesarias:
npm install
Configurar las variables de entorno: Crea un archivo .env en la raíz del proyecto y configura tus credenciales de base de datos y el puerto del servidor:

env
asegura la base de datos
Nota: Asegúrate de que tu archivo .env esté incluido en el archivo .gitignore para evitar subirlo a GitHub.

Correr el servidor: Para iniciar el servidor, ejecuta el siguiente comando:
node index.js
Rutas de la API
GET /posts
Devuelve todos los registros de publicaciones en la base de datos.

Respuesta:
Un array con los objetos de las publicaciones:
[
  {
    "id": 1,
    "titulo": "Post 1",
    "img": "url_imagen",
    "descripcion": "Descripción del post 1",
    "likes": 10
  },
  ...
]
POST /posts
Recibe un nuevo post y lo almacena en la base de datos.

Cuerpo de la solicitud:
{
  "titulo": "Nuevo Post",
  "url": "url_imagen",
  "descripcion": "Descripción del nuevo post"
}
Respuesta:
{
  "id": 2,
  "titulo": "Nuevo Post",
  "img": "url_imagen",
  "descripcion": "Descripción del nuevo post",
  "likes": 0
}

DELETE /posts/:id
Elimina un post de la base de datos por su id.

Respuesta:
Mensaje de confirmación:
"Post eliminado"
Configuración de Seguridad
Uso de Variables de Entorno: Las credenciales de la base de datos y el puerto del servidor están almacenadas de forma segura en el archivo .env. Este archivo está excluido de Git gracias al archivo .gitignore, lo que impide que las credenciales se suban al repositorio.

CORS: El paquete cors está habilitado en el servidor para permitir solicitudes desde otros dominios, lo cual es necesario si el frontend se encuentra en un dominio diferente al backend.

Archivos Importantes
.env: Contiene las variables de entorno para la conexión a la base de datos y el puerto del servidor.
.gitignore: Asegura que el archivo .env y la carpeta node_modules/ no se suban al repositorio.
Notas
Asegúrate de tener una base de datos PostgreSQL en funcionamiento y configurada con los mismos parámetros que en el archivo .env.
Si necesitas cambiar el nombre de la base de datos, usuario o contraseña, simplemente edita el archivo .env.

Parte(2) 
Agregamos
1. Agregar una ruta PUT en una API REST y utilizarla para modicar registros en una
tabla alojada en PostgreSQL (4 puntos)
2. Agregar una ruta DELETE en una API REST y utilizarla para eliminar registros en una
tabla alojada en PostgreSQL (4 puntos)
3. Capturar los posibles errores en una consulta SQL realizada con el paquete pg
usando la sentencia try catch (2 puntos)
