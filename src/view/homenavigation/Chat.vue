<template>
  <div class="chat">
    <div class="chat__inner">
      <div class="chat__msgs" v-show="msgs">
        <h1 class="chat__msgs--title">MESSAGES</h1>
        <div class="chat__msgs--items">
          <div class="chat__msgs--msg" @click="watchWindowMobile">
            <span class="chat__msgs--msg--img">
              <img src="../../assets/person.png" alt />
            </span>
            <span class="chat__msgs--msg--descr">
              <div class="chat__msgs--msg--name">Alexender</div>
              <div class="chat__msgs--msg--new">Hi! How're you Justin? I hea...</div>
            </span>
          </div>
        </div>
      </div>
      <div class="chat__chatting" v-if="chatting">
        <div
          class="chat__chatting--go-back"
          v-if="goback"
          @click="
            msgs = true;
            chatting = false;
          "
        >
          <i class="large material-icons">arrow_back</i>
        </div>
        <div class="chat__scrollable-chat" v-chat-scroll>
          <div class="chat__chatting__header">
            <div class="chat__chatting__header--img">
              <img src="../../assets/person.png" />
            </div>
            <div class="chat__chatting__header--descr">
              <div class="chat__chatting__header--name">Alexender</div>
              <div class="chat__chatting__header--location">Birmingham, United Kingdom</div>
              <div class="chat__chatting__header--age">Age 24</div>
            </div>
          </div>
          <div class="chat__chatting__body">
            <div class="chat__chatting__body--rcv-msg">
              <div class="chat__chatting__body--msg--img">
                <img src="../../assets/person.png" />
              </div>
              <div class="chat__chatting__body--rcv-msg--text">How are you?</div>
            </div>
            <div class="chat__chatting__body--sent-msg">
              <div class="chat__chatting__body--msg--img">
                <img src="../../assets/person.png" />
              </div>
              <div class="chat__chatting__body--sent-msg--text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula
              </div>
            </div>
            <div class="chat__chatting__body--sent-msg">
              <div class="chat__chatting__body--msg--img">
                <img src="../../assets/person.png" />
              </div>
              <div class="chat__chatting__body--sent-msg--text">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, f
              </div>
            </div>
            <div class="chat__chatting__body--sent-msg">
              <div class="chat__chatting__body--msg--img">
                <img src="../../assets/person.png" />
              </div>
              <div
                class="chat__chatting__body--sent-msg--text"
              >consequat massa quis enim. Donec pede just</div>
            </div>
            <div class="chat__chatting__body--rcv-msg">
              <div class="chat__chatting__body--msg--img">
                <img src="../../assets/person.png" />
              </div>
              <div
                class="chat__chatting__body--rcv-msg--text"
              >Cum sociis natoque penatibus et magnis dis</div>
            </div>
            <div class="chat__chatting__body--rcv-msg">
              <div class="chat__chatting__body--msg--img">
                <img src="../../assets/person.png" />
              </div>
              <div class="chat__chatting__body--rcv-msg--text">Donec pede justo, fri</div>
            </div>
            <div class="chat__chatting__body--rcv-msg">
              <div class="chat__chatting__body--msg--img">
                <img src="../../assets/person.png" />
              </div>
              <div class="chat__chatting__body--rcv-msg--text">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies n
              </div>
            </div>
          </div>
        </div>
        <div class="chat__chatting__footer">
          <textarea rows="1" class="chat__chatting__footer--textfield"></textarea>
          <div class="chat__chatting__footer--send-btn">
            <img src="../../assets/send.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgs: true,
      chatting: false,
      goback: false
    };
  },
  methods: {
    watchWindow() {
      if (window.outerWidth < 620) {
        this.msgs = true;
        this.chatting = false;
      } else {
        this.msgs = true;
        this.chatting = true;
        this.goback = false;
      }
    },
    watchWindowMobile() {
      if (window.outerWidth < 620) {
        this.msgs = false;
        this.chatting = true;
        this.goback = true;
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

@media screen and (max-width: 1100px) {
  .chat {
    &__msgs {
      &--msg {
        &--img {
          width: 4.5rem;
          height: 4.5rem;
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .chat {
    &__chatting {
      flex: 2 !important;
      flex-grow: 2 !important;
    }
  }
}

.chat {
  background-color: #f3f3f3;
  height: 89.2vh;
  width: 100%;
  &__inner {
    padding: 1.2rem;
    display: flex;
    height: 100%;
  }
  &__msgs {
    flex: 1;
    border-radius: 4px;
    flex-grow: 1;
    flex-shrink: 1;
    overflow-x: auto;
    height: 100%;
    background-color: #fff;
    margin-right: 1.2rem;
    &--title {
      text-transform: uppercase;
      color: $color-secondary;
      font-weight: 400;
      font-size: 2.4rem;
      text-align: center;
      padding: 2.5rem 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    &--msg {
      margin: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 1.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1.3rem 1.7rem;
      transition: all 0.2s ease-in;
      &:hover {
        background-color: #eee;
      }
      &--img {
        width: 5.5rem;
        height: 5.5rem;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &--descr {
        display: flex;
        flex-direction: column;
        padding-left: 1.5rem;
        padding-bottom: 0.5rem;
      }
      &--name {
        color: $color-text;
        font-size: 1.7rem;
      }
      &--new {
        padding-top: 0.1rem;
        font-size: 1.2rem;
        color: rgb(97, 97, 97);
      }
    }
  }
  &__scrollable-chat {
    overflow-y: auto;
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    &::-webkit-scrollbar {
      border-radius: 200px;
      overflow: hidden;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $color-primary;
      border-radius: 50px;
    }
  }
  &__chatting {
    border-radius: 4px;
    flex: 3;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-flow: column;
    flex-grow: 3;
    position: relative;
    &--go-back {
      color: #eee;
      font-size: 2.5rem;
      position: absolute;
      top: 1.5rem;
      display: flex;
      left: 2rem;
      border-radius: 7px;
      padding: 2px;
      background-color: #555;
      i {
        margin: auto;
      }
    }
    &__header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 2rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &--img {
        width: 11rem;
        height: 11rem;
        overflow: hidden;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1.5rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &--descr {
        padding-top: 1rem;
      }
      &--name {
        font-size: 2.2rem;
        color: $color-text;
        padding-bottom: 0.6rem;
      }
      &--location,
      &--age {
        color: rgb(163, 163, 163);
        font-size: 1.5rem;
        display: block;
      }
    }

    &__body {
      padding: 0rem 2rem 2rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: flex-end;
      &--msg--img {
        width: 3.5rem;
        height: 3.5rem;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &--rcv-msg {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        &--text {
          margin: 0.5rem 2.5rem;
          font-size: 1.45rem;
          border-radius: 10px;
          background-color: #85c4cf;
          max-width: 55%;
          line-height: 140%;
          padding: 1.5rem 1.5rem;
        }
      }
      &--sent-msg {
        align-items: center;
        display: flex;
        flex-flow: row-reverse;
        &--text {
          color: #fff;
          height: auto;
          max-width: 55%;
          line-height: 140%;
          font-size: 1.45rem;
          border-radius: 10px;
          margin: 0.5rem 2.5rem;
          padding: 1.5rem 1.5rem;
          background-color: #95c750;
        }
      }
    }

    &__footer {
      background-color: #f9f9f9;
      display: flex;
      flex-direction: row;
      padding: 1rem 3rem;
      position: sticky;
      left: 0;
      bottom: 0;
      align-items: stretch;
      &--textfield {
        border: 1px solid rgba(0, 0, 0, 0.1);
        resize: none;
        font-size: 1.7rem;
        font-family: "Lato", sans-serif;
        padding: 7px 1.4rem;
        color: $color-text;
        outline: none;
        width: 100%;
        border-radius: 15px;
        max-width: 100%;
        margin-right: 1.2rem;
      }
      &--send-btn {
        width: 4rem;
        height: 4rem;
        img {
          height: 100%;
          width: 100%;
          object-fit: fit;
        }
      }
    }
  }
}
</style>
