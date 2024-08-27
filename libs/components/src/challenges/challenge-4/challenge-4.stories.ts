import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge4 } from './challenge-4.component';

const component = new Challenge4();

const meta: Meta<Challenge4> = {
  title: 'Challenge 4',
  component: component.tagName,
  render: () =>
    html`<challenge-4 variant="primary"
      ><div slot="title">Title</div>
      Message from a slot</challenge-4
    >`,
};

export default meta;

export const Default = {};
export const Success = {
  render: () =>
    html`<challenge-4 variant="success">
      <div slot="title">Title</div>
      Message from a slot</challenge-4
    >`,
};
export const Neutral = {
  render: () =>
    html`<challenge-4 variant="neutral">
      <div slot="title">Title</div>
      Message from a slot</challenge-4
    >`,
};
export const Warning = {
  render: () =>
    html`<challenge-4 variant="warning">
      <div slot="title">Title</div>
      Message from a slot</challenge-4
    >`,
};
export const Danger = {
  render: () =>
    html`<challenge-4 variant="danger">
      <div slot="title">Title</div>
      Message from a slot</challenge-4
    >`,
};
