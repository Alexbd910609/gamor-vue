import {defineStore} from "pinia";
import {User} from "@/interfaces/user.interface";
import {AuthService} from "@/services/auth/auth.service";

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      jwt: localStorage.getItem('auth') as string ?? '',
      user: {} as User
    }
  },
  getters: {
    getUser: (state) => {
      const _authService: AuthService = new AuthService();

      return _authService.decodeJWT(localStorage.getItem('auth') as string) ?? state.user;
    },

    getJwt: (state) => {
      return state.jwt;
    }
  },
  actions: {
    setUser(value: User): void {
      this.user = value;
    },

    setJwt(value: string): void {
      this.jwt = value;
      console.log(this.jwt);
    }
  }
})