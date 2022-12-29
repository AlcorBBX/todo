import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../../index.scss";
import { HiddenField as Field} from "./HiddenField";

export default {
  title: "Example/Fields",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = args => (
  <Field {...args} />
);

//====================== ARGS ==========================


//====================== ARGS ==========================

export const HiddenField = Template.bind({});
HiddenField.args = {
  placeholder: 'Hidden Field'
};
