<template>
  <div class="card-border">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.card-border {
  background-color: var(--neutral-0);
  border: 1px solid var(--neutral-50);
  border-radius: var(--length-border-radius);
}
</style>
