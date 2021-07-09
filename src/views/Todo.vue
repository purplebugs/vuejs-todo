<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTasks.vue").default,
  },
};
</script>
