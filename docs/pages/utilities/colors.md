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
