---
title: 'Components: Button - Sloth.css'
description: Button component of Sloth.css.
---

## Button

Buttons indicate actions the user can trigger on click. Buttons already have a base styling via the drop-in core of Sloth.css. However, this CSS component extends those by several color variations and button groups.

### Color variants

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

### Link buttons

Use the `button` class to apply all button styles on `<a>` tags. That way you can create button links for navigation.

<div class="demo flex flex-wrap gap-4">
  <div class="flex-col gap-2 items-center">
    <a class="button" href="#">Go shopping</a>
    <code>.button</code>
  </div>
  <div class="flex-col gap-2 items-center">
    <a class="button neutral" href="#">Go back</a>
    <code>.button.neutral</code>
  </div>
</div>

```html
<a class="button" href="#">Go shopping</a>
<a class="button neutral" href="#">Go back</a>
```

### Pill buttons

Use the `rounded-full` utility class to give buttons a pill form.

<div class="demo flex flex-wrap gap-4">
  <div class="flex-col gap-2 items-center">
    <button class="rounded-full">Send post</button>
    <code>.rounded-full</code>
  </div>
  <div class="flex-col gap-2 items-center">
    <button class="neutral rounded-full">Return</button>
    <code>.neutral.rounded-full</code>
  </div>
</div>

```html
<button class="rounded-full">Send post</button>
<button class="neutral rounded-full">Return</button>
```
