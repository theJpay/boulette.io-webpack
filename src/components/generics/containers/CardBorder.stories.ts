import { Meta, StoryFn } from "@storybook/vue3";
import { StorySlot } from "../../storybook";
import CardBorder from "./CardBorder.vue";

export default {
  title: "generics/containers",
  component: CardBorder,
} as Meta<typeof CardBorder>;

export const CardBorderStory: StoryFn<typeof CardBorder> = () => ({
  components: { CardBorder, StorySlot },
  template: `<CardBorder style="padding: 8px;"><StorySlot colored style="height: 100px; width: 100px;" /></CardBorder>`,
});
CardBorderStory.storyName = "CardBorder";
