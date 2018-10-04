import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
    state: {
    	//datos
    	index: 1
    },
    getters: getters,
    actions: actions,
    mutations: mutations
});

Vue.prototype.$store = store;

export default store;