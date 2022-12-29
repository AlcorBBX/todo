import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MainModal } from "./MainModal";
import "../../../../index.scss";

export default {
  title: "Example/MainModal",
  component: MainModal,
} as ComponentMeta<typeof MainModal>;

const Template: ComponentStory<typeof MainModal> = args => (
  <MainModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Modal",
  anchorEl: null,
  // setAnchorEl: null,
  // refEl: null,
};
