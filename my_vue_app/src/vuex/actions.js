import axios from 'axios'
import * as types from './mutation-types'

export const fetchTodos = ({commit}) => {
  axios.get('http://localhost:3000/todos?userId=1')
    .then((response)=> {
      commit(types.FETCH_TODOS, response.data)
    })
};

export const addTodo = ({commit}, data) => {
  axios.post('http://localhost:3000/todos?userId=1', data)
    .then((response)=> {
      commit(types.ADD_TODO, response.data)
    })
};

export const deleteTodo = ({commit}, id) => {
  axios.delete('http://localhost:3000/todos/'+id)
    .then((response)=> {
      commit(types.DELETE_TODO, id)
    })
};

export const editItem = ({commit}, data) => {
  axios.put('http://localhost:3000/todos/'+data.id, data)
    .then((response)=> {
      commit(types.EDIT_ITEM, response.data)
    })
};
