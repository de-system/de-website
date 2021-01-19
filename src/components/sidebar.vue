<template>
  <div>
    <div id="togglemenu">
      <ul>
        <li>
          <img src="@/assets/customer.png" alt="" />
          <ul id="sidefont">
            <li id="sideBtn">
              <router-link to="/forecast" id="routes">銷量預測分析</router-link>
            </li>
            <li id="sideBtn">
              <router-link to="/pastsales" id="routes"
                >過去活動績效</router-link
              >
            </li>
            <li id="sideBtn">
              <router-link to="/pastevent" id="routes"
                >過去銷量分析</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <img src="@/assets/line.png" alt="" />
          <ul id="sidefont">
            <li id="sideBtn">
              <router-link to="/linebot" id="routes">linebot推播</router-link>
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <img src="@/assets/boxes.png" alt="" />
          <ul id="sidefont">
            <li id="sideBtn">
              <router-link to="/materialManage" id="routes"
                >進貨管理</router-link
              >
            </li>
            <li id="sideBtn">
              <router-link to="/inventory" id="routes">庫存盤點</router-link>
            </li>
          </ul>
        </li>
        <li>
          <img src="@/assets/cashier.png" alt="" />
          <ul id="sidefont">
            <li id="sideBtn">
              <router-link to="/counter" id="routes" @click="counterManage()"
                >分櫃存貨調撥</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    counterManage() {
      this.axios
        .post("https://de-backend.herokuapp.com/counter/manageInventory", {})
        .then((res) => {
          if (res.data) {
            alert(res.data);
          } else alert("回傳錯誤");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#togglemenu {
  /* border: black 2px solid; */
  width: 11vw;
  height: 75vh;
  border-radius: 8px;
  background-color: #d6b693;
  /* box-shadow: 0px 10px 5px 1px #c3baba; */
}

ul {
  text-align: left;
  /* margin-left: -5px; */
  padding: 1em;
  list-style: none;
}

hr {
  color: aliceblue;
}

ul #sidefont {
  text-decoration: none;
  display: inline-block;
  /* width: 6vw; */
  margin-left: 3vw;
  list-style: circle;
  color: aliceblue;
  font-size: 5px;
}

#sideBtn:hover {
  list-style: circle;
  /* border: black 2px solid; */
  background-color: white;
  color: #d6b693;
  border-radius: 5px;
}

#routes {
  text-decoration: none;
  color: aliceblue;
}
#routes:hover {
  list-style: circle;
  text-decoration: none;
  color: #d6b693;
}

#routes:focus {
  text-decoration: none;
  background-color: white;
  border-radius: 5px;
  color: #d6b693;
}
</style>
