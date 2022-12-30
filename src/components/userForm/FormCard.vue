<template>
  <CardBorder class="login-card">
    <div class="title">
      {{ title }}
    </div>
    <div class="form">
      <template v-for="field in config" :key="field.title">
        <FormField :title="field.title">
          <InputRegular
            :modelValue="form[field.formKey]"
            :type="field.type || 'text'"
            @update:modelValue="updateFormField(field.formKey, $event)"
          />
        </FormField>
      </template>
    </div>
    <div class="buttons">
      <slot name="actions" />
    </div>
  </CardBorder>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CardBorder } from "@/components/generics/containers";
import { InputRegular } from "@/components/generics/inputs";
import FormField from "./FormField.vue";
import type { PropType } from "vue";

type FormItemConfig = {
  formKey: string;
  title: string;
  type?: string;
};

export default defineComponent({
  components: {
    CardBorder,
    FormField,
    InputRegular,
  },
  props: {
    config: {
      type: Array as PropType<FormItemConfig[]>,
      default: () => [],
    },
    form: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({}),
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["update:form"],
  setup(props, { emit }) {
    const updateFormField = (field: string, value: string) => {
      emit("update:form", {
        ...props.form,
        [field]: value,
      });
    };

    return { updateFormField };
  },
});
</script>

<style lang="scss" scoped>
.login-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 300px;
  padding: 48px;

  > * {
    width: 100%;
  }

  .title {
    display: flex;
    justify-content: center;

    color: var(--neutral-900);
    font-size: 32px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .buttons {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
}
</style>
