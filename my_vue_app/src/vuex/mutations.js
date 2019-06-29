import * as types from './mutation-types'

const mutations = {
  [types.ADD_TODO](state, data) {
    state.todoList.push(data);
  },

  [types.FETCH_TODOS](state, data){
    state.todoList = data
  },

  [types.DELETE_TODO](state, id) {
    for(var i = 0; i < state.todoList.length; i++) {
      if(state.todoList[i].id === id) {
        state.todoList.splice(i, 1)
      }
    }
  },

  [types.EDIT_ITEM](state, data) {
    let id = data.id
    for(var i = 0; i < state.todoList.length; i++) {
      if(state.todoList[i].id === id) {
        state.todoList[i] = data
      }
    }
  }
}

export default mutations;
