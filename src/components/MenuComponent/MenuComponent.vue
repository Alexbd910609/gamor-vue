<template>
  <nav>
    <section>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'streams' }">Streams</router-link>
      <router-link :to="{ name: 'party' }">Party</router-link>
      <router-link :to="{ name: 'premium' }">Premium</router-link>
    </section>

    <section>
      <router-link class="logo" :to="{ name: 'home' }">
        <span class="logo-text">Gamor</span>
        <span class="logo-circle">&nbsp;</span>
      </router-link>
    </section>

    <section>
      <button @click="changeTheme()">
        <img v-show="theme === 'light'" src="../../assets/images/dark_mode.png" alt="dark_mode">
        <img v-show="theme === 'dark'" src="../../assets/images/light_mode.png" alt="light_mode">
      </button>

      <router-link v-show="!userStore.getJwt" class="sign-in" :to="{ name: 'sign-in' }">Sign in</router-link>
      <button v-show="!userStore.getJwt" class="create-account">Create account</button>

      <div v-show="userStore.getJwt" class="login-menu">
        <span :style="{'background': userStore.getUser?.logo?.color}" class="logo">{{ userStore.getUser?.logo?.char }}</span>
        <button class="log-out" @click="logOut()">Log out</button>
      </div>
    </section>
  </nav>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import {themeKey} from "@/constants/storage-keys";
import {useThemeStore} from "@/store/theme";
import Router from "@/router";
import {User} from "@/interfaces/user.interface";
import {useUserStore} from "@/store/user";

const _darkTheme: string = 'dark-theme';
const _selectedTheme: string | null = localStorage.getItem(themeKey);
const _themeStore = useThemeStore();
const _router = Router;

const theme: Ref<string | null> = ref('light');
const userStore = useUserStore();

const changeTheme = (): void => {
  if (theme.value === 'light') {
    theme.value = 'dark';
    localStorage.setItem(themeKey, 'dark');
    document.body.classList.add(_darkTheme);
    _themeStore.setTheme('dark');
  } else {
    theme.value = 'light';
    localStorage.setItem(themeKey, 'light');
    document.body.classList.remove(_darkTheme);
    _themeStore.setTheme('light');
  }
}

const logOut = (): void => {
  _router.push({ name: 'sign-in' });
  localStorage.removeItem('auth');
  userStore.setUser({} as User);
  userStore.setJwt('');
}

onMounted(() => {
  if (!_selectedTheme) {
    localStorage.setItem(themeKey, theme.value as string);
  } else {
    document.body.classList[_selectedTheme === 'dark' ? 'add' : 'remove'](_darkTheme);
    theme.value = _selectedTheme;
  }
});
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8vh;
  background: none;

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;

    a {
      text-decoration: none;
      color: var(--link-color);
      font-weight: 900;

      &.router-link-exact-active {
        color: var(--third-color);
      }
    }

    .logo {
      display: flex;
      text-decoration: none;

      &.router-link-exact-active {
        color: var(--link-color);
      }

      &-circle {
        position: absolute;
        background: linear-gradient(180deg, var(--deg-color) 10%, var(--deg-color) 90%);
        padding: 1rem;
        border-radius: 4rem;
        font-size: 0;
        z-index: 1;
        margin: -0.2rem 0 0 -1.2rem;
      }

      &-text {
        font-family: var(--secondary-tipography);
        font-size: 2rem;
        font-weight: 900;
      }
    }

    img {
      @media(width < 1440px) {
        width: 24px;
        height: 24px;
      }
    }

    .sign-in {
      font-weight: 900;
      color: var(--secondary-color);

      &.router-link-exact-active {
        color: var(--secondary-color);
      }
    }

    .create-account {
      border: solid 1px var(--link-color);
      background: rgba(18, 21, 26, 1);
      color: rgba(254, 254, 254, 1);
      padding: 1rem 2rem;
      border-radius: 3rem;

      @media(width < 1440px) {
        padding: 0.7rem 1rem;
      }
    }

    .login-menu {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      width: 10vw;

      .log-out {
        font-weight: 900;
        color: var(--secondary-color)
      }

      .logo {
        color: rgba(255, 255, 255, 1);
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 3%
      }
    }

    @media(width < 1440px) {
      gap: 2rem;
    }
  }
}
</style>