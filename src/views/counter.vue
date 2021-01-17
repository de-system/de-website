<template>
  <div class="counter">
    <topbar />
    <sidebar />
    <div id="counterHeader">
      <h5>分櫃調撥</h5>
    </div>
    <b-table
      id="countertable"
      :per-page="perPage"
      :current-page="currentPage"
      smallstriped
      hover
      :items="items"
    >
    </b-table>
    <form action="post" id="form">
      <h5>選擇分櫃</h5>
      <select name="" id="dropdownlist" v-model="formdata.select">
        <option value="1">超級芋頭一號櫃</option>
        <option value="2">EDAMMADE二號櫃</option>
      </select>
      <br />
      <!-- <span>{{ formdata.select }}</span> -->
      <br />
      <h5>需要調撥數量</h5>
      <select name="" id="dropdownlistamount" v-model="amount.select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <br />
      <br />
      <button type="button" id="marketMethodBtn" @click="submit()">
        送出策略
      </button>
      <h5 id="stock">{{ stock1 }}</h5>
      <h5 id="stock">{{ stock2 }}</h5>
    </form>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "counter",
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      items: [],
      formdata: {
        select: "",
      },
      amount: {
        select: "",
      },
      stock1: 1,
      stock2: 2,
    };
  },
  methods: {
    submit() {
      if (this.formdata.select == "1") {
        this.stock2 += parseInt(this.amount.select);
        this.stock1 -= parseInt(this.amount.select);
      } else {
        this.stock1 += parseInt(this.amount.select);
        this.stock2 -= parseInt(this.amount.select);
      }

      alert("成功調撥");
      this.axios
        .post("https://de-backend.herokuapp.com/updateCounter/update", {
          counterId: this.formdata.select,
          amount1: this.stock1,
          amount2: this.stock2,
        })
        .then((res) => {
          if (res.data) location.reload();
          else alert("回傳錯誤");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.axios
      .get("https://de-backend.herokuapp.com/counter/manageInventory")
      .then((res) => {
        if (res.data) {
          this.stock1 = res.data.counterStock[0];
          this.stock2 = res.data.counterStock[1];
          //alert(res.data.counterName);
          for (let i = 0; i < res.data.counterName.length; i++) {
            this.items.push({
              分櫃名稱: res.data.counterName[i],
              分櫃ID: res.data.counterId[i],
              化妝品數量: res.data.counterStock[i],
            });
          }
        } else alert("回傳錯誤");
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  components: {
    topbar,
    sidebar,
  },
};
</script>

<style scoped>
.pastsales {
  margin: 0%;
}

#countertable {
  margin: 0%;
  top: 25%;
  left: 20%;
  position: fixed;

  width: 40vw;
  height: 60vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}

#counterHeader {
  display: inline-block;
  margin: 0%;
  top: 21%;
  left: 15%;
  width: 20vw;
  position: fixed;
  color: #c9a175;
  padding-left: 2vw;
}

#form {
  margin: 0%;
  top: 25%;
  left: 70%;
  position: fixed;

  width: 20vw;
  height: 60vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}

#dropdownlist,
#dropdownlistamount {
  width: 11vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px 5px 1px #c3baba;
  text-align: center;
}
#dropdownlist:hover,
#dropdownlistamount:hover {
  width: 12vw;
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
#stock {
  visibility: hidden;
}
</style>
