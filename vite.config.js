import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5146 
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, 'src/components'),
      "@layouts": resolve(__dirname, 'src/layouts'),
      "@assets": resolve(__dirname, 'src/assets'),
    }
  }
})
