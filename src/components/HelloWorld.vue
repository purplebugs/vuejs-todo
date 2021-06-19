<template>
  <v-container padding>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
    />
    <button @click="clearMessage">Clear</button>
    <h5>{{ message }}</h5>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js!",
    };
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    alertMessage() {
      alert(this.message);
    },
  },
};
</script>
