import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueTap from 'v-tap'
import Vuex from 'vuex'

Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    // 添加的商品元素
    addCartEl: {},
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
const router = new VueRouter({
    routes: [{

    }],
})

new Vue({
    router,
    store,
    template: '<App>',
    components: {
        App
    },
    data: {
        eventHub: new Vue()
    }
}).$mount('#app')

