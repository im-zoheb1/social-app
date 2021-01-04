<template>
  <div>
    <div class="popup" @click="popupCall($event)" v-show="popup">
      <div class="popup__inner">
        <div class="popup__cancel" @click="popup = !popup">
          <span class="material-icons">clear</span>
        </div>
        <div class="popup__row">
          <div class="popup--heading">FILTER SEARCH</div>
        </div>
        <div class="popup__row">
          <div class="popup--label">Location</div>
          <div class="popup__right">
            <select class="popup__select" id="states">
              <option>Texas</option>
              <option>Washington</option>
              <option>Los Angles</option>
              <option>San Fransisco</option>
            </select>
          </div>
        </div>
        <div class="popup__row">
          <div class="popup--label" for="age_input">Age [{{ minage }} to {{ maxage }}]</div>
          <div class="popup__right">
            <div class="popup__right__slider" style="width: 100%;">
              <div ref="slider" style="width: 100%"></div>
            </div>
          </div>
        </div>
        <div class="popup__row">
          <div class="popup--label">Gender</div>
          <div class="popup__checkboxes__col popup__right">
            <div class="popup__checkbox__cont">
              <input type="checkbox" id="male" />
              <label for="male">Male</label>
            </div>
            <div class="popup__checkbox__cont">
              <input type="checkbox" id="female" />
              <label for="female">Female</label>
            </div>
            <div class="popup__checkbox__cont">
              <input type="checkbox" id="other" />
              <label for="other">Other</label>
            </div>
          </div>
        </div>
        <div class="popup__button__select">
          <button type="submit" @click="popup = !popup">search</button>
        </div>
      </div>
    </div>
    <home-nav @displayPopup="popup = !popup"></home-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeNav from "../view/HomeNavbar";
export default {
  data() {
    return {
      rangeValue: 0,
      popup: false,
      minage: 20,
      maxage: 40
    };
  },
  components: {
    homeNav: HomeNav
  },
  methods: {
    popupCall(event) {
      if (!event.target.closest(".popup__inner")) {
        this.popup = !this.popup;
      }
    }
  },
  mounted() {
    var slider = this.$refs.slider;
    var minage, maxage;
    this.$slider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
    slider.noUiSlider.on("update", () => {
      minage = slider.noUiSlider.get()[0];
      maxage = slider.noUiSlider.get()[1];
      this.minage = Number(minage).toFixed(0);
      this.maxage = Number(maxage).toFixed(0);
    });

    // this.$http
    //   .get("https://www.universal-tutorial.com/api/states/United States", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Auth-Token":
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiZXhwIjoxNTg1OTM0MDE4fQ.6_vizSpnWdrdggPTDH_ZSbJtP1iQiIggDg0_erZOhOo"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style lang="scss">
.noUi-connect {
  background-color: #c06c84 !important;
}
@keyframes popup {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.popup {
  z-index: 1200;
  font-size: 1.4rem;
  color: #555;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  &--heading {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: 400;
    color: #c06c84;
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }
  &__inner {
    margin: auto;
    animation: popup ease-in 0.1s forwards;
    max-width: 45rem;
    position: relative;
    flex: 1;
    padding: 4rem 3rem 2.5rem;
    background-color: #fff;
    border-radius: 7px;
  }
  &__cancel {
    color: #555;
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
  }
  &__row {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding-bottom: 3.5rem;
  }
  &--label {
    flex: 1;
    font-size: 1.7rem;
  }
  &__right {
    flex: 2;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    padding-left: 2rem;
    &__slider {
      flex: 1;
      display: flex;
    }
  }
  &__checkbox__cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 33%;
    margin-bottom: 1.2rem;
    label {
      padding-left: 4px;
    }
  }
  &__select {
    width: 100%;
    outline: none;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f2f2f2;
    font-size: 1.7rem;
    color: #555;
  }
  &__button__select {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex: 1;
    padding-top: 1rem;
    button {
      background: #c06c84;
      color: #fff;
      margin-left: auto;
      text-transform: capitalize;
      border: none;
      padding: 0.9rem 2rem;
      border-radius: 7px;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
}
</style>
