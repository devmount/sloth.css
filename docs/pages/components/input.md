---
title: 'Components: Input - Sloth.css'
description: Input and select elements provide user text input and choices
tags: disabled size pill ghost icon busy loading group
---

## Input

Input and select elements enable users to provide text input or make choices. Inputs already have a base styling via the drop-in core of Sloth.css. However, this CSS component extends those by several variations, sizes, groups and more.

### Sizes

Use the `sm` or `lg` classes to reduce or increase the font size and padding of an input or select element.

<div class="demo flex items-center gap-4">
  <div class="w-1/2 flex-col flex-wrap items-center gap-4">
    <input type="text" class="sm" placeholder="Small input size" />
    <input type="text" placeholder="Default input size" />
    <input type="text" class="lg" placeholder="Large input size" />
  </div>
  <div class="w-1/2 flex-col flex-wrap items-center gap-4">
    <select class="sm">
      <option>Small option size</option>
    </select>
    <select>
      <option>Default option size</option>
    </select>
    <select class="lg">
      <option>Large option size</option>
    </select>
  </div>
</div>

```html
<input type="text" class="sm" placeholder="Small input size" />
<input type="text" placeholder="Default input size" />
<input type="text" class="lg" placeholder="Large input size" />

<select class="sm">...</select>
<select>...</select>
<select class="lg">...</select>
```

Those classes work on checkboxes and radio buttons too.

<div class="demo flex items-center gap-4">
  <div class="w-1/2 flex-col flex-wrap gap-4">
    <label class="flex gap-2 items-center">
      <input type="checkbox" class="sm" checked /> Small choice <code>.sm</code>
    </label>
    <label class="flex gap-2 items-center">
      <input type="checkbox" /> Default choice
    </label>
    <label class="flex gap-2 items-center">
      <input type="checkbox" class="lg" /> Large choice <code>.lg</code>
    </label>
  </div>
  <div class="w-1/2 flex-col flex-wrap gap-4">
    <label class="flex gap-2 items-center">
      <input name="radio" type="radio" class="sm" checked /> Small option <code>.sm</code>
    </label>
    <label class="flex gap-2 items-center">
      <input name="radio" type="radio" /> Default option
    </label>
    <label class="flex gap-2 items-center">
      <input name="radio" type="radio" class="lg" /> Large option <code>.lg</code>
    </label>
  </div>
</div>

```html
<label class="flex gap-2 items-center">
  <input type="checkbox" class="sm" checked /> Small choice
</label>
<label class="flex gap-2 items-center">
  <input type="checkbox" /> Default choice
</label>
<label class="flex gap-2 items-center">
  <input type="checkbox" class="lg" /> Large choice
</label>

<label class="flex gap-2 items-center">
  <input name="radio" type="radio" class="sm" checked /> Small option
</label>
<label class="flex gap-2 items-center">
  <input name="radio" type="radio" /> Default option
</label>
<label class="flex gap-2 items-center">
  <input name="radio" type="radio" class="lg" /> Large option
</label>
```

### Help text

To provide a longer description on inputs as guide for users, you can wrap the input within a container having the `input` class and using the `help` class on an element *after* the input.

<div class="demo">
  <label for="user">Username</label>
  <div class="input">
    <input type="text" id="user" />
    <span class="help">Can be either your handle or your email address</span>
  </div>
</div>

```html
<label for="user">Username</label>
<div class="input">
  <input type="text" id="user" />
  <span class="help">Can be either your handle or your email address</span>
</div>
```

### Prefix and suffix icons

A visual indication of the input fields purpose can be given by using an SVG with the `icon prefix` or `icon suffix` classes before or after the input respectively. You can use both affixes at the same time if needed.

<div class="callout accent">
  Sloth.css doesn't ship any icons, since there are lots of icon libraries out there. However SVG icons are directly supported using the <code>icon</code> class. The beautiful <a href="https://tabler.io/icons" target="_blank">Tabler Icons</a> work well with Sloth.css for example.
</div>

<div class="demo flex flex-wrap items-center gap-4">
  <div class="input">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon prefix"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
    <input type="text" placeholder="Search" />
  </div>
  <div class="input">
    <input type="number" placeholder="Phone number" />
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon suffix"><path d="M4 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M18 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M11 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M4 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M18 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M11 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M11 17h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /></svg>
  </div>
  <div class="input">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon prefix"><path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z" /><path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /></svg>
    <input type="number" placeholder="Donation" />
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon suffix"><path d="M17.2 7a6 7 0 1 0 0 10" /><path d="M13 10h-8m0 4h8" /></svg>
  </div>
</div>

```html
<div class="input">
  <svg ... class="icon prefix">...</svg>
  <input type="text" placeholder="Search" />
</div>

<div class="input">
  <input type="number" placeholder="Phone number" />
  <svg ... class="icon suffix">...</svg>
</div>

<div class="input">
  <svg ... class="icon prefix">...</svg>
  <input type="number" placeholder="Donation" />
  <svg ... class="icon suffix">...</svg>
</div>
```

### Pill button

Use the `pill` utility class to give buttons a pill form.

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
