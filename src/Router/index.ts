import { createRouter, createWebHashHistory } from "vue-router";
import module from "./module";

// const Login = resolve => {
//   require.ensure(["@/views/login/login"], () => {
//     resolve(require("@/views/login/login"));
//   });
// };
// const Layout = (resolve) => {
//   require.ensure(["@/components/layout.vue"], () => {
//     resolve(require("@/components/layout.vue"));
//   });
// };
const Layout = null;

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //   先隐藏头部，和侧边栏
    // {
    //   path: "/",
    //   name: "login",
    //   component: Login,
    // },
    // {
    //   path: "/tpedetail/:id?",
    //   name: "tpedetail",
    //   component: Layout,
    //   meta: {
    //     notkeepAlive: false,
    //   },
    //   children: [...tpedetail],
    // },
    {
      path: "/index",
      name: "Home",
      component: Layout,
      redirect: "/index",
      children: [...module],
    },
  ],
});

export default router;

// vue3路由跳转
// import { useRoute, useRouter } from "vue-router";
//  setup(props, context) {
//     // 获取路由器实例
//     const router = useRouter();
//     // route是响应式对象,可监控器变化
//     const route = useRoute();
//     const onSubmit = (e) => {
//       e.preventDefault();
//       validate()
//         .then(() => {
//           login(state.login).then((res) => {
//             if (res.code == 0) {
//               router.push("/");
//             }
//           });
//         })
//         .catch((err) => {});
//     };
//   },
