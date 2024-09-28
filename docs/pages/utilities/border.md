---
title: 'Utilities: Border - Sloth.css'
description: Utility classes of Sloth.css for border related styles.
---

## Border

Utility classes for controlling the border of elements.

### Rounded border

<div class="demo flex gap-8">
  <div class="w-16 h-16 bg-accent rounded"></div>
  <div class="w-16 h-16 bg-accent rounded-full"></div>
</div>

```html
<div class="rounded ..."></div>
<div class="rounded-full ..."></div>
```

```css
.rounded      { border-radius: .25rem; }
.rounded-full { border-radius: 9999px; }
```
