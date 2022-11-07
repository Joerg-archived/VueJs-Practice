<template>
  <header>
    <h3>{{ title }}</h3>
    <base-button 
    type="text"
    mode="flat"
    @click="deleteItem(id)" #default>Delete</base-button>
  </header>
  <p>
    {{ description }}
  </p>
  <nav>
    <a :href="link">View resource</a>
  </nav>
</template>

<script>
export default {
  inject: ["deleteItem"],
  props: ["id", "title", "description", "link"],
};
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
