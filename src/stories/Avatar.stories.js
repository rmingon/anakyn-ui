import { AAvatar } from '../components/index.js';
import { action } from '@storybook/addon-actions'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Common/Avatar',
  component: AAvatar,
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l'] },
    src: { control: 'text' },
  },
  methods: { action: action('close') }
};

const Template = (args) => ({
  components: { AAvatar },
  setup() {
    return { args };
  },
  template: '<a-avatar v-bind="args" > {{ args.label }} </a-avatar>',
});

export const Primary = Template.bind({});
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
