---
title: 'Components: Modal - Sloth.css'
description: Dialog that needs to be solved
tags: variants accent neutral success alert size outline pill
---

## Modal

A modal is a dialog appearing above the current page content the user needs to solve or abort before moving on.

### Basic structure

Use the `modal` class on a parent element containing an anchor element having the `overlay` class and a `<section>` element containing the actual dialog content. The section content can have up to 3 parts: `<header>`, `<main>` and `<footer>`. If you don't need a a header or a footer, just use `<main>` here. If there is too much content, a vertical scrollbar appears.

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
      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
          down in the trees of the tropical rainforests of South America and Central America.
        </p>
        <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
      </main>
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
    <main>
      <p>...</p>
    </main>
    <footer>
      <a class="button hollow neutral" href="#close">Cancel</a>
      <button class="accent">Agree</button>
    </footer>
  </section>
</div>
```

### Sizes

Use the `sm` or `lg` classes to reduce or increase the maximum width of the modal.

<div class="demo flex gap-4">
  <a class="button" href="#modal-demo-sm">Small Modal</a>
  <a class="button" href="#modal-demo-lg">Large Modal</a>

  <div class="modal sm" id="modal-demo-sm">
    <a class="overlay" href="#close"></a>
    <section>
      <header>
        <h3>Sign in</h3>
        <a class="button ghost pill" href="#close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </a>
      </header>
      <fieldset>
        <input class="lg" type="email" placeholder="Email" />
        <input class="lg" type="password" placeholder="Password" />
      </fieldset>
      <footer>
        <a class="button hollow neutral" href="#close">Cancel</a>
        <button class="accent">Login</button>
      </footer>
    </section>
  </div>

  <div class="modal lg" id="modal-demo-lg">
    <a class="overlay" href="#close"></a>
    <section>
      <header>
        <h3>Members Area</h3>
        <a class="button ghost pill" href="#close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </a>
      </header>
      <main class="flex gap-2">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
        </div>
        <div class="separator vertical"></div>
        <fieldset>
          <label>Sign in</label>
          <input class="lg" type="email" placeholder="Email" />
          <input class="lg" type="password" placeholder="Password" />
        </fieldset>
        <div class="separator vertical">OR</div>
        <fieldset>
          <label>Sign up</label>
          <input class="lg" type="email" placeholder="Email" />
          <input class="lg" type="password" placeholder="Password" />
          <input class="lg" type="password" placeholder="Password repeat" />
        </fieldset>
      </main>
      <footer>
        <a class="button hollow neutral" href="#close">Cancel</a>
        <button class="accent">Submit</button>
      </footer>
    </section>
  </div>
</div>

```html
<div class="modal sm">...</div>
<div class="modal lg">...</div>
```
