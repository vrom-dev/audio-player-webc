import { html, svg, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './svg-wrapper'

@customElement('icon-forward')
export class IconForward extends LitElement {

  render() {
    return html`
    <svg-wrapper .content=${() => svg`
      <path
        d="M2.95592 5.70436C2.55976 5.41246 2 5.69531 2 6.1874V17.8126C2 18.3047 2.55976 18.5875 2.95592 18.2956L10.8445 12.483C11.1699 12.2432 11.1699 11.7568 10.8445 11.517L2.95592 5.70436Z" />
      <path
        d="M13.9559 5.70436C13.5598 5.41246 13 5.69531 13 6.1874V17.8126C13 18.3047 13.5598 18.5875 13.9559 18.2956L21.8445 12.483C22.1699 12.2432 22.1699 11.7568 21.8445 11.517L13.9559 5.70436Z" />
    
      `} />
      `
  }
}
