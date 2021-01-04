<template>
  <app-layout></app-layout>
</template>

<script>
import AppLayout from "./components/AppLayout.vue";
export default {
  components: {
    appLayout: AppLayout
  },
  data: function() {
    return {
      dob: "",
      signupData: {
        name: "",
        emal: "",
        password: "",
        gender: "",
        location: "",
        day: "",
        month: "",
        year: ""
      }
    };
  },
  provide() {
    return {
      signupCollection: this.signupData,
      dob: this.dob
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,400i,700&display=swap");

$color-primary: #c06c84;
$color-secondary: #35477d;
$color-text: #555;

:root {
  font-size: 62.5%;
  font-family: "Lato", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.no-decoration {
  text-decoration: none !important;
}

.display-none {
  display: none !important;
}

.highlight {
  color: $color-primary;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.heading--primary {
  font-size: 3.2rem;
  display: block;
  margin-bottom: 5.5rem;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  color: $color-text;
  letter-spacing: 0.25rem;
  font-weight: 400;
}

.section {
  padding: 9rem 0;
}

.paragraph {
  font-size: 1.9rem;
  color: $color-text;
  line-height: 140%;
  font-weight: 300;
}

.para--heading {
  font-size: 2.85rem;
  text-transform: uppercase;
  font-weight: 300;
  padding-bottom: 2.5rem;
}

// MIXINS

@mixin ds-flex-row {
  display: flex;
  flex-direction: row;
}

@mixin ds-flex-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media screen and (max-width: 1020px) {
  .awareness {
    &__paragraphs {
      padding: 0px 2rem 5rem !important;
      text-align: justify;
    }
  }

  .why-us {
    &__paragraphs {
      padding: 2rem 2rem 0 !important;
      text-align: justify;
    }
  }
}

@media screen and (max-width: 970px) {
  :root {
    font-size: 56.25%;
  }
}

@media screen and (max-width: 890px) {
  :root {
    font-size: 50%;
  }
}

@media screen and (max-width: 800px) {
  :root {
    font-size: 47%;
  }
}

@media screen and (max-width: 760px) {
  .navbar {
    justify-content: space-between !important;
    &__toggle {
      display: block !important;
      margin-left: 2rem !important;
    }
    &__links {
      padding-bottom: 0 !important;
      align-items: center !important;
    }
    &__nav {
      &--back-blur {
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
      }
      &--slide {
        align-self: flex-start;
        margin: 2rem;
      }
      padding-top: 7rem !important;
      z-index: 1000 !important;
      flex-direction: column !important;
      padding: 0 !important;
      text-align: left !important;
      position: fixed !important;
      height: 100vh;
      background-color: #fff;
      top: 0;
      left: 0;
      width: 250px;
      &--item {
        text-align: left !important;
        &:first-child {
          margin-top: 6rem !important;
        }
      }
    }
  }

  .section {
    padding: 7.5rem 0 !important;
  }
}

@media screen and (max-width: 670px) {
  .awareness {
    &__paragraphs {
      flex-direction: column !important;
      &--para:not(:last-child) {
        padding: 0 0 4rem 0 !important;
      }
    }
  }

  .section {
    padding: 6.5rem 0 !important;
  }
}

@media screen and (max-width: 620px) {
  .section {
    padding: 5rem 0 !important;
  }
  .why-us {
    &--heading {
      margin-bottom: 3rem !important;
    }
    &__paragraphs {
      flex-flow: column-reverse !important;
      &__left {
      }
      &__right {
        padding: 0 !important;
        &--para {
          padding: 0 0 4rem 0 !important;
        }
      }
    }
  }

  .help {
    &--paragraph {
      padding: 0 2rem !important;
      text-align: justify !important;
    }
  }
}

@media screen and (max-width: 500px) {
  .section {
    padding: 7rem 0 !important;
  }
  .awareness {
    &__image {
      height: 25rem !important;
    }
  }

  .heading--primary {
    font-size: 2.8rem !important;
    margin-bottom: 3.5rem !important;
    padding: 1.8rem;
  }

  .why-us {
    &__paragraphs__left {
      display: none !important;
    }
  }
}
</style>
