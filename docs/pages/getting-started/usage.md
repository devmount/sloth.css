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

If you like classes though &mdash; utility classes in particluar, Sloth.css got you covered. You can take a look at the [utilities section](/utilities/border) to see the complete list of available utility classes. Those are a curated subset of Tailwind CSS classes (with a few additions) and are meant to be extended and adapted by you for your project. There are valid use cases and reasons, to _not_ use Tailwind CSS, an additional build step or preprocessors at all in a project and this is where Sloth.css provides the simplicity of a ready-to-include CSS file.

This is what a possible card component built with utility classes and no additional CSS looks like:

<div class="demo flex-center">
  <section class="flex-col items-center gap-2 m-4 p-4 w-1/2 shadow-float rounded">
    <figure class="w-12 h-12 bg-accent rounded-full flex-center font-bold m-2">BW</figure>
    <h5 class="uppercase m-0">Black Widow</h5>
    <div class="text-muted">Natasha Romanoff</div>
  </section>
</div>

```html
<section class="flex-col items-center gap-2 m-4 p-4 w-1/2 shadow-float">
  <figure class="w-12 h-12 bg-accent rounded-full flex-center font-bold m-2">BW</figure>
  <h5 class="uppercase m-0">Black Widow</h5>
  <div class="text-muted">Natasha Romanoff</div>
</section>
```

For some more advanced UI elements on your page, you can use prestyled components like badges, cards, modals, tooltips and more &mdash; check out the complete list in the [components section](/components/badge). Each component has a single class starting with the `lazy-` prefix.

Here is an example of the badge component:

<div class="demo">
  <span class="lazy-badge">deprecated</span>
</div>

```html
<span class="lazy-badge">deprecated</span>
```

## Customizing

Sloth.css uses CSS custom properties for core styles. You can customize and override them by using a `:root` selector, e.g.:

```css
:root {
  --accent: #e5aa70;
  --background-base: #f4f4f4;
  --transition-underline: text-underline-offset .1s ease;
  --font-size: 16px;
}
```

Just make sure to define your overrides _after_ including Sloth.css to properly replace the values. For a complete list of available custom properties, refer to `src/_config.css` in the project’s [code repository]({{ repoUrl }}/blob/main/src/_config.css).
