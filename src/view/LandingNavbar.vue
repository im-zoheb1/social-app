<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar__links">
        <div class="navbar__logo">
          <span>
            <span class="highlight">KILL</span>TIME
          </span>
          <span class="navbar__toggle" @click="displaynav = !displaynav">
            <div class="navbar__toggle--inner"></div>
          </span>
        </div>
        <div class="navbar__nav--back-blur" v-if="displaynav"></div>
        <ul class="navbar__nav" v-if="displaynav">
          <span class="navbar__toggle navbar__nav--slide" @click="displaynav = !displaynav">
            <div class="navbar__toggle--inner"></div>
          </span>
          <li class="navbar__nav--item">
            <a href="#" class="navbar__nav--item-link">HOW IT WORKS?</a>
          </li>
          <li class="navbar__nav--item">
            <a href="#" class="navbar__nav--item-link">LOREM IPSUM</a>
          </li>
          <li class="navbar__nav--item">
            <a href="#" class="navbar__nav--item-link">WHY KILLTIME?</a>
          </li>
          <li class="navbar__nav--item">
            <a href="#" class="navbar__nav--item-link">DOLOR SIT</a>
          </li>
        </ul>
      </div>
      <div class="navbar__buttons">
        <router-link :to="{ name: 'Signup' }" class="navbar__buttons--button">Register Now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaynav: true
    };
  },
  methods: {
    watchWindow: function() {
      if (window.outerWidth < 760) {
        this.displaynav = false;
      } else {
        this.displaynav = true;
      }
    }
  },
  mounted() {
    this.watchWindow();
    window.addEventListener("resize", this.watchWindow);
  }
};
</script>

<style lang="scss">
$color-primary: #c06c84;
$color-secondary: #35477d;
$color-text: #555;

.navbar-container {
  width: 100%;
  box-shadow: 2px 0 3px 0 rgba(0, 0, 0, 0.5);
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: $color-text;
  letter-spacing: 1.05px;
  padding: 1rem 3rem;
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

  &__buttons {
    &--button {
      color: $color-primary;
      text-decoration: none;
      font-size: 1.8rem;
      padding: 0.6rem 1.5rem;
      border: 2px solid $color-primary;
      border-radius: 10px;
    }
  }
}
</style>
