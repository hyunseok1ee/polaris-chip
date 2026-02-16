import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Liverpool FC";
    this.image = "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg";
    this.alt = "Liverpool FC crest";
    this.desc = "A football club with a rich history and passionate supporters.";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-size: 16px;
        font-family: Arial, sans-serif;
      }

      :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg, skyblue);
        border: 2px solid black;
        box-shadow: 10px 5px 5px blue;
      }

      .card {
        width: 280px;
        height: 460px;
        border: 1px solid #d9d9d9;
        border-radius: 20px;
        background-color: var(--my-card-background-color, white);
        padding: 18px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .card-img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        background: #fafafa;
        border: 1px solid #eaeaea;
        border-radius: 14px;
        padding: 10px;
        box-sizing: border-box;
      }

      .card-title {
        margin: 16px 0 10px 0;
        font-size: 26px;
        text-align: center;
        font-weight: bold;
      }

      details summary {
        text-align: left;
        font-size: 18px;
        padding: 8px 0;
        width: 100%;
      }

      details[open] summary {
        font-weight: bold;
      }

      .flowing {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
        width: 100%;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1.4;
        color: #555;
      }

      @media (max-width: 500px) {
        .card {
          width: 240px;
          height: 420px;
          padding: 14px;
        }

        .card-title {
          font-size: 22px;
        }

        .card-img {
          height: 170px;
        }
      }
    `;
  }

  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <img class="card-img" src="${this.image}" alt="${this.alt}" />
        <h3 class="card-title">${this.title}</h3>

        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div class="flowing">
            <slot>${this.desc}</slot>
          </div>
        </details>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      desc: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
