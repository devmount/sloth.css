---
title: 'Core: Form - Sloth.css'
description: Drop-in styles of Sloth.css for all kinds of input elements and buttons.
---

## Form

The form category shows all kinds of form control elements like inputs, selects and buttons.

### Input types

To ensure that input fields are clearly recognized as such, they are styled as inset into the page. Classical input types are covered as well as all HTML5 input types.

<div class="demo">
  <div class="flex gap-4">
    <div class="flex flex-col gap-2">
      <label>Single line text
        <input type="text" placeholder="Song title">
      </label>
      <label>Secret
        <input type="password" placeholder="Vault code">
      </label>
      <label>Web Address
        <input type="url" placeholder="https://devmount.com">
      </label>
      <label>Email Address
        <input type="email" placeholder="hello@devmount.com">
      </label>
      <label>Phone Number
        <input type="tel" placeholder="(999) 999-9999">
      </label>
      <label>Search
        <input type="search" placeholder="Enter Search Term">
      </label>
      <label>Number Input
        <input type="number" placeholder="Enter a Number">
      </label>
    </div>
    <div class="flex flex-col gap-2">
      <label>Date input
        <input type="date" value="1970-01-01">
      </label>
      <label>Month input
        <input type="month" value="1970-01">
      </label>
      <label>Week input
        <input type="week" value="1970-W01">
      </label>
      <label>Datetime input
        <input type="datetime" value="1970-01-01T00:00:00Z">
      </label>
      <label>Datetime-local input
        <input type="datetime-local" value="1970-01-01T00:00">
      </label>
      <label>Color input
        <input type="color" value="#e5aa70">
      </label>
      <label>Range input
        <input type="range" value="10">
      </label>
    </div>
  </div>
</div>

```html
<label>Single line text
  <input type="text" placeholder="Song title">
</label>
<label>Secret
  <input type="password" placeholder="Vault code">
</label>
<label>Web Address
  <input type="url" placeholder="https://devmount.com">
</label>
<label>Email Address
  <input type="email" placeholder="hello@devmount.com">
</label>
<label>Phone Number
  <input type="tel" placeholder="(999) 999-9999">
</label>
<label>Search
  <input type="search" placeholder="Enter Search Term">
</label>
<label>Number Input
  <input type="number" placeholder="Enter a Number">
</label>
<label>Date input
  <input type="date" value="1970-01-01">
</label>
<label>Month input
  <input type="month" value="1970-01">
</label>
<label>Week input
  <input type="week" value="1970-W01">
</label>
<label>Datetime input
  <input type="datetime" value="1970-01-01T00:00:00Z">
</label>
<label>Datetime-local input
  <input type="datetime-local" value="1970-01-01T00:00">
</label>
<label>Color input
  <input type="color" value="#e5aa70">
</label>
<label>Range input
  <input type="range" value="10">
</label>
```

<div class="demo">
  <label class="w-full">Give us feedback
    <textarea rows="8" placeholder="Enter your message here"></textarea>
  </label>
</div>

```html
<label>Give us feedback
  <textarea rows="8" placeholder="Enter your message here"></textarea>
</label>
```

### Choices

Input elements with predefined values.

<div class="demo flex flex-wrap gap-8">
  <div>
    <label for="select">Select</label>
    <select id="select">
      <optgroup label="Option Group">
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
        <option disabled>Disabled Four</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label>Checkboxes</label><br>
    <label class="flex gap-2 items-center">
      <input name="checkbox" type="checkbox" checked> Choice A
    </label>
    <label class="flex gap-2 items-center">
      <input name="checkbox" type="checkbox" disabled> Disabled B
    </label>
    <label class="flex gap-2 items-center">
      <input name="checkbox" type="checkbox"> Choice C
    </label>
    <label class="flex gap-2 items-center">
      <input name="checkbox" type="checkbox"> Choice D
    </label>
  </div>
  <div>
    <label>Radiobuttons</label><br>
    <label class="flex gap-2 items-center">
      <input name="radio" type="radio" checked> Option 1
    </label>
    <label class="flex gap-2 items-center">
      <input name="radio" type="radio"> Option 2
    </label>
    <label class="flex gap-2 items-center">
      <input name="radio" type="radio" disabled> Disabled 3
    </label>
    <label class="flex gap-2 items-center">
      <input name="radio" type="radio"> Option 4
    </label>
  </div>
