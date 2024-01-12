<template>
  <section>
    <h2 class="title">Trending Categories</h2>

    <div class="categories">
      <category-component v-for="category in categories" :key="category.id" :id="category.id" :name="category.name"
                          :image="category.image"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import {Category} from "@/interfaces/category.interface";
import CategoryComponent from "@/components/CategoriesComponent/components/CategoryComponent/CategoryComponent.vue";
import action_games from "@/assets/images/action_games.jpg";
import sport_games from "@/assets/images/sport_games.jpg";
import adventure_games from "@/assets/images/adventure_games.jpg";
import arcade_games from "@/assets/images/arcade_games.jpg";
import fantasy_games from "@/assets/images/fantasy_games.jpg";
import strategy_games from "@/assets/images/strategy_games.jpg";
import shooter_games from "@/assets/images/shooter_games.jpg";
import all_games from "@/assets/images/all_games.jpg";

const categories: Ref<Category[]> = ref([
  {
    id: '01',
    name: 'Action Games',
    image: action_games
  },
  {
    id: '02',
    name: 'Sport Games',
    image: sport_games
  },
  {
    id: '03',
    name: 'Adventure Games',
    image: adventure_games
  },
  {
    id: '04',
    name: 'Arcade Games',
    image: arcade_games
  },
  {
    id: '05',
    name: 'Fantasy Games',
    image: fantasy_games
  },
  {
    id: '06',
    name: 'Strategy Games',
    image: strategy_games
  },
  {
    id: '07',
    name: 'Shooter Games',
    image: shooter_games
  },
  {
    id: 'VIEW ALL',
    name: 'All Categories',
    image: all_games
  }
]);
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 2rem !important;

  .title {
    color: var(--secondary-color);
  }

  .categories {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>