<template>
  <div>
    <!-- To avoid rendering empty html elements, we can use v-if -->
    <header v-if="$slots.header">
      <!-- Input the html content from within <base-card> content </base-card> 
    from the caller component
    -->
      <slot name="header">
        <!-- Default slot content  -->
        <!-- <h2>The Default</h2> -->
      </slot>
    </header>
    <!-- Default accessed by v-slot:default -->
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>