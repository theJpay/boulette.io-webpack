<template>
  <input
    ref="input"
    class="input-regular remove-default-input-style"
    :disabled="disabled"
    :value="modelValue"
    @input="onInput($event)"
    @keyup.enter="onReturn($event)"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    disabled: Boolean,
    modelValue: String,
  },
  emits: ["return", "update:modelValue"],
  setup(props, { emit }) {
    const input = ref<HTMLInputElement>();

    const onInput = (event: Event) => {
      emit("update:modelValue", (event.target as HTMLInputElement).value);
    };
    const onReturn = (event: KeyboardEvent) => {
      if (!input.value) return;
      input.value.blur();
      emit("return", event);
    };

    return { input, onInput, onReturn };
  },
});
</script>

<style lang="scss" scoped>
.remove-default-input-style {
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;

  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
}

.input-regular {
  box-sizing: border-box;
  height: 36px;
  padding: 8px 16px;

  color: var(--neutral-900);

  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  background-color: var(--neutral-5);
  border: 1px solid var(--neutral-50);
  border-radius: 18px;

  transition: border-color var(--duration-transition);

  &:hover {
    border-color: var(--neutral-100);
  }

  &:focus {
    background-color: var(--neutral-0);
    border-color: var(--primary-500);
  }

  &:disabled {
    color: var(--neutral-300);

    background-color: var(--neutral-5);
    border-color: transparent;
  }
}
</style>
