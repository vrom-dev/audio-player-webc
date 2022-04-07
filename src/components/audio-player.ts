import { html, css, LitElement } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'

import 'src/components/icons/icon-backward'
import 'src/components/icons/icon-forward'
import 'src/components/icons/icon-play'
import 'src/components/icons/icon-pause'

@customElement('audio-player')
export class AudioPlayer extends LitElement {
  static styles = css`
    .controls-container {
      align-items: center;
      background-color: #ffffff;
      border-radius: .5rem;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      display: flex;
      justify-content: space-evenly;
      height: 150px;
      margin: 300px auto;
      position: relative;
      width: 320px;
    }

    picture {
      background-color: tomato;
      display: block;
      position: absolute;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
    img {
      max-width: 100%;
    }
  `
  @state()
  isPlaying: boolean = false

  @query('#audio-player')
  audioPlayer!: HTMLAudioElement

  togglePlay() {
    this.isPlaying = !this.isPlaying
    return this.isPlaying ? this.audioPlayer.play() : this.audioPlayer.pause()
  }

  updateVolume(e: Event) {
    const inputVolume: HTMLInputElement = e.target as HTMLInputElement
    const volume: number = +inputVolume.value / 100
    this.audioPlayer.volume = volume
  }

  render() {
    return html`
    <audio src='/audio/euphoria.mp3' id='audio-player'>
      Your browser does not support the <code>audio</code> element.
    </audio>
    <div>
      <div class='controls-container'>
        <picture>
          <img src='/logo/euphoria.jpg' alt='Logo euphoria'>
        </picture>
        <button>
          <icon-backward></icon-backward>
        </button>
        <button @click=${this.togglePlay}>
          ${this.isPlaying ? 
            html`<icon-pause></icon-pause>` :
            html`<icon-play></icon-play>`
          }
        </button>
        <button>
          <icon-forward></icon-forward>
        </button>
        <!-- <input type='range' max='100' min='0' step='2' @input=${this.updateVolume}/> -->
      </div>
    </div>
    `
  }
}

