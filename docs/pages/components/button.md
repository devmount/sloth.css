---
title: 'Components: Button - Sloth.css'
description: Buttons indicate actions the user can trigger on click
tags: variants accent neutral success alert disabled size secondary outline link pill ghost icon busy loading group
---

## Button

Buttons indicate actions the user can trigger on click. Buttons already have a base styling via the drop-in core of Sloth.css. However, this CSS component extends those by several variations, sizes, groups and more.

### Colors

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

### Sizes

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

Use the `pill` class to give buttons a fully rounded pill form.

<div class="demo flex flex-wrap gap-4">
  <button class="pill">Send post</button>
  <button class="neutral pill">Return</button>
  <button class="success hollow pill">Save profile</button>
</div>

```html
<button class="pill">Send post</button>
<button class="neutral pill">Return</button>
<button class="success hollow pill">Save profile</button>
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

### Icon button

Sloth.css doesn't ship any icons, since there are lots of icon libraries out there. However SVG icons are directly supported using the `icon` class. Buttons are set to *inline-flex* per default, so multiple elements inside buttons are nicely aligned next to each other.

The beautiful <a href="https://tabler.io/icons" target="_blank">Tabler Icons</a> work well with Sloth.css for example. You can also create icon buttons without any text. You might want to use the `pill` class for those.

<div class="demo flex flex-wrap gap-4">
  <button>
    <svg viewBox="0 0 24 24" class="icon"><path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
    Settings
  </button>
  <button class="hollow alert">
    Donations
    <svg viewBox="0 0 24 24" class="icon"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
  </button>
  <button class="hollow neutral pill">
    <svg viewBox="0 0 24 24" class="icon"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
  </button>
</div>

```html
<button>
  <svg viewBox="0 0 24 24" class="icon">...</svg>
  Settings
</button>
<button class="hollow alert">
  Donations
  <svg viewBox="0 0 24 24" class="icon">...</svg>
</button>
<button class="hollow neutral pill">
  <svg viewBox="0 0 24 24" class="icon">...</svg>
</button>
```

### Busy button

Use the `busy` class to replace the text of a button with a <a href="/components/loader">loader</a> while keeping the button size. Works with secondary buttons, link buttons and pill buttons. Busy buttons are disabled.

<div class="demo flex flex-wrap items-center gap-8">
  <button class="busy">Send post</button>
  <button class="busy neutral pill">Return</button>
  <button class="busy success hollow">Save profile</button>
  <button class="busy alert hollow pill">Delete account</button>
  <button class="busy ghost">Load settings</button>
</div>

```html
<button class="busy">Send post</button>
<button class="busy neutral pill">Return</button>
<button class="busy success hollow">Save profile</button>
<button class="busy alert hollow pill">Delete account</button>
<button class="busy ghost">Load settings</button>
```

### Button badges

The `badge` class can be used to show [badges](/components/badge) on buttons.

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
    <button class="pill">Left</button>
    <button>Center</button>
    <button class="pill">Right</button>
  </div>
  <div class="button-group">
    <button>Select</button>
    <button class="pill">Next</button>
  </div>
</div>

```html
<div class="button-group">
  <button class="pill">Left</button>
  <button>Center</button>
  <button class="pill">Right</button>
</div>
<div class="button-group">
  <button>Select</button>
  <button class="pill">Next</button>
</div>
```
