<template>
  <div class="story-slot" :class="{ colored }">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    colored: Boolean,
    name: {
      type: String,
      default: "default",
    },
  },
  setup(props) {
    const slotName = computed(() => `#${props.name}`);

    return { slotName };
  },
});
</script>

<style lang="scss" scoped>
.story-slot {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0 8px;

  font-size: 14px;
  text-align: center;

  &.colored {
    background-color: var(--primary-500);
  }
}
</style>
