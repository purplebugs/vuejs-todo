import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    tasks: [
      { id: 0, title: "Wake up", done: false, dueDate: "2021-12-03" },
      { id: 1, title: "Buy cake", done: false, dueDate: "2021-02-30" },
      { id: 2, title: "Eat cake", done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };

      // sort by newest task first
      state.tasks.unshift(newTask);

      // clear task field after task rendered on page
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
    updateTaskTitle(state, payload) {
      state.tasks = state.tasks.map((task) => {
        if (task.id !== payload.id) {
          return task;
        }
        return {
          ...task,
          title: payload.title,
        };
      });
    },
    updateTaskDueDate(state, payload) {
      state.tasks = state.tasks.map((task) => {
        if (task.id !== payload.id) {
          return task;
        }
        return {
          ...task,
          dueDate: payload.dueDate,
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
    hideSnackbar(state) {
      state.snackbar.show = false;
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
    updateTaskTitle({ commit }, payload) {
      commit("updateTaskTitle", payload);
      commit("showSnackbar", "Task updated!");
    },
    updateTaskDueDate({ commit }, payload) {
      commit("updateTaskDueDate", payload);
      commit("showSnackbar", "Due Date updated!");
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  modules: {},
});
