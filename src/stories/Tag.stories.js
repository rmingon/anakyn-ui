import { ATag } from '../components/index.js';
import { action } from '@storybook/addon-actions'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Common/Tag',
  component: ATag,
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'info', 'warning', 'error'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
    closable: { control: 'boolean'},
    borderless: { control: 'boolean'},
    label: { control: 'text' },
  },
  methods: { action: action('close') }
};

const Template = (args) => ({
  components: { ATag },
  setup() {
    return { args };
  },
  template: '<a-tag v-bind="args" > {{ args.label }} </a-tag>',
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
