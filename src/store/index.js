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
      text: "",
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
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        // if currently a snackbar showing, hide it so newer snackbar can show, with user friendly delay
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Task added!");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Task deleted!");
    },
  },
  modules: {},
});
