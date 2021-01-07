<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <img id="menubar" src="@/assets/menu.png" /> -->
      <img id="de_logo" src="@/assets/original.png" />
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <h6 id="user">{{ user.account }}</h6>
          <img id="member_logo" src="@/assets/businessman.png" />
          <b-nav-item-dropdown right>
            <template #button-content >
              <img id="bell_logo" src="@/assets/bell.png" />
            </template>
            <b-dropdown-item 
              ><router-link to="/inventory" id="routes"
                >即將過期商品存貨過多！</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img id="inventory_logo" src="@/assets/inventory.png" />
            </template>
            <b-dropdown-item
              ><router-link to="/materialManage" id="routes"
                >再訂購點即將到了！</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </nav>
  </div>
</template>

<script>
//import login from "@/components/login";
// import { mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     userName: "",
  //   };
  // },
  //接vuex資料 使用import的mapState方法 接userName
  computed: {
    // ...mapState(["account"]),
     user() {
      // 這裡將取得方式改變成從 local storage 中取得使用者資訊
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        return userData;
      }
      return "";
    }
  }
};
</script>

<style scoped>
.div {
  width: 21vw;
  position: fixed;
  right: 1rem;
  background-color: #eee;
  border-radius: 16px;
  height: 100%;
  padding-top: 0;
  padding-right: 0.5rem;
}
.navbar {
  background-color: blanchedalmond;
  box-shadow: 1px 1px 5px 1px #c3baba;
}
#de_logo {
  margin-left: 2.5vw;
  width: 4vw;
  height: 8vh;
}
#member_logo {
  margin-top: 1.5vh;
  /* margin-left: 1vw; */
  width: 1.5vw;
  height: 3vh;
}
#bell_logo {
  margin-top: 0.5vh;
  margin-left: 2vw;
  width: 1.5vw;
  height: 3vh;
}
#inventory_logo {
  margin-top: 0.5vh;
  margin-left: 1vw;
  width: 2vw;
  height: 3.5vh;
}
#routes {
  text-decoration: none;
  color: #d6b693;
}
#routes:hover {
  background: #d6b693;
  list-style: circle;
  text-decoration: none;
  color: white;
  border-radius: 5px;
}
#user {
  margin-top: 2vh;
  width: 4vw;
  height: 4vh;
}
</style>
