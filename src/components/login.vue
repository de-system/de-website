<template>
  <div class="login">
    <img src="@/assets/original.png" />
    <form @submit.prevent="login">
      <br />
      <label class="lab">Account</label>
      <br />
      <input
        class="input"
        type="text"
        name=""
        placeholder="請輸入帳號"
        size="10"
        v-model="user.account"
        required
      />
      <br />
      <label class="lab">Password</label>
      <br />
      <input
        class="input"
        type="password"
        name=""
        placeholder="請輸入密碼"
        size="20"
        v-model="user.password"
        required
      />
      <br />
      <button class="Btn">登入</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
       this.$store.commit({
        type: 'setUserData',
        userData: this.user,
      });
      //-- write login authencation logic here! --
      this.axios
        .post("https://de-backend.herokuapp.com/auth/login", {
          account: this.user.account,
          password: this.user.password,
        })
        .then((res) => {
          if (res.data) this.$router.push("forecast");
          else alert("login failed");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.login {
  border: solid 2px #ffffff;
  border-radius: 30px;
  background: white;
  box-shadow: 10px 10px 5px 1px #c3baba;
  top: 20vh;
  /* margin-left: 50%; */
  width: 25vw;
  height: 60vh;
  padding: 5vh;
  position: absolute;
  margin-top: 20vh;
  margin-left: 45vw;
  transform: translate(-50%, -50%);
  /* text-align: center; */
}
.lab {
  /* border: black solid 2px; */
  margin: 0%;
  width: 10vw;
  display: inline-block;
  /* border: solid 1px #ffffff; */
  text-align: left;
  /* margin-right: 30px; */
  color: #8d8484;
}
.input {
  /* margin-left: 10px; */
  width: 10vw;
  height: 30px;
}
.login input[type="text"],
.login input[type="password"] {
  border: 0;
  background: none;
  /* display: block; */
  border: 2px solid #8d8484;
  /* margin-top: 10px; */
  outline: none;
  color: #c9a175;
  border-radius: 10px;
  text-align: center;
  transition: 0.25s;
}
.login input[type="text"]:focus,
.login input[type="password"]:focus {
  width: 20vw;
  border-color: #c9a175;
}
.Btn {
  width: 10vw;
  background: none;
  display: inline-block;
  /* margin-left: 115px; */
  border: 2px solid #8d8484;
  margin-top: 5vh;
  margin-left: 0vw;
  outline: none;
  color: #8d8484;
  border-radius: 10px;
  text-align: center;
  transition: 0.25s;
}
.Btn:hover {
  background-color: #c9a175;
  color: white;
}
</style>