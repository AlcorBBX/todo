import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MainModal } from "./MainModal";
import "../../../../index.scss";

export default {
  title: "MainModal",
  component: MainModal,
};

const Template: ComponentStory<typeof MainModal> = args => (
  <MainModal {...args} />
);

export const Default = Template.bind({});
// Default.args = {
//   title: "",
//   anchorEl: null,
//   setAnchorEl: null,
//   refEl: refElement,
// };
