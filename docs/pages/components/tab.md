---
title: 'Components: Tab - Sloth.css'
description: Navigation for quickly switching between content sections
tags: variants accent neutral success alert size outline pill
---

## Tab

A tab navigation lets users quickly switch between content sections.

### Position

Use the `tab-group` class containing an ordered list for the tab bar and the `tab-panel` class on the actual section content. The `disabled` calls can be used to style a tab inactive.

<div class="demo">
  <div class="tab-group" id="tab-demo">
    <nav>
      <ol>
        <li class="active">Sales</li>
        <li>Quotes</li>
        <li>Invoices</li>
      </ol>
    </nav>
    <section>
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
    </ol>
  </nav>
  <section>
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
