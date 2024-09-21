---
title: 'Sloth.css: A drop-in utility component CSS library for lazy mammals.'
description: Hand-crafted core styles, utility classes and components for dropping in.
---

<header role="banner" class="text-center">
  <img src="/assets/images/logo.svg" alt="Logo showing a sloth" class="w-32 h-32 rounded-full">
  <h1 class="m-2">Sloth.css</h1>
  <p>
    A drop-in utility CSS library for lazy mammals like me.<br />
    Created by <a href="https://github.com/devmount">devmount</a>.
  </p>
</header>

## Installation

Include the following CSS file in your HTML head to get the complete package:

```html
<!-- Sloth.css drop-in core styles, utility classes and components, 10kB -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.min.css" />
```

Read on below to find out about all available variants. Maybe one of them is more suitable for your use case.

## Features

Sloth.css can be used as drop-in CSS library, or additionally with curated utility classes or even with a set of handcrafted ready-to-copy components. Styles are opinionated (then again: which styles are not), and crafted to prioritize visual usability over trends such as flat design. For example: Elements where you type in (like input fields) are actually inset, elements that are clickable (like buttons) are actually outstanding, tabs are connected to the content they activate etc.

### Variant 1: Drop-in core CSS library

This is the smalles variant and the core of Sloth.css. It provides styles for all plain HTML elements without the use of a single class. If you have a page using semantic markup, just include the following CSS file and everything will get some nice basic styling:

```html
<!-- Sloth.css drop-in core styles, 1.5kB -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.core.css" />
<!-- Or the minified version, 1kB -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.core.min.css" />
```

### Variant 2: Utility classes CSS library

If you want more, you can use Sloth.css with utility classes included. Just take a look at the docs to see, which ones are available. Those utility classes are a curated subset of Tailwind CSS classes (with a few exceptions) and are meant to be extended and adapted by you for your project. I had several projects, where Tailwind was not necessary (or not possible or not wanted), so instead I used a convenient set of utility classes I curated myself and found, that those were mostly sufficient for those projects. So here they are. This variant includes the drop-in styles too:

```html
<!-- Sloth.css drop-in core styles and utility classes, 4kB -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.util.css" />
<!-- Or the minified version, 3kB -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.util.min.css" />
```

### Variant 3: CSS components

If you still haven't had enough and need some more advanced elements on your page, you can use Sloth.css with prestyled components included. Badges, Cards, Modals, Tooltips and more - take a look at the complete list in the docs. This is the whole packages, it contains the drop-in styles and the utility classes too:

```html
<!-- Sloth.css drop-in core styles, utility classes and components, 10kB -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.css" />
<!-- Or the minified version, 7kB -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.min.css" />
```

## License

This project is licensed under the [MIT License]({{ repoUrl }}/blob/main/LICENSE).

## Support

Sloth.css is completely free to use. If it's useful for you and you enjoy it, please consider [contributing]({{ repoUrl }}/blob/main/.github/CONTRIBUTING.md), [sponsoring me](https://github.com/sponsors/devmount) or [donating via Paypal](https://paypal.me/devmount) to support further development. 🧡
