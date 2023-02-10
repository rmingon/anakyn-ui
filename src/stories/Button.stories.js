import {AButton} from '../components/index.js';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Common/Button',
  component: AButton,
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'info', 'warning', 'error'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
    label: { control: 'text' }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { AButton },
  setup() {
    return { args };
  },
  template: '<a-button v-bind="args" > {{ args.label }} </a-button>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  type: 'info',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  label: 'Button',
};
