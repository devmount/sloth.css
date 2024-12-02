---
title: 'Utilities: Text - Sloth.css'
description: Controlling text and font appearance
tags: underline line-through transnform uppercase lowercase capitalize font-weight font-family size truncate balance whitespace-nowrap vertical text-start text-center text-end text-left text-right font-light font-normal font-semibold font-bold font-mono font-sans text-xs text-sm text-base text-lg text-xl whitespace-nowrap text-balance text-vertical
---

## Text

Utility classes for controlling text and font appearance.

### Text alignment

Sloth.css prefers start/end alignment over left/right to respect both, rtl and ltr text flows.

<div class="demo">
  <p class="text-start">
    The Sloth is a lazy mammal.<br />
    <code>.text-start</code>
  </p>
  <p class="text-center">
    The Sloth is a lazy mammal.<br />
    <code>.text-center</code>
  </p>
  <p class="text-end">
    The Sloth is a lazy mammal.<br />
    <code>.text-end</code>
  </p>
</div>

```html
<p class="text-start">...</p>
<p class="text-center">...</p>
<p class="text-end">...</p>
```

```css
.text-start  { text-align: start;  }
.text-center { text-align: center; }
.text-end    { text-align: end;    }
```

### Text decoration

<div class="demo">
  <div class="flex gap-2 items-start">
    <p class="underline">The Sloth is a lazy mammal.</p>
    <code>.underline</code>
  </div>
  <div class="flex gap-2 items-start">
    <p class="line-through">The Sloth is a lazy mammal.</p>
    <code>.line-through</code>
  </div>
</div>

```html
<p class="underline">...</p>
<p class="line-through">...</p>
```

```css
.underline    { text-decoration-line: underline;    }
.line-through { text-decoration-line: line-through; }
```

### Text transform

<div class="demo">
  <p>The Sloth is a lazy mammal.</p>
  <p class="uppercase">The Sloth is a lazy mammal. <code style="text-transform: none;">.uppercase</code></p>
  <p class="lowercase">The Sloth is a lazy mammal. <code style="text-transform: none;">.lowercase</code></p>
  <p class="capitalize">The Sloth is a lazy mammal. <code style="text-transform: none;">.capitalize</code></p>
</div>

```html
<p class="uppercase">...</p>
<p class="lowercase">...</p>
<p class="capitalize">...</p>
```

```css
.uppercase  { text-transform: uppercase;  }
.lowercase  { text-transform: lowercase;  }
.capitalize { text-transform: capitalize; }
```

### Font weight

<div class="demo">
  <p class="font-light">The Sloth is a lazy mammal. <code class="font-normal">.font-light</code></p>
  <p class="font-normal">The Sloth is a lazy mammal. <code class="font-normal">.font-normal</code></p>
  <p class="font-semibold">The Sloth is a lazy mammal. <code class="font-normal">.font-semibold</code></p>
  <p class="font-bold">The Sloth is a lazy mammal. <code class="font-normal">.font-bold</code></p>
</div>

```html
<p class="font-light">...</p>
<p class="font-normal">...</p>
<p class="font-semibold">...</p>
<p class="font-bold">...</p>
```

```css
.font-light    { font-weight: 300; }
.font-normal   { font-weight: 400; }
.font-semibold { font-weight: 600; }
.font-bold     { font-weight: 700; }
```

### Font family

Currently supported are a sans-serif and a monotyped font stack.

<div class="demo">
  <p class="font-sans">The Sloth is a lazy mammal. <code class="font-mono">.font-sans</code></p>
  <p class="font-mono">The Sloth is a lazy mammal. <code class="font-mono">.font-mono</code></p>
</div>

```html
<p class="font-sans">...</p>
<p class="font-mono">...</p>
```

```css
.font-mono { font-family: var(--font-mono); }
.font-sans { font-family: var(--font-sans); }
```

Font stacks can be overwritten by the corresponding custom property:

