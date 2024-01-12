<template>
  <menu-component/>
  <router-view/>
</template>

<script setup lang="ts">
import MenuComponent from "@/components/MenuComponent/MenuComponent.vue";
</script>

<style lang="scss">
@import "styles/reset";

#app {
  padding: 4% 7%;
  background: var(--container-color);
  height: auto;
  flex: 1;
}
</style>
