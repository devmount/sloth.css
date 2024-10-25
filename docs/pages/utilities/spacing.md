---
title: 'Utilities: Spacing - Sloth.css'
description: Controlling margins, paddings and the space in between elements
tags: gap placement inset left right bottom top
---

## Spacing

Utility classes for controlling margins, paddings and the space in between elements.

### Gap

The space between flex or grid items can be set with the `gap-*` classes.

<div class="demo flex-col gap-4">
  <div class="flex gap-1 items-center bg-muted w-64 p-4 rounded relative">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    <code>.gap-1</code>
  </div>
  <div class="flex gap-2 items-center bg-muted w-64 p-4 rounded relative">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    <code>.gap-2</code>
  </div>
  <div class="flex gap-4 items-center bg-muted w-64 p-4 rounded relative">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    <code>.gap-4</code>
  </div>
  <div class="flex gap-8 items-center bg-muted w-64 p-4 rounded relative">
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#1</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#2</div>
    <div class="text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    <code>.gap-8</code>
  </div>
</div>

```html
<div class="flex gap-1 ...">...</div>
<div class="flex gap-2 ...">...</div>
<div class="flex gap-4 ...">...</div>
<div class="flex gap-8 ...">...</div>
```

```css
.gap-1 { gap: .25rem; } /*  4px */
.gap-2 { gap: .5rem;  } /*  8px */ 
.gap-4 { gap: 1rem;   } /* 16px */
.gap-8 { gap: 2rem;   } /* 32px */
```

### Margin

The outer spacing (margin) for elements can be set with the `m-*` classes.

<div class="demo flex items-start gap-4">
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="m-0 text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    </div>
    <code>.m-0</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="m-px text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    </div>
    <code>.m-px</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="m-1 text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    </div>
    <code>.m-1</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="m-2 text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    </div>
    <code>.m-2</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="m-4 text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    </div>
    <code>.m-4</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="bg-accent rounded">
      <div class="m-8 text-light bg-accent-variant flex-center rounded h-8 w-8 font-mono font-bold">#3</div>
    </div>
    <code>.m-8</code>
  </div>
</div>

```html
<div class="m-0 ..."></div>
<div class="m-px ..."></div>
<div class="m-1 ..."></div>
<div class="m-2 ..."></div>
<div class="m-4 ..."></div>
<div class="m-8 ..."></div>
```

```css
.m-0  { margin: 0;      }
.m-px { margin: 1px;    }
.m-1  { margin: .25rem; } /* 4px */
.m-2  { margin: .5rem;  } /* 8px */ 
.m-4  { margin: 1rem;   } /* 16px */
.m-8  { margin: 2rem;   } /* 32px */
```

### Padding

The inner spacing (padding) for elements can be set with the `p-*` classes.

<div class="demo flex items-start gap-4">
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="p-0 text-light bg-accent-variant flex-center rounded font-mono font-bold">#3</div>
    <code>.p-0</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="p-px text-light bg-accent-variant flex-center rounded font-mono font-bold">#3</div>
    <code>.p-px</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="p-1 text-light bg-accent-variant flex-center rounded font-mono font-bold">#3</div>
    <code>.p-1</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="p-2 text-light bg-accent-variant flex-center rounded font-mono font-bold">#3</div>
    <code>.p-2</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="p-4 text-light bg-accent-variant flex-center rounded font-mono font-bold">#3</div>
    <code>.p-4</code>
  </div>
  <div class="flex-col gap-2 items-center justify-center bg-muted p-4 rounded relative">
    <div class="p-8 text-light bg-accent-variant flex-center rounded font-mono font-bold">#3</div>
    <code>.p-8</code>
  </div>
</div>

```html
<div class="p-0 ..."></div>
<div class="p-px ..."></div>
<div class="p-1 ..."></div>
<div class="p-2 ..."></div>
<div class="p-4 ..."></div>
<div class="p-8 ..."></div>
```

```css
.p-0  { padding: 0;      }
.p-px { padding: 1px;    }
.p-1  { padding: .25rem; } /* 4px */
.p-2  { padding: .5rem;  } /* 8px */ 
.p-4  { padding: 1rem;   } /* 16px */
.p-8  { padding: 2rem;   } /* 32px */
```

### Placement

To set placement of positioned elements, the 4 directions can be used: `top-*`, `left-*`, `bottom-*` and `right-*`.

<div class="demo flex-col gap-4">
  <div class="flex flex-wrap gap-4">
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute top-0 left-0 bg-accent-variant rounded p-2 flex-col items-start gap-1">
        <code>.top-0</code>
        <code>.left-0</code>
      </div>
    </div>
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute left-0 top-0 right-0 bg-accent-variant rounded p-2 flex-center gap-1">
        <code>.left-0</code>
        <code>.top-0</code>
        <code>.right-0</code>
      </div>
    </div>
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute top-0 right-0 bg-accent-variant rounded p-2  flex-col items-end gap-1">
        <code>.top-0</code>
        <code>.right-0</code>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap gap-4">
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute top-0 left-0 bottom-0 bg-accent-variant rounded p-2 flex-col justify-center items-start gap-1">
        <code>.top-0</code>
        <code>.left-0</code>
        <code>.bottom-0</code>
      </div>
    </div>
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute inset-0 bg-accent-variant rounded p-2 flex-center">
        <code>.inset-0</code>
      </div>
    </div>
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute top-0 right-0 bottom-0 bg-accent-variant rounded p-2 flex-col justify-center items-end gap-1">
        <code>.top-0</code>
        <code>.right-0</code>
        <code>.bottom-0</code>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap gap-4">
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute left-0 bottom-0 bg-accent-variant rounded p-2 flex-col items-start gap-1">
        <code>.left-0</code>
        <code>.bottom-0</code>
      </div>
    </div>
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute left-0 bottom-0 right-0 bg-accent-variant rounded p-2 flex-center gap-1">
        <code>.left-0</code>
        <code>.bottom-0</code>
        <code>.right-0</code>
      </div>
    </div>
    <div class="relative bg-muted w-64 h-32 rounded">
      <div class="absolute right-0 bottom-0 bg-accent-variant rounded p-2 flex-col items-end gap-1">
        <code>.right-0</code>
        <code>.bottom-0</code>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="top-0 left-0 ..."></div>
  <div class="left-0 top-0 right-0 ..."></div>
  <div class="top-0 right-0 ..."></div>
</div>
<div>
  <div class="top-0 left-0 bottom-0 ..."></div>
  <div class="inset-0 ..."></div>
  <div class="top-0 right-0 bottom-0 ..."></div>
</div>
<div>
  <div class="left-0 bottom-0 ..."></div>
  <div class="left-0 bottom-0 right-0 ..."></div>
  <div class="right-0 bottom-0 ..."></div>
</div>
```

```css
.top-0    { top: 0;       }
.top-4    { top: 1rem;    } /* 16px */
.left-0   { left: 0;      }
.left-4   { left: 1rem;   } /* 16px */
.bottom-0 { bottom: 0;    }
.bottom-4 { bottom: 1rem; } /* 16px */
.right-0  { right: 0;     }
.right-4  { right: 1rem;  } /* 16px */
.inset-0  { inset: 0;     }
.inset-4  { inset: 1rem;  } /* 16px */
```
