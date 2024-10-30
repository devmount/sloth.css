---
title: 'Components: Callout - Sloth.css'
description: Static and embedded message boxes
tags: variants accent success alert neutral symbol
---

## Callout

A callout is a static message box, that is embedded and always visible within its context.

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

### Colors

Use the `accent`, `success` or `alert` classes to give the callout more meaning.

<div class="demo">
  <div class="max-w-screen-sm">
    <p class="callout accent">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p class="callout success">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
    <p class="callout alert">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
  </div>
</div>

```html
<p class="callout accent">...</p>
<p class="callout success">...</p>
<p class="callout alert">...</p>
```

### Symbol

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
    <p class="callout alert" data-symbol="!!">
      Noted for their slowness of movement, tree sloths spend most of their lives hanging upside
      down in the trees of the tropical rainforests of South America and Central America.
    </p>
  </div>
</div>

```html
<p class="callout" data-symbol="i">...</p>
<p class="callout accent" data-symbol="!">...</p>
<p class="callout alert" data-symbol="!!">...</p>
```
