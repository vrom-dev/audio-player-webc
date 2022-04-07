import { html, svg, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './svg-wrapper'

@customElement('icon-play')
export class IconPlay extends LitElement {

  render() {
    return html`
    <svg-wrapper .content=${() => svg`
      <path
        d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" />
      `} />
      `
  }
}
