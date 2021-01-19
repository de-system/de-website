<template>
  <div class="pastsales">
    <topbar />
    <sidebar />
  <form action="post" id="indexform">
  <Tabbb />
  </form>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";
import Tabbb from "../components/barebonetab";
export default {
  name: "pastsales",
  components: {
    topbar,
    sidebar,
    Tabbb,
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10,
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.pastevent {
  margin: 0%;
}
/* #form {
  margin: 0%;
  top: 20%;
  left: 58%;
  position: fixed;
  width: 35vw;
  height: 42vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;
  text-align: center;
  color: white;
} */
#indexform {
  margin: 0%;
  top: 22%;
  left: 18%;
  position: fixed;
  width: 73vw;
  height: 25vh;
  /* border-radius: 8px; */
  /* background-color: #d8c0a6; */
  /* box-shadow: 1px 1px 5px 1px #c3baba; */
  /* padding: 12px; */
  text-align: center;
  color: white;
}
</style>