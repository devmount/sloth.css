---
title: 'Components: Breadcrumb - Sloth.css'
description: Breadcrumb component of Sloth.css.
---

## Breadcrumb

Breadcrumbs are a list of links to return from the depths of a website's page hierarchy
to higher levels again. Wrapping is disabled for breadcrumbs. If the list overflows its container,
a horizontal scrollbar appears.

### Basic breadcrumb path

Use the `breadcrumb` class on an ordered list to format the contained elements.

<div class="demo">
  <ol class="breadcrumb">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Calendar</a>
    </li>
    <li>
      Settings
    </li>
  </ol>
</div>

```html
<ol class="breadcrumb">
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Calendar</a>
  </li>
  <li>
    Settings
  </li>
</ol>
```

### Change the separator symbol

Per default, breadcrumbs are separated with a `/`
Use the `--breadcrumb-symbol` custom property to change the symbol.

<div class="demo">
  <ol class="breadcrumb" style="--breadcrumb-symbol: '·'">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Calendar</a>
    </li>
    <li>
      <a href="#">Settings</a>
    </li>
    <li>
      Timezone &amp; date format
    </li>
  </ol>
  <ol class="breadcrumb" style="--breadcrumb-symbol: '⟩'">
    <li>
      <a href="#">Shop</a>
    </li>
    <li>
      <a href="#">Clothing</a>
    </li>
    <li>
      <a href="#">Kids</a>
    </li>
    <li>
      Shirts
    </li>
  </ol>
</div>

```html
<ol class="breadcrumb" style="--breadcrumb-symbol: '·'">...</ol>
<ol class="breadcrumb" style="--breadcrumb-symbol: '⟩'">...</ol>
```
