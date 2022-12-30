import ButtonRegular from "./ButtonRegular.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "generics/actions",
  component: ButtonRegular,
  argTypes: {
    disabled: { type: "boolean" },
    impact: {
      control: { type: "select" },
      options: ["high", "medium", "low"],
    },
    title: { type: "string" },
    onClick: { action: "click", table: { disable: true } },
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
