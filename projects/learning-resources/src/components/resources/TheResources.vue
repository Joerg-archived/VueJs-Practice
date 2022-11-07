<template>
  <base-card>
    <base-button
      @click="selectTab('resource-list')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="selectTab('add-resource')"
      :mode="addResButtonMode"
      >Add new resource</base-button
    >
  </base-card>
  <keep-alive>
  <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import ResourceList from "./ResourceList.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    ResourceList,
    AddResource,
  },
  data() {
    return {
      selectedTab: "resource-list",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "The Google search engine",
          link: "https://www.google.com",
        },
      ],
    };
  },

  computed: {
    storedResButtonMode() {
      return this.selectedTab === "resource-list" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },

  provide() {
    return {
      deleteItem: this.deleteItem,
      addItem: this.addItem,
      storedResources: this.storedResources,
    };
  },

  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    deleteItem(id) {
      // This approach is not working because of the way provide/inject works.
      // Provide/inject uses the proxy pattern to observe changes to the array
      // which was assigned to the child components when mounted.
      // But with this code we are using here a new array whereas the 
      // child component uses the old array
      // this.storedResources = this.storedResources.filter(
      //   (res) => res.id !== id
      // );
      const index = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(index, 1);
    },
    addItem(resource) {
      const id = new Date().toISOString();
      // Add to top
      this.storedResources.unshift({
        id: id,
        title: resource.title,
        description: resource.description,
        link: resource.link
      });


    }
  },
};
</script>