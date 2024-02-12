import { defineConfig } from 'rollup';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  input: 'src/main.tsx', // Asegúrate de que esto apunte al archivo principal de tu aplicación
  plugins: [
    reactRefresh(),
    // Otros plugins que puedas necesitar
  ],
});