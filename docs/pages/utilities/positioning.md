---
title: 'Utilities: Positioning - Sloth.css'
description: Utility classes of Sloth.css for positions and alignment.
---

## Positioning

Utility classes for controlling position and alignment of elements.

### Position

The following 4 values of positions are supported.

<div class="demo flex flex-wrap gap-4 relative">
  <div class="bg-muted w-48 h-32 rounded relative">
    <div class="relative top-4 left-4 bg-accent-variant w-32 h-16 rounded p-1">
      <code>.relative</code>
    </div>
  </div>
  <div class="bg-muted w-48 h-32 rounded relative">
    <div class="absolute bottom-4 right-4 bg-accent-variant w-32 h-16 rounded p-1">
      <code>.absolute</code>
    </div>
  </div>
  <div class="bg-muted w-48 h-32 rounded overflow-y-scroll">
    <div class="absolute bg-accent-variant w-32 h-16 rounded p-1 m-4">
      <code>.fixed</code>
    </div>
    <div class="w-full h-64"></div>
  </div>
  <div class="bg-muted w-48 h-32 rounded overflow-y-scroll">
    <div>
      <div class="sticky top-4 left-4 bg-accent-variant w-32 h-8 p-1 rounded"><code>.sticky</code></div>
      <div class="w-full h-32"></div>
    </div>
    <div>
      <div class="sticky top-4 left-4 bg-accent w-32 h-8 p-1 rounded"><code>.sticky</code></div>
      <div class="w-full h-32"></div>
    </div>
    <div>
      <div class="sticky top-4 left-4 bg-accent-variant w-32 h-8 p-1 rounded"><code>.sticky</code></div>
      <div class="w-full h-32"></div>
    </div>
  </div>
</div>

```html
<div class="relative ..."></div>
<div class="absolute ..."></div>
<div class="fixed ..."></div>
<div class="sticky top-4 ..."></div>
```

```css
.relative { position: relative; }
.absolute { position: absolute; }
.fixed    { position: fixed;    }
.sticky   { position: sticky;   }
```

> Note that `.sticky` always needs a value for the [top property](https://developer.mozilla.org/en-US/docs/Web/CSS/top), hence `top-0` or `top-4` need to be set too.

### Alignment

Flex and grid items can be aligned on the [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) / block axis using `items-*` classes.

<div class="demo flex flex-wrap gap-4">
  <div class="flex-col gap-4 bg-muted p-4 rounded">
    <div class="flex gap-1 items-start justify-center">
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
      <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
      <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
    </div>
    <div class="flex-center"><code>.items-start</code></div>
  </div>
  <div class="flex-col gap-4 bg-muted p-4 rounded">
    <div class="flex gap-1 items-center justify-center">
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
      <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
      <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
    </div>
    <div class="flex-center"><code>.items-center</code></div>
  </div>
  <div class="flex-col gap-4 bg-muted p-4 rounded">
    <div class="flex gap-1 items-end justify-center">
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
      <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
      <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
    </div>
    <div class="flex-center"><code>.items-end</code></div>
  </div>
  <div class="flex-col gap-4 bg-muted p-4 rounded">
    <div class="flex gap-1 items-stretch justify-center">
      <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">01</div>
      <div class="text-light bg-accent-variant flex-center rounded h-16 w-8 font-mono font-bold">02</div>
      <div class="text-light bg-accent-variant flex-center rounded w-8 font-mono font-bold">03</div>
    </div>
    <div class="flex-center"><code>.items-stretch</code></div>
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

<div class="demo flex flex-wrap gap-4">
  <div class="flex-col gap-4 w-64 bg-muted p-4 rounded">
    <div class="flex gap-1 justify-center">
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
    </div>
    <div class="flex-center"><code>.justify-center</code></div>
  </div>
  <div class="flex-col gap-4 w-64 bg-muted p-4 rounded">
    <div class="flex gap-1 justify-between">
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
    </div>
    <div class="flex-center"><code>.justify-between</code></div>
  </div>
  <div class="flex-col gap-4 w-64 bg-muted p-4 rounded">
    <div class="flex gap-1 justify-around">
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">01</div>
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">02</div>
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">03</div>
    </div>
    <div class="flex-center"><code>.justify-around</code></div>
  </div>
</div>

```html
<div class="flex items-start ...">...</div>
<div class="flex items-center ...">...</div>
<div class="flex items-end ...">...</div>
<div class="flex items-stretch ...">...</div>
```

For centering content horizontally and vertically, the special utility class `flex-center` is provided.

<div class="demo">
  <div class="flex-col gap-4 w-32 bg-muted p-4 rounded">
    <div class="flex-center">
      <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold"></div>
    </div>
    <div class="flex-center"><code>.flex-center</code></div>
  </div>
</div>

```html
<div class="flex-center ...">
  <div class="..."></div>
</div>
```

```css
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

> Note that `.flex-center` is a display utility and already includes the `display: flex;` rule. So there's no need to use three classes like in Tailwind <del>`flex justify-center items-center`</del>. Just use <ins>`flex-center`</ins>.