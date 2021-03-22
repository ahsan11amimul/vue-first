import { createRouter, createWebHistory } from 'vue-router';
import Player from './pages/Player';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
const routes = [
    { path: '/', component: Home },
    { path: '/players', component: Player },
    { path: '/calendar', component: Calendar },

]
const router = createRouter({
    history: createWebHistory(),
    routes

})
export default router;