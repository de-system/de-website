<template>
  <div id="app">
    <HelloWorld :msg="test"> </HelloWorld>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      count: 0,
      test: "",
    };
  },
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
html {
  /* border: #000 2px solid; */
  background-color: #dbe2f3;
  box-sizing: border-box;
}

#app {
  position: absolute;
  padding: 0em;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  /* 以上是讓body沒辦法用css調整的解決妙方 */
  background: #f0eeee;
  display: absolute;
  /* border: #000 2px solid; */
  /* border: #e4e0e0e5 2px solid; */
  margin-left: 5%;
  height: 85vh;
  width: 90vw;
  border-radius: 30px;
  box-shadow: 10px 10px 5px 1px #c3baba;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
