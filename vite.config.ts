import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    /*
    alias: {
      "@appRoot": "/",
      "@src": "/src",
      "@components'": "/src/components",
    },
    */    

    ///*
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@mock', replacement: '/src/mock' }, 
      { find: '@dto', replacement: '/src/dto' }, 
      { find: '@routerPaths', replacement: '/src/shared/const/routerPaths.ts' }, 
      { find: '@fetchPaths', replacement: '/src/shared/const/fetchPaths.ts' }, 
      { find: '@jsonUtilities', replacement: '/src/shared/lib/jsonUtilities.ts' }, 
    ],
    //*/
  },  
})
