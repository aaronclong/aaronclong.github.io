import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // https://vite.dev/config/build-options.html#build-assetsinlinelimit
    assetsInlineLimit: (filePath: string, _content: unknown) => {
      if (filePath.endsWith(".svg")) {
        return false;
      }
    },
  },
});
