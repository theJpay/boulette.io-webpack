<template>
  <div>
    <SideBar />
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SideBar } from "@/components/sidebar";

export default defineComponent({
  components: {
    SideBar,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.app {
  margin-left: 180px;
}
</style>
