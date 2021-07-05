<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      :append-icon="newTaskTitle ? 'mdi-plus' : ''"
      hide-details
      clearable
    ></v-text-field>
    <v-list v-if="tasks.length" class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <div v-else class="no-tasks">
      <v-icon size="100px" color="primary">
        mdi-check
      </v-icon>

      <div class="text-h5 primary--text">No tasks</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newTaskTitle: "",
      tasks: [],
    };
  },
  methods: {
    // TODO store tasks using https://vuex.vuejs.org/
    addTask() {
      if (this.newTaskTitle) {
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false,
        };

        // Sort by newest task first

        // Step 1: Add to end of array
        // this.tasks.push(newTask);

        // Step 2: Sorting algorithm to sort by highest id (newest timestamp) to lowest id (oldest timestamp)

        // this.tasks.sort(function(a, b) {
        //   let x = a.id;
        //   let y = b.id;

        //   if (x > y) {
        //     return -1;
        //   } else if (x < y) {
        //     return 1;
        //   } else {
        //     return 0;
        //   }
        // });

        // Alternative: uncomment this instead to not use sorting algorithm, simply "unshift" to add to start of array
        this.tasks.unshift(newTask);

        // clear task field after task rendered on page
        this.newTaskTitle = "";
      }
    },
    doneTask(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        return {
          ...task,
          done: !task.done,
        };
      });
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
</style>
