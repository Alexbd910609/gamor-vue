import {defineStore} from "pinia";
import {themeKey} from "@/constants/storage-keys";

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      theme: localStorage.getItem(themeKey) ?? 'light'
    }
  },
  getters: {
    getTheme: (state) => {
      return state.theme;
    }
  },
  actions: {
    setTheme(value: string): void {
      this.theme = value;
    }
  }
})