---
title: 'Components: Toast - Sloth.css'
description: Dynamic notification callout extension
tags: callout position variants neutral accent success alert
---

## Toast

A toast notificataion is a dynamic message component, that is only visible after a certain action. For this use case, the <a href="/components/callout">Callout</a> component is used and extended to show up on a fixed position.

<p class="callout accent">
  Sloth.css is a CSS only library and does not ship any JavaScript. To handle appearance, and manual or autmatic closing of toast messages, you'll need to implement that with JavaScript.
</p>

### Basic toast

Use the `toast callout` classes to create a toast notification. The toast element is hidden by default, use the `active` class to show it.

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
  <div class="control grid grid-cols-2 max-w-screen-xs gap-2">
    <button class="neutral" onclick="positionToast('tl')">
      Top Left <code>.tl</code>
    </button>
    <button class="neutral" onclick="positionToast('tr')">
      Top Right <code>.tr</code>
    </button>
    <button class="neutral" onclick="positionToast('bl')">
      Bottom Left <code>.bl</code>
    </button>
    <button class="neutral" onclick="positionToast('br')">
      Bottom Right <code>.br</code>
    </button>
  </div>
</div>

```html
<div class="toast callout tl">...</div>
<div class="toast callout tr">...</div>
<div class="toast callout bl">...</div>
<div class="toast callout br">...</div>
```

### Toast variants

Use the `accent`, `success` or `alert` classes to give the toast notification a different meaning.

<div class="demo">
  <p>The demo can be seen directly on this page. Use the following controls to change it's color.</p>
  <div class="control flex gap-2">
    <button class="neutral" onclick="colorToast('neutral')">
      Neutral
    </button>
    <button onclick="colorToast('accent')">
      Accent <code>.accent</code>
    </button>
    <button class="success" onclick="colorToast('success')">
      Success <code>.success</code>
    </button>
    <button class="alert" onclick="colorToast('alert')">
      Alert <code>.alert</code>
    </button>
  </div>
</div>

```html
<div class="toast callout">...</div>
<div class="toast callout accent">...</div>
<div class="toast callout success">...</div>
<div class="toast callout alert">...</div>
```
