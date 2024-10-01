---
title: 'Installation - Sloth.css'
description: Getting started with Sloth.css, how to install it.
---

## Installation

You can load Sloth.css directly via CDN or by installing it manually or via NPM. You can choose between 3 different variants according to your needs:

1. `sloth.core.min.css`: Drop-in styling for semantic markup
2. `sloth.util.min.css`: Utility classes for quick prototyping
3. `sloth.components.min.css`: More complex, ready-to-use CSS components (depends on the previous two)

If you want the whole packages, just use `sloth.min.css` for convenience instead of installing all 3 variants.

### Install from CDN

Include the following CSS file in your HTML head:

```html
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.min.css" />
```

If you just want to use the drop-in styles or the utility classes, you can add one of the following accordingly:

```html
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.core.min.css" />
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.util.min.css" />
```

### Install manually

Download the latest [Sloth.css release]({{ repoUrl }}/releases) (\~10KB):

<button onclick="window.location.href='{{ repoUrl }}/releases'">Download Sloth.css</button>

Extract the CSS files you need and include them in your markup or your bundler.

### Install via NPM

If you don’t want to use the CDN or manual download, you can install Sloth.css via npm with the following command.

```bash
npm install sloth.css
```

Now you need to make the static files under `node_modules/sloth.css/dist` available to your app or include them in your build step.
