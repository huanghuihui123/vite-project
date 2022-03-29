import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { ElMessage } from "element-plus";

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/publicNotice' },
    {
        path: '/layout',
        name: 'Layout',
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Layout.vue'),
        children: [
            {
                path: '/noticeManage',
                name: 'NoticeManage',
                component: () =>
                    import(
                        /* webpackChunkName: "NoticeManage" */ '@/views/layout/noticeManage/Index.vue' // 公告管理
                    ),
                meta: { requiresAuth: true },
                children: [
                    {
                        path: '/publicNotice',
                        name: 'PublicNotice',
                        component: () =>
                            import(
                                /* webpackChunkName: "PublicNotice" */ '@/views/layout/noticeManage/PublicNotice.vue' // 对内公告
                            ),
                        meta: { requiresAuth: true }
                    },
                    {
                        path: '/privateNotice',
                        name: 'PrivateNotice',
                        component: () =>
                            import(
                                /* webpackChunkName: "PrivateNotice" */ '@/views/layout/noticeManage/PrivateNotice.vue' // 对外公告
                            ),
                        meta: { requiresAuth: true }
                    },
                    {
                        path: '/addNotice',
                        name: 'AddNotice',
                        component: () =>
                            import(
                                /* webpackChunkName: "AddNotice" */ '@/views/layout/noticeManage/AddNotice.vue' // 对外公告
                            ),
                        meta: { requiresAuth: true }
                    }
                ]
            },
            {
                path: '/introduce',
                name: 'Introduce',
                component: () =>
                    import(
                        /* webpackChunkName: "Introduce" */ '@/views/layout/organizationManage/Introduce.vue'
                    ),
                meta: { requiresAuth: true }
            },
            {
                path: '/leader',
                name: 'Leader',
                component: () =>
                    import(
                        /* webpackChunkName: "Leader" */ '@/views/layout/organizationManage/Leader.vue'
                    ),
                meta: { requiresAuth: true }
            },
            {
                path: '/addLeader',
                name: 'AddLeader',
                component: () =>
                    import(
                        /* webpackChunkName: "AddLeader" */ '@/views/layout/organizationManage/addLeader.vue'
                    ),
                meta: { requiresAuth: true }
            },
            {
                path: '/inside',
                name: 'Inside',
                component: () =>
                    import(
                        /* webpackChunkName: "Inside" */ '@/views/layout/organizationManage/Inside.vue'
                    ),
                meta: { requiresAuth: true }
            },
            {
                path: '/directlyUnder',
                name: 'DirectlyUnder',
                component: () =>
                    import(
                        /* webpackChunkName: "DirectlyUnder" */ '@/views/layout/organizationManage/DirectlyUnder.vue'
                    ),
                meta: { requiresAuth: true }
            },
            {
                path: '/staff',
                name: 'Staff',
                component: () =>
                    import(
                        /* webpackChunkName: "Staff" */ '@/views/layout/organizationManage/Staff.vue'
                    ),
                meta: { requiresAuth: true }
            },
            {
                path: '/consult',
                name: 'Consult',
                component: () =>
                    import(/* webpackChunkName: "Consult" */ '@/views/layout/QAManage/Consult.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/news',
                name: 'News',
                component: () =>
                    import(/* webpackChunkName: "News" */ '@/views/layout/QAManage/News.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/propertyManage',
                name: 'PropertyManage',
                component: () =>
                    import(
                        /* webpackChunkName: "PropertyManage" */ '@/views/layout/propertyManage/PropertyManage.vue'
                    ),
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
