import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import 'src/components/audio-player'

@customElement('app-index')
export class AppIndex extends LitElement {
  render() {
    return html`
      <audio-player></audio-player>
    `
  }
}

