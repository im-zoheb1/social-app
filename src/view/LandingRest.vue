<template>
  <div class="landing-rest">
    <div class="header">
      <div class="header__inner">
        <router-view></router-view>
      </div>
    </div>
    <div class="awareness section">
      <div class="container">
        <h2 class="awareness--heading heading--primary">awareness of covid-19</h2>
        <div class="awareness__paragraphs">
          <p class="awareness__paragraphs--para paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus.
          </p>
          <p class="awareness__paragraphs--para paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiete.
          </p>
        </div>
        <div class="awareness__image">
          <img class="awareness__image--img" src="../assets/awareness.jpg" />
          <div class="awareness__image--overlay"></div>
        </div>
      </div>
    </div>
    <div class="why-us section">
      <h2 class="heading--primary why-us--heading">why killtime?</h2>
      <div class="container">
        <div class="why-us__paragraphs">
          <div class="why-us__paragraphs__left">
            <div class="why-us__paragraph--para">
              <div class="para--heading">stay home</div>
              <div
                class="paragraph"
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
            </div>
          </div>
          <div class="why-us__paragraphs__right">
            <div class="why-us__paragraphs__right--para">
              <div class="para--heading">make friends</div>
              <div
                class="paragraph"
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus.</div>
            </div>
            <div class="why-us__paragraphs__right--para">
              <div class="para--heading">lorem ipsum</div>
              <div
                class="paragraph"
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="help section">
      <div class="container">
        <div class="heading--primary help--heading">HELP OTHERS</div>
        <div
          class="paragraph help--paragraph"
        >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {
      message: ""
    };
  }
};
</script>

<style lang="scss">
$color-primary: #c06c84;
$color-secondary: #35477d;
$color-text: #555;

.landing-rest {
  z-index: -1;
}

.header {
  background: linear-gradient(
      to right bottom,
      rgba(82, 69, 69, 0.49),
      rgba(82, 69, 69, 0.49)
    ),
    url("../assets/header.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  &__inner {
    width: 100%;
  }
}

.awareness {
  &--heading {
    color: $color-secondary;
  }
  &__paragraphs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 7rem;
    &--para {
      &:not(:last-child) {
        padding-right: 3.5rem;
      }
    }
  }
  &__image {
    width: 90%;
    margin: 0 auto;
    position: relative;
    height: 35rem;
    &--img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
    }
    &--overlay {
      background: rgba(107, 94, 119, 0.26);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.why-us {
  color: #fff;
  background: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.39),
      rgba(0, 0, 0, 0.39)
    ),
    url("../assets/why-us.jpg");
  background-size: cover;
  background-position: center;
  &--heading {
    color: inherit;
    background: rgba(91, 98, 123, 0.76);
    padding: 2.5rem;
  }
  &__paragraphs {
    display: flex;
    padding-top: 2rem;
    &__left {
      padding-right: 1.7rem;
      flex: 1;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    &__right {
      flex: 1;
      flex-grow: 1;
      padding-left: 1.7rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &--para {
        &:not(:last-child) {
          padding-bottom: 18rem;
        }
      }
    }
  }
  .paragraph {
    color: #fff;
  }
}

.help {
  &--paragraph {
    max-width: 70rem;
    margin: 0 auto;
    color: $color-secondary;
    text-align: center;
  }
}
</style>
