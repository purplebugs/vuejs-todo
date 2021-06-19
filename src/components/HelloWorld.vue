<template>
  <v-container padding>
    <ul>
      <li v-for="task in tasks">
        <div>{{ task.name }}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
      </li>
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
};
</script>

<style></style>
