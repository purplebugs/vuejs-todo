<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
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
          <task-menu />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
    <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    />
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },
  components: {
    "dialog-delete": require("@/components/Todo/Dialogs/DialogDelete.vue")
      .default,
    "task-menu": require("@/components/Todo/TaskMenu.vue").default,
  },
};
</script>
