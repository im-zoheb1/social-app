<template>
  <div>
    <landing-navbar></landing-navbar>
    <landing-rest></landing-rest>
  </div>
</template>

<script>
import LandingNavbar from "../view/LandingNavbar";
import LandingRest from "../view/LandingRest";
export default {
  components: {
    landingNavbar: LandingNavbar,
    landingRest: LandingRest
  },
  date() {
    return {
      message: ""
    };
  }
};
</script>

<style lang="scss"></style>
