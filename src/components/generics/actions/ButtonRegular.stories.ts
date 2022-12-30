import { Meta, StoryFn } from "@storybook/vue3";
import ButtonRegular from "./ButtonRegular.vue";

export default {
  title: "generics/actions",
  component: ButtonRegular,
  argTypes: {
    disabled: { type: "boolean" },
    impact: {
      control: { type: "select" },
      options: ["high", "medium"],
    },
    title: { type: "string" },
  },
} as Meta<typeof ButtonRegular>;

type ButtonRegularProps = InstanceType<typeof ButtonRegular>["$props"];
export const ButtonRegularStory: StoryFn<typeof ButtonRegular> = (args) => ({
  components: { ButtonRegular },
  setup() {
    const defaultProps: ButtonRegularProps = {
      disabled: false,
      impact: "high",
      title: "Button",
    };
    return { props: { ...defaultProps, ...args } };
  },
  template: '<ButtonRegular v-bind="props" />',
});
ButtonRegularStory.storyName = "ButtonRegular";
