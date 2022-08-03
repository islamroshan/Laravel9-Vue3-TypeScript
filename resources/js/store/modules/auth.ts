export const authStore = {
	namespaced: true,
	state: () => ({
		progressBar: false,
		isLoggedin: (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user') as string).status : false,
		activeLayout: (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user') as string).layout : 'Login',
		authUser: {
			id: 0,
			name: '',
			role: ''
		}
	}),
	mutations: {
		progressBar(state, status) {
			state.a.progressBar = status
		},
		isLogin(state, data) {
			state.isLoggedin = data.success
			state.activeLayout = data.layout
			if (data.success && data.user != '') {
				let user = {
					id: data.user.id,
					name: data.user.name,
					layout: data.layout,
					status: data.success,
					role: 1
				}
				localStorage.setItem("user", JSON.stringify(user))
				let userObj: any = localStorage.getItem('user');
				user = JSON.parse(userObj)

				state.authUser.id = user.id
				state.authUser.name = user.name
				state.authUser.role = user.role
			} else {
				localStorage.clear()
				state.activeLayout = data.layout
			}
		},
		user(state, data) {
			state.authUser.id = data.id
			state.authUser.name = data.name
			state.authUser.role = 1
		},
		setLayout(state:any, layout:string) {
			state.activeLayout = layout
		}
	},
	actions: {
		progressBarStart(context) {
			context.commit('a/progressBar', true)
		},
		progressBarEnd(context) {
			context.commit('a/progressBar', false)
		}
	},
	getters: {
		loginStatus(state) {
			return state.isLoggedin
		},
		layoutName(state:any) {
			return state.activeLayout
		}
	}
}
