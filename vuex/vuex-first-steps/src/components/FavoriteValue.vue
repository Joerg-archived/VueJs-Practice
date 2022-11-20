<template>
  <div>
    <p>{{ normalizedCounter }}</p>
  </div>
  <p>Doing more ...</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("numbers", ["normalizedCounter"]),
  },
};
</script>
