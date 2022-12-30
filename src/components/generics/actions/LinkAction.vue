<template>
  <a class="link-action" :href="href" rel="noopener" :target="target">{{
    title
  }}</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    href: String,
    target: {
      type: String,
      default: "_blank",
    },
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
.link-action {
  color: var(--primary-500);
  font-weight: 600;
  font-size: inherit;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
