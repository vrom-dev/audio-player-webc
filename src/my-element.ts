import { html, css, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `
  @query('#audio')
  audio!: HTMLAudioElement

  startPlay() {
    this.audio.play()
  }
  pausePlay() {
    this.audio.pause()
    console.log(this.audio.volume)
  }

  render() {
    return html`
      <audio src='/audio/euphoria.mp3' id='audio'>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button @click=${this.startPlay}>Play</button>
      <button @click=${this.pausePlay}>Pause</button>
      <button>Next</button>
      <button>Previous</button>
    `
  }
}

