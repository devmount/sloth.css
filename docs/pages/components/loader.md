---
title: 'Components: Loader - Sloth.css'
description: Loader component of Sloth.css.
---

## Loader

A loader indicates a busy state, giving visual feedback for users that a process currently takes some time. This reassures the user, that an action got triggered in the first place and is still working or progressing.

### Loader colors

Use the `loader` class to add a loading indicator. The loadinng indicator is in accent colors per default. Use the `neutral`, `positive` and `negative` classes to change the color accordingly.

<div class="demo flex flex-wrap gap-8">
  <div class="loader"></div>
  <div class="loader neutral"></div>
  <div class="loader positive"></div>
  <div class="loader negative"></div>
</div>

```html
<div class="loader"></div>
<div class="loader neutral"></div>
<div class="loader positive"></div>
<div class="loader negative"></div>
```

### Loader sizes

Use the `sm` or `lg` classes to reduce or increase the size of a loader.

<div class="demo flex flex-wrap items-center gap-8">
  <div class="loader sm"></div>
  <div class="loader"></div>
  <div class="loader lg"></div>
</div>

```html
<div class="loader sm"></div>
<div class="loader"></div>
<div class="loader lg"></div>
```

### Double loader

Use the `double` class to make the loading animation more emphasized. Double loaders support all colors and sizes too.

<div class="demo flex flex-wrap items-center gap-8">
  <div class="loader double negative sm"></div>
  <div class="loader double"></div>
  <div class="loader double neutral lg"></div>
</div>

```html
<div class="loader double negative sm"></div>
<div class="loader double"></div>
<div class="loader double neutral lg"></div>
```

### Button loader

Loaders are also supported on button elements. Use the `busy` class to replace the text of a button with a loader while keeping the button size.

<div class="demo flex flex-wrap items-center gap-8">
  <button class="busy">Send post</button>
  <button class="busy neutral">Return</button>
  <button class="busy positive">Save profile</button>
  <button class="busy negative">Delete account</button>
</div>

```html
<button class="busy">Send post</button>
<button class="busy neutral">Return</button>
<button class="busy positive">Save profile</button>
<button class="busy negative">Delete account</button>
```
