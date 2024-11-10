---
title: 'Components: Modal - Sloth.css'
description: Navigation for quickly switching between content divs
tags: variants accent neutral success alert size outline pill
---

## Modal

A tab navigation lets users quickly switch between content divs.

### Basic modal

Use the `modal` class on a parent element containing a `<nav>` with an ordered list for the tab bar and a `<section>` with one or more `<div>` elements for the actual content. The `disabled` class can be used to style a tab inactive.

<div class="demo">
  <a class="button" href="#modal-demo">Open Modal</a>

  <div class="modal" id="modal-demo">
    <header>
      <a href="#close">X</a>
    </header>
    <footer>
      <a class="button hollow neutral" href="#close">
        Cancel
      </a>
      <button class="accent">
        Save
      </button>
    </footer>
  </div>
</div>

```html
```
