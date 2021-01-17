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
      <a
        v-on:click="activetab = 7"
        v-bind:class="[activetab === 7 ? 'active' : '']"
        >一月</a
      >
    </div>

    <div class="content">
      <div v-if="activetab === 1" class="tabcontent">
        <label :items="info7" style="padding-left: 1vw; "
          >消費金額：{{ info7[1] }}</label
        >
        <label :items="info7" style="padding-left: 1vw; "
          >消費數量：{{ info7[2] }}</label
        >
        <label :items="info7" style="padding-left: 1vw; "
          >總成本：{{ info7[3] }}</label
        >
        <label :items="info7" style="padding-left: 1vw; "
          >淨利：{{ info7[4] }}</label
        >
        <label :items="index7" style="padding-left: 1vw; "
          >留存率：{{ index7[1] }}</label
        >
        <label :items="index7" style="padding-left: 1vw; "
          >顧客流失率：{{ index7[2] }}</label
        >
        <label :items="index7" style="padding-left: 1vw; "
          >存活率：{{ index7[3] }}</label
        >
      </div>
      <div v-if="activetab === 2" class="tabcontent">
        <label :items="info8" style="padding-left: 1vw; "
          >消費金額：{{ info8[1] }}</label
        >
        <label :items="info8" style="padding-left: 1vw; "
          >消費數量：{{ info8[2] }}</label
        >
        <label :items="info8" style="padding-left: 1vw; "
          >總成本：{{ info8[3] }}</label
        >
        <label :items="info8" style="padding-left: 1vw; "
          >淨利：{{ info8[4] }}</label
        >
        <label :items="index8" style="padding-left: 1vw; "
          >留存率：{{ index8[1] }}</label
        >
        <label :items="index8" style="padding-left: 1vw; "
          >顧客流失率：{{ index8[2] }}</label
        >
        <label :items="index8" style="padding-left: 1vw; "
          >存活率：{{ index8[3] }}</label
        >
      </div>
      <div v-if="activetab === 3" class="tabcontent">
        <label :items="info9" style="padding-left: 1vw; "
          >消費金額：{{ info9[1] }}</label
        >
        <label :items="info9" style="padding-left: 1vw; "
          >消費數量：{{ info9[2] }}</label
        >
        <label :items="info9" style="padding-left: 1vw; "
          >總成本：{{ info9[3] }}</label
        >
        <label :items="info9" style="padding-left: 1vw; "
          >淨利：{{ info9[4] }}</label
        >
        <label :items="index9" style="padding-left: 1vw; "
          >留存率：{{ index9[1] }}</label
        >
        <label :items="index9" style="padding-left: 1vw; "
          >顧客流失率：{{ index9[2] }}</label
        >
        <label :items="index9" style="padding-left: 1vw; "
          >存活率：{{ index9[3] }}</label
        >
      </div>
      <div v-if="activetab === 4" class="tabcontent">
        <label :items="info10" style="padding-left: 1vw; "
          >消費金額：{{ info10[1] }}</label
        >
        <label :items="info10" style="padding-left: 1vw; "
          >消費數量：{{ info10[2] }}</label
        >
        <label :items="info10" style="padding-left: 1vw; "
          >總成本：{{ info10[3] }}</label
        >
        <label :items="info10" style="padding-left: 1vw; "
          >淨利：{{ info10[4] }}</label
        >
        <label :items="index10" style="padding-left: 1vw; "
          >留存率：{{ index10[1] }}</label
        >
        <label :items="index10" style="padding-left: 1vw; "
          >顧客流失率：{{ index10[2] }}</label
        >
        <label :items="index10" style="padding-left: 1vw; "
          >存活率：{{ index10[3] }}</label
        >
      </div>
      <div v-if="activetab === 5" class="tabcontent">
        <label :items="info11" style="padding-left: 1vw; "
          >消費金額：{{ info11[1] }}</label
        >
        <label :items="info11" style="padding-left: 1vw; "
          >消費數量：{{ info11[2] }}</label
        >
        <label :items="info11" style="padding-left: 1vw; "
          >總成本：{{ info11[3] }}</label
        >
        <label :items="info11" style="padding-left: 1vw; "
          >淨利：{{ info11[4] }}</label
        >
        <label :items="index11" style="padding-left: 1vw; "
          >留存率：{{ index11[1] }}</label
        >
        <label :items="index11" style="padding-left: 1vw; "
          >顧客流失率：{{ index11[2] }}</label
        >
        <label :items="index11" style="padding-left: 1vw; "
          >存活率：{{ index11[3] }}</label
        >
      </div>
      <div v-if="activetab === 6" class="tabcontent">
        <label :items="info12" style="padding-left: 1vw; "
          >消費金額：{{ info12[1] }}</label
        >
        <label :items="info12" style="padding-left: 1vw; "
          >消費數量：{{ info12[2] }}</label
        >
        <label :items="info12" style="padding-left: 1vw; "
          >總成本：{{ info12[3] }}</label
        >
        <label :items="info12" style="padding-left: 1vw; "
          >淨利：{{ info12[4] }}</label
        >
        <label :items="index12" style="padding-left: 1vw; "
          >留存率：{{ index12[1] }}</label
        >
        <label :items="index12" style="padding-left: 1vw; "
          >顧客流失率：{{ index12[2] }}</label
        >
        <label :items="index12" style="padding-left: 1vw; "
          >存活率：{{ index12[3] }}</label
        >
      </div>
      <div v-if="activetab === 7" class="tabcontent">
        <label :items="info1" style="padding-left: 1vw; "
          >消費金額：{{ info1[1] }}</label
        >
        <label :items="info1" style="padding-left: 1vw; "
          >消費數量：{{ info1[2] }}</label
        >
        <label :items="info1" style="padding-left: 1vw; "
          >總成本：{{ info1[3] }}</label
        >
        <label :items="info1" style="padding-left: 1vw; "
          >淨利：{{ info1[4] }}</label
        >
        <label :items="index1" style="padding-left: 1vw; "
          >留存率：{{ index1[1] }}</label
        >
        <label :items="index1" style="padding-left: 1vw; "
          >顧客流失率：{{ index1[2] }}</label
        >
        <label :items="index1" style="padding-left: 1vw; "
          >存活率：{{ index1[3] }}</label
        >
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
      // items: [{}],
      perPage: 5,
      currentPage: 1,
      info7: [],
      index7: [],
      info8: [],
      index8: [],
      info9: [],
      index9: [],
      info10: [],
      index10: [],
      info11: [],
      index11: [],
      info12: [],
      index12: [],
      info1: [],
      index1: [],
    };
  },
  mounted() {
    this.axios
      .get("https://de-backend.herokuapp.com/report/info")
      .then((res) => {
        if (res.data) {
          alert(JSON.stringify(res.data[0]));
          // this.items.push({
          //   消費金額: 123,
          //   消費數量: this.info7[2],
          //   成本: this.info7[3],
          //   淨利: this.info7[4],
          //   留存率: this.index7[1],
          //   顧客流失率: this.index7[2],
          //   存活率: this.index7[3],
          // });
          this.info7.push(
            res.data[0].month,
            res.data[0].payment,
            res.data[0].amount,
            res.data[0].cost,
            res.data[0].net
          );
          this.info8.push(
            res.data[1].month,
            res.data[1].payment,
            res.data[1].amount,
            res.data[1].cost,
            res.data[1].net
          );
          this.info9.push(
            res.data[2].month,
            res.data[2].payment,
            res.data[2].amount,
            res.data[2].cost,
            res.data[2].net
          );
          this.info10.push(
            res.data[3].month,
            res.data[3].payment,
            res.data[3].amount,
            res.data[3].cost,
            res.data[3].net
          );
          this.info11.push(
            res.data[4].month,
            res.data[4].payment,
            res.data[4].amount,
            res.data[4].cost,
            res.data[4].net
          );
          this.info12.push(
            res.data[5].month,
            res.data[5].payment,
            res.data[5].amount,
            res.data[5].cost,
            res.data[5].net
          );
          this.info1.push(
            res.data[6].month,
            res.data[6].payment,
            res.data[6].amount,
            res.data[6].cost,
            res.data[6].net
          );
        } else alert("回傳錯誤");
      })
      .catch(function(error) {
        console.log(error);
      });
    this.axios
      .get("https://de-backend.herokuapp.com/report/customerIndex")
      .then((res) => {
        if (res.data) {
          //alert(JSON.stringify(res.data));

          this.index7.push(
            res.data[0].month,
            res.data[0].retetionRate,
            res.data[0].defectionRate,
            res.data[0].surviveRate
          );
          this.index8.push(
            res.data[1].month,
            res.data[1].retetionRate,
            res.data[1].defectionRate,
            res.data[1].surviveRate
          );
          this.index9.push(
            res.data[2].month,
            res.data[2].retetionRate,
            res.data[2].defectionRate,
            res.data[2].surviveRate
          );
          this.index10.push(
            res.data[3].month,
            res.data[3].retetionRate,
            res.data[3].defectionRate,
            res.data[3].surviveRate
          );
          this.index11.push(
            res.data[4].month,
            res.data[4].retetionRate,
            res.data[4].defectionRate,
            res.data[4].surviveRate
          );
          this.index12.push(
            res.data[5].month,
            res.data[5].retetionRate,
            res.data[5].defectionRate,
            res.data[5].surviveRate
          );
          this.index1.push(
            res.data[6].month,
            res.data[6].retetionRate,
            res.data[6].defectionRate,
            res.data[6].surviveRate
          );
        } else alert("回傳錯誤");
      })
      .catch(function(error) {
        console.log(error);
      });
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
  height: 15vh;
  margin-left: -2%;
  text-align: left;

  padding: 3vw;
}
#btable {
  text-align: center;
  color: white;
}
</style>
