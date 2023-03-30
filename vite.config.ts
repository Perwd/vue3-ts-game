import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
// import { viteCommonjs } from "@originjs/vite-plugin-commonjs"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    open: true, //自动在浏览器中打开项目
  },
  resolve: {
    // Vite路径别名配置
    alias: {
      "@": path.resolve("./src"),
    },
  },
})
