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

    <b-table
      id="btable"
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
    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";
//import { mapState, mapActions } from "vuex";

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
      items: [
        {
          姓名: "",
          顧客年齡: "",
          line_ID: "",
          日期: "",
        },
      ],
      perPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    change() {
      this.items = [];
      this.axios
        .post("https://de-backend.herokuapp.com/getLineCus/customer", {
          month: this.formdata.select,
        })
        .then((res) => {
          if (res.data) {
            for (let i = 0; i < res.data.name.length; i++) {
              this.items.push({
                姓名: res.data.name[i],
                顧客年齡: res.data.age[i],
                line_ID: res.data.lineId[i],
                日期: res.data.time[i],
              });
            }
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
  height: 55vh;
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

#page {
  margin: 0%;
  top: 85%;
  left: 50%;
  position: fixed;
}
</style>
