<template>
  <div class="category">
    <h3 class="bar">/</h3>

    <div>
      <h3 class="id">{{ props.id }}</h3>
      <h3 class="name">{{ props.name }}</h3>
      <img class="symbol" v-show="themeStore.getTheme === 'light'" alt="" src="@/assets/images/arrow_right_black.png"/>
      <img class="symbol" v-show="themeStore.getTheme === 'dark'" alt="" src="@/assets/images/arrow_right_white.png"/>
    </div>

    <img class="image" :src=props.image alt=""/>
  </div>
</template>

<script setup lang="ts">
import {useThemeStore} from "@/store/theme";

const themeStore = useThemeStore();
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
.category {
  display: flex;
  gap: 0.5rem;
  padding: 2rem 0 0 2rem;
  position: relative;
  z-index: 1;
  width: 18.5vw;
  border-radius: 1rem;
  background: var(--body-color);
  cursor: pointer;

  .bar {
    color: var(--fourth-color);
  }

  .id {
    position: relative;
    z-index: 1;
    color: var(--link-color);
  }

  .name {
    position: relative;
    z-index: 1;
    padding-top: 1rem;
  }

  .symbol {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 1rem 0 2rem 0;
  }

  .image {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1rem;
    opacity: .2;
  }

  &:hover .image {
    display: block;
  }

  &:hover {
    background: var(--category-hover-color);
  }

  @media(width < 1440px) {
    width: 17.5vw;
  }
}
</style>