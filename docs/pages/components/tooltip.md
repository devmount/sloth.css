---
title: 'Components: Tooltip - Sloth.css'
description: Additional information for elements on hover or focus
tags: hover information details description top left right bottom neutral accent success alert
---

## Tooltip

A tooltip provides additional information for an element on hover or focus.

### Position

Use the `data-tooltip` attribute on any element to attach a tooltip that appears above the element on hover or focus. Linebreaks can be inserted too using the `&#10;` line break entity (or another line break character suitable for your use case).

<div class="demo">
  <button data-tooltip="Initiate self-destruction">I'm harmless</button>
  <button class="alert" data-tooltip="On second thought&#10;I won't do anything">I'm dangerous</button>
</div>

```html
<button data-tooltip="Initiate self-destruction">I'm harmless</button>
<button class="alert" data-tooltip="On second thought&#10;I won't do anything">I'm dangerous</button>
```

To change position, use the `tooltip-left`, `tooltip-bottom` or `tooltip-right` classes accordingly.

<div class="demo flex-center gap-2">
  <button class="tooltip-left" data-tooltip="I'm over here!">Left</button>
  <button class="tooltip-bottom" data-tooltip="I'm over here!">Bottom</button>
  <button class="tooltip-right" data-tooltip="I'm over here!">Right</button>
</div>

```html
<button class="tooltip-left" data-tooltip="I'm over here!">Left</button>
<button class="tooltip-bottom" data-tooltip="I'm over here!">Bottom</button>
<button class="tooltip-right" data-tooltip="I'm over here!">Right</button>
```

### Colors

Tooltips are neutral by default, but can have a different color using the `tooltip-accent`, `tooltip-success` or `tooltip-alert` classes.

<div class="demo">
  <button class="accent tooltip-accent" data-tooltip="I'm important!">Accent</button>
  <button class="success tooltip-success" data-tooltip="I'm successful!">Success</button>
  <button class="alert tooltip-alert" data-tooltip="I'm alarming!">Alert</button>
</div>

```html
<button class="accent tooltip-accent" data-tooltip="I'm important!">Accent</button>
<button class="success tooltip-success" data-tooltip="I'm successful!">Success</button>
<button class="alert tooltip-alert" data-tooltip="I'm alarming!">Alert</button>
```
