---
title: 'Components: Callout - Sloth.css'
description: Callout component of Sloth.css.
---

## Callout

A callout is a static message component, that is embedded and always visible within its context.

### Basic callout

Use the `callout` class to create a box that emphasizes its content.

<div class="demo">
  <div class="max-w-screen-sm">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="callout">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
  </div>
</div>

```html
<p class="callout">...</p>
```

### Colored callout

Use the `accent`, `positive` or `negative` classes to give the callout more meaning.

<div class="demo">
  <div class="max-w-screen-sm">
    <p class="callout accent">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p class="callout positive">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p class="callout negative">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
  </div>
</div>

```html
<p class="callout accent">...</p>
<p class="callout positive">...</p>
<p class="callout negative">...</p>
```

### Callouts with symbols

Use the `data-symbol` attribute to provide a symbol for a callout.

<div class="demo">
  <div class="max-w-screen-sm">
    <p class="callout" data-symbol="i">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p class="callout accent" data-symbol="!">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p class="callout negative" data-symbol="!!">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
  </div>
</div>

```html
<p class="callout" data-symbol="i">...</p>
<p class="callout accent" data-symbol="!">...</p>
<p class="callout negative" data-symbol="!!">...</p>
```
