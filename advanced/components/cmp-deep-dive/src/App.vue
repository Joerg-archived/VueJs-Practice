<template>
  <div>
    <the-header></the-header>
    <button @click="switchComponent('active-goals')">Active Goals</button>
    <button @click="switchComponent('manage-goals')">Manage Goals</button>

    <!-- Using v-if isn't always optimal since its a lot of code duplication,
    to prevent this we can use dynamic components with <component is=<cmp-name>>
  
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
     -->

    <!-- If you don't want that state information like input values
    are lost when switching between components, you should add keep-alive
     -->
     <keep-alive>
    <component :is="selectedComponent"></component>
     </keep-alive>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </course-goals> -->
  </div>
</template>


<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    switchComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>