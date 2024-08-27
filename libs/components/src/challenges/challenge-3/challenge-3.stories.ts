import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge3 } from './challenge-3.component';

const component = new Challenge3();

const meta: Meta<Challenge3> = {
  title: 'Challenge 3',
  component: component.tagName,
  render: () =>
    html`<challenge-3 variant="primary"
      ><div slot="title">Title</div>
      Message from a slot</challenge-3
    >`,
};

export default meta;

export const Default = {};
export const Success = {
  render: () =>
    html`<challenge-3 variant="success">
      <div slot="title">Title</div>
      Message from a slot</challenge-3
    >`,
};
export const Neutral = {
  render: () =>
    html`<challenge-3 variant="neutral">
      <div slot="title">Title</div>
      Message from a slot</challenge-3
    >`,
};
export const Warning = {
  render: () =>
    html`<challenge-3 variant="warning">
      <div slot="title">Title</div>
      Message from a slot</challenge-3
    >`,
};
export const Danger = {
  render: () =>
    html`<challenge-3 variant="danger">
      <div slot="title">Title</div>
      Message from a slot</challenge-3
    >`,
};
