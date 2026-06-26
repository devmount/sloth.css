---
title: 'Installation - Sloth.css'
description: Installation instructions and how to get started
tags: cdn npm pnpm drop-in setup download
---

## Installation

You can load Sloth.css directly via CDN, install it manually or use a package manager. You can choose between 3 different variants according to your needs:

1. `sloth.core.min.css`: Drop-in styling for semantic markup
2. `sloth.util.min.css`: Utility classes for quick prototyping
3. `sloth.components.min.css`: More complex, ready-to-use CSS components (depends on the previous two)

If you want the whole packages, just use `sloth.min.css` for convenience instead of installing all 3 variants.

### Install from CDN

Include the following CSS file in your HTML head:

```html
<link rel="stylesheet" href="{{ cdnUrl }}" />
```

If you just want to use the drop-in styles or the utility classes or the CSS components separately, you can add one of the following accordingly:

```html
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.core.min.css" />
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.util.min.css" />
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.comp.min.css" />
```

### Install manually

Download the latest [Sloth.css release]({{ repoUrl }}/releases) (7.5KB):

<button onclick="window.location.href='{{ repoUrl }}/releases'">Download Sloth.css</button>

Extract the CSS files you need and include them in your markup or your bundler.

### Install via package manager

If you don't want to use the CDN or manual download, you can add Sloth.css via the package manager of your choice, e.g.:

```bash
pnpm add @devmount/sloth.css
```

Now you need to make one of the CSS files under `node_modules/@devmount/sloth.css/` available to your app or include it in your build step or bundler. Since Sloth.css already serves minified styles, the simplest way would be to just include the file you want in your CSS, e.g.:

```css
@import '@devmount/sloth.css/sloth.min.css';
```
