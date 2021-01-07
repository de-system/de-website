<template>
  <div class="inventory">
    <topbar />
    <sidebar />
    <div id="lineHeader">
      <span>原物料庫存</span>
    </div>
    <b-table
      id="rfmtable"
      :per-page="perPage"
      :current-page="currentPage"
      smallstriped
      hover
      :items="items"
    ></b-table>
    <div id="pHeader">
      <span>化妝品庫存</span>
    </div>
    <b-table
      id="ptable"
      :per-page="perPage"
      :current-page="currentPage"
      smallstriped
      hover
      :items="item"
    ></b-table>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "inventory",
  components: {
    topbar,
    sidebar,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      items: [],
      item: [],
    };
  },

  mounted() {
    this.axios
      .get("https://de-backend.herokuapp.com/inventoryManage/showData")
      .then((res) => {
        if (res.data) {
          //alert(JSON.stringify(res.data[0]));
          for (let i = 0; i < res.data[0].length; i++) {
            this.items.push({
              原物料名稱: res.data[0][i].ingredient,
              數量: res.data[0][i].inventory,
              存貨成本:res.data[0][i].inventoryCost
            });
          }

          for (let i = 0; i < res.data[1].length; i++) {
            this.item.push({
              化妝名稱: res.data[1][i].pName,
              數量: res.data[1][i].totalStock,
              存貨成本:res.data[1][i].totalStock*10,
            });
          }
        } else alert("回傳錯誤");
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.inventory {
  margin: 0%;
}
#lineHeader {
  display: inline-block;
  margin: 0%;
  top: 20%;
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

  width: 30vw;
  height: 60vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 12px;

  text-align: center;
  color: white;
}

#ptable {
  margin: 0%;
  top: 25%;
  left: 60%;
  position: fixed;

  width: 30vw;
  height: 60vh;
  border-radius: 8px;
  background-color: #d8c0a6;
  box-shadow: 1px 1px 5px 1px #c3baba;
  padding: 1px;

  text-align: center;
  color: white;
}

#pHeader {
  margin: 0%;
  top: 20%;
  left: 52%;
  width: 20vw;
  position: fixed;
  color: #c9a175;
  padding-left: 2vw;
}
</style>
