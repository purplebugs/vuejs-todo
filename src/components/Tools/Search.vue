<template>
  <v-text-field
    class="expanding-search mt-1 closed"
    placeholder="Search"
    filled
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>
export default {};
</script>

<style lang="sass">
.expanding-search
  &.closed
    max-width: 45px
</style>
