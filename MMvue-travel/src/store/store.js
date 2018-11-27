import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let defaultCity='上海'
export default new Vuex.Store({
	state:{
		city:defaultCity
	},
	actions:{
		changeCurrect(ctx,city){
			ctx.commit('changeCurrect',city)
		}
	},
	mutations:{
		changeCurrect(state,city){
			state.city=city
		}
	}
})

