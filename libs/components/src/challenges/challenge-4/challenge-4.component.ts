import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

export class Challenge4 extends LitElement {
  @property({ type: String })
  variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  @property({ type: Boolean })
  closeable = true;

  @property({ type: Boolean, reflect: true })
  open = true;

  static override styles = css`
    :host {
      display: block;
      padding: 16px;
      color: black;
      background-color: white;
      border-radius: 8px;
      border-top: 8px solid; /* Top border color depends on variant */
      border-left: 1px solid black; /* Black left border */
      border-right: 1px solid black; /* Black right border */
      border-bottom: 1px solid black; /* Black bottom border */
      font-family: sans-serif;
      text-align: center;
    }

    .title {
      font-weight: bold;
    }

    :host([variant='primary']) {
      border-color: #007bff black black black; /* Bright blue top border */
    }

    :host([variant='success']) {
      border-color: #28a745 black black black; /* Bright green top border */
    }

    :host([variant='neutral']) {
      border-color: #17a2b8 black black black; /* Bright cyan top border */
    }

    :host([variant='warning']) {
      border-color: #ffc107 black black black; /* Bright yellow top border */
    }

    :host([variant='danger']) {
      border-color: #dc4545 black black black; /* Bright red top border */
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      border: none;
      cursor: pointer;
      color: #333;
    }

    .close-button:hover {
      color: red;
    }

    .close-button[closeable=false] {
      display: none;
    }
  `;
  #close = () =>

    ;

  // Initialize default property values

  // Define the component's template
  override render() {
    return html`<div class="alert">
      <div class="close-button" @onClick=${this.#close}>&times;</div>
      <div class="title"><slot name="title"></slot></div>
      <slot></slot>
    </div>`;
  }
}

// Register the custom element with the browser
customElements.define('challenge-4', Challenge4);
