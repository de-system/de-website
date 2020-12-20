<template>
  <div class="pastevent">
    <topbar />
    <sidebar />
  </div>
</template>

<script>
import topbar from "../components/topbar";
import sidebar from "../components/sidebar";

export default {
  name: "pastevent",
  components: {
    topbar,
    sidebar,
  },
};
</script>

<style scoped>
.pastevent {
  margin: 0%;
}
</style>
