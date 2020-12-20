<template>
  <div class="materialManage">
    <topbar />
    <sidebar />
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "materialManage",
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
</style>
