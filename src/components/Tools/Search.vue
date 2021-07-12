<template>
  <v-text-field
    v-model="search"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="expanding-search mt-1"
    :class="{ closed: searchClosed && !search }"
    placeholder="Search"
    filled
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      searchClosed: true,
    };
  },
};
</script>

<style lang="sass">
.expanding-search
  transition: max-width 0.3s
  .v-input__slot
    cursor: pointer
  &.closed
    max-width: 45px
</style>
