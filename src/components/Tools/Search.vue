<template>
  <v-text-field
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="expanding-search mt-1"
    :class="{ closed: searchClosed }"
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
      searchClosed: true,
    };
  },
};
</script>

<style lang="sass">
.expanding-search
  &.closed
    max-width: 45px
</style>
