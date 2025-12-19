import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/RanjanaTariniRavikumarPortfolioPublic/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // removed componentTagger so there is no Lovable reference
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
