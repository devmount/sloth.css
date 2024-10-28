---
title: 'Utilities: Color - Sloth.css'
description: Controlling colors of text and backgrounds
tags: colour accent muted neutral success alert inverted
---

## Color

Utility classes for controlling colors of text and backgrounds.

### Text color

Text is colored according to the color scheme per default. Use the `text-inverted` class if you want a dark text in dark mode or light text in light mode for some reason. In addition there are classes for giving text more importance (`text-accent`), less importance (`text-muted`) and two basic classes for sentiment coloring.

<div class="demo">
  <p>Default text</p>
  <p class="text-accent">Accent color <code>.text-accent</code></p>
  <p class="text-muted">Muted text <code>.text-muted</code></p>
  <p class="text-success">success message <code>.text-success</code></p>
  <p class="text-alert">alert message <code>.text-alert</code></p>
  <p class="text-inverted">Inverted color <code>.text-accent</code></p>
</div>

```html
<p>Default text</p>
<p class="text-accent">Accent color</p>
<p class="text-muted">Muted text</p>
<p class="text-success">success message</p>
<p class="text-alert">alert message</p>
<p class="text-inverted">Inverted color</p>
```

<p class="callout accent">
  Note that you can use <code>text-light</code> and <code>text-dark</code> to keep the text color despite the color scheme. But please only use this with sufficient contrast to the background.
</p>

Colors can be overwritten by the corresponding custom property:

```css
:root {
  --color-accent:        #e5aa70;
  --color-border:        light-dark(#d0d7df, #252b36);
  --color-selection:     #90979f;
  --color-text-light:    #40474f;
  --color-text-dark:     #e0e7ef;
  --color-text-em:       light-dark(#161a22, #ffffff);
  --color-text-emverted: light-dark(#ffffff, #161a22);
  --color-text-muted:    light-dark(#70777f, #90979f);
  --color-neutral:       #70777f;
  --color-success:       #238636;
  --color-alert:         #da3633;
  --color-shadow:        light-dark(#00000033, #00000088);
}
```

### Background color

<div class="demo flex-col gap-4">
  <div class="bg-base p-4 rounded">Base background <code>.bg-base</code></div>
  <div class="bg-page p-4 rounded">Page background <code>.bg-page</code></div>
  <div class="bg-accent p-4 rounded">Accent <code>.bg-accent</code></div>
  <div class="bg-accent-variant p-4 rounded">Accent variant <code>.bg-accent-variant</code></div>
  <div class="bg-muted p-4 rounded">Muted background <code>.bg-muted</code></div>
  <div class="bg-success p-4 rounded">success background <code>.bg-success</code></div>
  <div class="bg-alert p-4 rounded">alert background <code>.bg-alert</code></div>
</div>

```html
<div class="bg-base ...">Base background</div>
<div class="bg-page ...">Page background</div>
<div class="bg-accent ...">Accent</div>
<div class="bg-accent-variant ...">Accent variant</div>
<div class="bg-muted ...">Muted background</div>
<div class="bg-success ...">success background</div>
<div class="bg-alert ...">alert background</div>
```

Colors can be overwritten by the corresponding custom property:

```css
:root {
  --color-bg-base: light-dark(#f4f7fa, #202631);
  --color-bg-page: light-dark(#ffffff, #161a22);
}
```
