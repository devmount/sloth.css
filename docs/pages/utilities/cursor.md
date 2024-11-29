---
title: 'Utilities: Cursor - Sloth.css'
description: Controlling cursor types
tags: cursor-default cursor-pointer cursor-help cursor-not-allowed
notoc: true
---

## Cursor

Utility classes for controlling cursor types.

Use the `cursor-*` classes to control the mouse cursor appearance. Hover over the colored fields on a device that supports cursors to see them in action.

<div class="demo flex flex-wrap gap-8">
  <div class="flex-col items-center gap-4">
    <div class="cursor-default w-32 h-16 bg-accent rounded"></div>
    <code>.cursor-default</code>
  </div>
  <div class="flex-col items-center gap-4">
    <div class="cursor-pointer w-32 h-16 bg-accent rounded"></div>
    <code>.cursor-pointer</code>
  </div>
  <div class="flex-col items-center gap-4">
    <div class="cursor-help w-32 h-16 bg-accent rounded"></div>
    <code>.cursor-help</code>
  </div>
  <div class="flex-col items-center gap-4">
    <div class="cursor-not-allowed w-32 h-16 bg-accent rounded"></div>
    <code>.cursor-not-allowed</code>
  </div>
</div>

```html
<div class="cursor-default ..."></div>
<div class="cursor-pointer ..."></div>
<div class="cursor-help ..."></div>
<div class="cursor-not-allowed ..."></div>
```

```css
.cursor-default     { cursor: default;     }
.cursor-pointer     { cursor: pointer;     }
.cursor-help        { cursor: help;        }
.cursor-not-allowed { cursor: not-allowed; }
```
