<template>
  <div class="chat">
    <div v-if="dataLoading" class="chat__inner">
      <loading-gif />
    </div>
    <div v-else class="chat__inner">
      <div class="chat__msgs">
        <h1 class="chat__msgs--title">MESSAGES</h1>
        <div class="chat__msgs--items">
          <template v-for="(item, i) in sideBar">
            <router-link :key="i" :to="{ name: 'Chat', params: { id2: item.id } }">
              <div class="chat__msgs--msg" @click="requestData(item.id)">
                <!-- <div class="chat__msgs--msg" > -->
                <span class="chat__msgs--msg--img">
                  <img v-if="!item.profile_photo" src="../../assets/person.png" />
                  <img v-else v-bind:src="item.profile_photo" />
                  <!-- <img src="../../assets/person.png" alt /> -->
                  <!-- <img v-bind:src=item.profile_photo /> -->
                </span>
                <span class="chat__msgs--msg--descr">
                  <div class="chat__msgs--msg--name">{{item.name}}</div>
                  <div class="chat__msgs--msg--new">Hi! How're you Justin? I hea...</div>
                </span>
              </div>
            </router-link>
          </template>
        </div>
      </div>
      <div class="chat__chatting">
        <div class="chat__scrollable-chat">
          <div class="chat__chatting__header">
            <div class="chat__chatting__header--img">
              <!-- <img src="../../assets/person.png" /> -->
              <img v-bind:src="recieverData.profile_photo" />
            </div>
            <div class="chat__chatting__header--descr">
              <div class="chat__chatting__header--name">{{recieverData.name}}</div>
              <div
                class="chat__chatting__header--location"
              >{{recieverData.location}}, {{recieverData.country}}</div>
              <div class="chat__chatting__header--age">Age {{recieverData.age}}</div>
            </div>
          </div>
          <div class="chat__chatting__body">
            <template v-for="(msg,index)  in messages">
              <div
                v-if="msg.name == myId || msg.sender_id == myId"
                class="chat__chatting__body--sent-msg"
                :key="index"
              >
                <div class="chat__chatting__body--msg--img" :key="index">
                  <!-- <img src="../../assets/person.png" /> -->
                  <!-- <img v-bind:src=recieverData.profile_photo /> -->
                </div>
                <div class="chat__chatting__body--sent-msg--text">{{ msg.message }}</div>
              </div>

              <div v-else class="chat__chatting__body--rcv-msg" :key="index">
                <div class="chat__chatting__body--msg--img" :key="index">
                  <img v-if="!recieverData.profile_photo" src="../../assets/person.png" />
                  <img v-else v-bind:src="recieverData.profile_photo" />
                  <!-- <img src="../../assets/person.png" /> -->
                  <!-- <img v-bind:src=recieverData.profile_photo /> -->
                </div>
                <div class="chat__chatting__body--rcv-msg--text">{{ msg.message }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="chat__chatting__footer">
          <input
            rows="1"
            class="chat__chatting__footer--textfield"
            placeholder="Type Message Here"
            v-model="message"
            @keyup.13="sendMessage"
          />
          <div class="chat__chatting__footer--send-btn" @click.prevent="sendMessage">
            <img src="../../assets/send.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingGif from "../../components/loadingGif.vue";
import io from "socket.io-client";
export default {
  name: "chating",
  props: ["id2"],
  data() {
    return {
      user2: "",
      myId: "",
      message: "",
      myMsg: "",
      textMessage: "",
      roomName: "",
      userID: "",
      messages: [],
      recieverData: "",
      sideBar: [],
      dataLoading: true,
      socket: io("http://localhost:3000")
    };
  },
  components: {
    loadingGif: LoadingGif
  },
  // computed: {

  // },
  mounted() {
    this.user2 = localStorage.getItem("receiverId");
    this.myId = localStorage.getItem("id");
    // 2.this.requestData(this.user2, this.myId);
    this.dataLoading = true;
    console.log("id from browser storage in chat: ", this.myId);
    console.log("id of reciever in chat: ", this.user2);
    this.$axios
      .get("http://localhost:3000/create_room", {
        // .get("http://64.202.184.139:3000/create_room", {
        // .get("https://killmatch.herokuapp.com/create_room",{
        params: {
          user_1: this.myId,
          user_2: this.user2
        }
      })
      .then(response => {
        this.dataLoading = false;
        // this.dataLoading = true;
        console.log("profiles: ", response);
        console.log("room name: ", response.data.roomName);
        this.roomName = response.data.roomName;
        console.log("user id: ", response.data.userID);
        this.userID = response.data.userID;
        console.log("messages: ", response.data.data);
        this.messages = response.data.data;
        console.log("reciever_data", response.data.reciever_data[0]);
        this.recieverData = response.data.reciever_data[0];
        console.log("sideBar data: ", response.data.sidebar_data);
        this.sideBar = response.data.sidebar_data;

        this.socket.emit("new-user", this.roomName, this.userID);
      })
      .catch(error => {
        this.dataLoading = false;
        // this.dataLoading = true;
        console.log("error:", error);
      });

    this.socket.on("chat-message", data => {
      console.log("messages from socket h: ", data);
      this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
    });
    this.socket.on("user-connected", name => {
      // appendMessage(`${name} connected`)
      console.log(name + " connected");
    });

    this.socket.on("user-disconnected", name => {
      console.log(name + "user disconnected");
    });
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      console.log("send message button pressed");
      this.socket.emit(
        "send-chat-message",
        this.roomName,
        this.userID,
        this.message
      );
      this.message = "";
    },
    requestData(recieverId) {
      this.dataLoading = true;
      console.log("id from browser storage in chat: ", this.myId);
      console.log("id of reciever in chat: ", recieverId);
      localStorage.setItem("receiverId", recieverId);
      this.user2 = localStorage.getItem("receiverId");
      this.$axios
        .get("http://localhost:3000/create_room", {
          // .get("http://64.202.184.139:3000/create_room", {
          // .get("https://killmatch.herokuapp.com/create_room",{
          params: {
            user_1: this.myId,
            user_2: this.user2
          }
        })
        .then(response => {
          this.dataLoading = false;
          console.log("profiles: ", response);
          console.log("room name: ", response.data.roomName);
          this.roomName = response.data.roomName;
          console.log("user id: ", response.data.userID);
          this.userID = response.data.userID;
          console.log("messages: ", response.data.data);
          this.messages = response.data.data;
          console.log("reciever_data", response.data.reciever_data[0]);
          this.recieverData = response.data.reciever_data[0];
          console.log("sideBar data: ", response.data.sidebar_data);
          this.sideBar = response.data.sidebar_data;

          this.socket.emit("new-user", this.roomName, this.userID);
        })
        .catch(error => {
          this.dataLoading = false;
          // this.dataLoading = true;
          console.log("error:", error);
        });

      //             this.socket.on('chat-message', (data) => {
      //               console.log("messages from socket: ",data)
      //             this.messages = [...this.messages, data];
      //             // you can also do this.messages.push(data)
      //         });
      //          this.socket.on('user-connected', name => {
      //         // appendMessage(`${name} connected`)
      //          console.log(name+" connected");
      //           })

      //           this.socket.on('user-disconnected', name => {
      //           console.log(name+"user disconnected");
      // })
    }
  }
};
</script>

<style lang="scss">
$color-primary: #c06c84;
$color-secondary: #35477d;
$color-text: #555;

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