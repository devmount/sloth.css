---
title: 'Components: Sequence - Sloth.css'
description: Group of ordered items like timelines or steps
tags: timeline steps log
---

## Sequence

A sequence is a group of ordered items like timelines or a step-wise status.

### Vertical

Use the `sequence` class on a container holding child elements with the `step` class to create a vertical sequence.

<div class="demo">
  <ol class="sequence">
    <li class="step">2077</li>
    <li class="step">2078</li>
    <li class="step">2079</li>
  </ol>
</div>

```html
<ol class="sequence">
  <li class="step">2077</li>
  <li class="step">2078</li>
  <li class="step">2079</li>
</ol>
```

The `step` elements can contain headings, paragraphs and other elements.

<div class="demo">
  <ol class="sequence">
    <li class="step">
      <h6>v1.0.0</h6>
      <p>First stable release</p>
    </li>
    <li class="step">
      <h6>v0.2.0</h6>
      <p>Further features entering beta</p>
    </li>
    <li class="step">
      <h6>v0.1.0</h6>
      <p>Initial release</p>
    </li>
  </ol>
</div>

```html
<ol class="sequence">
  <li class="step">
    <h6>v1.0.0</h6>
    <p>First stable release</p>
  </li>
  <li class="step">
    <h6>v0.2.0</h6>
    <p>Further features entering beta</p>
  </li>
  <li class="step">
    <h6>v0.1.0</h6>
    <p>Initial release</p>
  </li>
</ol>
```

### Filled

To make one or more steps stand out, the `filled` class can be used to fill the bullet point.

<div class="demo">
  <ol class="sequence">
    <li class="step">2077</li>
    <li class="step">2078</li>
    <li class="step filled">2079</li>
  </ol>
</div>

```html
<ol class="sequence">
  <li class="step">2077</li>
  <li class="step">2078</li>
  <li class="step filled">2079</li>
</ol>
```

### Colors

The default sequence steps are neutral. That can be changed by using `accent`, `success` and `alert` classes for the corresponding colors. The connection line color adapts to siblings sharing the same color.

<div class="demo flex flex-wrap gap-8">
  <ol class="sequence">
    <li class="step accent filled">2079</li>
    <li class="step accent">2078</li>
    <li class="step">2077</li>
    <li class="step">2076</li>
  </ol>
  <ol class="sequence">
    <li class="step success filled"><code>+9.76%</code></li>
    <li class="step success"><code>+5.13%</code></li>
    <li class="step"><code>+0.01%</code></li>
    <li class="step alert"><code>-2.77%</code></li>
    <li class="step alert"><code>-8.19%</code></li>
  </ol>
</div>

```html
<ol class="sequence">
  <li class="step accent filled">2079</li>
  <li class="step accent">2078</li>
  <li class="step">2077</li>
  <li class="step">2076</li>
</ol>

<ol class="sequence">
  <li class="step success filled"><code>+9.76%</code></li>
  <li class="step success"><code>+5.13%</code></li>
  <li class="step"><code>+0.01%</code></li>
  <li class="step alert"><code>-2.77%</code></li>
  <li class="step alert"><code>-8.19%</code></li>
</ol>
```
