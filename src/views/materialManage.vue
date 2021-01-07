<template>
  <div class="materialManage">
    <topbar />
    <sidebar />
    <div id="lineHeader">
      <span>進貨管理</span>
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
      aria-controls="rmftable"
      size="sm"
    ></b-pagination>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "materialManage",
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      items: [],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },

  mounted() {
    this.axios
      .get("https://de-backend.herokuapp.com/inventoryManage/orderList")
      .then((res) => {
        if (res.data) {
          // alert(JSON.stringify(res.data));
          for (let i = 0; i < res.data.length; i++) {
            this.items.push({
              訂單編號: res.data[i].orderId,
              下訂日期: res.data[i].orderDate,
              收貨日期: res.data[i].receiveDate,
              花油數量: res.data[i].EOQf,
              酒精數量: res.data[i].EOQa,
              進貨成本: res.data[i].cost,
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
.materialManage {
  margin: 0%;
}
#lineHeader {
  display: inline-block;
  margin: 0%;
  top: 21%;
  left: 12%;
  width: 20vw;
  position: fixed;
  color: #c9a175;
  padding-left: 2vw;
}
#rfmtable {
  margin: 0%;
  top: 25%;
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

#page {
  margin: 0%;
  top: 88%;
  left: 50%;
  position: fixed;
}
</style>
