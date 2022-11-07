<template>
<ul>
  <li v-for="goal in goals" :key="goal">
    <!-- make goal accessible for caller component
    so html content can depend on it
     -->
    <slot :item="goal" another-prop="..."></slot>
  </li>
</ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ["Learn vue!", "Master vue skills"],
    };
  },
};
</script>
