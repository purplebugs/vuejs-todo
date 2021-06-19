<template>
  <v-container padding>
    <ul>
      <li v-for="task in tasks">{{ task }}</li>
    </ul>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tasks: ["Go to shop", "Get bananas", "Get apples"],
    };
  },
};
</script>

<style></style>
