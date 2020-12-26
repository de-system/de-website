<template>
  <div class="linebot">
    <topbar />
    <sidebar />
    <div id="lineHeader">
      <span>LineBot 推播</span>
      <select
        name=""
        id="dropdownlist"
        v-model="formdata.select"
        @change="change()"
      >
        <option value="7">7月</option>
        <option value="8">8月</option>
        <option value="9">9月</option>
        <option value="10">10月</option>
        <option value="11">11月</option>
        <option value="12">12月</option>
      </select>
    </div>

    <b-table id="btable" striped hover :items="items"></b-table>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "linebot",
  components: {
    topbar,
    sidebar,
  },
  data() {
    return {
      formdata: {
        select: "",
      },
      items: [],
    };
  },
  methods: {
    change() {
      this.axios
        .post("http://127.0.0.1:3030/getLineCus/customer", {
          month: this.formdata.select,
        })
        .then((res) => {
          if (res.data) {
            alert(res.data.name.length);
            // var cusList;
            for (let i = 1; i < res.data.name.length; i++) {
              this.items = {
                姓名: res.data.name[i],
                顧客年齡: res.data.age[i],
                line_ID: res.data.lineId[i],
                日期: res.data.time[i],
                顧客回應: "",
              };
            }
            alert(this.items);
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
.linebot {
  margin: 0%;
}
#btable {
  margin: 0%;
  top: 27%;
  left: 20%;
  position: fixed;

  width: 70vw;
  height: 60vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}
#lineHeader {
  display: inline-block;
  margin: 0%;
  top: 21%;
  left: 20%;
  width: 20vw;
  position: fixed;
  color: #c9a175;
  padding-left: 2vw;
}
#dropdownlist {
  margin-left: 2vw;
  width: 8vw;
  border: #c3baba;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px 5px 1px #c3baba;
  text-align: center;
}
</style>