```css
:root {
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
  --font-mono: "SF Mono", "Segoe UI Mono", "Fira Code", "Fira Mono", "Roboto Mono", Menlo, Courier, monospace;
}
```

### Font size

<div class="demo">
  <p class="text-xs">The Sloth is a lazy mammal. <code class="text-sm">.text-xs</code></p>
  <p class="text-sm">The Sloth is a lazy mammal. <code class="text-sm">.text-sm</code></p>
  <p class="text-base">The Sloth is a lazy mammal. <code class="text-sm">.text-base</code></p>
  <p class="text-lg">The Sloth is a lazy mammal. <code class="text-sm">.text-lg</code></p>
  <p class="text-xl">The Sloth is a lazy mammal. <code class="text-sm">.text-xl</code></p>
  <p class="text-2xl">The Sloth is a lazy mammal. <code class="text-sm">.text-2xl</code></p>
</div>

```html
<p class="text-xs">...</p>
<p class="text-sm">...</p>
<p class="text-base">...</p>
<p class="text-lg">...</p>
<p class="text-xl">...</p>
<p class="text-2xl">...</p>
```

```css
.text-xs   { font-size: 0.75rem;  line-height: 1rem;     }
.text-sm   { font-size: 0.875rem; line-height: 1.25rem;  }
.text-base { font-size: 1rem;     line-height: 1.5rem;   }
.text-lg   { font-size: 1.25rem;  line-height: 1.75rem;  }
.text-xl   { font-size: 1.5rem;   line-height: 1.875rem; }
.text-2xl  { font-size: 2rem;     line-height: 2.25rem;  }
```

The basic font size that defines all `rem` based properties (which are almost all size based properties) can be overwritten by the corresponding custom property. Only adjust this if necessary for your use case (it might make everything too big or too small).

```css
:root {
  --font-size: 16px;
}
```

### Text wrapping and flow

Text can be truncated with an ellipsis using the `truncate` class, if the containing element has a defined width.

<div class="demo">
  <div class="truncate w-32 p-2 rounded bg-muted">The Sloth is a lazy mammal.</div>
</div>

```html
<div class="truncate w-16 ...">The Sloth is a lazy mammal.</div>
```

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

Also there are 3 utilities to control wrapping and writing mode.

<div class="demo flex flex-wrap gap-4">
  <div class="flex gap-2 items-center overflow-x-auto">
    <div class="whitespace-nowrap max-w-screen-xs p-4 rounded bg-muted overflow-x-auto">
      <h4>Sloths are a Neotropical group of xenarthran mammals</h4>
      <p>Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America.</p>
    </div>
    <code>.whitespace-nowrap</code>
  </div>
  <div class="flex gap-2 items-center">
    <div class="text-balance max-w-screen-xs p-4 rounded bg-muted overflow-x-auto">
      <h4>Sloths are a Neotropical group of xenarthran mammals</h4>
      <p>Noted for their slowness of movement, tree sloths spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America.</p>
    </div>
    <code>.text-balance</code>
  </div>
  <div class="flex gap-2 items-center">
    <div class="text-vertical w-32 p-4 rounded bg-muted overflow-x-auto">
      <h4>Sloths</h4>
      <p>Lazy mammals.</p>
    </div>
    <code>.text-vertical</code>
  </div>
</div>

```html
<div class="whitespace-nowrap ...">
  <h4>Sloths are a Neotropical group of xenarthran mammals</h4>
  <p>Noted for their slowness of movement, ...</p>
</div>
<div class="text-balance ...">
  <h4>Sloths are a Neotropical group of xenarthran mammals</h4>
  <p>Noted for their slowness of movement, ...</p>
</div>
<div class="text-vertical ...">
  <h4>Sloths</h4>
  <p>Lazy mammals.</p>
</div>
```

```css
.whitespace-nowrap { white-space: nowrap; }
.text-balance      { text-wrap: balance;  }
.text-vertical     { writing-mode: vertical-lr; }
```

<small>Text excerpts from [Wikipedia](https://en.wikipedia.org/wiki/Sloth).</small>
