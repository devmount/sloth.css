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
  <div class="w-1/2 flex-col flex-wrap items-start gap-4">
    <input type="text" class="sm" placeholder="Small input size" />
    <input type="text" placeholder="Default input size" />
    <input type="text" class="lg" placeholder="Large input size" />
  </div>
  <div class="w-1/2 flex-col flex-wrap items-start gap-4">
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
    <label class="flex-row gap-2 items-center">
      <input type="checkbox" class="sm" checked /> Small choice <code>.sm</code>
    </label>
    <label class="flex-row gap-2 items-center">
      <input type="checkbox" /> Default choice
    </label>
    <label class="flex-row gap-2 items-center">
      <input type="checkbox" class="lg" /> Large choice <code>.lg</code>
    </label>
  </div>
  <div class="w-1/2 flex-col flex-wrap gap-4">
    <label class="flex-row gap-2 items-center">
      <input name="radio" type="radio" class="sm" checked /> Small option <code>.sm</code>
    </label>
    <label class="flex-row gap-2 items-center">
      <input name="radio" type="radio" /> Default option
    </label>
    <label class="flex-row gap-2 items-center">
      <input name="radio" type="radio" class="lg" /> Large option <code>.lg</code>
    </label>
  </div>
</div>

```html
<label class="flex-row gap-2 items-center">
  <input type="checkbox" class="sm" checked /> Small choice
</label>
<label class="flex-row gap-2 items-center">
  <input type="checkbox" /> Default choice
</label>
<label class="flex-row gap-2 items-center">
  <input type="checkbox" class="lg" /> Large choice
</label>

<label class="flex-row gap-2 items-center">
  <input name="radio" type="radio" class="sm" checked /> Small option
</label>
<label class="flex-row gap-2 items-center">
  <input name="radio" type="radio" /> Default option
</label>
<label class="flex-row gap-2 items-center">
  <input name="radio" type="radio" class="lg" /> Large option
</label>
```

### Help text

To provide a longer description on inputs as guide for users, you can wrap the input within a container having the `input` class and using the `help` class on an element *after* the input element.

<div class="demo">
  <label for="user">Username</label><br>
  <div class="input">
    <input type="text" id="user" />
    <span class="help">Might be your email address</span>
  </div>
</div>

```html
<label for="user">Username</label><br>
<div class="input">
  <input type="text" id="user" />
  <span class="help">Might be your email address</span>
</div>
```

### Prefix and suffix icons

A visual indication of the input fields purpose can be given by using an SVG with the `icon prefix` or `icon suffix` classes before or after the input respectively. Those have to be wrapped in a container with the `input` class. You can use both affixes at the same time if needed.

<div class="callout accent">
  Sloth.css doesn't ship any icons, since there are lots of icon libraries out there. However SVG icons are directly supported using the <code>icon</code> class. The beautiful <a href="https://tabler.io/icons" target="_blank">Tabler Icons</a> work well with Sloth.css for example.
</div>

<div class="demo flex-col gap-4">
  <div class="input w-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon prefix"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
    <input type="text" placeholder="Search" />
  </div>
  <div class="input w-1/2">
    <input type="number" placeholder="Phone number" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon suffix"><path d="M4 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M18 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M11 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M4 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M18 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M11 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /><path d="M11 17h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" /></svg>
  </div>
  <div class="input w-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon prefix"><path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z" /><path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /></svg>
    <select>
      <option>1.000</option>
      <option>25.000</option>
      <option>50.000</option>
    </select>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon suffix"><path d="M17.2 7a6 7 0 1 0 0 10" /><path d="M13 10h-8m0 4h8" /></svg>
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

### Pill input

Use the `pill` class to give text inputs and selects a fully rounded pill form.

<div class="demo flex gap-4">
  <input type="text" class="pill" />
  <select class="pill">
    <option></option>
    <option>Only one choice</option>
  </select>
</div>

```html
<input type="text" class="pill" />
<select class="pill">...</select>
```

### Ghost input

In some cases, inputs need to be embedded into a styled context. Use the `ghost` class for an input field without background color or border.

<div class="demo flex gap-4">
  <input type="text" class="ghost" placeholder="Type here" />
  <select class="ghost">
    <option>Select me</option>
  </select>
</div>

```html
<input type="text" class="ghost" placeholder="Type here" />
<select class="ghost">
  <option>Select me</option>
</select>
```

### Busy input

Use the `input busy` classes to overlay the input with a <a href="/components/loader">loader</a>. Works with ghost inputs and pill inputs too. Busy inputs should be disabled.

<div class="demo flex flex-wrap items-center gap-8">
  <div class="input busy">
    <input type="text" value="My fancy username" disabled />
  </div>
  <div class="input busy">
    <input type="text" class="pill" value="My fancy username" disabled />
  </div>
