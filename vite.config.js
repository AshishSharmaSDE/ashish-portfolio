import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassPlugin from "vite-plugin-sass"; // Import default export instead

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassPlugin()],
});
