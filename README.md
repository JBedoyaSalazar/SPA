# Scientist — Single Page Application (SPA)

[![Vite](https://img.shields.io/badge/Vite-^8.0.12-00A8FF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

## Descripción

Scientist es una Single Page Application (SPA) escrita en TypeScript + Vite que consume la API pública de Rick and Morty (configurada vía variable de entorno) para mostrar un catálogo de personajes con paginación, búsqueda y páginas de detalle.

## Estado

- Lenguaje: TypeScript
- Bundler / Dev server: Vite
- Licencia: MIT

## Badges

- Build / Dev: Vite
- TypeScript: 6.x
- Deploy target: Netlify (configurado en `netlify.toml`)

## Instalación y ejecución (local)

1. Clona el repositorio.
2. Instala dependencias:

```bash
npm install
```

3. Desarrollo:

```bash
npm run dev
```

4. Build:

```bash

npm run build

```

5. Previsualizar build:

```bash
npm run preview
```

## Archivos y configuración principal

- Configuración del proyecto: [package.json](package.json)
- Configuración TypeScript: [tsconfig.json](tsconfig.json)
- Entrada HTML: [index.html](index.html)
- Configuración de despliegue Netlify: [netlify.toml](netlify.toml)

## Estructura del proyecto (resumen)

- [src/main.ts](src/main.ts) — Punto de entrada; carga estilos y registra el `router`.
- [src/style.css](src/style.css) — Estilos globales y diseño (tema oscuro con gradientes).
- [src/routes/index.ts](src/routes/index.ts) — Definición de rutas y la función `router`.
- [src/pages/Home.ts](src/pages/Home.ts) — Vista principal: grid de personajes + paginación + búsqueda.
- [src/pages/Character.ts](src/pages/Character.ts) — Vista detalle de un personaje.
- [src/pages/Error404.ts](src/pages/Error404.ts) — Página 404 simple.
- [src/template/Header.ts](src/template/Header.ts) — Componente header (marca y búsqueda).
- [src/template/Skeleton.ts](src/template/Skeleton.ts) — Skeletons para loading (Home / Detail).
- [src/utils/getData.ts](src/utils/getData.ts) — Lógica fetch hacia la API (lee `import.meta.env.VITE_API`).
- [src/utils/getHash.ts](src/utils/getHash.ts) — Parseo simple del hash de la URL.
- [src/utils/resolveRoutes.ts](src/utils/resolveRoutes.ts) — Normaliza rutas desde el hash.
- [src/counter.ts](src/counter.ts) — Ejemplo de contador (módulo utilitario).

## Arquitectura y flujo

- La navegación se basa en hash routing: `location.hash` controla la vista.
- `router()` (en `src/routes/index.ts`) resuelve la ruta con `resolveRoutes()` y renderiza el contenido llamando a las funciones de página.
- Las vistas devuelven HTML como string; el `router` inserta ese HTML en el `#content`.
- `getData()` abstrae peticiones a la API y puede recibir `id`, `page` o `name` (para búsqueda y paginación).
- El header incluye un formulario de búsqueda que actualiza el hash para activar la búsqueda/paginación.

## Variables de entorno

- La URL base de la API se configura en el entorno de build bajo `VITE_API`.
- En desarrollo puedes definirla en un archivo `.env` o en tu entorno; Netlify lo establece en `netlify.toml` con `VITE_API = "https://rickandmortyapi.com/api/character/"`.

## Rutas soportadas (resumen)

- `/` → Home (lista de personajes, paginación).
- `/:id` → Detalle de personaje.
- Hash-based: ejemplos:
  - `#/` — Home
  - `#/page/2/` — Paginación
  - `#/<id>/` — Detalle (ej. `#/21/`)

## Puntos técnicos notables

- Uso de `import.meta.env.VITE_API` para separar configuración de entorno.
- `tsconfig.json` configurado para modo bundler y con reglas de linting: `noUnusedLocals`, `noUnusedParameters`, etc.
- Estilos ricos en CSS puro con variables CSS y animaciones de shimmer para skeleton loaders.
- Patrón sencillo de "string templates" para las vistas (no se usa framework de UI).

## Cómo contribuir

- Fork y PR.
- Mantener el estilo TypeScript presente en `tsconfig.json`.
- Tests no incluidos; su adición es bienvenida.

## Despliegue

- El proyecto está preparado para deploy en Netlify (ver `netlify.toml`).
- Comando de build: `npm run build` — publica la carpeta `dist`.
- Netlify redirige todo a `index.html` (Single Page App).

## Mejoras sugeridas

- Añadir manejo de errores y estados de carga más detallados en `getData`.
- Agregar tests unitarios / E2E (por ejemplo con Vitest / Playwright).
- Extraer componentes a funciones/archivos más pequeños o migrar a un framework si se requiere escalabilidad.
- Manejo más robusto de rutas y parámetros (p.ej. parser de querystrings centralizado).
- Añadir caché / revalidación para evitar múltiples fetches innecesarios.

## Contacto y autor

- Autor en `package.json`: Jefred Bedoya
- Licencia: MIT
