---
title: 'Components: State - Sloth.css'
description: Placeholder areas that indicate a empty or highlighted state
tags: placeholder empty highlight
---

## State

The state component can be used for areas that indicate a certain state for users to get information, that something is missing or needs to be done first to achieve a goal.

### Empty state

Use the `state empty` classes for a placeholder section which awaits user input to show a result.

<div class="demo">
  <div class="state empty">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17v-13h4" /><path d="M13 5h-10" /><path d="M3 9l10 0" /><path d="M9 13h-6" /></svg>
    <h3>You have no playlists</h3>
    <p>Click the button to start collecting songs</p>
    <button>Add playlist</button>
  </div>
</div>

```html
<div class="state empty">
  <svg>...</svg>
  <h3>You have no playlists</h3>
  <p>Click the button to start collecting songs</p>
  <button>Add playlist</button>
</div>
```

### Highlighted state

Use the `state highlighted` classes for an accentuated section e.g. which awaits a user action like a drag and drop target area.

<div class="demo">
  <div class="state highlighted">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /><path d="M13 13l9 3l-4 2l-2 4l-3 -9" /><path d="M3 3l0 .01" /><path d="M7 3l0 .01" /><path d="M11 3l0 .01" /><path d="M15 3l0 .01" /><path d="M3 7l0 .01" /><path d="M3 11l0 .01" /><path d="M3 15l0 .01" /></svg>
    <h3>Office document conversion</h3>
    <p>Drag supported documents here</p>
  </div>
</div>

```html
<div class="state highlighted">
  <svg>...</svg>
  <h3>Office document conversion</h3>
  <p>Drag supported documents here</p>
</div>
```
