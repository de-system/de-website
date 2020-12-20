<template>
  <div class="forecast">
    <topbar />
    <sidebar />
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "forecast",
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
