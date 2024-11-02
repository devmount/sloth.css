---
title: 'Components: Tag - Sloth.css'
description: Labels for entities or list of selected entries
tags: variants accent neutral success alert size secondary outline link pill
---

## Tag

Tags can be used to label entities or list selected entries.

### Colors

Use the `tag` class to created a neutral label element. In addition, you can use `accent`, `success` and `alert` classes for the corresponding colors.

<div class="demo flex flex-wrap gap-4">
  <span class="tag">Neutral</span>
  <span class="tag accent">Accent</span>
  <span class="tag success">Success</span>
  <span class="tag alert">Alert</span>
</div>

```html
<span class="tag">Nneutral</span>
<span class="tag accent">Accent</span>
<span class="tag success">Success</span>
<span class="tag alert">Alert</span>
```

### Sizes

Use the `sm` or `lg` classes to reduce or increase the font size and padding of a tag.

<div class="demo flex flex-wrap items-center gap-4">
  <span class="tag sm">Small</span>
  <span class="tag">Default</span>
  <span class="tag lg">Large</span>
</div>

```html
<span class="tag sm">Small</span>
<span class="tag">Default</span>
<span class="tag lg">Large</span>
```

### Pill tags

Use the `pill` class to give tags a fully rounded pill form.

<div class="demo flex flex-wrap items-center gap-4">
  <span class="tag pill sm">Small</span>
  <span class="tag pill success">Default</span>
  <span class="tag pill lg accent">Large</span>
</div>

```html
<span class="tag pill sm">Small</span>
<span class="tag pill success">Default</span>
<span class="tag pill lg accent">Large</span>
```
