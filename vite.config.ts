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
      { find: '@src', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@InputText', replacement: '/src/components/common/InputText' }, 
      { find: '@RenderingError', replacement: '/src/components/common/RenderingError' }, 
      { find: '@pages', replacement: '/src/pages' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@mock', replacement: '/src/mock' }, 
      { find: '@dto', replacement: '/src/dto' }, 
      { find: '@routerPaths', replacement: '/src/common/const/routerPaths.ts' }, 
      { find: '@fetchPaths', replacement: '/src/common/const/fetchPaths.ts' }, 
      { find: '@jsonUtilities', replacement: '/src/common/lib/jsonUtilities.ts' }, 
      { find: '@validation', replacement: '/src/common/lib/validation.ts' }, 
    ],
    //*/
  },  
})
