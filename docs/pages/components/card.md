---
title: 'Components: Card - Sloth.css'
description: Static and embedded message boxes
tags: variants accent success alert neutral symbol
---

## Card

A card is a simple content container that can be used to structure pages with repetitive content like dashboards or blog post overviews.

### Basic card

Use the `card` class to create a box that contains content. Cards are not elevated by choice, since they are at the same level as normal content. Cards work well in flex or grid containers.

<div class="demo">
  <div class="grid grid-cols-2 gap-4 max-w-screen-sm">
    <article class="card">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America.
    </article>
    <article class="card">
      <h4>The sloth</h4>
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees.
    </article>
  </div>
</div>

```html
<article class="card">Noted for...</article>

<article class="card">
  <h4>The sloth</h4>
  Noted for...
</article>
```

### Header image

Putting an `<img />` or `<figure>` as *first* element into the `card` container, it will be positioned to fill the card width. Images keep their aspect ratio.

<div class="demo">
  <div class="grid grid-cols-2 gap-4 max-w-screen-sm">
    <article class="card">
      <img src="https://images.unsplash.com/photo-1506272517965-ec6133efee7a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640" alt="Several models of planets" />
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America.
    </article>
    <article class="card">
      <img src="https://images.unsplash.com/photo-1506272517965-ec6133efee7a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640" alt="Several models of planets" />
      <h4>The sloth</h4>
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees.
    </article>
  </div>
</div>

```html
<article class="card">
  <img src="..." alt="..." />
  Noted for their slowness...
</article>

<article class="card">
  <img src="..." alt="..." />
  <h4>The sloth</h4>
  Noted for their slowness....
</article>
```

### Footer controls

A `<footer>` element at the bottom of a `card` container provides space for links, action buttons or other form controls. If the footer only contains one element, it is aligned to the end. Multiple elements are justified with space in between.

<div class="demo">
  <div class="grid grid-cols-2 gap-4 max-w-screen-sm">
    <article class="card">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America.
      <footer>
        <button class="hollow accent pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        </button>
        <button class="ghost">
          Source
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
        </button>
      </footer>
    </article>
    <article class="card">
      <h4>The sloth</h4>
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees.
      <footer>
        <button class="hollow neutral">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
        </button>
      </footer>
    </article>
  </div>
</div>

```html
<article class="card">
  Noted for their slowness...
  <footer>
    <button class="hollow accent pill">
      <svg ... class="icon">...</svg>
    </button>
    <button class="ghost">
      Source
      <svg ... class="icon">...</svg>
    </button>
  </footer>
</article>

<article class="card">
  <h4>The sloth</h4>
  Noted for their slowness...
  <footer>
    <button class="hollow neutral">
      Read more
      <svg ... class="icon">...</svg>
    </button>
  </footer>
</article>
```
