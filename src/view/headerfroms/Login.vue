<template>
  <div class="login">
    <div class="login__inner">
      <form class="login__form">
        <div class="login--logo">
          <span class="highlight">KILL</span>TIME
        </div>
        <div class="login__form__attr">
          <label class="login__form__attr--label">EMAIL</label>
          <input class="login__form__attr--input" type="email" />
        </div>
        <div class="login__form__attr">
          <label class="login__form__attr--label">PASSWORD</label>
          <input class="login__form__attr--input" type="password" />
        </div>
        <div class="login__form__attr">
          <button class="login__form__attr--submit" @click.prevent="$router.push('/home')">LOG IN</button>
        </div>
        <div class="login__form__others">
          <a class="login__form__others--link">Don't have an account? Create Now</a>
          <a class="login__form__others--link">forget password?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-white: #fff;
$color-secondary: #6c587b;
$color-text: #555;
.login {
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
    &__attr {
      &:not(:last-child) {
        padding-bottom: 1.7rem;
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: $color-text;
      &--label {
        font-size: 1.2rem;
        display: block;
        padding: 0 0 5px 1rem;
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
      }
    }
    &__others {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 0.6rem 4.5rem 0.6rem;
      &--link {
        margin-top: -8px;
        font-size: 1.1rem;
        color: #0058e4;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
}
</style>