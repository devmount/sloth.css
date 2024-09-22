---
title: 'Usage - Sloth.css'
description: Getting started with Sloth.css, how to use it.
---

## Usage

The most lazy usage of Sloth.css is to do nothing. Sloth.css offers drop-in styles for all native HTML elements, letting your semantic markup shine without any effort and without a single class.

Here is an example of what a simple newsletter subscription form looks like:

<div class="demo">
  <label>
    <span>Subscribe to our newsletter</span>
    <input type="email" placeholder="mail@example.org" />
  </label>
  <button type="submit">Subscribe</button>
</div>

```html
<label>
  <span>Subscribe to our newsletter</span>
  <input type="email" placeholder="mail@example.org" />
</label>
<button type="submit">Subscribe</button>
```

If you like classes though &mdash; utility classes in particluar, Sloth.css got you covered. You can take a look at the [utilities section](/utilities/border) to see the complete list of available utility classes. Those are a curated subset of Tailwind CSS classes (with a few exceptions) and are meant to be extended and adapted by you for your project. There are valid use cases and reasons, to _not_ use Tailwind CSS, an additional build step or preprocessors at all in a project and this is where Sloth.css provides the simplicity of a ready-to-include CSS file.

For some more advanced UI elements on your page, you can use prestyled components like badges, cards, modals, tooltips and more &mdash; check out the complete list in the [components section](/components/badge).

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
