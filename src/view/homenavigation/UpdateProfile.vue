<template>
  <div class="update">
    <div class="update__container">
      <div class="update__left">
        <div class="update__profile--img">
          <img class="update__profile--img-main" src="../../assets/person.png" />
          <div class="update__profile--img--choose">
            <label for="choose-profile-photo">
              <img src="../../assets/photo.svg" />
            </label>
            <input id="choose-profile-photo" type="file" />
          </div>
        </div>
      </div>
      <div class="update__right">
        <form class="update__form">
          <div class="update__form--title">Update Profile</div>
          <div class="update__form__attr">
            <label class="update__form__attr--label">Name</label>
            <input class="update__form__attr--input" type="text" />
          </div>
          <div class="update__form__attr">
            <label class="update__form__attr--label">Email</label>
            <input class="update__form__attr--input" type="email" />
          </div>
          <div class="update__form__attr">
            <label class="update__form__attr--label">DOB</label>
            <input class="update__form__attr--input" type="date" />
          </div>
          <div class="update__form__attr">
            <label class="update__form__attr--label">Country</label>
            <input class="update__form__attr--input" type="text" />
          </div>
          <div class="update__form__attr">
            <label class="update__form__attr--label">City</label>
            <input class="update__form__attr--input" type="text" />
          </div>
          <div class="update__form__attr">
            <label class="update__form__attr--label">Password</label>
            <input class="update__form__attr--input" type="password" />
          </div>
          <div class="update__form__attr">
            <label class="update__form__attr--label">Bio</label>
            <textarea class="update__form__attr--input" type="textarea" rows="8" />
          </div>
          <!-- <div class="update__form__attr">
            <button class="update__form__attr--submit">SIGN UP</button>
          </div>-->
          <div class="update__user-photos">
            <div class="update__user-photos--title">Photos</div>
            <div class="update__user-photos--col">
              <div class="update__user-photos--item">
                <img src="../../assets/person.png" />
              </div>
              <div class="update__user-photos--item">
                <img src="../../assets/person.png" />
              </div>
              <div class="update__user-photos--item">
                <img src="../../assets/person.png" />
              </div>
              <div class="update__user-photos--item">
                <img src="../../assets/person.png" />
              </div>
              <div class="update__user-photos--item">
                <img src="../../assets/person.png" />
              </div>
              <div class="update__user-photos--item">
                <img src="../../assets/person.png" />
              </div>
              <div class="update__user-photos--item">
                <img src="../../assets/person.png" />
              </div>
              <div class="update__user-photos--item update__user-photos--item--plus">
                <img src="../../assets/plus.svg" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-secondary: #6c587b;

@media screen and (max-width: 700px) {
  .update {
    &__container {
      flex-direction: column;
    }
    &__profile--img {
      margin: 0 auto;
      max-width: 30rem !important;
    }
    &__right {
      padding: 0 3.5rem !important;
    }
  }
}

.update {
  width: 100%;
  padding: 5.5rem 0;
}
.update__container {
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
}
.update__left {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1;
}
.update {
  &__profile--img {
    border-radius: 1.2rem;
    overflow: hidden;
    margin-bottom: 1.9rem;
    position: relative;
    height: 28rem;
    width: 100%;
    &-main {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    &--choose {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 35%;
      background-color: rgba(88, 88, 88, 0.5);
      & label {
        width: 100%;
        height: 100%;
        display: block;
        transition: transform 0.1s cubic-bezier(0.39, 0.575, 0.565, 1);
        color: pointer;
        &:hover {
          transform: scale(1.05);
        }
      }
      & img {
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        filter: invert(0.85);
        transform: translate(-50%, -50%);
      }
    }
    & input[type="file"] {
      display: none;
    }
  }
}
.update__right {
  flex-grow: 2;
  flex: 2;
  padding: 1.4rem;
}

.update {
  &__user-photos {
    &--title {
      font-size: 2rem;
      color: #333;
      display: block;
      font-weight: 700;
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
    &--col {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(100px, 6fr));
    }
    &--item {
      background-color: #dfdfdf;
      height: 13rem;
      border-radius: 3px;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &--plus {
        position: relative;
        & img {
          position: absolute;
          width: 30px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 30px;
          filter: invert(0.3);
        }
      }
    }
  }
  &__form {
    color: #555;

    &--title {
      font-size: 2.6rem;
      padding-bottom: 2.8rem;
    }
    &__attr {
      padding-bottom: 1.7rem;
      display: flex;
      &--label {
        padding-top: 1rem;
        font-size: 1.6rem;
        flex-grow: 2;
        flex: 2;
      }
      &--input {
        color: #555;
        flex-grow: 4;
        flex: 4;
        font-size: 1.7rem;
        padding: 0 0 5px 1rem;
        outline: none;
        display: block;
        width: 100%;
        padding: 1.1rem 1rem;
        font-size: 1.6rem;
        color: #666;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }
    }
  }
}
</style>