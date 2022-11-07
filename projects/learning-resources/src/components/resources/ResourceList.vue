<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      <base-card>
        <resource-item
          :id="resource.id"
          :title="resource.title"
          :description="resource.description"
          :link="resource.link"
        ></resource-item>
      </base-card>
    </li>
  </ul>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";
export default {
  components: {
    ResourceItem,
  },
  inject: ['storedResources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
