import HomeLayout from "@/components/home/HomeLayout.vue";
import AdminLayout from "@/components/admin/AdminLayout.vue";

export const routes = [
    {
        path: '/home',
        name: 'home-layout',
        component: HomeLayout
    },
    {
        path: '/admin',
        name: 'admin-page-layout',
        component: AdminLayout
    },
    {
        path: '/admin/*',
        name: 'admin-redirect',
        redirect: '/admin'
    },
    {
        path: '/:notFound(.*)',
        redirect: '/home'
    }
]