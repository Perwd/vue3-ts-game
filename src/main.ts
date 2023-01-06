import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import Router from "./Router";
const app = createApp(App);
app.use(ElementPlus);
app.use(Router);

createApp(App).mount("#app");
// 或者
// app.mount("#app");
