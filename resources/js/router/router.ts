import { createRouter, createWebHistory } from 'vue-router';

const Login = () => import("../components/Login.vue");

// Pages
const user = () => import("../pages/user.vue");
const event = () => import("../pages/event.vue");
const certificate = () => import("../pages/certificate.vue");
const settings = () => import("../pages/settings.vue");

// Dashboard
const admin = () => import("../dashboard/admin.vue");
const participant = () => import("../dashboard/participant.vue");
const manager = () => import("../dashboard/manager.vue");

// Services
import UserAuth from "../services/UserAuth";

// Types
import ResponseData from "../types/ResponseData";

// Store
import store from "../store/store";

const routes = [
	{ path: '/dashboard', component: admin, beforeEnter: [isAuthenticated] },
	{ path: '/', component: Login, beforeEnter: [notAuthenticated] },
	{ path: '/event', component: event, beforeEnter: [isAuthenticated] },
	{ path: '/user', component: user, beforeEnter: [isAuthenticated] },
	{ path: '/settings', component: settings, beforeEnter: [isAuthenticated] },
	{ path: '/certificate', component: certificate, beforeEnter: [isAuthenticated] },
	{ path: '/participant-dashboard', component: participant, beforeEnter: [isAuthenticated] },
	{ path: '/manager-dashboard', component: manager, beforeEnter: [isAuthenticated] }
]

function isAuthenticated(to: any, from: any, next: any) {

	UserAuth.checkAuth()
		.then((response: ResponseData) => {
			store.commit("a/isLogin", response.data);
			// store.dispatch("login", response.data)
			if (response.data.success)
				next();
			else
				next({ path: '/' })
		})
		.catch((e: Error) => {
			// store.commit('a/progressBar', false)
			return next({ path: '/' })
		});
}

function notAuthenticated(to: any, from: any, next: any) {
	UserAuth.checkAuth()
		.then((response: ResponseData) => {
			// store.dispatch("login", response.data)
			store.commit("a/isLogin", response.data);
			if (response.data.success)
				next({ path: '/dashboard' })
			else
				next();
		})
		.catch((e: Error) => {
			// store.commit('a/progressBar', false)
			return next();
		});
}

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router