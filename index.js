import Tonic from 'https://cdn.skypack.dev/pin/@socketsupply/tonic@v14.1.0-fZTOVu4AVVR9O6ZArLzc/mode=imports/optimized/@socketsupply/tonic.js'
import bundle from 'https://cdn.skypack.dev/pin/@socketsupply/components@v13.2.19-ntPZtQdgNYXZfaaVUbbk/mode=imports/unoptimized/index.js'
import html from './lib/main-comp.js'

bundle(Tonic)

document.body.appendChild(html`<h1>Index Page</h1><tonic-sprite></tonic-sprite>`)

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

document.body.appendChild(html`
<section id="badge">
  <h2>Badge</h2>

  <div id="badge-1" class="test-container">
    <span>Default</span>
    <tonic-badge id="tonic-badge-1"></tonic-badge>
  </div>

  <div id="badge-2" class="test-container">
    <span>count="6"</span>
    <tonic-badge id="tonic-badge-2" count="6"></tonic-badge>
  </div>

  <div id="badge-3" class="test-container">
    <span>theme="light"</span>
    <tonic-badge id="tonic-badge-3" count="1" theme="light"></tonic-badge>
  </div>

  <div id="badge-4" class="dark test-container">
    <span>theme="dark"</span>
    <tonic-badge id="tonic-badge-4" count="1" theme="dark"></tonic-badge>
  </div>

</section>
`)

document.body.appendChild(html`
<section id="icon">
  <h2>Icon</h2>

  <div id="icon-1" class="test-container">
    <span>Font Awesome 6 face-frown-open Icon</span>
    <tonic-icon
      tabindex="0"
      symbol-id="face-frown-open"
      src="/sprites/regular.svg">
    </tonic-icon>
  </div>

  <div id="icon-2" class="test-container">
    <span>size="40px"</span>
    <tonic-icon
      symbol-id="hand-point-down"
      src="/sprites/regular.svg"
      size="40px">
    </tonic-icon>
  </div>

  <div id="icon-3" class="test-container">
    <span>fill="cyan"</span>
    <tonic-icon
      symbol-id="chart-bar"
      src="/sprites/regular.svg"
      fill="cyan">
    </tonic-icon>
  </div>

  <div id="icon-4" class="test-container">
    <span>symbol-id="window-restore"</span>
    <tonic-icon
      symbol-id="window-restore"
      src="/sprites/regular.svg">
    </tonic-icon>
  </div>

  <div id="icon-5" class="test-container">
    <span>tabindex="0"</span>
    <tonic-icon
      tabindex="0"
      symbol-id="face-grin-squint-tears"
      src="/sprites/regular.svg">
    </tonic-icon>
  </div>

</section>
`)

document.body.appendChild(html`
<section id="profile-image">
  <tonic-sprite></tonic-sprite>
  <h2>Profile Image</h2>

  <!-- Profile Image Default -->
  <div class="test-container">
    <span>Default Profile Image</span>
    <tonic-profile-image
      id="profile-image-default">
    </tonic-profile-image>
  </div>

  <!-- Profile with id -->
  <div class="test-container">
    <span>id="profile-image-id"</span>
    <tonic-profile-image
      id="profile-image-id">
    </tonic-profile-image>
  </div>

  <!-- Profile with name -->
  <div class="test-container">
    <span>name="profile-name"</span>
    <tonic-profile-image
      id="profile-image-name"
      name="profile-name">
    </tonic-profile-image>
  </div>

  <!-- Profile with src -->
  <div class="test-container">
    <span>src="/sampleprofile.jpg"</span>
    <tonic-profile-image
      id="profile-image-src"
      src="/sampleprofile.jpg"
      size="100px">
    </tonic-profile-image>
  </div>

  <!-- Profile with size -->
  <div class="test-container">
    <span>size="100px"</span>
    <tonic-profile-image
      id="profile-image-size"
      size="100px">
    </tonic-profile-image>
  </div>

  <!-- Profile with radius -->
  <div class="test-container">
    <span>radius="50%"</span>
    <tonic-profile-image
      id="profile-image-radius"
      radius="50%"
      size="100px">
    </tonic-profile-image>
  </div>

  <!-- Profile with border -->
  <div class="test-container">
    <span>border="3px solid black"</span>
    <tonic-profile-image
      id="profile-image-border"
      border="3px solid black"
      size="100px">
    </tonic-profile-image>
  </div>

  <!-- Profile editable -->
  <div class="test-container">
    <span>editable="true"</span>
    <tonic-profile-image
      id="profile-image-editable"
      editable="true"
      size="100px">
    </tonic-profile-image>
  </div>

  <!-- Profile not editable -->
  <div class="test-container">
    <span>editable="false"</span>
    <tonic-profile-image
      id="profile-image-editable-false"
      editable="false"
      size="100px">
    </tonic-profile-image>
  </div>

  <!-- Profile theme light -->
  <div class="test-container">
    <span>theme="light"</span>
    <tonic-profile-image
      id="profile-image-theme-light"
      theme="light"
      size="100px">
    </tonic-profile-image>
  </div>

  <!-- Profile theme dark -->
  <div class="test-container dark">
    <span>theme="dark"</span>
    <tonic-profile-image
      id="profile-image-theme-dark"
      theme="dark"
      size="100px">
    </tonic-profile-image>
  </div>

</section>
`)
