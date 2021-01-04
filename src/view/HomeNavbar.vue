<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar__links">
        <div class="navbar__logo">
          <span style="cursor: pointer;" @click="$router.push('/home')">
            <span class="highlight">KILL</span>TIME
          </span>
          <span class="navbar__toggle" @click="displaynav = !displaynav">
            <div class="navbar__toggle--inner"></div>
          </span>
        </div>
        <div class="navbar__nav--back-blur" v-if="displaynav"></div>
        <ul class="navbar__nav" v-if="displaynav">
          <span
            class="navbar__toggle navbar__nav--slide"
            @click="displaynav = !displaynav"
          >
            <div class="navbar__toggle--inner"></div>
          </span>
          <li class="navbar__nav--item">
            <a
              @click="$router.push('/home')"
              class="navbar__nav--item-link"
              style="cursor: pointer;"
              >DISCOVER</a
            >
          </li>
          <li class="navbar__nav--item">
            <a
              style="cursor: pointer;"
              class="navbar__nav--item-link"
              @click="$emit('displayPopup')"
              >SEARCH</a
            >
          </li>
        </ul>
      </div>
      <div class="navbar__action">
        <a class="navbar__actions navbar__actions--friends">
          <img
            class="navbar__actions--img"
            src="../assets/group-of-men.svg"
            alt="Friends"
          />
        </a>
        <router-link
          :to="{ name: 'Chat' }"
          class="navbar__actions navbar__actions--message"
        >
          <img
            class="navbar__actions--img"
            src="../assets/chat.svg"
            alt="Message"
          />
        </router-link>
        <a class="navbar__actions">
          <div
            class="navbar__actions--profile-img"
            @click="dropprofile = !dropprofile"
          >
            <img src="../assets/person.png" alt="Profile" />
          </div>
          <div class="navbar__actions__dropdown" v-show="dropprofile">
            <div class="navbar__actions__dropdown--inner">
              <div
                class="navbar__actions__dropdown--header"
                @click="$router.push('/updateprofile')"
              >
                <div class="navbar__actions__dropdown--img">
                  <img src="../assets/person.png" />
                </div>
                <div class="navbar__actions__dropdown--text">
                  <div class="name">Alexender</div>
                  <div class="sub">lorem ipusm</div>
                </div>
              </div>
              <div class="navbar__actions__dropdown--footer">
                <div class="navbar__actions__dropdown--footer--label">
                  Logout
                </div>
                <i class="material-icons">exit_to_app</i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaynav: true,
      dropprofile: false,
    };
  },
  methods: {
    watchWindow: function() {
      if (window.outerWidth < 760) {
        this.displaynav = false;
      } else {
        this.displaynav = true;
      }
    },
  },
  mounted() {
    this.watchWindow();
    window.addEventListener("resize", this.watchWindow);
  },
};
</script>

<style lang="scss">
$color-primary: #c06c84;
$color-secondary: #35477d;
$color-text: #555;
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: $color-text;
  letter-spacing: 1.05px;
  padding: 1rem 3rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  &__toggle {
    padding: 12px 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    position: relative;
    display: none;
    &--inner {
      width: 20px;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.5);
      position: relative;
      &::after {
        content: "";
        width: 20px;
        position: absolute;
        top: -6px;
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        height: 3px;
        margin-bottom: 10px;
      }
      &::before {
        content: "";
        width: 20px;
        position: absolute;
        top: 6px;
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        height: 3px;
        margin-bottom: 10px;
      }
    }
  }
  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__logo {
    justify-content: space-between;
    font-weight: 700;
    align-items: center;
    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
  }
  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0;
    list-style-type: none;
    font-size: 1.6rem;
    padding-left: 3.5rem;
    margin-bottom: -3px;
    position: relative;

    &--item {
    }
    &--item-link {
      padding: 10px 1.2rem;
      display: block;
      text-decoration: none;
      color: $color-text;
      border-bottom: 2px solid transparent;
      transition: border 0.3s ease-in;
      &:hover {
        border-bottom: 2px solid $color-primary;
      }
    }
  }

  &__action {
    display: flex;
    flex-direction: row;
    align-items: center;
    &s {
      cursor: pointer;
      &--profile-img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          widows: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__dropdown {
        position: absolute;
        border-radius: 4px;
        animation: popup ease-in 0.1s forwards;
        right: 2rem;
        top: 11%;
        padding: 1.5rem 2.5rem;
        background-color: #ececec;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
        z-index: 900;
        &--inner {
          &::before {
            content: "";
            display: table;
            position: absolute;
            top: -2.4rem;
            right: 2rem;
            width: 2.4rem;
            height: 2.4rem;
            clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
            background-color: #ececec;
          }
        }
        &--header {
          align-items: center;
          display: flex;
          flex-direction: row;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        &--img {
          margin-right: 1.5rem;
          width: 8rem;
          border-radius: 50%;
          height: 8rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &--text {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          padding-right: 4px;
          .name {
            font-size: 2rem;
            color: $color-secondary;
          }
          .sub {
            font-size: 1.4rem;
            font-weight: 400;
          }
        }
        &--footer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          &--label {
            font-size: 1.5rem;
            font-weight: 400;
            padding-right: 1rem;
          }
        }
      }
      &--friends {
        width: 40px;
        height: 40px;
      }
      &--message {
        width: 36px;
        height: 36px;
      }
      &--img {
        width: auto;
        height: 100%;
      }
      &:not(:last-child) {
        margin-right: 1.4rem;
      }
      &:last-child {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }
  }
}
</style>
