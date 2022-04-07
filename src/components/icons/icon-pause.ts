import { html, svg, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './svg-wrapper'

@customElement('icon-pause')
export class IconPause extends LitElement {

  render() {
    return html`
    <svg-wrapper .content=${()=> svg`
      <path
        d="M6 18.4V5.6C6 5.26863 6.26863 5 6.6 5H9.4C9.73137 5 10 5.26863 10 5.6V18.4C10 18.7314 9.73137 19 9.4 19H6.6C6.26863 19 6 18.7314 6 18.4Z" />
      <path
        d="M14 18.4V5.6C14 5.26863 14.2686 5 14.6 5H17.4C17.7314 5 18 5.26863 18 5.6V18.4C18 18.7314 17.7314 19 17.4 19H14.6C14.2686 19 14 18.7314 14 18.4Z" />
      `} />
      `
  }
}