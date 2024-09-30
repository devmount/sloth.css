---
title: 'Utilities: Display - Sloth.css'
description: Utility classes of Sloth.css for display types.
---

## Display

Utility classes for controlling the display type of elements.

### Flexbox

Flexbox is a powerful tool to create responsive layouts by positioning and aligning elements. Use the `flex` class to align items in row direction.

<div class="demo">
  <div class="flex gap-4 items-center">
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
  </div>
</div>

```html
<div class="flex ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

```css
.flex { display: flex; }
```

Elements can also be position underneath each other (column direction) instead of next to each other with the `flex-col` class.

<div class="demo flex-col gap-4">
  <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
  <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
  <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
</div>

```html
<div class="flex ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

```css
.flex-col {
  display: flex;
  flex-direction: column;
}
```

User the `flex-wrap` class, if you want your flex items to break onto a new line when the container limit is reached.

<div class="demo">
  <div class="flex flex-wrap max-w-screen-xs gap-4 items-center">
    <div class="bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">01</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">02</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">03</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">04</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">05</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">06</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">07</div>
  </div>
</div>

```html
<div class="flex flex-wrap ...">
  <div>01</div>
  <div>02</div>
  ...
</div>
```

```css
.flex-wrap { flex-wrap: wrap; }
```

### Grid

Grid based layouts can be used if a more table-based layout is needed. Use the `grid` class in combination with the `grid-cols-{n}` classes to define a basic grid.

<div class="demo">
  <div class="grid grid-cols-3 gap-4 items-center">
    <div class="bg-accent-variant flex-center rounded h-8 font-mono font-bold">01</div>
    <div class="bg-accent-variant flex-center rounded h-8 font-mono font-bold">02</div>
    <div class="bg-accent-variant flex-center rounded h-8 font-mono font-bold">03</div>
    <div class="bg-accent-variant flex-center rounded h-8 font-mono font-bold">04</div>
    <div class="bg-accent-variant flex-center rounded h-8 font-mono font-bold">05</div>
    <div class="bg-accent-variant flex-center rounded h-8 font-mono font-bold">06</div>
  </div>
</div>

```html
<div class="grid grid-cols-3 ...">
  <div>01</div>
  <div>02</div>
  ...
</div>
```

```css
.grid        { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
```

### Basic types

Elements can be displayed as `block` (dedicated line with block properties), `inline-block` (flowing with the text but still mainainting block properties) or `inline` (maintaining text flow).

<div class="demo flex gap-4">
  <p>Lorem ipsum dolor sit amet, <span class="block bg-accent-variant p-2">consectetur</span> adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
  <p>Lorem ipsum dolor sit amet, <span class="inline-block bg-accent-variant p-2">consectetur</span> adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
  <p>Lorem ipsum dolor sit amet, <span class="inline bg-accent-variant p-2">consectetur</span> adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi.</p>
</div>

```html
<p>... sit amet, <span class="block ...">consectetur</span> adipiscing elit ...</p>
<p>... sit amet, <span class="inline-block ...">consectetur</span> adipiscing eli t..</p>
<p>... sit amet, <span class="inline ...">consectetur</span> adipiscing elit ...</p>
```

```css
.block        { display: block;        }
.inline-block { display: inline-block; }
.inline       { display: inline;       }
```

### Visibility

To hide an elements appearance or remove them from the dom entirely the corresponding classes `invisible` and `hidden` can be used.

<div class="demo flex-col gap-4">
  <div class="flex gap-4 items-center">
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold invisible">02</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
  </div>
  <div class="flex gap-4 items-center">
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="hidden">02</div>
    <div class="bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
  </div>
</div>

```html
<div>
  <div>01</div>
  <div class="invisible">02</div>
  <div>03</div>
</div>
<div>
  <div>01</div>
  <div class="hidden">02</div>
  <div>03</div>
</div>
```

```css
.invisible { visibility: hidden; }
.hidden    { display: none;      }
```
