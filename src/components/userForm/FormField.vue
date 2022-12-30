<template>
  <div class="form-field">
    <div class="title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .title {
    color: var(--neutral-900);

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
