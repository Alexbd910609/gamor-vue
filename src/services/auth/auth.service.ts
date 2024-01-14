import {ref, Ref} from "vue";
import {signInEndpoint} from "@/constants/endpoints";
import {useUserStore} from "@/store/user";
import {User} from "@/interfaces/user.interface";

export class AuthService {
  private error: Ref<string> = ref("");
  private userStore = useUserStore();

  public decodeJWT(token: string): User {
    if (token) {
      const base64Url: string = token?.split('.')[1];
      const base64: string = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload: string = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }

    return {} as User;
  }

  public async signIn(email: string, password: string): Promise<boolean> {
    try {
      const response: Response = await fetch(signInEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: btoa(password)
        })
      });
      const json = await response.json();

      if (json?.accessToken) {
        localStorage?.setItem("auth", json?.accessToken);
        this.userStore.setUser(this.decodeJWT(json?.accessToken));
        this.userStore.setJwt(json?.accessToken);
        if (this.userStore.getJwt) {
          return true;
        }
      }

      this.error.value = "Login false";
      return false;

    } catch (error) {
      this.error.value = "Login false";
      return false;
    }
  }
}