<template>
  <v-container padding>
    <ul>
      <task v-for="(task, index) in tasks" :task="task" :index="index"></task>
    </ul>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "Go to shop",
          dueDate: "2021/06/12",
          dueTime: "18:30",
        },
        {
          name: "Get bananas",
          dueDate: "2021/07/25",
          dueTime: "14:30",
        },
        {
          name: "Get apples",
          dueDate: "2021/07/26",
          dueTime: "16:00",
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  components: {
    task: require("@/components/Task.vue").default,
  },
};
</script>

<style></style>
