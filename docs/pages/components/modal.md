---
title: 'Components: Modal - Sloth.css'
description: Dialog that needs to be solved
tags: variants accent neutral success alert size outline pill
---

## Modal

A modal is a dialog appearing above the current page content the user needs to solve or abort before moving on.

### Basic modal

Use the `modal` class on a parent element containing an anchor element having the `overlay` class and a `<section>` element containing the dialog content.

<div class="demo">
  <a class="button" href="#modal-demo">Open Modal</a>

  <div class="modal" id="modal-demo">
    <a class="overlay" href="#close"></a>
    <section>
      <header>
        <h3>The sloth</h3>
        <a class="button ghost pill" href="#close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </a>
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>
        Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
        down in the trees of the tropical rainforests of South America and Central America.
      </p>
      <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
      <footer>
        <a class="button hollow neutral" href="#close">Cancel</a>
        <button class="accent">Agree</button>
      </footer>
    </section>
  </div>
</div>

```html
<div class="modal">
  <a class="overlay" href="#close"></a>
  <section>
    <header>
      <h3>The sloth</h3>
      <a class="button ghost pill" href="#close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
      </a>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
    <footer>
      <a class="button hollow neutral" href="#close">Cancel</a>
      <button class="accent">Agree</button>
    </footer>
  </section>
</div>
```
