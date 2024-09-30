---
title: 'Utilities: Positioning - Sloth.css'
description: Utility classes of Sloth.css for positions and alignment.
---

## Positioning

Utility classes for controlling position and alignment of elements.

### Position

The following 4 values of positions are supported.

<div class="demo flex gap-4">
  <div class="bg-muted w-full h-32 rounded relative">
    <div class="relative top-4 left-4 bg-accent-variant w-32 h-16 rounded p-1">
      <code>.relative</code>
    </div>
  </div>
  <div class="bg-muted w-full h-32 rounded relative">
    <div class="absolute bottom-4 right-4 bg-accent-variant w-32 h-16 rounded p-1">
      <code>.absolute</code>
    </div>
  </div>
  <div class="bg-muted w-full h-32 rounded relative overflow-y-scroll">
    <div class="fixed bg-accent-variant w-32 h-16 rounded p-1 m-4" style="transform: none;">
      <code>.fixed</code>
    </div>
    <div class="w-full h-64"></div>
  </div>
  <div class="bg-muted w-full h-32 rounded relative overflow-y-scroll">
    <div class="sticky top-4 left-4 bg-accent-variant w-32 h-8 p-1 rounded"><code>.sticky</code></div>
    <div class="w-full h-32"></div>
    <div class="sticky top-4 left-4 bg-accent-variant w-32 h-8 p-1 rounded"><code>.sticky</code></div>
    <div class="w-full h-32"></div>
    <div class="sticky top-4 left-4 bg-accent-variant w-32 h-8 p-1 rounded"><code>.sticky</code></div>
    <div class="w-full h-32"></div>
  </div>
</div>

```html
<div class="relative ..."></div>
<div class="absolute ..."></div>
<div class="fixed ..."></div>
<div class="sticky ..."></div>
```

```css
.relative { position: relative; }
.absolute { position: absolute; }
.fixed    { position: fixed;    }
.sticky   { position: sticky;   }
```

### Alignment

Flex and grid items can be aligned on the [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) / block axis using `items-*` classes.

<div class="demo flex gap-4">
  <div class="flex gap-1 items-start bg-muted p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
    <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
  </div>
  <div class="flex gap-1 items-center bg-muted p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
    <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
  </div>
  <div class="flex gap-1 items-end bg-muted p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
    <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
  </div>
  <div class="flex gap-1 items-stretch bg-muted p-4 rounded">
    <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">01</div>
    <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
    <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
  </div>
</div>

```html
<div class="flex items-start ...">...</div>
<div class="flex items-center ...">...</div>
<div class="flex items-end ...">...</div>
<div class="flex items-stretch ...">...</div>
```

```css
.items-center  { align-items: center;  }
.items-start   { align-items: start;   }
.items-end     { align-items: end;     }
.items-stretch { align-items: stretch; }
```

Flex and grid items can be aligned on the [main axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) / inline axis using `justify-*` classes.

<div class="demo flex gap-4">
  <div class="flex gap-1 justify-center bg-muted p-4 w-full rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
  </div>
  <div class="flex gap-1 justify-between bg-muted p-4 w-full rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
  </div>
  <div class="flex gap-1 justify-around bg-muted p-4 w-full rounded">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
  </div>
</div>

```html
<div class="flex items-start ...">...</div>
<div class="flex items-center ...">...</div>
<div class="flex items-end ...">...</div>
<div class="flex items-stretch ...">...</div>
```

```css
.items-center  { align-items: center;  }
.items-start   { align-items: start;   }
.items-end     { align-items: end;     }
.items-stretch { align-items: stretch; }
```
