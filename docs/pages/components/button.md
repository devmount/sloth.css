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

### Secondary button

For less important buttons with outline and transparent backgrounds, the `hollow` class can be used. It can be combined with all other button related classes.

<div class="demo flex flex-wrap gap-4">
  <div class="flex-col gap-2 items-center">
    <button class="hollow">Send post</button>
    <code>.hollow</code>
  </div>
  <div class="flex-col gap-2 items-center">
    <button class="hollow neutral">Return</button>
    <code>.hollow.neutral</code>
  </div>
  <div class="flex-col gap-2 items-center">
    <button class="hollow positive">Save profile</button>
    <code>.hollow.positive</code>
  </div>
  <div class="flex-col gap-2 items-center">
    <button class="hollow negative">Delete account</button>
    <code>.hollow.negative</code>
  </div>
</div>

```html
<button class="hollow">Send post</button>
<button class="hollow neutral">Return</button>
<button class="hollow positive">Save profile</button>
<button class="hollow negative">Delete account</button>
```

### Link button

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

### Pill button

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

### Button group

Use the `button-group` class on an element containing buttons, to group buttons to a single logical unit.

<div class="demo flex flex-wrap gap-4">
  <div class="button-group font-mono">
    <button><b>B</b></button>
    <button><i>I</i></button>
    <button class="underline">U</button>
  </div>
</div>

```html
<div class="button-group">
  <button><b>B</b></button>
  <button><i>I</i></button>
  <button class="underline">U</button>
</div>
```

Pill buttons are also supported in groups, even on one side only.

<div class="demo flex flex-wrap gap-8">
  <div class="button-group">
    <button class="rounded-full">Left</button>
    <button>Center</button>
    <button class="rounded-full">Right</button>
  </div>
  <div class="button-group">
    <button>Select</button>
    <button class="rounded-full">Next</button>
  </div>
</div>

```html
<div class="button-group">
  <button class="rounded-full">Left</button>
  <button>Center</button>
  <button class="rounded-full">Right</button>
</div>
<div class="button-group">
  <button>Select</button>
  <button class="rounded-full">Next</button>
</div>
```