</div>

```html
<div class="input busy">
  <input type="text" value="My fancy username" disabled />
</div>
<div class="input busy">
  <input type="text" class="pill" value="My fancy username" disabled />
</div>
```

### Input group

Use the `input-group` class on an element containing input elements or wrapper elements having the `input` class, to group inputs to a single logical unit.

<div class="demo flex-col gap-4">
  <div class="input-group sm">
    <input type="text" placeholder="DD" />
    <input type="text" placeholder="MM" />
    <input type="text" placeholder="YYYY" />
  </div>
  <div class="input-group">
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <select>
      <option>January</option>
      <option>February</option>
      <option>March</option>
    </select>
    <select>
      <option>2077</option>
      <option>2078</option>
      <option>2079</option>
    </select>
  </div>
</div>

```html
<div class="input-group">
  <input type="text" placeholder="DD" />
  <input type="text" placeholder="MM" />
  <input type="text" placeholder="YYYY" />
</div>

<div class="input-group">
  <select>...</select>
  <select>...</select>
  <select>...</select>
</div>
```

Pill inputs are also supported in groups, even on one side only.

<div class="demo flex flex-wrap gap-8">
  <div class="input-group">
    <select class="pill">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <select>
      <option>January</option>
      <option>February</option>
      <option>March</option>
    </select>
    <select class="pill">
      <option>2077</option>
      <option>2078</option>
      <option>2079</option>
    </select>
  </div>
  <div class="input-group">
    <select>
      <option>T-Shirt</option>
      <option>Jacket</option>
      <option>Pullover</option>
    </select>
    <select class="pill">
      <option>XS</option>
      <option>M</option>
      <option>XL</option>
    </select>
  </div>
</div>

```html
<div class="input-group">
  <select class="pill">...</select>
  <select>...</select>
  <select class="pill">...</select>
</div>

<div class="input-group">
  <select>...</select>
  <select class="pill">...</select>
</div>
```

### Affixes

Input groups can contain non-input elements, called affixes. Use the `affix` class inside a `input-group` container to create a group element for additional text labelling like units or other input related data.

<div class="demo flex flex-wrap gap-8">
  <div class="input-group">
    <span class="affix">https://</span>
    <input type="text" placeholder="your-website.com" />
  </div>
</div>

```html
<div class="input-group">
  <span class="affix">https://</span>
  <input type="text" placeholder="your-website.com" />
</div>
```

Like with inputs, you can use `sm` and `lg` on affixes to make them smaller or larger.

<div class="demo flex flex-wrap items-start gap-8">
  <div class="input-group">
    <select class="sm">
      <option selected>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <span class="affix sm">&mdash;</span>
    <select class="sm">
      <option>1</option>
      <option>2</option>
      <option selected>3</option>
    </select>
  </div>
  <div class="input-group">
    <select>
      <option selected>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <span class="affix">&mdash;</span>
    <select>
      <option>1</option>
      <option>2</option>
      <option selected>3</option>
    </select>
  </div>
  <div class="input-group">
    <select class="lg">
      <option selected>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <span class="affix lg">&mdash;</span>
    <select class="lg">
      <option>1</option>
      <option>2</option>
      <option selected>3</option>
    </select>
  </div>
</div>

```html
<div class="input-group">
  <select class="sm">...</select>
  <span class="affix sm">&mdash;</span>
  <select class="sm">...</select>
</div>

<div class="input-group">
  <select>...</select>
  <span class="affix">&mdash;</span>
  <select>...</select>
</div>

<div class="input-group">
  <select class="lg">...</select>
  <span class="affix lg">&mdash;</span>
  <select class="lg">...</select>
</div>
```

The `pill` class can be used on affixes too, to create visually show the start and end of the group even more.

<div class="demo flex flex-wrap gap-8">
  <div class="input-group">
    <span class="affix pill">github.com/</span>
    <input class="pill" type="text" placeholder="your-handle" />
  </div>
</div>

```html
<div class="input-group">
  <span class="affix pill">github.com/</span>
  <input class="pill" type="text" placeholder="your-handle" />
</div>
```

The `ghost` class works on affixes too if you just want to create spaces containing text.

<div class="demo flex flex-wrap gap-8">
  <div class="input-group">
    <span class="affix ghost">Filter</span>
    <input type="number" placeholder="Min" />
    <span class="affix ghost">to</span>
    <input type="number" placeholder="Max" />
  </div>
</div>

```html
<div class="input-group">
  <span class="affix ghost">Filter</span>
  <input type="number" placeholder="Min" />
  <span class="affix ghost">to</span>
  <input type="number" placeholder="Max" />
</div>
```
