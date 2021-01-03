<template>
  <div class="pastevent">
    <topbar />
    <sidebar />
    <form action="post" id="amountform">
      <h5>過去銷量分析</h5>
      <Bar
        id="bar-chart"
        style="width : 30vw; height: 35vh; padding: 0px; left: 50%"
      />
    </form>
    <form action="post" id="form">
      <h5>顧客年齡分佈</h5>
      <Pie
        id="pie-chart"
        style="width : 35vw; height: 35vh; padding: 0px; left: 55%"
      />
    </form>
    <form action="post" id="indexform">
      <Tabbb />
    </form>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";
import Pie from "../components/piechart";
import Bar from "../components/barchart";
import Tabbb from "../components/barebonetab";

export default {
  name: "pastevent",
  components: {
    topbar,
    sidebar,
    Pie,
    Bar,
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
#form {
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
}
#pie-chart {
  /* border: black 2px solid; */
  width: 20vw;
}
#amountform {
  margin: 0%;
  top: 20%;
  left: 20%;
  position: fixed;

  width: 35vw;
  height: 42vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}

#indexform {
  margin: 0%;
  top: 65%;
  left: 20%;
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
