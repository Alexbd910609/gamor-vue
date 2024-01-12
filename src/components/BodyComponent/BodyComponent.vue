<template>
  <div>
    <section class="left">
      <h1>start <span class="streaming">streaming</span> games differently</h1>

      <div class="text">
        <h3>gamor now has <span class="stream-party">stream party</span> platform</h3>

        <img v-show="themeStore.getTheme === 'light'" alt="twisted_line" src="@/assets/images/light_twisted_line.png"/>
        <img v-show="themeStore.getTheme === 'dark'" alt="twisted_line" src="@/assets/images/dark_twisted_line.png"/>
      </div>

      <div class="buttons">
        <button class="create-account">Create account</button>
        <router-link class="sign-in" :to="{ name: 'sign-in' }">Sign in</router-link>
      </div>
    </section>

    <section class="center">
      <h2 class="title">Fortnite New Season</h2>
      <h3 class="subtitle">Join Live Stream</h3>

      <div class="button-group">
        <img class="add-person" src="@/assets/images/person_add.png" alt="add-person"/>
        <h2 class="clock">{{ time }}</h2>
      </div>

      <img class="bg-image" v-show="themeStore.getTheme === 'light'" alt="bg-image"
           src="@/assets/images/light_image.png"/>
      <img class="bg-image" v-show="themeStore.getTheme === 'dark'" alt="bg-image"
           src="@/assets/images/dark_image.png"/>
    </section>

    <section class="right">
      <div class="options">
        <h2>01. <span>Choose Platform</span></h2>

        <div class="button-group" id="button-group">
          <button class="selected" name="button-group" @click="onSelected('party')" id="party">Party</button>
          <button name="button-group" @click="onSelected('match')" id="match">Matches</button>
          <button name="button-group" @click="onSelected('streams')" id="streams">Streams</button>
        </div>
      </div>

      <div class="options">
        <h2>02. <span>Searching Game</span></h2>

        <div class="search">
          <div class="filter-input">
            <input class="search-input" type="text" placeholder="Search Game">

            <button>
              <img v-show="themeStore.getTheme === 'light'" alt="filter" src="@/assets/images/tune_black.png"/>
              <img v-show="themeStore.getTheme === 'dark'" alt="filter" src="@/assets/images/tune_white.png"/>
            </button>
          </div>

          <button class="search-button">Search Now</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from "vue";
import {useThemeStore} from "@/store/theme";

const _buttons = document.getElementsByName('button-group');

const time: Ref<string> = ref('0');
const themeStore = useThemeStore();

const _setTime = (): void => {
  const hours: number = new Date().getHours();
  const minutes: number = new Date().getMinutes();
  const seconds: number = new Date().getSeconds();

  time.value = (hours < 10 ? '0' + hours.toString() : hours.toString()) + ' : ' + (minutes < 10 ? '0' + minutes.toString() : minutes.toString()) + ' : ' + (seconds < 10 ? '0' + seconds.toString() : seconds.toString());
}

const onSelected = (id: string): void => {
  _buttons.forEach((button: HTMLElement): void => {
    button?.removeAttribute('class');
  });

  const element: HTMLElement | null = document.getElementById(id);
  element?.setAttribute('class', 'selected');
}

onMounted(() => {
  setInterval((): void => {
    _setTime();
  }, 1000);
});
</script>

<style scoped lang="scss">
div {
  display: flex;

  section {
    width: 100%;
    height: 90vh;
    display: flex;

    .left, .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-inline: 2%;
      width: 33%;
      background: var(--body-color);
    }

    .left {
      gap: 4rem;
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;

      h1 {
        font-size: 4rem;
        line-height: 4.5rem;
        font-stretch: expanded;
        max-width: 60%;

        .streaming {
          color: var(--fourth-color);
        }

        @media(width < 1440px) {
          font-size: 3rem;
          line-height: 3.5rem;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
          font-size: 2vh;
          color: var(--link-color);

          .stream-party {
            color: var(--secondary-color);
          }
        }

        img {
          padding-left: 28%;
          width: 22%;
          height: 6px;

          @media(width < 1440px) {
            padding-left: 26%;
          }
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        gap: 3rem;

        .create-account {
          padding: 1rem 2rem;
          font-weight: 900;
          border-radius: 3rem;
          background: var(--account-button-color);
          box-shadow: 10px 7px 5px var(--container-color);

          @media(width < 1440px) {
            padding: 0.7rem 1rem;
            font-weight: 500;
          }
        }

        @media(width < 1440px) {
          gap: 2rem;
        }

        .sign-in {
          text-decoration: none;
          font-weight: 900;
          color: var(--link-color);

          &.router-link-exact-active {
            color: var(--link-color);
          }
        }
      }

      @media(width < 1440px) {
        gap: 3rem;
      }
    }

    .center {
      position: relative;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      width: 34%;

      .title {
        z-index: 1;
        padding-top: 3rem;
        color: rgba(255, 255, 255, 1);

        @media(width < 1440px) {
          padding-top: 2rem;
          font-size: 1.3rem;
        }
      }

      .subtitle {
        z-index: 1;
        color: var(--fifth-color);

        @media(width < 1440px) {
          font-size: 1rem;
        }
      }

      .button-group {
        z-index: 1;
        display: flex;

        .add-person {
          position: absolute;
          margin-left: -3rem;
          margin-top: -1rem;
          background: linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, .1));
          backdrop-filter: blur(3rem);
          padding: 1rem;
          border-radius: 4rem;

          @media(width < 1440px) {
            margin-left: -2rem;
            margin-top: -1rem;
            width: 24px;
            height: 24px;
            padding: 0.7rem;
          }
        }

        .clock {
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 1);
          color: var(--third-color);
          border-radius: 4rem;

          @media(width < 1440px) {
            padding: 0.7rem 1rem;
            font-size: 1.3rem;
          }
        }
      }

      .bg-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .right {
      align-items: center;
      gap: 3rem;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;

      .options {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
          color: var(--link-color);

          span {
            color: var(--secondary-color);
            font-size: 70%;
          }

          @media(width < 1440px) {
            font-size: 1.2rem;
          }
        }

        .button-group {
          display: flex;
          justify-content: space-between;
          max-width: 100%;
          padding: 0.5rem;
          border-radius: 3rem;
          background: var(--container-color);

          button {
            font-weight: 900;
            padding: 1rem 2rem;
            border-radius: 3rem;
            background: transparent;

            @media(width < 1440px) {
              padding: 0.7rem 1rem;
              font-weight: 500;
            }
          }

          button.selected {
            background: var(--main-color);
          }
        }

        .search {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--container-color);
          border-radius: 1rem;
          max-width: 100%;

          .filter-input {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 90%;

            .search-input, button {
              margin-block: 1rem;
            }

            .search-input {
              width: 80%;
              font-weight: 900;

              @media(width < 1440px) {
                width: 60%;
                font-weight: 500;
              }
            }

            img {
              width: 24px;
              height: 24px;
            }
          }

          &-button {
            margin-block: 1rem;
            width: 90%;
            font-weight: 900;
            border-radius: 1rem;
            padding-block: 1.5rem;
            color: var(--main-color);
            background: var(--secondary-color);

            @media(width < 1440px) {
              padding-block: 1rem;
            }
          }
        }
      }
    }
  }
}

</style>