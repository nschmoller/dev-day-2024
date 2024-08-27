import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge1 } from './challenge-1.component';

const component = new Challenge1();

const meta: Meta<Challenge1> = {
  title: 'Challenge 1',
  component: component.tagName,
  render: () => html`<challenge-1></challenge-1>`,
};

export default meta;

export const Default = {};
