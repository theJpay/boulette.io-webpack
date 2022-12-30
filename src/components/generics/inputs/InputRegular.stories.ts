import { Meta, StoryFn } from "@storybook/vue3";
import InputRegular from "./InputRegular.vue";

export default {
  title: "generics/inputs",
  component: InputRegular,
  argTypes: {
    disabled: { type: "boolean" },
    modelValue: { type: "string" },
    onReturn: { action: "return", table: { disable: true } },
  },
} as Meta<typeof InputRegular>;

type InputRegularProps = InstanceType<typeof InputRegular>["$props"];
export const InputRegularStory: StoryFn<typeof InputRegular> = (args) => ({
  components: { InputRegular },
  setup() {
    const defaultProps: InputRegularProps = {
      disabled: false,
      modelValue: "",
    };

    return { props: { ...defaultProps, ...args } };
  },
  template: `<InputRegular v-bind="props" />`,
});
InputRegularStory.storyName = "InputRegular";
