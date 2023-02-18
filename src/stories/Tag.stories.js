import { ATag } from '../components/index.js';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Common/Tag',
  component: ATag,
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'info', 'warning', 'error', 'tertiary', 'success'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
    closable: { control: 'boolean'},
    borderless: { control: 'boolean'},
    label: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { ATag },
  setup() {
    return { args };
  },
  template: '<a-tag v-bind="args" @close="close" > {{ args.label }} </a-tag>',
  methods: { close: action('close') }
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Tag',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Tag',
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  type: 'info',
  label: 'Tag',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  label: 'Tag',
};
