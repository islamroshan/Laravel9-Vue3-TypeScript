import { createStore, useStore as baseUseStore } from 'vuex'
import { authStore } from './modules/auth'

export default createStore({
	modules: {
		auth: authStore,
	  }
})
