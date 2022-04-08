import {makeHeading} from "./Heading";

export default {
  title: 'Elements/Heading',
    argTypes: {
      label: { control: 'text' },
    }
};

const Template = ({ type, style, label, ...args }) => {
  return makeHeading({type, style, label, ...args });
};

export const H1 = Template.bind({});
H1.args = {
    type: 'h1',
    label: 'Heading 1'
};

export const H2 = Template.bind({});
H2.args = {
    type: 'h2',
    style: 'heading-2',
    label: 'Heading 2'
};

