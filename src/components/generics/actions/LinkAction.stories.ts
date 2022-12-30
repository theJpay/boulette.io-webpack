import LinkAction from "./LinkAction.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "generics/actions",
  component: LinkAction,
  argTypes: {
    title: { type: "string" },
  },
} as Meta<typeof LinkAction>;

type LinkActionProps = InstanceType<typeof LinkAction>["$props"];

export const LinkActionStory: StoryFn<typeof LinkAction> = (args) => ({
  components: { LinkAction },
  setup() {
    const defaultProps: LinkActionProps = { title: "Action link" };
    return { props: { ...defaultProps, ...args } };
  },
  template: '<LinkAction v-bind="props" />',
});
LinkActionStory.storyName = "LinkAction";
