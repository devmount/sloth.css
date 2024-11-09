---
title: 'Components: Tab - Sloth.css'
description: Navigation for quickly switching between content sections
tags: variants accent neutral success alert size outline pill
---

## Tab

A tab navigation lets users quickly switch between content sections.

<p class="callout accent">
  Sloth.css is a CSS only library and does not ship any JavaScript. To handle appearance, and manual or autmatic closing of toast messages, you'll need to implement that with JavaScript.
</p>

### Basic tab navigation

Use the `tab-group` class on a parent element containing a `<nav>` with an ordered list for the tab bar and one or more `<section>` element for the actual content. The `disabled` class can be used to style a tab inactive.

<div class="demo">
  <div class="tab-group" id="tab-demo">
    <nav>
      <ol>
        <li class="active">Sales</li>
        <li>Quotes</li>
        <li>Invoices</li>
        <li class="disabled">Archive</li>
      </ol>
    </nav>
    <section class="active">
      <h4>Sales numbers</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
    </section>
    <section>
      <h4>Quotes created</h4>
      <p>In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
    </section>
    <section>
      <h4>Invoices sent</h4>
      <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
    </section>
  </div>
</div>

```html
<div class="tab-group">
  <nav>
    <ol>
      <li class="active">Sales</li>
      <li>Quotes</li>
      <li>Invoices</li>
      <li class="disabled">Archive</li>
    </ol>
  </nav>
  <section class="active">
    <h4>Sales numbers</h4>
    <p>...</p>
  </section>
  <section>
    <h4>Quotes created</h4>
    <p>...</p>
  </section>
  <section>
    <h4>Invoices sent</h4>
    <p>...</p>
  </section>
</div>
```

### Badge

The `badge` class can be used to show [badges](/components/badge) on tab list elements.

<div class="demo">
  <div class="tab-group">
    <nav>
      <ol>
        <li class="active badge" data-badge="11k">Sales</li>
        <li class="badge-neutral" data-badge="23">Quotes</li>
        <li>Invoices</li>
      </ol>
    </nav>
  </div>
</div>

```html
<div class="tab-group">
  <nav>
    <ol>
      <li class="active badge" data-badge="11k">Sales</li>
      <li class="badge-neutral" data-badge="23">Quotes</li>
      <li>Invoices</li>
    </ol>
  </nav>
</div>
```

### Position
