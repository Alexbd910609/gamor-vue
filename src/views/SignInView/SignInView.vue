<template>
  <section>
    <h1>Sign In</h1>
    <h4>Sign in to enjoy all our services</h4>

    <form>
      <div class="input">
        <input type="email" v-model="email" placeholder="E-mail" required>
        <span v-show="emailError" class="error">{{ emailError }}</span>
      </div>

      <div class="input">
        <input type="password" v-model="password" placeholder="Password" required>
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>

      <button type="button" @click="signIn()">Sign In</button>
    </form>

    <p>Don't have an account? <span class="register">Register here</span></p>

  </section>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import {EMAIL_REGEXP} from "@/constants/regexps";
import {AuthService} from "@/services/auth/auth.service";
import {useToast} from "vue-toast-notification";
import Router from "@/router";

const _toast = useToast();
const _router = Router;

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const emailError: Ref<string> = ref('');
const passwordError: Ref<string> = ref('');
const authService: AuthService = new AuthService();

const _validEmail = (email: string) => {
  return EMAIL_REGEXP.test(email);
}

const signIn = async () => {
  if (!email.value) {
    emailError.value = 'E-mail is required';
  } else if (!_validEmail(email.value)) {
    emailError.value = 'Enter a valid e-mail';
  } else {
    emailError.value = '';
  }

  if (!password.value) {
    passwordError.value = 'Password is required';
  } else {
    passwordError.value = '';
  }

  if (!emailError.value && !passwordError.value) {
    const response = await authService.signIn(email.value, password.value);

    if (response) {
      _toast.info('User signed in successfully');
      await _router.push({path: 'home'});
    } else {
      _toast.error('Please check your login credentials');
    }
  }
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 0 auto;
  height: 65vh;
  width: 40vw;
  background: var(--body-color);
  border-radius: 1rem;

  @media(width > 1440px) {
    h1 {
      font-size: 3rem;
    }

    h4 {
      font-size: 2rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;

    .input {
      height: 4.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      input {
        border: solid 2px var(--container-color);
        border-radius: 1rem;
        padding: 1rem 2rem;

        @media(width < 1440px) {
          padding: 0.5rem 1rem;
        }
      }

      .error {
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--error-color);

        @media(width < 1440px) {
          font-size: 0.7rem;
        }
      }

      @media(width < 1440px) {
        height: 3rem;
      }
    }

    button:disabled {
      color: var(--link-color);
      opacity: 0.4;
      cursor: auto;
    }
  }

  .register {
    font-weight: 900;
    cursor: pointer;
  }

  @media(width > 1440px) {
    gap: 3rem;
  }
}
</style>