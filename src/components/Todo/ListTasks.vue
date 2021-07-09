<template>
  <v-list v-if="$store.state.tasks.length" class="pt-0" flat>
    <task v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: {
    task: require("@/components/Todo/Task").default,
  },

  Task,
};
</script>

<style></style>
