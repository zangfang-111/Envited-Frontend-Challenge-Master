import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../components/common/Button';

export default {
  title: 'Envited Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Purple = Template.bind({});
Purple.args = {
  name: 'Button',
  classes: 'btn-purple',
  action: action('changed'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'Button',
  classes: 'btn-secondary',
  action: action('changed'),
};

export const GradientBG = Template.bind({});
GradientBG.args = {
  name: 'Button',
  action: action('changed'),
};
