import { Tonic } from 'https://cdn.skypack.dev/-/@socketsupply/tonic@v14.1.0-fZTOVu4AVVR9O6ZArLzc/dist=es2019,mode=imports/optimized/@socketsupply/tonic.js'
import { components } from 'https://cdn.skypack.dev/-/@socketsupply/components@v13.2.19-ntPZtQdgNYXZfaaVUbbk/dist=es2019,mode=imports/unoptimized/index.js'
import { html } from './lib/main-comp.js'

components.add(Tonic)

document.body.appendChild(html`
<section id="button">
  <h2>Button</h2>
  <div id="button-1" class="test-container">
    <span>Default Button</span>
    <tonic-button></tonic-button>
  </div>
  <div id="button-2" class="test-container">
    <span>Button has text content</span>
    <tonic-button>Text Content</tonic-button>
  </div>
  <div id="button-2-5" class="test-container">
    <span>Button has text content</span>
    <tonic-button value="v"></tonic-button>
  </div>
  <div id="button-3" class="test-container">
    <span>disabled="true"</span>
    <tonic-button disabled="true">Button</tonic-button>
  </div>
  <div id="button-4" class="test-container">
    <span>disabled="false"</span>
    <tonic-button disabled="false">Button</tonic-button>
  </div>
  <div id="button-5" class="test-container">
    <span>Has all attributes</span>
    <tonic-button
      margin="10px"
      type="reset"
      autofocus="true"
      width="200px"
      height="50px"
      tabindex="1"
      radius="5px"></tonic-button>
  </div>
  <div id="button-6" class="test-container">
    <span>fill="rgb(240, 102, 83)"</span>
    <tonic-button
      fill="rgb(240, 102, 83)"
      text-color="white">Button</tonic-button>
  </div>
  <div id="button-7" class="test-container">
    <span>border-color, border-width, text-color</span>
    <tonic-button
      border-color="rgb(240, 102, 83)"
      border-width="3px">Button</tonic-button>
  </div>
  <div id="button-8" class="test-container">
    <span>async="true"</span>
    <tonic-button async="true">Button</tonic-button>
  </div>
  <div id="button-9" class="test-container">
    <span>async="false"</span>
    <tonic-button async="false">Button</tonic-button>
  </div>
  <div id="button-10" class="test-container">
    <span>tabindex="0"</span>
    <tonic-button tabindex="0">Button</tonic-button>
  </div>
  <div id="button-11" class="test-container">
    <span>href and target</span>
    <tonic-button target="_blank" href="https://google.com">target="_blank"</tonic-button>
    <tonic-button target="_self" href="https://google.com">target="_self"</tonic-button>
    <tonic-button href="https://google.com">No target</tonic-button>
  </div>
</section>
`)
