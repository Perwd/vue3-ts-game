<template>
   <YlyGame>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue';
import YlyGame from "./ylyGame/ylyGame.vue";

export default defineComponent({
  name: "App",
  components: {
    YlyGame,


    
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
