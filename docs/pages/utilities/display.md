---
title: 'Utilities: Display - Sloth.css'
description: Controlling the display type of elements
tags: flex flex-col grid column grid-cols-1 grid-cols-2 grid-cols-3 flex-wrap inline block inline-block visibility invisible hidden grow shrink
---

## Display

Utility classes for controlling the display type of elements.

### Flexbox

Flexbox is a powerful tool to create responsive layouts by positioning and aligning elements. Use the `flex` class to align items in row direction.

<div class="demo">
  <div class="flex gap-4 items-center bg-muted w-32 p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
  </div>
</div>

```html
<div class="flex ...">
  <div>#1</div>
  <div>#2</div>
  <div>#3</div>
</div>
```

```css
.flex { display: flex; }
```

Elements can also be position underneath each other (column direction) instead of next to each other with the `flex-col` class.

<div class="demo">
  <div class="flex-col gap-4 bg-muted w-32 p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
  </div>
</div>

```html
<div class="flex-col ...">
  <div>#1</div>
  <div>#2</div>
  <div>#3</div>
</div>
```

```css
.flex-col {
  display: flex;
  flex-direction: column;
}
```

<p class="callout accent">
  Note that <code>flex-col</code> is a display utility and already includes the <code>display: flex;</code> rule. So there's no need to use two classes like in Tailwind <del><code>flex flex-column</code></del>. Just use <ins><code>flex-col</code></ins>.
</p>

Use the `flex-wrap` class, if you want your flex items to break onto a new line when the container limit is reached.

<div class="demo">
  <div class="flex flex-wrap max-w-screen-xs gap-4 items-center bg-muted p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">#3</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">#4</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">#5</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">#6</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-16 font-mono font-bold">#7</div>
  </div>
</div>

```html
<div class="flex flex-wrap ...">
  <div>#1</div>
  <div>#2</div>
  ...
</div>
```

```css
.flex-wrap { flex-wrap: wrap; }
```

If you need single items to grow or shrink, use the `grow` and `shrink` classes. If you want to prevent them from growing or shrinking, use `grow-0` or `shrink-0` respectively.

```css
.grow     { flex-grow: 1;   }
.shrink   { flex-shrink: 1; }
.grow-0   { flex-grow: 0;   }
.shrink-0 { flex-shrink: 0; }
```

### Grid

Grid based layouts can be used if a more table-based layout is needed. Use the `grid` class in combination with the `grid-cols-{n}` classes to define a basic grid.

<div class="demo">
  <div class="grid grid-cols-3 gap-4 items-center bg-muted p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 font-mono font-bold">#3</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 font-mono font-bold">#4</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 font-mono font-bold">#5</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 font-mono font-bold">#6</div>
  </div>
</div>

```html
<div class="grid grid-cols-3 ...">
  <div>#1</div>
  <div>#2</div>
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

<div class="demo grid grid-cols-3 gap-8">
  <p>Lorem ipsum dolor sit amet, <span class="block bg-accent-variant rounded p-2">consectetur <code>.block</code></span> ad adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a.</p>
  <p>Lorem ipsum dolor sit amet, <span class="inline-block bg-accent-variant rounded p-2">consectetur <code>.inline-block</code></span> ad adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a.</p>
  <p>Lorem ipsum dolor sit amet, <span class="inline bg-accent-variant rounded p-2">consectetur <code>.inline</code></span> ad adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a.</p>
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
  <div class="flex gap-4 items-center bg-muted w-32 p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold invisible">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
  </div>
  <div class="flex gap-4 items-center bg-muted w-32 p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="hidden">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
  </div>
</div>

```html
<div>
  <div>#1</div>
  <div class="invisible">#2</div>
  <div>#3</div>
</div>
<div>
  <div>#1</div>
  <div class="hidden">#2</div>
  <div>#3</div>
</div>
```

```css
.invisible { visibility: hidden; }
.hidden    { display: none;      }
```
