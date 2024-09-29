---
title: 'Utilities: Colors - Sloth.css'
description: Utility classes of Sloth.css for color related styles.
---

## Color

Utility classes for controlling colors of text and backgrounds.

### Text color

<div class="demo">
  <p>Default text</p>
  <p class="text-accent">Accent color</p>
  <p class="text-muted">Muted text</p>
  <p class="text-positive">Positive message</p>
  <p class="text-negative">Negative message</p>
</div>

```html
<p>Default text</p>
<p class="text-accent">Accent color</p>
<p class="text-muted">Muted text</p>
<p class="text-positive">Positive message</p>
<p class="text-negative">Negative message</p>
```

Colors can be overwritten by the corresponding custom property:

```css
:root {
  --color-accent: #e5aa70;
  --color-text-muted: light-dark(#70777f, #90979f);
  --color-text-positive: #238636;
  --color-text-negative: #da3633;
}
```

### Background color

<div class="demo flex gap-4">
  <div class="bg-base w-32 h-32 flex-center text-center rounded">Accent color</div>
  <div class="bg-page w-32 h-32 flex-center text-center rounded">Accent color</div>
  <div class="bg-accent w-32 h-32 flex-center text-center rounded">Accent color</div>
  <div class="bg-muted w-32 h-32 flex-center text-center rounded">Muted background</div>
  <div class="bg-positive w-32 h-32 flex-center text-center rounded">Positive background</div>
  <div class="bg-negative w-32 h-32 flex-center text-center rounded">Negative background</div>
</div>

```html
<div class="bg-base ...">Base color</div>
<div class="bg-page ...">Page color</div>
<div class="bg-accent ...">Accent color</div>
<div class="bg-muted ...">Muted background</div>
<div class="bg-positive ...">Positive background</div>
<div class="bg-negative ...">Negative background</div>
```

Colors can be overwritten by the corresponding custom property:

```css
:root {
  --color-background-base: light-dark(#f4f4f4, #202631);
  --color-background-page: light-dark(#ffffff, #161a22);
  --color-accent: #e5aa70;
  --color-background-muted: color-mix(in srgb, var(--color-background-base) 90%, black);
  --color-background-positive: color-mix(in srgb, var(--color-text-positive) 15%, transparent);
  --color-background-negative: color-mix(in srgb, var(--color-text-negative) 15%, transparent);
}
```
