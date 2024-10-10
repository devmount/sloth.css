---
title: 'Components: Button - Sloth.css'
description: Button component of Sloth.css.
---

## Button

Buttons indicate actions the user can trigger on click. Buttons already have a base styling via the drop-in core of Sloth.css. However, this CSS component extends those by several color variations and button groups.

### Button variants

The default button without any class is already utilizing accent coloring. In addition, you can use `neutral`, `positive` and `negative` classes for the corresponding colors.

<div class="demo flex flex-wrap gap-4">
  <div>
    <button>Send post</button>
  </div>
  <div class="flex-col gap-2 items-center">
    <button class="neutral">Return</button>
    <code>.neutral</code>
  </div>
  <div class="flex-col gap-2 items-center">
    <button class="positive">Save profile</button>
    <code>.positive</code>
  </div>
  <div class="flex-col gap-2 items-center">
    <button class="negative">Delete account</button>
    <code>.negative</code>
  </div>
</div>

```html
<button>Send post</button>
<button class="neutral">Return</button>
<button class="positive">Save profile</button>
<button class="negative">Delete account</button>
```
