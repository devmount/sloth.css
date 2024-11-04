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
    <li class="step">2022</li>
    <li class="step">2023</li>
    <li class="step">2024</li>
  </ol>
</div>

```html
<ol class="sequence">
  <li class="step">2022</li>
  <li class="step">2023</li>
  <li class="step">2024</li>
</ol>
```

The `step` elements can contain headings, paragraphs and more.

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
  <li class="step">2022</li>
  <li class="step">2023</li>
  <li class="step">2024</li>
</ol>
```
