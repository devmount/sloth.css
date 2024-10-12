---
title: 'Utilities: Color - Sloth.css'
description: Utility classes of Sloth.css for color related styles.
---

## Color

Utility classes for controlling colors of text and backgrounds.

### Text color

Text is colored according to the color scheme per default. Use the `text-inverted` class if you want a dark text in dark mode or light text in light mode for some reason. In addition there are classes for giving text more importance (`text-accent`), less importance (`text-muted`) and two basic classes for sentiment coloring.

<div class="demo">
  <p>Default text</p>
  <p class="text-accent">Accent color <code>.text-accent</code></p>
  <p class="text-muted">Muted text <code>.text-muted</code></p>
  <p class="text-positive">Positive message <code>.text-positive</code></p>
  <p class="text-negative">Negative message <code>.text-negative</code></p>
  <p class="text-inverted">Inverted color <code>.text-accent</code></p>
</div>

```html
<p>Default text</p>
<p class="text-accent">Accent color</p>
<p class="text-muted">Muted text</p>
<p class="text-positive">Positive message</p>
<p class="text-negative">Negative message</p>
<p class="text-inverted">Inverted color</p>
```

> Note that you can use `text-light` and `text-dark` to keep the text color despite the color scheme. But please only use this with sufficient contrast to the background.

Colors can be overwritten by the corresponding custom property:

```css
:root {
  --color-text-light: #464646;
  --color-text-dark: #e8e8ec;
  --color-accent: #e5aa70;
  --color-text-muted: light-dark(#70777f, #90979f);
  --color-positive: #238636;
  --color-negative: #da3633;
}
```

### Background color

<div class="demo flex-col gap-4">
  <div class="bg-base p-4 rounded">Base background <code>.bg-base</code></div>
  <div class="bg-page p-4 rounded">Page background <code>.bg-page</code></div>
  <div class="bg-accent p-4 rounded">Accent <code>.bg-accent</code></div>
  <div class="bg-accent-variant p-4 rounded">Accent variant <code>.bg-accent-variant</code></div>
  <div class="bg-muted p-4 rounded">Muted background <code>.bg-muted</code></div>
  <div class="bg-positive p-4 rounded">Positive background <code>.bg-positive</code></div>
  <div class="bg-negative p-4 rounded">Negative background <code>.bg-negative</code></div>
</div>

```html
<div class="bg-base ...">Base background</div>
<div class="bg-page ...">Page background</div>
<div class="bg-accent ...">Accent</div>
<div class="bg-accent-variant ...">Accent variant</div>
<div class="bg-muted ...">Muted background</div>
<div class="bg-positive ...">Positive background</div>
<div class="bg-negative ...">Negative background</div>
```

Colors can be overwritten by the corresponding custom property:

```css
:root {
  --color-bg-base: light-dark(#f4f4f4, #202631);
  --color-bg-page: light-dark(#ffffff, #161a22);
  --color-accent: #e5aa70;
  --color-bg-accent: color-mix(in hsl, var(--color-accent) 80%, black);
  --color-bg-muted: color-mix(in srgb, var(--color-bg-base) 90%, black);
  --color-bg-positive: color-mix(in srgb, var(--color-positive) 15%, transparent);
  --color-bg-negative: color-mix(in srgb, var(--color-negative) 15%, transparent);
}
```
