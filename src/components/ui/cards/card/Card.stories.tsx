import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../../index.scss";
import { Card } from "./Card";

export default {
  title: "Example/Cards",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => (
  <Card {...args} />
);

//====================== ARGS ==========================

const children = (
  <>
    <h1>Body</h1>
    <p>text body inner</p>
  </>
);

const cover = (
  <img
    alt='example'
    src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  />
);

const actions = (
  <>
    <button>click</button>
    <button>click</button>
    <button>click</button>
  </>
);

//====================== ARGS ==========================

export const WithCoverBodyActions = Template.bind({});
WithCoverBodyActions.args = {
  children: children,
  cover: cover,
  actions: [actions],
};
