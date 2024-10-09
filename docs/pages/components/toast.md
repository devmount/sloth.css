---
title: 'Components: Toast - Sloth.css'
description: Toast notification component of Sloth.css.
---

## Toast

A toast notificataion is a dynamic message component, that is only visible after a certain action. For this use case, the <a href="/components/callout">Callout</a> component is used and extended to show up on a fixed position.

> Sloth.css is a CSS only library and does not ship any JavaScript. To handle appearance, and manual or autmatic closing of toast messages, you'll need to implement that with JavaScript.

### Basic toast

Use the `.toast.callout` selector to create a toast notification. The toast element is hidden by default, use the `.active` class to show it.

<div class="demo">
  <p>The demo can be seen directly on this page in the bottom right corner.</p>
  <div class="flex gap-2">
    <button onclick="toggleToast()">Toggle</button>
  </div>
  <div class="toast callout active" id="toast">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
</div>

```html
<div class="toast callout active">...</div>
```

### Position toasts

Use the `br`, `tr`, `tl` and `bl` classes to position the toast notification on one of the four screen corners. The bottom right corner is the default position.

<div class="demo">
  <p>The demo can be seen directly on this page. Use the following controls to change it's position.</p>
  <div class="control flex gap-2">
    <button onclick="positionToast('br')">
      <code>br</code> Bottom Right
    </button>
    <button onclick="positionToast('tr')">
      <code>tr</code> Top Right
    </button>
    <button onclick="positionToast('tl')">
      <code>tl</code> Top Left
    </button>
    <button onclick="positionToast('bl')">
      <code>bl</code> Bottom Left
    </button>
  </div>
</div>

```html
<div class="toast callout br">...</div>
<div class="toast callout tr">...</div>
<div class="toast callout bl">...</div>
<div class="toast callout tl">...</div>
```

### Colored toasts

Use the `accent`, `positive` or `negative` classes to give the toast notification a different meaning.

<div class="demo">
  <p>The demo can be seen directly on this page. Use the following controls to change it's position.</p>
  <div class="control flex gap-2">
    <button onclick="colorToast('neutral')">
      Reset
    </button>
    <button onclick="colorToast('accent')">
      <code>accent</code> Accent
    </button>
    <button onclick="colorToast('positive')">
      <code>positive</code> Positive
    </button>
    <button onclick="colorToast('negative')">
      <code>negative</code> Negative
    </button>
  </div>
</div>

```html
<div class="toast callout accent">...</div>
<div class="toast callout positive">...</div>
<div class="toast callout negative">...</div>
```
