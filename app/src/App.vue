<!--
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->

<template>
  <div id="app" class="bg vex-green">
      <SideBar @updateSearchMessage="setNewMessage" @updateFocus="setNewFocus"/>
      <div class="main right" :class="{overflow : focused}">
        <div class="search-overlay"  >
            <!-- <input type="text" name="search" value="" v-model="newMessage"> -->
        </div>
        <router-view></router-view>
        <router-view name="discover"></router-view>
      </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    SideBar
  },
  data(){
    return{
      newMessage : '',
      focused: false
    }
  },
  methods: {
    setNewMessage(msg){
      this.newMessage = msg
    },
    setNewFocus(focus){
      this.focused = focus
    }
  }
}
</script>

<style>
@import url('./assets/css/style.css');
</style>
