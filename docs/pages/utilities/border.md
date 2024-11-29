---
title: 'Utilities: Border - Sloth.css'
description: Controlling the border of elements
tags: rounded shape rounded-full
---

## Border

Utility classes for controlling the border of elements.

### Rounded border

Use the `rounded` and `rounded-full` classes to control the border radius.

<div class="demo flex gap-8">
  <div class="flex-col items-center gap-4">
    <div class="w-16 h-16 bg-accent rounded"></div>
    <code>.rounded</code>
  </div>
  <div class="flex-col items-center gap-4">
    <div class="w-16 h-16 bg-accent rounded-full"></div>
    <code>.rounded-full</code>
  </div>
  <div class="flex-col items-center gap-4">
    <div class="w-32 h-16 bg-accent rounded-full"></div>
    <code>.rounded-full</code>
  </div>
</div>

```html
<div class="rounded ..."></div>
<div class="rounded-full ..."></div> <!-- Same height and width -->
<div class="rounded-full w-32 h-16 ..."></div> <!-- Different height and width -->
```

```css
.rounded      { border-radius: var(--border-radius); }
.rounded-full { border-radius: 9999px;               }
```

The border radius can be adjusted or even removed (setting it to `0`) by the corresponding custom property:

```css
:root {
  --border-radius: .25rem; /* 4px */
}
```
