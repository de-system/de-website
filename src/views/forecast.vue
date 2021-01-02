<template>
  <div class="forecast">
    <topbar />
    <sidebar />
    <div id="rfmHeader">
      <h4>行銷預測分析</h4>
      <span style="padding-left: 2vw;">過去行銷策略</span>
      <select
        name=""
        id="rfmdropdownlist"
        v-model="rfmformdata.strategyselected"
      >
        <option value="buyonegetone">買一送一</option>
        <option value="survey">寄調查問卷</option>
        <option value="discount">送折扣卷</option>
      </select>
      <span style="padding-left: 2vw;">RFM分析 </span>
      <select name="" id="rfmdropdownlist" v-model="rfmformdata.select">
        <option value="r">最近購買日Recency</option>
        <option value="f">購買頻率Frequency</option>
        <option value="m">購買金額Monetary value</option>
      </select>
      <button
        type="button"
        style="margin-left: 2vw;"
        @click="rfmchange()"
        id="btn"
      >
        確定
      </button>
    </div>
    <b-table
      id="rfmtable"
      :per-page="perPage"
      :current-page="currentPage"
      smallstriped
      hover
      :items="items"
    ></b-table>
    <b-pagination
      class="customPagination"
      id="page"
      v-model="currentPage"
      pills
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="btable"
      size="sm"
    ></b-pagination>
    <form action="post" id="form">
      <h5>行銷策略擬定</h5>
      <select
        name=""
        id="dropdownlist"
        v-model="formdata.select"
        @change="change()"
      >
        <option value="1">買一送一</option>
        <option value="2">寄調查問卷</option>
        <option value="3">送折扣卷</option>
      </select>
      <br />
      <!-- <span>{{ formdata.select }}</span> -->
      <br />
      <h5>行銷成本</h5>
      <h5>${{ cost }}</h5>
      <br />
      <button type="button" id="marketMethodBtn" @click="submitStrategy()">
        送出策略
      </button>
    </form>
    <form id="biform">
      <h5 style="padding-left: 3vw; padding-top: 2vh;">
        損益平衡回應率: {{ rfmformdata.st }}
      </h5>
      <h5 style="padding-left: 3vw; padding-top: 1vh;">
        損益平衡指數: {{ rfmformdata.st_bi }}
      </h5>
    </form>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";
// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      rfmformdata: {
        strategyselected: "",
        select: "",
        st: "",
        st_bi: "",
      },
      formdata: {
        select: "",
      },
      cost: "",
      perPage: 5,
      currentPage: 1,
      items: [{}],
    };
  },
  name: "forecast",
  components: {
    topbar,
    sidebar,
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    // ...mapActions(["fetchCost"]),
    rfmchange() {
      this.items = [];
      if (this.rfmformdata.select == "r") {
        if (this.rfmformdata.strategyselected == "buyonegetone") {
          this.axios
            .post("http://127.0.0.1:3030/rfm/R", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    年齡: res.data.age[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = res.data.st1;
                  this.rfmformdata.st_bi = res.data.st_bi1;
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (this.rfmformdata.strategyselected == "discount") {
          this.axios
            .post("http://127.0.0.1:3030/rfm/R", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    年齡: res.data.age[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = res.data.st2;
                  this.rfmformdata.st_bi = res.data.st_bi2;
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.axios
            .post("http://127.0.0.1:3030/rfm/R", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    年齡: res.data.age[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = "";
                  this.rfmformdata.st_bi = "";
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      } else if (this.rfmformdata.select == "m") {
        if (this.rfmformdata.strategyselected == "buyonegetone") {
          this.axios
            .post("http://127.0.0.1:3030/rfm/M", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    消費金額: res.data.payment[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = res.data.st1;
                  this.rfmformdata.st_bi = res.data.st_bi1;
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (this.rfmformdata.strategyselected == "discount") {
          this.axios
            .post("http://127.0.0.1:3030/rfm/M", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    消費金額: res.data.payment[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = res.data.st2;
                  this.rfmformdata.st_bi = res.data.st_bi2;
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.axios
            .post("http://127.0.0.1:3030/rfm/M", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    消費金額: res.data.payment[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = "";
                  this.rfmformdata.st_bi = "";
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      } else {
        if (this.rfmformdata.strategyselected == "buyonegetone") {
          this.axios
            .post("http://127.0.0.1:3030/rfm/F", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    消費數量: res.data.amount[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = res.data.st1;
                  this.rfmformdata.st_bi = res.data.st_bi1;
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (this.rfmformdata.strategyselected == "discount") {
          this.axios
            .post("http://127.0.0.1:3030/rfm/F", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    消費數量: res.data.amount[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = res.data.st2;
                  this.rfmformdata.st_bi = res.data.st_bi2;
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.axios
            .post("http://127.0.0.1:3030/rfm/F", {})
            .then((res) => {
              if (res.data) {
                for (let i = 0; i < res.data.customerId.length; i++) {
                  this.items.push({
                    會員ID: res.data.customerId[i],
                    姓名: res.data.name[i],
                    消費數量: res.data.amount[i],
                    lineID: res.data.lineId[i],
                  });
                  this.rfmformdata.st = "";
                  this.rfmformdata.st_bi = "";
                }
                // alert(JSON.stringify(res.data));
              } else alert("回傳錯誤");
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    },
    change() {
      this.axios
        .post("http://127.0.0.1:3030/cost/cost", {
          strategyId: this.formdata.select,
        })
        .then((res) => {
          if (res.data) {
            this.cost = res.data.strategyCost;
            // alert(JSON.stringify(res.data));
          } else alert("回傳錯誤");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submitStrategy() {
      this.axios
        .post("http://127.0.0.1:3030/linebot/bot", {
          strategyId: this.formdata.select,
        })
        .then((res) => {
          if (res.data) alert("成功發送 " + res.data.type + " 策略");
          else alert("回傳錯誤");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  // computed: {
  //   ...mapState(["cost"]),
  // },
};
</script>

<style scoped>
.pastsales {
  margin: 0%;
}
#rfmHeader {
  /* border: solid 2px black; */
  display: inline-block;
  margin: 0%;
  top: 21%;
  left: 20%;
  width: 50vw;
  position: fixed;
  color: #c9a175;
  text-align: left;
  /* padding-left: 1vw; */
}
#form {
  margin: 0%;
  top: 55%;
  left: 70%;
  position: fixed;

  width: 20vw;
  height: 30vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}
#biform {
  margin: 0%;
  top: 30%;
  left: 70%;
  position: fixed;

  width: 20vw;
  height: 20vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: left;
  padding-left: 1vw;
  color: white;
}
#rfmdropdownlist {
  margin-left: 2vw;
  width: 12vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px 5px 1px #c3baba;
  text-align: center;
}

#dropdownlist {
  width: 10vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px 5px 1px #c3baba;
  text-align: center;
}
#dropdownlist:hover {
  width: 11vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px 5px 1px #c3baba;
  text-align: center;
}

#marketMethodBtn {
  width: 10vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 3px 5px 1px #c3baba;
  text-align: center;
  transition: 0.25s;
}

#marketMethodBtn:hover {
  width: 11vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: #c9a175;
  color: white;
  box-shadow: 1px 3px 5px 1px #c3baba;
  text-align: center;
}

#rfmtable {
  margin: 0%;
  top: 30%;
  left: 20%;
  position: fixed;

  width: 45vw;
  height: 55vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}

#page {
  margin: 0%;
  top: 88%;
  left: 38%;
  position: fixed;
}

#btn {
  width: 4vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 3px 5px 1px #c3baba;
  text-align: center;
  transition: 0.25s;
}

#btn:hover {
  width: 4vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: #c9a175;
  color: white;
  box-shadow: 1px 3px 5px 1px #c3baba;
  text-align: center;
}
</style>
