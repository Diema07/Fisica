# FÍsIca

Una aplicación web interactiva diseñada para ayudar a los estudiantes a comprender conceptos básicos de física. La aplicación está dividida en módulos temáticos, en los que se explica el tema y se permite realizar cálculos. Se maneja un apartado de comentarios los cuales solamente se busca guardarlos en formato json en el archivo server/comentarios.json 

## Contribuyentes:

- **Diego Arevalo**: Implementó el manejo de datos en JavaScript y la funcionalidad de comentarios con Node.js.
- **Andrés Ramírez**: Creó la estructura de los archivos HTML y diseñó la interfaz con CSS.

## Características

- **Conversión de Unidades:** Explicación teórica y calculadora para convertir entre diferentes sistemas de medición.
- **Movimiento Uniforme:** Explicación teórica y calculadora para determinar parámetros de un movimiento a velocidad constante.
- **Movimiento Uniformemente Acelerado:** Explicación teórica y calculadora comprender movimientos con aceleración constante.
- **Caída Libre:** Explicación teórica y calculadora para comprender la caída de objetos sin resistencia.
- **Vectores:** Explicación teórica y calculadora para comprender sobre los vectores.
- **Comentarios:** Sección de comentarios en cada calculadora.

## Instalación

### Descarga y Clonación

Para descargar el repositorio, ejecuta:

````bash

git clone https://github.com/Diema07/Fisica.git

````
### Para manejar los comentarios con Node.js, cuyo núcleo es un servidor basado en el framework Express.

````bash

cd Fisica

npm install

npm start

````
## Uso

La aplicación está organizada en varios módulos temáticos que puedes acceder desde el menú de navegación en la página principal (index.html). Cada módulo incluye:

- Una breve explicación teórica del tema.
- Una herramienta sencilla que permite realizar cálculos específicos.
- Una sección de comentarios.

### Los módulos disponibles son:

- Conversión de Unidades
- Movimiento Uniforme
- Movimiento Uniformemente Acelerado
- Caída Libre
- Vectores


## Contribución

¡Las contribuciones son bienvenidas! Este fué el primer proyecto que realizamos, los requerimientos eran basicos y se cumplieron. Si deseas aportar mejoras o nuevas funcionalidades a FÍsIca, sigue estos pasos:

1. Fork del repositorio:
Haz un fork del repositorio en tu cuenta de GitHub.

2. Clonar tu fork:
````bash
git clone https://github.com/tuusuario/fisica.git
````
3. Navegar al directorio del proyecto:
````bash
cd fisica
````

4. Crear una nueva rama para tu contribución:
````bash
git checkout -b feature/nueva-funcionalidad
````

5. Realizar los cambios en el código y guardarlos.

6. Agregar y confirmar los cambios:
````bash
git add .
git commit -m "Descripción breve de los cambios realizados"
````

7. Enviar la nueva rama a tu repositorio remoto:
````bash
git push origin feature/nueva-funcionalidad
````

8. Crear un Pull Request en GitHub:
Ve a tu repositorio en GitHub, selecciona la rama que creaste y haz clic en "New Pull Request".
Describe los cambios y envía la solicitud para su revisión.


