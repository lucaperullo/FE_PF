import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  resolve: {
    alias: {
      components: resolve(__dirname, "src/components"),
      pages: resolve(__dirname, "src/pages"),
      lib: resolve(__dirname, "src/lib"),
      styles: resolve(__dirname, "src/styles"),
      routes: resolve(__dirname, "src/routes"),
      context: resolve(__dirname, "src/context"),
      types: resolve(__dirname, "src/types"),
      utility: resolve(__dirname, "src/utility"),
    },
  },
})
