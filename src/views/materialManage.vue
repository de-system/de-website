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
      :fields="fields"
      :tbody-tr-class="rowClass"
    >
      <template #cell(actions)="row">
        <b-button
          v-if="row.item.訂單編號 > 12"
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="btn-danger"
        >
          刪除訂單
        </b-button>
      </template>
      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      :index="infoModal.index"
      @hide="resetInfoModal"
      @ok="handleOk(infoModal.title, infoModal.index)"
      okTitle="確定刪除"
      okVariant="success"
      cancelTitle="取消"
      cancelVariant="danger"
    >
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
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
    <div id="bookHeader">
      <span>採購單</span>
    </div>
    <br />
    <br />
    <form action="post" id="form">
      <h5>預測採購原料數量</h5>
      <br />
      <h6 style="text-align : left; margin-left : 2vw;">花油數量 : 135</h6>
      <h6 style="text-align : left; margin-left : 2vw;">酒精數量 : 90</h6>
      <h6 style="text-align : left; margin-left : 2vw;" :date="date">
        下訂日期 : {{ date }}
      </h6>
      <br />
      <br />
      <br />
      <button type="button" id="marketMethodBtn" @click="submit()">
        送出策略
      </button>
    </form>
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "materialManage",
  data() {
    return {
      date: this.getNow(),
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: "訂單編號", sortable: true },
        { key: "下訂日期", sortable: false },
        { key: "收貨日期", sortable: false },
        { key: "花油數量", sortable: false },
        { key: "酒精數量", sortable: false },
        { key: "成本", sortable: false },
        { key: "訂單狀態" },
        {
          key: "actions",
          label: "取消訂單",
        },
      ],
      items: [],
      amount: {
        select: "",
      },
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `訂單編號: ${item.訂單編號}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.infoModal.index = index;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);

      // this.items.splice(index, 1);

      // alert("已成功刪除訂單!\n" + `訂單編號: ${item.訂單編號}`);
    },
    handleOk(title, index) {
      this.items.splice(index, 1);

      alert("已成功刪除訂單!\n" + `${title}`);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.訂單狀態 === "未到貨") return "text-danger";
    },
    submit() {
      this.items = [];

      this.items.push({
        訂單編號: 13,
        下訂日期: this.getNow(),
        收貨日期: "",
        花油數量: 135,
        酒精數量: 90,
        成本: 11250,
        訂單狀態: "未到貨",

        // _tdAttr: { 訂單狀態: "text-danger" },
      });

      this.axios
        .get("https://de-backend.herokuapp.com/inventoryManage/orderList")
        .then((res) => {
          if (res.data) {
            // alert(JSON.stringify(res.data));
            for (let i = res.data.length - 1; i >= 0; i--) {
              this.items.push({
                訂單編號: res.data[i].orderId,
                下訂日期: res.data[i].orderDate,
                收貨日期: res.data[i].receiveDate,
                花油數量: res.data[i].EOQf,
                酒精數量: res.data[i].EOQa,
                成本: res.data[i].cost,
                訂單狀態: "已到貨",
              });
            }
          } else alert("回傳錯誤");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getNow() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate();
      return date;
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },

 methods: {
    update(d) {
      this.output = d;
      this.$refs["btn" + d.index].disabled = true     
      this.$refs["btn" + d.index].textContent = "已取消";
    },
  },
  mounted() {  
    this.axios
      .get("https://de-backend.herokuapp.com/inventoryManage/orderList")
      .then((res) => {
        if (res.data) {
          // alert(JSON.stringify(res.data));
          for (let i = res.data.length - 1; i >= 0; i--) {
            this.items.push({
              訂單編號: res.data[i].orderId,
              下訂日期: res.data[i].orderDate,
              收貨日期: res.data[i].receiveDate,
              花油數量: res.data[i].EOQf,
              酒精數量: res.data[i].EOQa,
              進貨成本: res.data[i].cost,
              訂單狀態: "已到貨",
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
#bookHeader {
  display: inline-block;
  margin: 0%;
  top: 21%;
  left: 67%;
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

  width: 53vw;
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

.text-green {
  color: green;
}

#form {
  margin: 0%;
  top: 25%;
  left: 75%;
  position: fixed;

  width: 15vw;
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
</style>
