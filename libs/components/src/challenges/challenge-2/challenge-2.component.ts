import { LitElement, css, html } from 'lit';

export class Challenge2 extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 16px;
      color: black;
      background-color: white;
      border-radius: 8px;
      border: 1px solid black;
      font-family: sans-serif;
      text-align: center;
    }

    .title {
      font-weight: bold;
    }
  `;

  // Initialize default property values

  // Define the component's template
  override render() {
    return html`<div class="alert">
      <div class="title"><slot name="title"></slot></div>
      <slot></slot>
    </div>`;
  }
}

// Register the custom element with the browser
customElements.define('challenge-2', Challenge2);
