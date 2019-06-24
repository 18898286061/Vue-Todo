// Vuex 的核心管理对象模块
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { // 初始化状态
  count: 0
}

const getters = {
  eventOrOdd(state) { // 不需要调用，只需要读取属性值
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

const actions = {
  // 增加的action
 increment({commit}){
  //  提交mutation
  commit('INCREMENT')
 },
 // 减少的action
 decrement({commit}) {
   commit('DECREMENT')
 },
 incrementIfOdd({commit, state}) {
   if(state.count % 2 === 1) {
    commit('DECREMENT')
   }
 }
}

const mutations = {
  // 增加的 mutation
  INCREMENT() {
    state.count++
  },
  // 减少的 mutation
  DECREMENT() {
    state.count--
  },
}

// 包含多个更新 state 函数的对象
export default new Vuex.Store({
  state, // 状态
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个 getter 计算属性
})
