<template>
  <div class="login-view">
    <div class="title">Login Page</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: var(--primary-500);
  font-size: 32px;
}
</style>
