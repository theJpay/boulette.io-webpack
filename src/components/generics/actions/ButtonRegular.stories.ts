import { Meta, StoryFn } from "@storybook/vue3";
import ButtonRegular from "./ButtonRegular.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "generics/actions",
  component: ButtonRegular,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
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
/* // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
 */
