<template>
  <div class="counter">
    <topbar />
    <sidebar />
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "counter",
  components: {
    topbar,
    sidebar,
  },
};
</script>

<style scoped>
.pastsales {
  margin: 0%;
}
</style>
