---
title: 'Components: Button - Sloth.css'
description: Button component of Sloth.css.
---

## Button

Buttons indicate actions the user can trigger on click. Buttons already have a base styling via the drop-in core of Sloth.css. However, this CSS component extends those by several variations, sizes, groups and more.

### Button variants

The default button without any class is already utilizing accent coloring. In addition, you can use `neutral`, `success` and `alert` classes for the corresponding colors.

<div class="demo flex flex-wrap gap-4">
  <button>Send post</button>
  <button class="neutral">Return</button>
  <button class="success">Save profile</button>
  <button class="alert">Delete account</button>
</div>

```html
<button>Send post</button>
<button class="neutral">Return</button>
<button class="success">Save profile</button>
<button class="alert">Delete account</button>
```

Using the `disabled` attribute deactivates buttons. If you're using `onclick` event handlers, make sure this case is handled.

<div class="demo flex flex-wrap gap-4">
  <button disabled>Send post</button>
  <button class="neutral" disabled>Return</button>
  <button class="success" disabled>Save profile</button>
  <button class="alert" disabled>Delete account</button>
</div>

```html
<button disabled>Send post</button>
<button class="neutral" disabled>Return</button>
<button class="success" disabled>Save profile</button>
<button class="alert" disabled>Delete account</button>
```

### Button sizes

Use the `sm` or `lg` classes to reduce or increase the font size and padding of a button. Note that the actual width and height are still depending on the buttons content (content won't overflow the button but stretch it).

<div class="demo flex flex-wrap items-center gap-4">
  <button class="sm">Click me!</button>
  <button>No me!</button>
  <button class="lg">NO ME!</button>
</div>

```html
<button class="sm">Click me!</button>
<button>No me!</button>
<button class="lg">NO ME!</button>
```

### Secondary button

For less important buttons with outline and transparent backgrounds, the `hollow` class can be used. It can be combined with all other button related classes.

<div class="demo flex flex-wrap gap-4">
  <button class="hollow">Send post</button>
  <button class="hollow neutral">Return</button>
  <button class="hollow success">Save profile</button>
  <button class="hollow alert">Delete account</button>
</div>

```html
<button class="hollow">Send post</button>
<button class="hollow neutral">Return</button>
<button class="hollow success">Save profile</button>
<button class="hollow alert">Delete account</button>
```

The `disabled` attribute can be set on secondary buttons too.

<div class="demo flex flex-wrap gap-4">
  <button class="hollow" disabled>Send post</button>
  <button class="hollow neutral" disabled>Return</button>
  <button class="hollow success" disabled>Save profile</button>
  <button class="hollow alert" disabled>Delete account</button>
</div>

```html
<button class="hollow" disabled>Send post</button>
<button class="hollow neutral" disabled>Return</button>
<button class="hollow success" disabled>Save profile</button>
<button class="hollow alert" disabled>Delete account</button>
```

### Link button

Use the `button` class to apply all button styles on `<a>` tags. That way you can create button links for navigation.

<div class="demo flex flex-wrap gap-4">
  <a class="button" href="#">Go shopping</a>
  <a class="button neutral" href="#">Go back</a>
</div>

```html
<a class="button" href="#">Go shopping</a>
<a class="button neutral" href="#">Go back</a>
```

### Pill button

Use the `rounded-full` utility class to give buttons a pill form.

<div class="demo flex flex-wrap gap-4">
  <button class="rounded-full">Send post</button>
  <button class="neutral rounded-full">Return</button>
  <button class="success hollow rounded-full">Save profile</button>
</div>

```html
<button class="rounded-full">Send post</button>
<button class="neutral rounded-full">Return</button>
<button class="success hollow rounded-full">Save profile</button>
```

### Ghost button

Use the `ghost` class to keep button sizing without background color or border. Works on link buttons too.

<div class="demo flex flex-wrap gap-4">
  <button>Subscribe</button>
  <button class="ghost">Docs</button>
  <a class="ghost button" href="#">GitHub</a>
</div>

```html
<button>Subscribe</button>
<button class="ghost">Docs</button>
<a class="ghost button" href="#">GitHub</a>
```

### Busy button

Use the `busy` class to replace the text of a button with a <a href="/components/loader">loader</a> while keeping the button size. Works with secondary buttons, link buttons and pill buttons. Busy buttons are disabled.

<div class="demo flex flex-wrap items-center gap-8">
  <button class="busy">Send post</button>
  <button class="busy neutral rounded-full">Return</button>
  <button class="busy success hollow">Save profile</button>
  <button class="busy alert hollow rounded-full">Delete account</button>
  <button class="busy ghost">Load settings</button>
</div>

```html
<button class="busy">Send post</button>
<button class="busy neutral rounded-full">Return</button>
<button class="busy success hollow">Save profile</button>
<button class="busy alert hollow rounded-full">Delete account</button>
<button class="busy ghost">Load settings</button>
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
