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
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 16px;
        font-family: Arial, sans-serif;
      }

      .card {
        width: 280px;
        height: 460px;
        border: 1px solid #d9d9d9;
        border-radius: 20px;
        background: white;
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
      }

      .card-desc {
        margin: 0;
        font-size: 14px;
        line-height: 1.4;
        color: #555;
        text-align: center;
        width: 100%;
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

  render() {
    return html`
      <div class="card">
        <img class="card-img" src="${this.image}" alt="${this.alt}" />

        <h3 class="card-title">${this.title}</h3>

        <p class="card-desc">
          A football club with a rich history and passionate supporters.
        </p>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
