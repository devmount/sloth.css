---
title: 'Components: Modal - Sloth.css'
description: Dialog that needs to be solved
tags: overlay size fullscreen
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
          <svg viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
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
        <svg viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
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

Use the `sm` or `lg` classes to reduce or increase the maximum width of the modal. Use `fullscreen` to have the modal fill the entire screen.

<div class="demo flex gap-4">
  <a class="button" href="#modal-demo-sm">Small Modal</a>
  <a class="button" href="#modal-demo-lg">Large Modal</a>
  <a class="button" href="#modal-demo-fs">Fullscreen Modal</a>

  <div class="modal sm" id="modal-demo-sm">
    <a class="overlay" href="#close"></a>
    <section>
      <header>
        <h3>Members Area</h3>
        <a class="button ghost pill" href="#close">
          <svg viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
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
        <h3>Learn latin</h3>
        <a class="button ghost pill" href="#close">
          <svg viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </a>
      </header>
      <main class="flex gap-8">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. t scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. t scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
        </div>
      </main>
      <footer>
        <a class="button hollow neutral" href="#close">Cancel</a>
      </footer>
    </section>
  </div>

  <div class="modal fullscreen" id="modal-demo-fs">
    <a class="overlay" href="#close"></a>
    <section>
      <header>
        <h3>Cupcake ipsum</h3>
        <a class="button ghost pill" href="#close">
          <svg viewBox="0 0 24 24" class="icon"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </a>
      </header>
      <main class="flex gap-8">
        <div>
          <p>Cupcake ipsum dolor sit amet liquorice. Cheesecake caramels cake candy I love carrot cake. Croissant carrot cake chocolate cake topping carrot cake. Donut I love I love danish jelly beans. Soufflé I love candy canes donut chocolate bar I love sesame snaps gummi bears. Donut apple pie shortbread pudding soufflé. Jelly pastry sweet cheesecake dessert gingerbread toffee. Oat cake tootsie roll cake I love bear claw bonbon apple pie. Sesame snaps chocolate bear claw dragée sugar plum. Carrot cake oat cake dessert apple pie ice cream cake. Muffin tiramisu sesame snaps cotton candy jelly beans tart dragée. Bear claw I love chocolate bar caramels gummi bears cake.</p>
          <p>Pie I love cake I love sweet roll jujubes tart gummies. Halvah ice cream I love brownie apple pie. Chupa chups lollipop wafer apple pie topping. Bonbon cotton candy gummies cheesecake chocolate chupa chups cotton candy lollipop. Jujubes candy canes jelly beans candy canes chupa chups I love cookie. Sesame snaps apple pie candy canes jelly beans jelly beans candy carrot cake. Pie jelly beans apple pie brownie cake dessert. Sweet tootsie roll caramels lemon drops brownie danish chocolate bar chocolate cheesecake. I love dragée macaroon macaroon biscuit fruitcake. Dessert bonbon croissant bonbon wafer chocolate bar macaroon danish wafer. Marshmallow marzipan donut candy I love sugar plum I love. Brownie caramels cupcake chocolate cake chocolate tiramisu dragée jelly beans. Tart marzipan halvah lollipop cake sweet halvah bear claw I love.</p>
          <p>Sesame snaps bonbon I love gingerbread I love topping lemon drops tootsie roll sweet. Carrot cake cotton candy shortbread sugar plum I love. Gummi bears pudding fruitcake I love apple pie marzipan. Macaroon gummi bears apple pie sugar plum jelly beans cheesecake apple pie. Fruitcake tootsie roll cotton candy I love marzipan tart. Candy I love I love pastry brownie fruitcake cake cupcake. Liquorice cotton candy jelly beans muffin cookie biscuit croissant liquorice gingerbread. Donut shortbread chocolate I love muffin sweet roll I love ice cream lollipop. Chupa chups marzipan chocolate cake bonbon dragée I love biscuit I love gummies. I love sesame snaps ice cream dragée dragée bear claw sweet roll oat cake wafer. Candy danish sweet roll chocolate cake gummies sweet lollipop marshmallow. Marzipan cotton candy pie lollipop chupa chups sesame snaps.</p>
          <p>Tart icing icing ice cream wafer toffee apple pie. Cookie topping I love cheesecake jelly-o dragée marzipan. Marzipan lollipop donut dragée topping. Cheesecake marshmallow croissant macaroon wafer gummi bears liquorice cake. Ice cream shortbread cheesecake cotton candy fruitcake halvah. Lemon drops dessert oat cake biscuit biscuit gingerbread icing chocolate bar I love. Chocolate marshmallow biscuit sesame snaps chocolate bar brownie. Cake jelly halvah lemon drops jujubes. Danish oat cake liquorice carrot cake soufflé pudding tiramisu. Muffin gummi bears croissant sugar plum gingerbread. Jelly-o powder chocolate bar I love pie chupa chups chocolate. Cake sweet roll I love I love chocolate bar. Pastry brownie pastry tiramisu lemon drops oat cake gingerbread. I love lemon drops danish muffin sugar plum.</p>
          <p>Ice cream bear claw cheesecake bonbon powder wafer toffee. Pie shortbread jelly-o tiramisu ice cream bonbon. Chocolate bar cookie sweet muffin cookie cheesecake. Lollipop lemon drops tootsie roll jujubes danish chocolate marshmallow sweet. Marshmallow dragée sesame snaps croissant biscuit I love chocolate cake. Soufflé sesame snaps jelly-o macaroon oat cake marshmallow. I love chupa chups bonbon cookie donut. Pastry cheesecake lollipop bonbon tart oat cake chupa chups. Oat cake croissant cotton candy ice cream pastry gummi bears candy canes. Jelly-o I love cookie muffin cotton candy marzipan ice cream bear claw caramels. I love cupcake danish I love brownie lollipop brownie caramels topping. Caramels sugar plum biscuit cotton candy pastry gummies.</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
        </div>
      </main>
      <footer>
        <a class="button hollow neutral" href="#close">Close</a>
      </footer>
    </section>
  </div>
</div>

```html
<div class="modal sm">...</div>
<div class="modal lg">...</div>
<div class="modal fullscreen">...</div>
```
