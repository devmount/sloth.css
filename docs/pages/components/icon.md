---
title: 'Components: Icon - Sloth.css'
description: Vector images for illustration
tags: symbol size svg vector item sm lg xl stroke thin
---

## Icon

Icons are very popular illustrations for actions, states, fields etc. Sloth.css doesn't ship any icons on it's own (I mean, come on. There are thousands of awesome icon libs out there!). Instead, Sloth.css offers a nice integration of SVG icons in almost every suitable component. Examples below are from the beautiful <a href="https://tabler.io/icons" target="_blank">Tabler Icons</a>.

### Basic icon

Use the `icon` class on an SVG element to give it a basic size and stroke width. Per default, icons are assumed to be outlined. If you're using filled icons, append the corresponding class `filled`.

<div class="demo">
  <svg viewBox="0 0 24 24" class="icon filled"><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
  <svg viewBox="0 0 24 24" class="icon filled"><path d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z" /></svg>
  <svg viewBox="0 0 24 24" class="icon"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
</div>

```html
<svg viewBox="0 0 24 24" class="icon filled">...</svg>
<svg viewBox="0 0 24 24" class="icon filled">...</svg>
<svg viewBox="0 0 24 24" class="icon">...</svg>
```

### Size

Use the `sm`, `lg` and `xl` classes to make the icon smaller or bigger.

<div class="demo">
  <svg viewBox="0 0 24 24" class="icon sm"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
  <svg viewBox="0 0 24 24" class="icon"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
  <svg viewBox="0 0 24 24" class="icon lg"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
  <svg viewBox="0 0 24 24" class="icon xl"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
</div>

```html
<svg viewBox="0 0 24 24" class="icon sm">...</svg>
<svg viewBox="0 0 24 24" class="icon">...</svg>
<svg viewBox="0 0 24 24" class="icon lg">...</svg>
<svg viewBox="0 0 24 24" class="icon xl">...</svg>
```

### Stroke width

The stroke width is 1.5 per default. Use the `stroke-1` or `stroke-2` classes to reduce or increase the icon stroke width.

<div class="demo">
  <svg viewBox="0 0 24 24" class="icon stroke-1"><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
  <svg viewBox="0 0 24 24" class="icon"><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
  <svg viewBox="0 0 24 24" class="icon stroke-2"><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
</div>

```html
<svg viewBox="0 0 24 24" class="icon stroke-1">...</svg>
<svg viewBox="0 0 24 24" class="icon">...</svg>
<svg viewBox="0 0 24 24" class="icon stroke-2">...</svg>
```
