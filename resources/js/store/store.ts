import { createStore, useStore as baseUseStore } from 'vuex'
import { mainStore } from './modules/main'

export default createStore({
	modules: {
		a: mainStore,
	  }
})
