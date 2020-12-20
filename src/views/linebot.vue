<template>
  <div class="linebot">
    <topbar />
    <sidebar />
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
};
</script>

<style scoped>
.linebot {
  margin: 0%;
}
</style>
