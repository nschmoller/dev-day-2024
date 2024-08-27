import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge2 } from './challenge-2.component';

const component = new Challenge2();

const meta: Meta<Challenge2> = {
  title: 'Challenge 2',
  component: component.tagName,
  render: () =>
    html`<challenge-2
      ><div slot="title">Title</div>
      Message from a slot</challenge-2
    >`,
};

export default meta;

export const Default = {};
