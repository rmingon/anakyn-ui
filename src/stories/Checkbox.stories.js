import { ACheckbox } from '../components/index.js';
import { action } from '@storybook/addon-actions'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Common/Checkbox',
  component: ACheckbox,
  argTypes: {

  },
};

const Template = (args) => ({
  components: { ACheckbox },
  setup() {
    return { args };
  },
  template: '<a-checkbox v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {};
