import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{ // sirve para redirigir las peticiones de un endpoint a otro.
      "/api": { // esta es simplemente el nombre del endpoint y vite las va a pedir desde aca.
        target: "http://localhost:5000", // este es el endpoint de la api (mi server)
        changeOrigin: true,  // para que el front-end y el back-end se puedan comunicar. como si las peticiones se hicieran desde la ruta del backend.
        secure: false // Cuando se hace el deply, para que las solicitudes no tengan problemas y sea seguro.
      }
    } // todas las solicitudes que se hagan desde el 3000 (front) seran redirigidas a 5000 (back).
  },
})
