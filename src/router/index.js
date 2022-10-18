import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import UserIndex from "@/views/user/UserIndex";
import UserGet from "@/views/user/UserGet";



const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Страница пользователей',
        component: UserIndex
    },
    {
        path: '/user/:id',
        name: "Страница пользователя",
        component: UserGet
    }
];

const router = createRouter({
    history,
    routes,
});

export default router;
