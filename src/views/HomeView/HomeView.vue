<template>
  <section>
    <body-component/>
    <categories-component/>
  </section>
</template>

<script setup lang="ts">
import BodyComponent from "@/components/BodyComponent/BodyComponent.vue";
import CategoriesComponent from "@/components/CategoriesComponent/CategoriesComponent.vue";
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media(width < 1440px) {
    gap: 7rem;
  }
}
</style>