---
title: 'Utilities: Effects - Sloth.css'
description: Controlling elevation and transformation of elements
tags: shadow shadow-float shadow-inset rotate rotate-90
---

## Effects

Utility classes for controlling elevation and transformation of elements.

### Elevation

To make an element appear over or inside a surface, the `shadow-*` classes can be used.

<div class="demo flex items-start gap-4">
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="shadow-float m-8 bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold"></div>
    </div>
    <code>.shadow-float</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="shadow-inset m-8 bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold"></div>
    </div>
    <code>.shadow-inset</code>
  </div>
</div>

```html
<div class="shadow-float ..."></div>
<div class="shadow-inset ..."></div>
```

```css
.shadow-inset { box-shadow: var(--color-shadow) var(--shadow-inset); }
.shadow-float { box-shadow: black var(--shadow-float);               }
```

### Transformation

To rotate an element, the `rotate-*` classes can be used.

<div class="demo flex items-start gap-4">
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="-rotate-90 text-light m-8 bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">A</div>
    </div>
    <code>.-rotate-90</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="text-light m-8 bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">A</div>
    </div>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="rotate-90 text-light m-8 bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">A</div>
    </div>
    <code>.rotate-90</code>
  </div>
</div>

```html
<div class="-rotate-90 ..."></div>
<div class="..."></div>
<div class="rotate-90 ..."></div>
```

```css
.rotate-90  { transform: rotate(90deg);  }
.-rotate-90 { transform: rotate(-90deg); }
```
