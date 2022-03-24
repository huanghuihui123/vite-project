import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { ElMessage } from "element-plus";

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/home' },
    {
        path: '/layout',
        name: 'Layout',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Layout.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () =>
                    import(/* webpackChunkName: "home" */ '@/views/layout/home/Home.vue'),
                meta: { requiresAuth: false }
            },
            {
                path: '/order',
                name: 'Order',
                component: () =>
                    import(/* webpackChunkName: "order" */ '@/views/layout/order/Order.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/goods',
                name: 'Goods',
                component: () =>
                    import(/* webpackChunkName: "goods" */ '@/views/layout/goods/Goods.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/category',
                name: 'Category',
                component: () =>
                    import(/* webpackChunkName: "category" */ '@/views/layout/goods/Category.vue'),
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
    }
]

console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//   console.log('to', to);
//   console.log('from', from);
//   next()
//   const { name, meta } = to;
//   if (name !== "Login") {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       next({ name: "Login" });
//     } else {
//       if (!meta.requiresAuth) {
//         next();
//       } else {
//         return false;
//       }
//     }
//   } else {
//     next();
//   }
// });

export default router
