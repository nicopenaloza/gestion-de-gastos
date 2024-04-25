# Gastos Mensuales App

Esta aplicación, desarrollada en Angular utilizando Ionic y gestionada con Yarn, es una PWA diseñada para ayudar a los usuarios a realizar un seguimiento de sus gastos mensuales y comparar su evolución a lo largo del tiempo.

## Requisitos del Sistema
- Node.js: 20.10
- Yarn: 1.22.22

## Instalación
1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `yarn install` para instalar las dependencias.

## Uso
- Para iniciar la aplicación en modo de desarrollo, ejecuta `yarn start`.
- Para construir la aplicación para producción, ejecuta `yarn build`.
- Para ejecutar pruebas, utiliza el comando `yarn test`.

## Funcionalidades Principales
- Registro y seguimiento de gastos mensuales.
- Visualización de la evolución de los gastos a lo largo del tiempo.
- Comparación de gastos mensuales.
- Interfaz de usuario intuitiva y amigable.

## Convenciones de Desarrollo
- **Constantes en Mayúsculas:** Todas las constantes deben nombrarse en mayúsculas y ubicarse en la carpeta `constants`. Se recomienda exportarlas en un archivo específico dentro de esta carpeta.
- **Nombres de Archivos:** Todos los archivos deben seguir la convención `nombre-snake-case.carpeta.ts`. Por ejemplo, si estás en la carpeta `services` y tienes el servicio `network`, el archivo debería llamarse `network.service.ts`.
- **Interfaces:** Se recomienda escribir interfaces para definir la estructura de los objetos utilizados en la aplicación.
- **Organización de Componentes:** Los componentes deben colocarse en la carpeta `components`, con una carpeta separada para cada componente.
- **Organización de Páginas:** Las páginas deben ubicarse en la carpeta `pages`, con una carpeta separada para cada página.
- **Organización de Servicios:** Los servicios deben estar en la carpeta `services`, con una carpeta separada para cada servicio.
- **Nombres de Variables Descriptivos:** Se recomienda utilizar nombres de variables descriptivos que reflejen su propósito y utilidad en el código. Esto ayuda a mejorar la legibilidad y comprensión del mismo.
## Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una rama con un nombre descriptivo (`git checkout -b mi-contribucion`).
3. Realiza tus cambios y realiza commits con mensajes claros y descriptivos.
4. Haz un push de tus cambios a tu repositorio fork.
5. Crea un pull request en este repositorio.

## Licencia
Este proyecto está bajo la Licencia [MIT](https://opensource.org/licenses/MIT).
