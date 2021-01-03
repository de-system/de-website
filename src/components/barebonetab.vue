<template>
  <div id="tabs" class="container">
    <div class="tabs">
      <a
        v-on:click="activetab = 1"
        v-bind:class="[activetab === 1 ? 'active' : '']"
        >七月</a
      >
      <a
        v-on:click="activetab = 2"
        v-bind:class="[activetab === 2 ? 'active' : '']"
        >八月</a
      >
      <a
        v-on:click="activetab = 3"
        v-bind:class="[activetab === 3 ? 'active' : '']"
        >九月</a
      >
      <a
        v-on:click="activetab = 4"
        v-bind:class="[activetab === 4 ? 'active' : '']"
        >十月</a
      >
      <a
        v-on:click="activetab = 5"
        v-bind:class="[activetab === 5 ? 'active' : '']"
        >十一月</a
      >
      <a
        v-on:click="activetab = 6"
        v-bind:class="[activetab === 6 ? 'active' : '']"
        >十二月</a
      >
    </div>

    <div class="content">
      <div v-if="activetab === 1" class="tabcontent">
        妹妹
      </div>
      <div v-if="activetab === 2" class="tabcontent">
        我被
      </div>
      <div v-if="activetab === 3" class="tabcontent">
        前端
      </div>
      <div v-if="activetab === 4" class="tabcontent">
        搞得
      </div>
      <div v-if="activetab === 5" class="tabcontent">
        好慘
      </div>
      <div v-if="activetab === 6" class="tabcontent">
        虐
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      el: "#tabs",
      activetab: 1,
    };
  },
  methods: {},
};
</script>
<style>
/* Import Google Font */
@import url(https://fonts.googleapis.com/css?family=Nunito+Sans);
/* RESET */
/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */
/* STYLING */
.container {
  color: white;
  margin-top: 0vh;
  margin-left: 1%;

  max-width: 620px;
  min-width: 420px;
  font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
}
/* Style the tabs */
.tabs {
  overflow: hidden;
  width: 80vw;
  margin-left: 1%;
  /* margin-top: 0px;
  margin-left: 20px;
  margin-bottom: -2px; */
}
.tabs ul {
  list-style-type: none;
  /* margin-left: 20px; */
}
.tabs a {
  color: black;
  float: left;
  cursor: pointer;
  padding: 5px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}
/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}
/* Styling for active tab */
.tabs a.active {
  background-color: #d8c0a6;
  color: white;
  /* border-bottom: 2px solid #fff; */
  cursor: default;
}
/* Style the tab content */
.tabcontent {
  background-color: #d8c0a6;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
  width: 74vw;
  height: 20vh;
  margin-left: -2%;
}
</style>
