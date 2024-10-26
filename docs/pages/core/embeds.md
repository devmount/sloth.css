---
title: 'Core: Embeds - Sloth.css'
description: Media elements like images and figures and other embeddable elements
tags: image meter progress
---

## Embeds

This page shows media elements like images and figures and other embeddable elements like data or progress visualizations.

### Images

Single images will have their native measurements (unless a `width` was set explicitly) but are still responsive and hence will adapt to their parents width if it gets smaller.

<div class="demo">
  <img src="https://images.unsplash.com/photo-1506272517965-ec6133efee7a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640" alt="Several models of planets" />
</div>

```html
<img src="https://images.unsplash.com/..." alt="Several models of planets" />
```

This applies to images inside of figure elements too.

<div class="demo">
<figure>
  <a href="https://unsplash.com/de/fotos/schwarze-und-braune-galaxie-1vKTnwLMdqs">
    <img src="https://unsplash.com/photos/1vKTnwLMdqs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHBsYW5ldHN8ZGV8MHx8fHwxNzI1OTkyNTM1fDA&w=640" alt="Stars in the black sky">
  </a>
  <figcaption>A galaxy by Brett Ritchie.</figcaption>
</figure>
</div>

```html
<figure>
  <a href="https://unsplash.com/de/fotos/schwarze-und-braune-galaxie-1vKTnwLMdqs">
    <img src="https://unsplash.com/..." alt="Stars in the black sky">
  </a>
  <figcaption>A galaxy by Brett Ritchie.</figcaption>
</figure>
```

Inline SVGs can make use of CSS custom properties like defined colors.

<div class="demo">
  <svg class="w-32 h-32">
    <circle cx="128" cy="128" r="128" fill="var(--color-accent)"></circle>
  </svg>
</div>

```html
<svg class="w-32 h-32">
  <circle cx="128" cy="128" r="128" fill="var(--color-accent)"></circle>
</svg>
```

### Meter

Meters indicate and rate a value within a known range. The rating is a comparison against a given optimum value and is shown via different colors.

<div class="demo">
  <div class="flex gap-8">
    <meter value="2" min="0" max="10" low="3" high="8" optimum="2">2 out of 10</meter>
    <meter value="6" min="0" max="10" low="3" high="8" optimum="2">6 out of 10</meter>
    <meter value="9" min="0" max="10" low="3" high="8" optimum="2">9 out of 10</meter>
  </div>
</div>

```html
<meter value="2" min="0" max="10" low="3" high="8" optimum="2">2 out of 10</meter>
<meter value="6" min="0" max="10" low="3" high="8" optimum="2">6 out of 10</meter>
<meter value="9" min="0" max="10" low="3" high="8" optimum="2">9 out of 10</meter>
```

### Progress

Progress elements indicate the state of completion of an activity or, if no values are provided, activity currently running.

<div class="demo">
  <div class="flex gap-8">
    <progress value="4" max="10"></progress>
    <progress>progress</progress>
  </div>
</div>

```html
<progress value="4" max="10"></progress>
<progress>progress</progress>
```
