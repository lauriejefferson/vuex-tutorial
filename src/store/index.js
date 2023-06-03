import {createApp} from 'vue'
import {createStore} from 'vuex'
import todos from './modules/todos'

// Create a new store instance
export const store = createStore({
  modules: {
    todos
  }
})