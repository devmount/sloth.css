---
title: 'Components: Separator - Sloth.css'
description: Separators divide content into different parts
tags: horizontal vertical
---

## Separator

Separators divide content into different parts providing visual breaks for the user. They can be used horizontally and vertically.

### Horizontal separators

Use the `separator` class to add a horizontal line. Every content added to that element appears as its label, even single spaces. No content will result in a single horizontal line.

<div class="demo">
  <div class="max-w-screen-xs text-center">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
    <div class="separator"></div>
    <p>Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
    <div class="separator">  OR  </div>
    <p>Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
  </div>
</div>

```html
<p>Lorem ipsum ...</p>
<div class="separator"></div>
<p>Vivamus pellentesque ...</p>
<div class="separator">  OR  </div>
<p>Ut scelerisque ...</p>
```

### Vertical separators

Use the `separator` and the `vertical` class to add a vertical line. Every content added to that element appears as its label. No content will result in a single vertical line.

<p class="callout accent">
  Note that vertical separators only work in a flex container with flex direction row. If you're using utility classes, you can just give it the <code>flex</code> class or set <code>display: flex;</code> on it.
</p>

<div class="demo">
  <div class="max-w-screen-md flex">
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Vivamus pellentesque non massa sit amet.</div>
    <div class="separator vertical"></div>
    <div>Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</div>
    <div class="separator vertical">OR</div>
    <div>Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</div>
  </div>
</div>

```html
<div class="flex">
  <div>Lorem ipsum ...</div>
  <div class="separator vertical"></div>
  <div>Vivamus pellentesque ...</div>
  <div class="separator vertical">OR</div>
  <div>Ut scelerisque ...</div>
</div>
```
