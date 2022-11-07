<template>
  <section>
    <base-card>
      <!-- <template #header>
        <h2>Available Badges</h2>
      </template> -->
      <template #default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
/* Scoped styles are handled by vue by adding a custom attribute 
with a hash value. Each scoped styling only applies to the component,
i.e. the template section in the component where it is defined.
*/

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>