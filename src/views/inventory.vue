<template>
  <div class="inventory">
    <topbar />
    <sidebar />
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
};
</script>

<style scoped>
.inventory {
  margin: 0%;
}
</style>
