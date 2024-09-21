---
title: 'Customizing - Sloth.css'
description: Getting started with Sloth.css, how to customize it.
---

## Customizing

Sloth.css uses CSS custom properties for core styles. You can customize and override them by using a `:root` selector, e.g.:

```css
:root {
  --accent: #e5aa70;
  --background-base: #f4f4f4;
  --transition-underline: text-underline-offset .1s ease;
  --font-size: 16px;
  --shadow-border-accent: var(--accent) 0 0 0 1px;
}
```

Just make sure to define your overrides _after_ including Sloth.css to properly replace the values. For a complete list of available custom properties, refer to `src/_config.css` in the project’s [code repository]({{ repoUrl }}/src/_config.css).
