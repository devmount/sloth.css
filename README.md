<p align="center"><img src="./assets/logo.png" alt="Logo showing a smiling sloth" width="128px" /></p>
<h1 align="center">Sloth.css</h1>
<p align="center">
<a href="https://github.com/devmount/sloth.css/releases" target="_blank"><img src="https://img.shields.io/github/v/tag/devmount/sloth.css.svg?label=version&colorB=e5aa70&style=flat-square" alt="release" /></a>
<a href="https://github.com/devmount/sloth.css/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/devmount/sloth.css?label=updated&color=e5aa70&style=flat-square" alt="last commit" /></a>
<a href="./LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-e5aa70.svg?style=flat-square" alt="License MIT" /></a>
<a href="./.github/CONTRIBUTING.md" target="_blank"><img src="https://img.shields.io/badge/contributions-welcome-e5aa70.svg?style=flat-square" alt="contributions welcome" /></a>
</p>
<p align="center">A drop-in utility component CSS library for lazy mammals like me.<br />Created by <a href="https://github.com/devmount" target="_blank">devmount</a>.</p>
</p>

## Installation

Include the following CSS file in your HTML head to get the complete package:

```html
<!-- Sloth.css drop-in core styles, utility classes and components, 10kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css@1/sloth.min.css" />
```

Read on below to find out about all available variants. Maybe one of them is more suitbale for your use case.

## Features

Sloth.css can be used as drop-in CSS library, or additionally with curated utility classes or even with a set of handcrafted ready-to-copy components. Styles are opinionated (then again: which styles are not), and crafted to prioritize visual usability over trends such as flat design. For example: Elements where you type in (like input fields) are actually inset, elements that are clickable (like buttons) are actually outstanding and tabs are connected to the content they activate.

### Variant 1: Drop-in core CSS library

This is the smalles variant and the core of Sloth.css. It provides styles for all plain HTML elements without the use of classes. If you have a page using semantic markup, just include the following Sloth.css file and everything will get some nice basic styling:

```html
<!-- Sloth.css drop-in core styles, 1.5kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css@1/sloth.core.css" />
<!-- Or the minified version, 1kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css@1/sloth.core.min.css" />
```

### Variant 2: Utility classes CSS library

If you want more, you can use Sloth.css with utility classes included. Just take a look at the docs to see, which ones are available. Those utility classes are a curated subset of Tailwind.css classes and are meant to be extended and adapted by you for your project. I had several projects, where using Tailwind was not necessary (or not possible or not wanted), so instead I used a little set of utility classes and found, that those were mostly the same. So here they are. This variant includes the drop-in styles:

```html
<!-- Sloth.css drop-in core styles and utility classes, 4kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css@1/sloth.util.css" />
<!-- Or the minified version, 3kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css@1/sloth.util.min.css" />
```

### Variant 3: CSS components

If you still haven't had enough and need some more advanced elements on your page, you can use Sloth.css with CSS components included. Badges, Cards, Modals, Tooltips and more - take a look at the complete list in the docs. This is the whole packages, it contains the drop-in styles and the utility classes too:

```html
<!-- Sloth.css drop-in core styles, utility classes and components, 10kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css@1/sloth.css" />
<!-- Or the minified version, 7kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css@1/sloth.min.css" />
```

## License

This project is licensed under the [MIT License](./LICENSE).

## Support

Sloth.css is completely free to use. If it's useful for you and you enjoy it, please consider [contributing](./.github/CONTRIBUTING.md), [sponsoring me](https://github.com/sponsors/devmount) or [donating via Paypal](https://paypal.me/devmount) to support further development. 🧡
