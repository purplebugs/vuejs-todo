<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">
        Cancel
      </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)">
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
};
</script>

<style></style>
