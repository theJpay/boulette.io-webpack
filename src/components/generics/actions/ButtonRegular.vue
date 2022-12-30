<template>
  <button
    class="button-regular"
    :class="{
      [`${impact}-impact`]: true,
      disabled,
    }"
    type="button"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type ButtonImpact = "high" | "medium";

export default defineComponent({
  props: {
    disabled: Boolean,
    impact: {
      type: String as PropType<ButtonImpact>,
      default: "high",
    },
    title: String,
  },
});
</script>

<style lang="scss" scoped>
@mixin buttonRegularColors(
  $text,
  $background,
  $background-hover,
  $background-disabled
) {
  & {
    color: $text;

    background-color: $background;
  }

  &:hover {
    background-color: $background-hover;
  }

  &.disabled {
    color: var(--neutral-300);

    background-color: $background-disabled;
  }
}

.button-regular {
  padding: 8px 16px;

  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;

  border-width: 0;
  border-radius: 18px;
  cursor: pointer;

  &.high-impact {
    @include buttonRegularColors(
      var(--neutral-0),
      var(--primary-500),
      var(--primary-700),
      var(--neutral-25)
    );
  }

  &.medium-impact {
    @include buttonRegularColors(
      var(--primary-500),
      var(--primary-100),
      var(--primary-200),
      var(--neutral-25)
    );
  }

  &.disabled {
    cursor: default;
  }
}
</style>
