<template>
  <v-container padding>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
    />
    <button @click="clearMessage">Clear</button>
    <h5 v-if="message.length" class="border-grey">
      {{ message }}
    </h5>
    <h6 v-else>
      No message entered!
    </h6>
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

<style>
.border-grey {
  border: 1px solid grey;
}
</style>
