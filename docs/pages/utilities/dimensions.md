---
title: 'Utilities: Dimensions - Sloth.css'
description: Utility classes of Sloth.css for size related styles.
---

## Color

Utility classes for controlling the size of elements.

### Width

Fixed or relative widths can be set for an element with the following classes.

<div class="demo flex-col gap-4">
  <div class="flex gap-4 items-center">
    <div class="bg-accent rounded h-8 w-8"></div>
    <code>.w-8</code>
  </div>
  <div class="flex gap-4 items-center">
    <div class="bg-accent rounded h-8 w-12"></div>
    <code>.w-12</code>
  </div>
  <div class="flex gap-4 items-center">
    <div class="bg-accent rounded h-8 w-16"></div>
    <code>.w-16</code>
  </div>
  <div class="flex gap-4 items-center">
    <div class="bg-accent rounded h-8 w-32"></div>
    <code>.w-32</code>
  </div>
  <div class="flex gap-4 items-center">
    <div class="bg-accent rounded h-8 w-64"></div>
    <code>.w-64</code>
  </div>
  <div class="flex gap-4 items-center text-nowrap">
    <div class="bg-accent rounded h-8 w-1/2"></div>
    <code>.w-1/2</code>
  </div>
  <div class="flex gap-4 items-center text-nowrap">
    <div class="bg-accent rounded h-8 w-full"></div>
    <code>.w-full</code>
  </div>
</div>

```html
<div class="w-8 ..."></div>
<div class="w-12 ..."></div>
<div class="w-16 ..."></div>
<div class="w-32 ..."></div>
<div class="w-64 ..."></div>
<div class="w-1/2 ..."></div>
<div class="w-full ..."></div>
```

```css
.w-8    { width: 2rem;  }
.w-12   { width: 3rem;  }
.w-16   { width: 4rem;  }
.w-32   { width: 8rem;  }
.w-64   { width: 16rem; }
.w-1\/2 { width: 50%;   }
.w-full { width: 100%;  }
```

Maximum widths can be set depending on screen breaking points.

<div class="demo flex-col gap-4">
  <div class="bg-accent rounded h-8 max-w-screen-xs flex items-center"><code class="m-1">.max-w-screen-xs</code></div>
  <div class="bg-accent rounded h-8 max-w-screen-sm flex items-center"><code class="m-1">.max-w-screen-sm</code></div>
  <div class="bg-accent rounded h-8 max-w-screen-md flex items-center"><code class="m-1">.max-w-screen-md</code></div>
  <div class="bg-accent rounded h-8 max-w-screen-lg flex items-center"><code class="m-1">.max-w-screen-lg</code></div>
  <div class="bg-accent rounded h-8 max-w-screen-xl flex items-center"><code class="m-1">.max-w-screen-xl</code></div>
  <div class="bg-accent rounded h-8 max-w-screen-2xl flex items-center"><code class="m-1">.max-w-screen-2xl</code></div>
</div>

```html
<div class="max-w-screen-xs ..."></div>
<div class="max-w-screen-sm ..."></div>
<div class="max-w-screen-md ..."></div>
<div class="max-w-screen-lg ..."></div>
<div class="max-w-screen-xl ..."></div>
<div class="max-w-screen-2xl ..."></div>
```

Those can be overwritten by the corresponding custom property:

```css
:root {
  --screen-xs:  30rem; /*  480px */
  --screen-sm:  40rem; /*  640px */
  --screen-md:  48rem; /*  768px */
  --screen-lg:  64rem; /* 1024px */
  --screen-xl:  80rem; /* 1280px */
  --screen-2xl: 96rem; /* 1536px */
}
```

### Height

Fixed or relative heights can be set for an element with the following classes.

<div class="demo flex gap-4 h-64">
  <div class="bg-accent rounded w-8 h-8"></div>
  <div class="bg-accent rounded w-8 h-12"></div>
  <div class="bg-accent rounded w-8 h-16"></div>
  <div class="bg-accent rounded w-8 h-32"></div>
  <div class="bg-accent rounded w-8 h-64"></div>
  <div class="bg-accent rounded w-8 h-1/2"></div>
  <div class="bg-accent rounded w-8 h-full"></div>
</div>

```html
<div class="h-8 ..."></div>
<div class="h-12 ..."></div>
<div class="h-16 ..."></div>
<div class="h-32 ..."></div>
<div class="h-64 ..."></div>
<div class="h-1/2 ..."></div>
<div class="h-full ..."></div>
```

```css
.h-8    { height: 2rem;  }
.h-12   { height: 3rem;  }
.h-16   { height: 4rem;  }
.h-32   { height: 8rem;  }
.h-64   { height: 16rem; }
.h-1\/2 { height: 50%;   }
.h-full { height: 100%;  }
```
