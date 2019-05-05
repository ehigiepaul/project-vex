<template lang="html">
  <div class="d-flex">
      <div class="container vh-100">
          <div class="flexbox section" style="">
              <div class="sidebar logo">
                  <h2 class="brand vex"><u>VEX</u></h2>
              </div>
                  <div class="userDetails">
                  <div class=".m-b-15 userName">
                      <input class="userInput userName" type="text" name="username" v-model="input.username" placeholder="Username"/>
                  </div>
                  <div class=".m-b-15">
                      <input class="userInput password" type="password" name="password" v-model="input.password" placeholder="Password"/>
                  </div>
              </div>
              <button class="login-btn" type="button" v-on:click="login()">Login</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            input: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
        login() {
            // console.log("Proceeding to the next page");
        }
    },
}
</script>

<style lang="css" scoped="css">
.flexbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    position: absolute;
    width: 300px;
    height: 290px;
    top: 25%;
    left: 47%;
    background: #091214;
    box-shadow: 30px;
}

.logo {
    padding: 20px;
}

.login-btn {
    background-color: #FEBA2A;
    border: none;
    padding: 15px 60px;
    font-size: 14pt;
    font-family: AgencyFB;
    transition-duration: 0.4s;
}

.login-btn:hover {
    background-color: #d39500;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.userDetails {
    padding: 15px;
    text-align: center;
}

::placeholder {
    font-family: AgencyFB;
}

input,
input::placeholder {
    font-size: 18pxg;
    font-family: AgencyFB;
    width: 200px;
    border-radius: 6px
}

.userName,
.password {
    padding: 8px;
}

</style>
