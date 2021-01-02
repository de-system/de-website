<template>
  <div class="forecast">
    <topbar />
    <sidebar />
    <div id="rfmHeader">
      <span>行銷預測分析</span>
      <select
        name=""
        id="rfmdropdownlist"
        v-model="formdata.select"
        @change="change()"
      >
        <option value="1">最近購買日Recency</option>
        <option value="2">購買頻率Frequency</option>
        <option value="3">購買金額Monetary value</option>
      </select>
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
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";
// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      formdata: {
        select: "",
      },
      cost: "",
      perPage: 5,
      currentPage: 1,
      items: [
        {
          會員ID: "",
          姓名: "",
          年齡: "",
          lineID: "",
          Email: "",
        },
      ],
    };
  },
  name: "forecast",
  components: {
    topbar,
    sidebar,
  },
  methods: {
    // ...mapActions(["fetchCost"]),
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
  display: inline-block;
  margin: 0%;
  top: 21%;
  left: 20%;
  width: 25vw;
  position: fixed;
  color: #c9a175;
  padding-left: 2vw;
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
  top: 25%;
  left: 20%;
  position: fixed;

  width: 45vw;
  height: 60vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}
</style>
