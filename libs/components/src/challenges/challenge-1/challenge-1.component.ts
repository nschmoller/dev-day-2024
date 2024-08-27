import { LitElement, css, html } from 'lit';

export class Challenge1 extends LitElement {
  // Define styles (optional)
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
  `;

  // Initialize default property values

  // Define the component's template
  override render() {
    return html`<div class="alert">Let op!</div>`;
  }
}

// Register the custom element with the browser
customElements.define('challenge-1', Challenge1);
