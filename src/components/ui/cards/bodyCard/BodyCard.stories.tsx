import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../../index.scss";
import { BodyCard } from "./BodyCard";

export default {
  title: "Example/Cards",
  component: BodyCard,
} as ComponentMeta<typeof BodyCard>;

const Template: ComponentStory<typeof BodyCard> = args => (
  <BodyCard />
);

//====================== ARGS ==========================

const children = (
  <>
    <h1>Body</h1>
    <p>text body inner</p>
  </>
);



//====================== ARGS ==========================

export const WithBody = Template.bind({});
WithBody.args = {
  children: children,
  // cover: cover,
  // actions: [actions],
};
