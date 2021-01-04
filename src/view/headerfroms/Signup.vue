<template>
  <div class="signup">
    <div class="signup__inner">
      <form class="signup__form" @submit="signup">
        <div class="signup--logo">
          <span class="highlight">KILL</span>TIME
        </div>
        <div class="signup__form__attr">
          <label class="signup__form__attr--label">FULL NAME</label>
          <input
            required
            class="signup__form__attr--input"
            type="text"
            v-model="signupCollection.name"
          />
        </div>
        <div class="signup__form__attr">
          <label class="signup__form__attr--label">EMAIL</label>
          <input
            required
            class="signup__form__attr--input"
            type="email"
            v-model="signupCollection.email"
          />
        </div>
        <div class="signup__form__attr">
          <label class="signup__form__attr--label">DATE</label>
          <input required class="signup__form__attr--input" type="date" v-model="dob" />
        </div>
        <!-- <div class="signup__form__attr">
          <div class="signup__form__multi">
            <div class="signup__form__multi__attr" style="flex: 1; flex-grow: 1;">
              <label class="signup__form__attr--label">DOB</label>
              <input class="signup__form__attr--input" type="date" />
            </div>
            <div class="signup__form__multi__attr" style="flex: 1; flex-grow: 1;">
              <input id="select-profile" class="signup__form__attr--input-file" type="file" />
              <label for="select-profile" class="signup__form__attr--label-file">
                <span>
                  <img src="../../assets/photo.svg" />
                </span>
                <span>Profile Photo</span>
              </label>
            </div>
          </div>
        </div>-->
        <div class="signup__form__attr">
          <div class="signup__form__multi">
            <div class="signup__form__multi__attr">
              <label class="signup__form__attr--label">GENDER</label>
              <input
                required
                class="signup__form__attr--input"
                type="text"
                v-model="signupCollection.gender"
              />
            </div>
            <div class="signup__form__multi__attr">
              <label class="signup__form__attr--label">LOCATION</label>
              <input
                required
                class="signup__form__attr--input"
                type="text"
                v-model="signupCollection.location"
              />
            </div>
          </div>
        </div>
        <div class="signup__form__attr">
          <label class="signup__form__attr--label">PASSWORD</label>
          <input
            required
            class="signup__form__attr--input"
            type="password"
            v-model="signupCollection.password"
          />
        </div>
        <div class="signup__form__attr">
          <button class="signup__form__attr--submit">SIGN UP</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {
      // getDate: "2018-02-02"
      dob: ""
    };
  },
  inject: ["signupCollection", "dob"],
  methods: {
    splitDOB() {
      // this.dob = this.getDate;
      const [year, month, day] = this.dob.split("-");
      this.signupCollection.month = month;
      this.signupCollection.day = day;
      this.signupCollection.year = year;
    },
    signup() {
      // const raw = {
      //   name: this.signupCollection.name,
      //   email: this.signupCollection.email,
      //   password: this.signupCollection.password,
      //   gender: this.signupCollection.password,
      //   location: this.signupCollection.location,
      //   day: this.signupCollection.day,
      //   month: this.signupCollection.month,
      //   year: this.signupCollection.year
      // };
      // const json = JSON.stringify(raw);
      // console.log(json);
      // var requestOptions = {
      //   method: "POST",
      //   body: json,
      //   redirect: "follow"
      // };
      // this.$http(
      //   "https://mysterious-lowlands-94558.herokuapp.com/signup",
      //   requestOptions
      // )
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log("error", error));
    }
  }
};
</script>

<style lang="scss">
$color-white: #fff;
$color-secondary: #6c587b;
$color-text: #555;
.signup {
  width: 100%;
  &__inner {
    padding: 8rem 0;
  }
  &--logo {
    color: $color-text;
    font-size: 25px;
    display: block;
    letter-spacing: 1.05px;
    text-align: center;
    padding: 3rem 0 1.5rem 0;
    font-weight: 700;
  }
  &__form {
    background-color: $color-white;
    border-radius: 1.2rem;
    margin: 0 auto;
    max-width: 45rem;
    overflow: hidden;
    padding: 0 5rem;
    &__multi {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__attr:not(:last-child) {
        padding-right: 1rem;
      }
    }
    &__attr {
      padding-bottom: 1.7rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: $color-text;
      &--label {
        font-size: 1.2rem;
        display: block;
        padding: 0 0 5px 1rem;
        &-file {
          display: flex;
          flex-direction: row;
          padding-top: 2rem;
          span {
            font-size: 1.2rem;
            &:first-child {
              padding: 0 1rem 0 2rem;
            }
            &:last-child {
              text-transform: uppercase;
              padding-top: 0.8rem;
            }
          }
          & img {
            filter: invert(0.3);
            width: 3rem;
          }
        }
      }
      &--input {
        outline: none;
        display: block;
        width: 100%;
        padding: 1.1rem 1rem;
        font-size: 1.6rem;
        color: #666;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        &-file {
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: $color-secondary;
          display: none;
        }
      }
      &--submit {
        background-color: $color-secondary;
        color: $color-white;
        border: none;
        outline: none;
        border-radius: 12px;
        width: 100%;
        font-weight: 700;
        font-size: 1.3rem;
        margin: 1.4rem 0 0rem 0;
        text-align: center;
        padding: 1.4rem;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
