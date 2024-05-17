import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassPlugin from "vite-plugin-sass"; // Import default export instead

export default defineConfig({
  plugins: [react(), sassPlugin()], // Make sure to use sassPlugin as the default export
});
