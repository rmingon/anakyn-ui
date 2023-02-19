import { ACard } from '../components/index.js';
import { action } from '@storybook/addon-actions'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Common/Card',
  component: ACard,
  argTypes: {

  },
};

const Template = (args) => ({
  components: { ACard },
  setup() {
    return { args };
  },
  template: '<a-card v-bind="args" > {{ args.slot }} </a-card>',
});

export const Primary = Template.bind({});
Primary.args = { slot: "TOTOTO" };
