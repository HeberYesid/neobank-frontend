# Guía de Despliegue

## Opción 1: Vercel (Recomendado)
Vercel es la opción más sencilla para aplicaciones React/Vite.

1. Ve a [Vercel.com](https://vercel.com) y regístrate/inicia sesión.
2. Haz clic en **"Add New..."** -> **"Project"**.
3. Selecciona tu repositorio de GitHub `neobank-frontend`.
4. Vercel detectará automáticamente que es un proyecto **Vite**.
5. Haz clic en **Deploy**.

*Nota: He añadido un archivo `vercel.json` para asegurar que la navegación (routing) funcione correctamente al recargar páginas.*

## Opción 2: GitHub Pages
Si prefieres usar GitHub Pages, necesitas hacer un pequeño cambio:

1. Abre `vite.config.js`.
2. Agrega la propiedad `base` con el nombre de tu repositorio:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/nombre-de-tu-repo/', // <--- Agrega esto
   })
   ```
3. En tu repositorio de GitHub, ve a **Settings** -> **Pages**.
4. En "Build and deployment", selecciona **GitHub Actions**.
5. GitHub detectará Vite y sugerirá un workflow, o puedes usar el estándar de "Static HTML" si construyes localmente.

### Despliegue manual a GitHub Pages (gh-pages)
1. Instala el paquete: `npm install gh-pages --save-dev`
2. Agrega estos scripts en `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta: `npm run deploy`
