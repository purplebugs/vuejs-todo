<template>
  <v-container padding>
    <button style="position: absolute; right: 10px" @click="counter++">
      {{ counter }}
    </button>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :class="{ error: message.length > 22 }"
      ref="messageInput"
    />

    <button @click="clearMessage">Clear</button>

    <div>{{ message.length }}</div>

    <h5 v-if="message.length" class="border-grey">
      {{ message }}
    </h5>
    <h6 v-else>
      No message entered!
    </h6>

    <hr />

    <p>Uppercase message: {{ messageUppercase }}</p>

    <p>Lowercase message: {{ message | messageLowercase }}</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js!",
      counter: 0,
    };
  },
  computed: {
    // a lot more power than filters since you have access to everything within export
    // mostly will be using computed instead of filters
    messageUppercase() {
      return this.message.toUpperCase() + this.counter;
    },
    errorStyle() {
      if (this.message.length > 22) {
        return {
          color: "red",
          background: "pink",
        };
      }
    },
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    alertMessage() {
      alert(this.message);
    },
  },
  filters: {
    // a filter is a method which accepts a value
    // no access to methods and data within export
    // filters are good for formatting dates
    messageLowercase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus();
      },
    },
  },

  mounted() {
    console.log(this.$refs);
    // not a good idea to use $refs where there is reactive data involved like this
    // because refs overrides the work we did with $refs
    // would use $refs for form validation or autofocus fields
    this.$refs.messageInput.className = "green";
  },
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
}

input,
button {
  font-size: 23px;
}

.error {
  color: red;
  background: pink;
}
</style>
