import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";

import "./assets/css/reset.css";
import "./style.css";
import "ant-design-vue/dist/antd.css";
import vSlidein from "@/directive/VSlidein/vSlidein";
import router from "@/router";

const app = createApp(App);

app.use(Antd).use(router);

// 注册自定义指令
app.directive('slide-in', vSlidein)

app.mount("#app");