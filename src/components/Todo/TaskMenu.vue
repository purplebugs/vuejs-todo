<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
  data: () => ({
    dialogs: {
      delete: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          console.log("edit");
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar",
        click() {
          console.log("due date");
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      // .call(this) allows this.dialogs in the click() method above to refer to the vue instance
      // otherwise this.dialogs would refer to the click() method itself and give an error
      this.items[index].click.call(this);
    },
  },
  components: {
    "dialog-delete": require("@/components/Todo/Dialogs/DialogDelete.vue")
      .default,
  },
};
</script>

<style></style>
