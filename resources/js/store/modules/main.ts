export const mainStore = {
	namespaced: true,
	state: () => ({
		progressBar: false,
		isLoggedin: false,
		authUser: {
			id: 0,
			name: '',
			role: ''
		}
	}),
	mutations: {
		progressBar(state:any, status:any) {
			state.a.progressBar = status
		},
		isLogin(state:any, data:any) {
			state.isLoggedin = data.success
			if (data.success && data.user != '') {
				let user = {
					id: data.user.id,
					name: data.user.name,
					role: data.user.roles[0].name
				}
				localStorage.setItem("user", JSON.stringify(user))
				let userObj: any = localStorage.getItem('user');
				user = JSON.parse(userObj)

				state.authUser.id = user.id
				state.authUser.name = user.name
				state.authUser.role = user.role
			}
		},
		user(state:any, data:any) {
			state.authUser.id = data.id
			state.authUser.name = data.name
			state.authUser.role = data.roles[0].name
		}
	},
	actions: {
		progressBarStart(context:any) {
			context.commit('a/progressBar', true)
		},
		progressBarEnd(context:any) {
			context.commit('a/progressBar', false)
		}
	},
	getters: {
		loginStatus(state:any) {
			return state.a.isLoggedin
		}
	}
}
