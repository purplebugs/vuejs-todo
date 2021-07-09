<template>
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    text: `Hello, I'm a snackbar`,
  }),
};
</script>

<style></style>
