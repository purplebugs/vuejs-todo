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
    snackbar: {
      show: false,
    },
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
    doneTask(state, id) {
      state.tasks = state.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        return {
          ...task,
          done: !task.done,
        };
      });
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state) {
      state.snackbar.show = true;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar");
    },
  },
  modules: {},
});
