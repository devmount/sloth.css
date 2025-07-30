---
title: 'Components: Tab - Sloth.css'
description: Navigation for quickly switching between content divs
tags: variants accent neutral success alert size outline pill
---

## Tab

A tab navigation lets users quickly switch between content divs.

<p class="callout accent">
  Sloth.css is a CSS only library and does not ship any JavaScript. To handle appearance, and manual or autmatic closing of toast messages, you'll need to implement that with JavaScript.
</p>

### Basic tab navigation

Use the `tab-group` class on a parent element containing a `<nav>` with an ordered list for the tab bar and a `<section>` with one or more `<div>` elements for the actual content. The `disabled` class can be used to style a tab inactive.

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
    <section>
      <div class="active">
        <h4>Sales numbers</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
      </div>
      <div>
        <h4>Quotes created</h4>
        <p>In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
      </div>
      <div>
        <h4>Invoices sent</h4>
        <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
      </div>
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
  <section>
    <div class="active">
      <h4>Sales numbers</h4>
      <p>...</p>
    </div>
    <div>
      <h4>Quotes created</h4>
      <p>...</p>
    </div>
    <div>
      <h4>Invoices sent</h4>
      <p>...</p>
    </div>
  </section>
</div>
```

To make the tabs actually work, you can use the following simple script in vanilla JavaScript. It applies to all `.tab-group` elements, even if there are multiple ones on the same page. It adds a click event listener to all tabs, that are not disabled and moves the `.active` class to the clicked tab accordingly.

```js
const tabGroup = document.querySelectorAll('.tab-group');
tabGroup.forEach((group) => {
  const tabList = group.querySelector('nav > ol');
  const tabPanels = group.querySelectorAll('section > div');
  const tabs = tabList
    ? [...tabList.querySelectorAll('li')].filter(t => !t.classList.contains('disabled'))
    : [];
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'))
      tabPanels.forEach(p => p.classList.remove('active'));
      const panel = [...tabPanels][i];
      panel?.classList.add('active');
      tab.classList.add('active');
    });
  });
});
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
    <section>
      <div class="active"></div>
      <div></div>
      <div></div>
    </section>
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

Per default the tab bar is on top of the content. The `bottom`, `left` or `right` classes can be used on the `<nav>` element to position the tab bar accordingly.

<div class="demo">
  <div class="tab-group">
    <nav class="bottom">
      <ol>
        <li class="active">Sales</li>
        <li>Quotes</li>
        <li>Invoices</li>
      </ol>
    </nav>
    <section>
      <div class="active">
        <h4>Tab bar positioned at the bottom</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
      </div>
      <div>
        <h4>Quotes created</h4>
        <p>In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
      </div>
      <div>
        <h4>Invoices sent</h4>
        <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
      </div>
    </section>
  </div>
</div>

```html
<div class="tab-group">
  <nav class="bottom">
    <ol>
      <li class="active">Sales</li>
      <li>Quotes</li>
      <li>Invoices</li>
    </ol>
  </nav>
  <section>
    <div class="active">...</div>
    <div>...</div>
    <div>...</div>
  </section>
</div>
```

<div class="demo">
  <div class="tab-group">
    <nav class="left">
      <ol>
        <li class="active">Sales</li>
        <li>Quotes</li>
        <li>Invoices</li>
      </ol>
    </nav>
    <section>
      <div class="active">
        <h4>Tab bar positioned to the left</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
      </div>
      <div>
        <h4>Quotes created</h4>
        <p>In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
      </div>
      <div>
        <h4>Invoices sent</h4>
        <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
      </div>
    </section>
  </div>
</div>

```html
<div class="tab-group">
  <nav class="left">
    <ol>
      <li class="active">Sales</li>
      <li>Quotes</li>
      <li>Invoices</li>
    </ol>
  </nav>
  <section>
    <div class="active">...</div>
    <div>...</div>
    <div>...</div>
  </section>
</div>
```

<div class="demo">
  <div class="tab-group">
    <nav class="right">
      <ol>
        <li class="active">Sales</li>
        <li>Quotes</li>
        <li>Invoices</li>
      </ol>
    </nav>
    <section>
      <div class="active">
        <h4>Tab bar positioned to the right</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
      </div>
      <div>
        <h4>Quotes created</h4>
        <p>In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at.</p>
      </div>
      <div>
        <h4>Invoices sent</h4>
        <p>Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
      </div>
    </section>
  </div>
</div>

```html
<div class="tab-group">
  <nav class="right">
    <ol>
      <li class="active">Sales</li>
      <li>Quotes</li>
      <li>Invoices</li>
    </ol>
  </nav>
  <section>
    <div class="active">...</div>
    <div>...</div>
    <div>...</div>
  </section>
</div>
```
