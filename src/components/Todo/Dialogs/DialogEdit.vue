<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Edit task?</v-card-title>
      <v-card-text>
        Are you sure you want to edit the title of this task?
        <v-text-field />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')" text>Cancel</v-btn>
        <v-btn
          @click="$store.dispatch('deleteTask', task.id)"
          color="red darken-1"
          text
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style></style>
