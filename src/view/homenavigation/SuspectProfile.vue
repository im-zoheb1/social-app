<template>
  <div class="suspect">
    <div class="suspect__container">
      <div class="suspect__left">
        <div class="suspect__profile--img">
          <img src="../../assets/person.png" />
        </div>
        <a
          style="cursor: pointer;"
          @click="$router.push('/chat')"
          class="suspect__profile--msg"
          >Send Message</a
        >
      </div>
      <div class="suspect__right">
        <div class="suspect__user-info">
          <div class="suspect__user-info--name">Alexender</div>
          <div class="suspect__user-info--address">Age 24, LONDON, UK</div>
        </div>
        <div class="suspect__user-bio">
          Lorem ipsum dolor sit amet, consectetuer aommodo ligula eget dolor.
          Aenean mas dipiscing elit.
          <br />
          <br />Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient monten.
          <br />
          <br />Nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla conseq
        </div>
        <div class="suspect__user-photos">
          <div class="suspect__user-photos--title">Photos</div>
          <div class="suspect__user-photos--col">
            <div class="suspect__user-photos--item">
              <img src="../../assets/person.png" />
            </div>
            <div class="suspect__user-photos--item">
              <img src="../../assets/person.png" />
            </div>
            <div class="suspect__user-photos--item">
              <img src="../../assets/person.png" />
            </div>
            <div class="suspect__user-photos--item">
              <img src="../../assets/person.png" />
            </div>
            <div class="suspect__user-photos--item">
              <img src="../../assets/person.png" />
            </div>
            <div class="suspect__user-photos--item">
              <img src="../../assets/person.png" />
            </div>
            <div class="suspect__user-photos--item">
              <img src="../../assets/person.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-secondary: #6c587b;

@media screen and (max-width: 550px) {
  .suspect__container {
    flex-direction: column;
  }
  .suspect__profile--img {
    max-width: 35rem;
    margin: 0 auto;
  }
  .suspect__profile--msg {
    margin: 0 auto;
    width: 30rem;
    margin-top: -4rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
}

.suspect {
  width: 100%;
  padding: 5.5rem 0;
}
.suspect__container {
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
}
.suspect__left {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1;
}
.suspect {
  &__profile--img {
    border-radius: 1.2rem;
    overflow: hidden;
    margin-bottom: 1.9rem;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__profile--msg {
    background-color: $color-secondary;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.6rem;
    text-decoration: none;
    padding: 1.3rem;
    color: #fff;
    border-radius: 1rem;
  }
}
.suspect__right {
  flex-grow: 2;
  flex: 2;
  padding: 1.4rem;
}

.suspect {
  &__user-info {
    &--name {
      font-size: 2.6rem;
      display: block;
      color: #333;
    }
    &--address {
      color: #808080;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  }
  &__user-bio {
    padding: 3rem 0;
    color: #555;
    font-size: 1.8rem;
    line-height: 1.3;
  }
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
      grid-template-columns: repeat(auto-fit, minmax(100px, 6fr));
    }
    &--item {
      height: 10rem;
      border-radius: 3px;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
