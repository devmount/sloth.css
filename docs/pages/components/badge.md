---
title: 'Components: Badge - Sloth.css'
description: Badge component of Sloth.css.
---

## Badge

Badges indicate the status of an element, the appearance of an event or counts on buttons or other elements.

### Basic text badges

Use the `badge` class to add a small bubble indicator at the top right corner of the enclosed element. Use the `data-badge` attribute to add content to that bubble. If you want to draw even more attention to the badge, you can use the `pulse` class in addition.

<div class="demo flex gap-8">
  <span class="badge">Inbox</span>
  <span class="badge" data-badge="12">Inbox</span>
  <span class="badge pulse" data-badge="99+">Inbox</span>
</div>

```html
<span class="badge">Inbox</span>
<span class="badge" data-badge="12">Inbox</span>
<span class="badge pulse" data-badge="99+">Inbox</span>
```

### Button badges

This also works for button elements.

<div class="demo flex gap-8">
  <button class="badge">Inbox</button>
  <button class="badge" data-badge="12">Inbox</button>
  <button class="badge pulse" data-badge="99+">Inbox</button>
</div>

```html
<button class="badge">Inbox</button>
<button class="badge" data-badge="12">Inbox</button>
<button class="badge pulse" data-badge="99+">Inbox</button>
```
