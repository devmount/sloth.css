---
title: 'Sloth.css: A drop-in utility component CSS library for lazy mammals.'
description: Hand-crafted core styles, utility classes and components for dropping in
notoc: true
---

<header role="banner" class="text-center">
  <img src="/assets/images/logo.svg" alt="Logo showing a sloth" class="w-32 h-32 rounded-full">
  <h1 class="m-2">Sloth.css</h1>
  <p>
    <a href="https://github.com/devmount/sloth.css/releases" target="_blank"><img src="https://img.shields.io/github/v/tag/devmount/sloth.css.svg?label=version&colorB=e5aa70&style=flat-square" alt="release" /></a>
    <a href="https://github.com/devmount/sloth.css/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/devmount/sloth.css?label=updated&color=e5aa70&style=flat-square" alt="last commit" /></a>
    <a href="./LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-e5aa70.svg?style=flat-square" alt="License MIT" /></a>
    <a href="./.github/CONTRIBUTING.md" target="_blank"><img src="https://img.shields.io/badge/contributions-welcome-e5aa70.svg?style=flat-square" alt="contributions welcome" /></a>
  </p>
</header>

Sloth.css is a drop-in utility component CSS library, that aims to be:

- Lightweight (7.5KB gzipped)
- Responsive and mobile-friendly
- Beautiful per default but easy to customize
- Working for all modern browsers

## Installation

Include the following CSS file in your HTML head to get the complete package:

```html
<!-- Sloth.css drop-in core styles, utility classes and components, ~7.5KB gzipped -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.min.css" />
```

Read on below to find out about all available variants. Maybe one of them is more suitable for your use case.

## Variants

Sloth.css can be used as drop-in CSS library, as utility class library or even with a set of handcrafted ready-to-copy components. Or everything, all at once. Just pick the variant you need. Styles are opinionated (then again: which styles are not), and crafted to prioritize visual usability over trends such as flat design. For example: Elements where you type in (like input fields) are actually inset, elements that are clickable (like buttons) are actually elevated, tabs are connected to the content they activate etc.

### Variant 1: Drop-in core CSS library

The drop-in core of Sloth.css provides styles for all plain HTML elements without the use of a single class. If you have a page using semantic markup, just include the following CSS file and everything will get some nice basic styling.

```html
<!-- Sloth.css drop-in core styles, ~3.1KB gzipped -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.core.min.css" />
```

### Variant 2: Utility classes CSS library

If you want to create quick mockups without leaving your markup, you can use Sloth.css with utility classes. Just take a look at the docs to see, which ones are available. Those utility classes are a curated subset of Tailwind CSS classes (with a few exceptions and additions) and are meant to be extended and adapted by you for your project. I had several projects, where Tailwind was not necessary (or not possible or not wanted), so instead I used a convenient set of utility classes I curated myself and found, that those were mostly sufficient for those projects. So here they are.

```html
<!-- Sloth.css utility classes, ~2.0KB gzipped -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.util.min.css" />
```

### Variant 3: CSS components collection

If you need more advanced elements on your page, you can use Sloth.css with prestyled components included. Badges, Cards, Modals, Tooltips and more - take a look at the complete list in the docs.

```html
<!-- Sloth.css CSS components, ~6.4KB gzipped -->
<link rel="stylesheet" href="{{ cdnUrl }}/sloth.comp.min.css" />
```

## License

This project is provided under the terms of the [MIT License]({{ repoUrl }}/blob/main/LICENSE).

## Support

Sloth.css is completely free to use. If it's useful for you and you enjoy it, please consider [contributing]({{ repoUrl }}/blob/main/.github/CONTRIBUTING.md), [sponsoring me](https://github.com/sponsors/devmount) or [donating via Paypal](https://paypal.me/devmount) to support further development. 🧡