</div>

```html
<label for="select">Select</label>
<select id="select">
  <optgroup label="Option Group">
    <option>Option One</option>
    <option>Option Two</option>
    <option>Option Three</option>
    <option disabled>Disabled Four</option>
  </optgroup>
</select>

<label>Checkboxes</label><br>
<label class="flex gap-2 items-center">
  <input name="checkbox" type="checkbox" checked> Choice A
</label>
<label class="flex gap-2 items-center">
  <input name="checkbox" type="checkbox" disabled> Disabled B
</label>
<label class="flex gap-2 items-center">
  <input name="checkbox" type="checkbox"> Choice C
</label>
<label class="flex gap-2 items-center">
  <input name="checkbox" type="checkbox"> Choice D
</label>

<label>Radiobuttons</label><br>
<label class="flex gap-2 items-center">
  <input name="radio" type="radio" checked> Option 1
</label>
<label class="flex gap-2 items-center">
  <input name="radio" type="radio"> Option 2
</label>
<label class="flex gap-2 items-center">
  <input name="radio" type="radio" disabled> Disabled 3
</label>
<label class="flex gap-2 items-center">
  <input name="radio" type="radio"> Option 4
</label>
```

### Buttons

Buttons used to be control elements, that could be pressed down to trigger a defined action. To distinguish buttons from other clickable elements, they are styled elevated from the page and are pressed in on click.

<div class="demo">
  <button>Click me</button>
</div>

```html
<button>Click me</button>
```

Buttons can also be created with several `<input>` and `<button` types:

<div class="demo">
  <div class="flex gap-8">
    <div class="flex flex-col gap-2">
      <input type="submit" value="<input type=submit>">
      <input type="button" value="<input type=button>">
      <input type="reset" value="<input type=reset>">
      <input type="submit" value="<input disabled>" disabled>
    </div>
    <div class="flex flex-col gap-2">
      <button type="submit">&lt;button type=submit&gt;</button>
      <button type="button">&lt;button type=button&gt;</button>
      <button type="reset">&lt;button type=reset&gt;</button>
      <button type="button" disabled>&lt;button disabled&gt;</button>
    </div>
  </div>
</div>

```html
<input type="submit" value="<input type=submit>">
<input type="button" value="<input type=button>">
<input type="reset" value="<input type=reset>">
<input type="submit" value="<input disabled>" disabled>

<button type="submit">&lt;button type=submit&gt;</button>
<button type="button">&lt;button type=button&gt;</button>
<button type="reset">&lt;button type=reset&gt;</button>
<button type="button" disabled>&lt;button disabled&gt;</button>
```

### Input states

Input fields can be disabled or their value can be valid or invalid on form submit.

<div class="demo">
  <div class="flex flex-col gap-2">
    <label>Error
      <input type="text" placeholder="Wrong Input">
    </label>
    <label>Valid
      <input type="text" placeholder="Valid Input">
    </label>
    <label>Disabled
      <input type="text" placeholder="Disabled Input" disabled>
    </label>
  </div>
</div>

```html
<label>Error
  <input type="text" placeholder="Wrong Input">
</label>
<label>Valid
  <input type="text" placeholder="Valid Input">
</label>
<label>Disabled
  <input type="text" placeholder="Disabled Input" disabled>
</label>
```

### Fieldset

Form inputs and controls can be grouped together within a fieldset.

<div class="demo">
  <fieldset>
    <legend>Authentication</legend>
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Passcode">
    <button type="submit">Sign in</button>
  </fieldset>
</div>

```html
<fieldset>
  <legend>Authentication</legend>
  <input type="text" placeholder="Username">
  <input type="password" placeholder="Passcode">
  <button type="submit">Sign in</button>
</fieldset>
```
