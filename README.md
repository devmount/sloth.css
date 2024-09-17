<p align="center"><img src="./assets/logo.png" alt="Logo showing a smiling sloth" width="128px" /></p>
<h1 align="center">Sloth.css</h1>
<p align="center">A drop-in utility component CSS library for lazy mammals like me.<br />Created by <a href="https://github.com/devmount" target="_blank">devmount</a>.</p>
</p>

## Installation

Include one of the following minified CSS file in your HTML head:

```html
<!-- Sloth.css drop-in core styles, 1kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css/dist/sloth.min.css" />
```

```html
<!-- Sloth.css drop-in core styles and utility classes, 4kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css/dist/sloth.utils.min.css" />
```

```html
<!-- Sloth.css drop-in core styles, utility classes and componentns, 10kB -->
<link rel="stylesheet" href="https://unpkg.com/@devmount/sloth.css/dist/sloth.components.min.css" />
```

Read on below to find out exactly what they include.

## Features

Sloth.css can be used as drop-in CSS library, or additionally with curated utility classes or even with a set of handcrafted ready-to-copy components. Styles are opinionated (then again: which styles are not), and prioritize visual usability over trends such as flat design. Elements where you type in (like input fields) are actually inset, elements that are clickable (like buttons) are actually outstanding and tabs are connected to the content they activate.

### Variant 1: Drop-in CSS library

This is the smalles version and the core of Sloth.css. It provides styles for all plain HTML elements without the use of classes. If you have a page using semantic markup, just include Sloth.css and everything will get some nice basic styling.

### Variant 2: Utility classes CSS library

If you want more, you can use Sloth.css with utility classes included. Just take a look at the docs to see, which ones are available. Those utility classes are a curated subset of Tailwind.css classes and are meant to be extended and adapted by you for your project. I had several projects, where using Tailwind was not necessary (or not possible or not wanted), so instead I used a little set of utility classes and found, that those were mostly the same. So here they are. This variant includes the drop-in styles.

### Variant 3: CSS components

If you still haven't had enough and need some more advanced elements on your page, you can use Sloth.css with CSS components included. Badges, Cards, Modals, Tooltips and more - take a look at the complete list in the docs. This is the whole packages, it contains the drop-in styles and the utility classes too.
