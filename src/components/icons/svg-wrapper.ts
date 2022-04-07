import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('svg-wrapper')
export class SVGWrapper extends LitElement {
  static styles = css`
    div {
      display: inline-block;
      height: var(--height);
      width: var(--width);
    }

    svg {
      width:  100%;
      height: 100%;
      fill: var(--fill);
      stroke: var(--stroke);
      stroke-width: var(--stroke-width);
      transition: stroke .2s ease-out;
    }

    svg:hover {
      stroke: var(--stroke-hover);
    }
  `
  @property()
  content!: Function

  @property()
  width: string = '1rem'

  @property()
  height: string = '1rem'

  @property()
  fill: string = 'none'

  @property()
  strokeWidth: string = '1.5'

  @property()
  stroke: string = '#444'

  @property()
  strokeHover: string = '#888'

  render() {
    return html`
      <style>
        :host {
          --fill: ${this.fill};
          --stroke: ${this.stroke};
          --stroke-hover: ${this.strokeHover};
          --stroke-width: ${this.strokeWidth};
          --height: ${this.height};
          --width: ${this.width};
        }
      </style>
      <div>
        <svg stroke-width=${this.strokeWidth} viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          ${this.content()}
        </svg>
      </div>
    `;
  }
}