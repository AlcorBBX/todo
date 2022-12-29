import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../../index.scss";
import { CoverBodyActionsCard } from "./CoverBodyActionsCard";

export default {
  title: "Example/Cards",
  component: CoverBodyActionsCard,
} as ComponentMeta<typeof CoverBodyActionsCard>;

const Template: ComponentStory<typeof CoverBodyActionsCard> = args => (
  <CoverBodyActionsCard {...args} />
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
