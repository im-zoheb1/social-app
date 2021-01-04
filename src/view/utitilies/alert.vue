<template>
  <div class="alert" v-if="alert">
    <div class="alert__inner">
      <div class="alert__cancel" @click="alert = !alert">
        <span class="material-icons">clear</span>
      </div>
      <div class="alert__header">ALERT</div>
      <div class="alert__body">You don't have any text message, go the discover to send messages</div>
      <div class="alert__footer">
        <button class="alert--cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: true
    };
  }
};
</script>

<style lang="scss">
.alert {
  font-size: 1.4rem;
  color: #555;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  &__inner {
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.3);
    margin: auto;
    animation: alert ease-in 0.1s forwards;
    max-width: 35rem;
    position: relative;
    width: 100%;
    padding: 2.5rem 3rem 2.5rem;
    background-color: #cecece;
    border-radius: 7px;
  }
  &__cancel {
    color: #555;
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
  }
  &__header {
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 2.2rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }
  &__body {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  &__footer {
    padding-top: 1rem;
    width: 100%;
    display: flex;
  }
  &--cancel {
    margin-left: auto;
    background-color: #35477d;
    padding: 0.7rem 1.4rem;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 8px;
  }
}
</style>