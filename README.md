# Azulgrana - Aplicación del clima

## Descripción

Azulgrana es una aplicación donde se puede consultar las condiciones climaticas de cualquier ciudad.

## Requisitos

1. **Node.js**: La plataforma de ejecución de JavaScript en la que se basa React. Puedes descargar Node.js desde [nodejs.org](https://nodejs.org/).

2. **NPM**: Un administrador de paquetes ampliamente utilizado que es útil para gestionar las dependencias de tu proyecto. Puedes obtener npm como parte de [Node.js](https://nodejs.org/), que es una plataforma completa de desarrollo de JavaScript.

## Instrucciones de instalación

Para comenzar a trabajar en este proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.

## Instrucciones de uso

Este proyecto utiliza scripts npm para la gestión de tareas comunes. A continuación, se muestran los comandos disponibles:

- `npm install`: Inicia la aplicación en modo de desarrollo.
- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm start`: Inicia la aplicación en modo de producción.

## Dependencias y devDependencies

Estas son las dependencias y devDependencies utilizadas en el proyecto "Azulgrana" junto con sus respectivas versiones:

- **Dependencias:**

  - `axios`: 0.27.2
  - `flowbite`: 1.4.7
  - `flowbite-react`: 0.0.25
  - `react`: 18.0.0
  - `react-dom`: 18.0.0
  - `react-router-dom`: 6.3.0
  - `scrollreveal`: 4.0.9

- **devDependencies:**

  - `@types/react`: 18.0.0
  - `@types/react-dom`: 18.0.0
  - `@vitejs/plugin-react`: 1.3.0
  - `autoprefixer`: 10.4.7
  - `postcss`: 8.4.14
  - `tailwindcss`: 3.0.24
  - `vite`: ^2.9.15

## Configuración API

OpenWeather proporciona datos meteorológicos precisos y actualizados a través de su API. Azulgrana utiliza la API de OpenWeather para obtener la información climática necesaria.

Para que la aplicación funcione correctamente, necesitas obtener tu propia API KEY registrándote en el sitio web de [OpenWeather](https://openweathermap.org/).

## Variables de entorno

Para configurar las variables de entorno necesarias para el funcionamiento de Azulgrana, sigue estos pasos:

1. En la **raíz** del proyecto, crea un archivo llamado `.env`.

2. Abre el archivo `.env` y define las variables de entorno necesarias siguiendo este formato:

```javascript
VITE_API_KEY = 'your_api_key'
```

## Vista previa

| Inico                                   | Clima                                   |
| --------------------------------------- | --------------------------------------- |
| ![atm](https://i.imgur.com/fQlhjds.jpg) | ![neo](https://i.imgur.com/OWirtjU.jpg) |

## Autor

_Las personas que ayudaron en el desarrollo de este proyecto:_

- **Hamid Escalera** - _Trabajo Inicial & Documentación_ - [HamidGX](https://github.com/HamidGX)

---

Desarrollado por [HamidGX](https://github.com/HamidGX) 🌌
