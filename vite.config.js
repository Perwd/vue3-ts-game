import { defineConfig } from "vite"
// import { createVuePlugin } from 'vite-plugin-vue2'
// import { resolve } from "path"
import { viteCommonjs } from "@originjs/vite-plugin-commonjs"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [
    vue(),
    // createVuePlugin(),
    viteCommonjs(), //require引入转换成import引入
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true, //自动在浏览器中打开项目
    // proxy: {
    //   '/api': {
    //     target: '', //接口地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api',
    //     },
    //   },
    // },
  },
})
