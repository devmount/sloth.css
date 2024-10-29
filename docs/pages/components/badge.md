---
title: 'Components: Badge - Sloth.css'
description: Status, event or count indicators on text elements or buttons
tags: text button notification pulse
---

## Badge

Badges indicate the status of an element, the appearance of an event or counts on text elements or buttons.

### Basic text badges

Use the `badge` class to add a small bubble indicator at the top right corner of the enclosed element. Use the `data-badge` attribute to add content to that bubble. If you want to draw even more attention to the badge, you can use the `pulse` class in addition.

<div class="demo flex flex-wrap gap-8">
  <span class="badge">Inbox</span>
  <span class="badge" data-badge="12">Inbox</span>
  <span class="badge pulse" data-badge="99+">Inbox</span>
  <span class="badge" data-badge="new">CSS4 now available!</span>
</div>

```html
<span class="badge">Inbox</span>
<span class="badge" data-badge="12">Inbox</span>
<span class="badge pulse" data-badge="99+">Inbox</span>
<span class="badge" data-badge="new">CSS4 now available!</span>
```

<p class="callout accent">
  Note that the badge element itself is by design not part of the text flow to keep spacing between elements consistent. Therefore long badge contents should be avoided or only used where appropriate.
</p>

### Badge variants

The default badge without any additional class is already utilizing accent coloring. In addition, you can use `badge-neutral`, `badge-success` and `badge-alert` classes for the corresponding colors.

<div class="demo flex flex-wrap gap-8">
  <span class="badge">Inbox</span>
  <span class="badge-neutral" data-badge="12">Inbox</span>
  <span class="badge-success pulse" data-badge="99+">Inbox</span>
  <span class="badge-alert" data-badge="new">CSS4 now available!</span>
</div>

```html
<span class="badge">Inbox</span>
<span class="badge-neutral" data-badge="12">Inbox</span>
<span class="badge-success pulse" data-badge="99+">Inbox</span>
<span class="badge-alert" data-badge="new">CSS4 now available!</span>
```

### Button badges

The `badge` class also works on button elements.

<div class="demo flex flex-wrap gap-8">
  <button class="badge hollow neutral">Inbox</button>
  <button class="badge hollow" data-badge="12">Inbox</button>
  <button class="badge neutral pulse" data-badge="99+">Inbox</button>
  <button class="badge" data-badge="new">CSS4 Spec</button>
</div>

```html
<button class="badge hollow neutral">Inbox</button>
<button class="badge hollow" data-badge="12">Inbox</button>
<button class="badge neutral pulse" data-badge="99+">Inbox</button>
<button class="badge" data-badge="new">CSS4 Spec</button>
```
