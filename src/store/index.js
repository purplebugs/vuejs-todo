import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 0, title: "Wake up", done: false },
      { id: 1, title: "Buy cake", done: false },
      { id: 2, title: "Eat cake", done: false },
    ],
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };

      // sort by newest task first
      state.tasks.unshift(newTask);

      // clear task field after task rendered on page
      // TODO again using Vuex
    },
  },
  actions: {},
  modules: {},
});
