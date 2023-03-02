import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import { viteCommonjs } from "@originjs/vite-plugin-commonjs"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    open: true, //自动在浏览器中打开项目
  },
})
