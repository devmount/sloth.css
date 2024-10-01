---
title: 'Core: Typography - Sloth.css'
description: Drop-in styles of Sloth.css for all typography related HTML tags.
---

## Typography

The presentation of text is one of the most basic and most important tasks.
Here is how Sloth.css maintains a consistent representation of text in different forms.

### Headings

<div class="demo">
  <h1>Level 1 heading <small><code>42px</code></small></h1>
  <h2>Level 2 heading <small><code>36px</code></small></h2>
  <h3>Level 3 heading <small><code>32px</code></small></h3>
  <h4>Level 4 heading <small><code>26px</code></small></h4>
  <h5>Level 5 heading <small><code>20px</code></small></h5>
  <h6>Level 6 heading <small><code>16px</code></small></h6>
</div>

```html
<h1>Level 1 heading <small><code>42px</code></small></h1>
<h2>Level 2 heading <small><code>36px</code></small></h2>
<h3>Level 3 heading <small><code>32px</code></small></h3>
<h4>Level 4 heading <small><code>26px</code></small></h4>
<h5>Level 5 heading <small><code>20px</code></small></h5>
<h6>Level 6 heading <small><code>16px</code></small></h6>
```

### Paragraphs

<div class="demo">
  <h3>The importance of words</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
  <p>Nunc viverra viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus vehicula convallis nisl, id suscipit dui semper at. In eu iaculis lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non massa sit amet ornare. Integer placerat est vitae nisl molestie, eget rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p>
</div>

```html
<h3>The importance of words</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
<p>Nunc viverra viverra nisl, vel maximus turpis ornare a...</p>
```

### Blockquote

<div class="demo">
  <blockquote>
    <p>Etiam porttitor egestas elit, at venenatis neque accumsan eu. Nulla viverra odio nisi, quis commodo tellus tristique non. Proin ac ante at orci euismod eleifend. Quisque nisi sapien, dapibus in venenatis sit amet, posuere non purus. In sit amet metus erat. Pellentesque nec neque eleifend, luctus ipsum at, ullamcorper nunc. Pellentesque sagittis, dolor eu bibendum lacinia, orci ex bibendum risus, at tincidunt augue lacus eleifend diam. Nulla facilisis velit ut est auctor sollicitudin. Morbi eget lectus a lacus maximus molestie in ut lorem.</p>
    <p>Vestibulum ut erat sapien. Duis eros est, tempus a rutrum eu, rhoncus at ante. Vestibulum congue vel nunc et dapibus. Ut tristique facilisis orci ac pretium. Nunc et sodales turpis. Nulla pretium augue vitae faucibus tempor. Aliquam convallis mollis feugiat. Ut non pellentesque sem. Suspendisse interdum, neque at hendrerit varius, enim neque imperdiet enim, pellentesque efficitur leo orci non erat.</p>
    <cite>Said no one, ever.</cite>
  </blockquote>
</div>

```html
<blockquote>
  <p>Etiam porttitor egestas elit, at venenatis neque accumsan eu...</p>
  <p>Vestibulum ut erat sapien. Duis eros est, tempus a rutrum eu...</p>
  <cite>Said no one, ever.</cite>
</blockquote>
```

### Lists

<div class="demo flex flex-wrap gap-2">
  <div>
    <h5>Definition list</h5>
    <dl>
      <dt>Beast of Bodmin</dt>
      <dd>A large feline inhabiting Bodmin Moor.</dd>
      <dt>Morgawr</dt>
      <dd>A sea serpent.</dd>
      <dt>Owlman</dt>
      <dd>A giant owl-like creature.</dd>
    </dl>
  </div>
  <div>
    <h5>Ordered List</h5>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3
        <ol>
          <li>Nested Ordered Item 3.1</li>
          <li>Nested Ordered Item 3.2</li>
          <li>Nested Ordered Item 3.3</li>
        </ol>
      </li>
      <li>Item 4
        <ul>
          <li>Nested Unordered Item 4.1</li>
          <li>Nested Unordered Item 4.2</li>
          <li>Nested Unordered Item 4.3</li>
        </ul>
      </li>
    </ol>
  </div>
  <div>
    <h5>Unordered List</h5>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3
        <ol>
          <li>Nested Ordered Item 3.1</li>
          <li>Nested Ordered Item 3.2</li>
          <li>Nested Ordered Item 3.3</li>
        </ol>
      </li>
      <li>Item 4
        <ul>
          <li>Nested Unordered Item 4.1</li>
          <li>Nested Unordered Item 4.2</li>
          <li>Nested Unordered Item 4.3</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

```html
<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>
  ...
</dl>
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3
    <ol>
      <li>Nested Ordered Item 3.1</li>
      ...
    </ol>
  </li>
  ...
</ol>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3
    <ol>
      <li>Nested Ordered Item 3.1</li>
      ...
    </ol>
  </li>
  ...
</ul>
```

### Horizontal rule

<div class="demo">
  <hr />
</div>

```html
<hr />

```

### Table

<div class="demo">
  <table>
    <caption>Table Caption</caption>
    <thead>
      <tr>
        <th>Table Heading 1</th>
        <th>Table Heading 2</th>
        <th>Table Heading 3</th>
        <th>Table Heading 4</th>
        <th>Table Heading 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table Cell 1&times;1</td>
        <td>Table Cell 1&times;2</td>
        <td>Table Cell 1&times;3</td>
        <td>Table Cell 1&times;4</td>
        <td>Table Cell 1&times;5</td>
      </tr>
      <tr>
        <td>Table Cell 2&times;1</td>
        <td>Table Cell 2&times;2</td>
        <td>Table Cell 2&times;3</td>
        <td>Table Cell 2&times;4</td>
        <td>Table Cell 2&times;5</td>
      </tr>
      <tr>
        <td>Table Cell 3&times;1</td>
        <td>Table Cell 3&times;2</td>
        <td>Table Cell 3&times;3</td>
        <td>Table Cell 3&times;4</td>
        <td>Table Cell 3&times;5</td>
      </tr>
      <tr>
        <td>Table Cell 4&times;1</td>
        <td>Table Cell 4&times;2</td>
        <td>Table Cell 4&times;3</td>
        <td>Table Cell 4&times;4</td>
        <td>Table Cell 4&times;5</td>
      </tr>
      <tr>
        <td>Table Cell 5&times;1</td>
        <td>Table Cell 5&times;2</td>
        <td>Table Cell 5&times;3</td>
        <td>Table Cell 5&times;4</td>
        <td>Table Cell 5&times;5</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Table Footer 1</th>
        <th>Table Footer 2</th>
        <th>Table Footer 3</th>
        <th>Table Footer 4</th>
        <th>Table Footer 5</th>
      </tr>
    </tfoot>
  </table>
</div>

```html
<table>
  <caption>Table Caption</caption>
  <thead>
    <tr>
      <th>Table Heading 1</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table Cell 1&times;1</td>
      <td>Table Cell 1&times;2</td>
      ...
    </tr>
    ...
  </tbody>
  <tfoot>
    <tr>
      <th>Table Footer 1</th>
      ...
    </tr>
  </tfoot>
</table>

```

### Code

<div class="demo">
  <p>Pressing <kbd>F5</kbd> reloads the page, while running <code>await navigator.clipboard.writeText('Sample text');</code> copies <samp>Sample text</samp> to your clipboard.</code></p>
  <pre>P R E F O R M A T T E D T E X T
! " # $ % &amp; ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~ </pre>
</div>

```html
  <p>
    Pressing <kbd>F5</kbd> reloads the page,
    while running <code>await navigator.clipboard.writeText('Sample text');</code>
    copies <samp>Sample text</samp> to your clipboard.
  </p>
  <pre>P R E F O R M A T T E D T E X T ...</pre>
```

### Inline elements

<div class="demo">
Please visit <a href="https://github.com/devmount/sloth.css">sloth.css on GitHub</a>.
</div>

```html
Please visit <a href="https://github.com/devmount/sloth.css">sloth.css on GitHub</a>.
```

<div class="demo">
It is <strong>strongly</strong> adviced to do so.
</div>

```html
It is <strong>strongly</strong> adviced to do so.
```

<div class="demo">
It surely can't be <em>emphasized</em> enough.
</div>

```html
It surely can't be <em>emphasized</em> enough.
```

<div class="demo">
The two most popular science courses offered by the school are <b>chemistry</b> (the study of chemicals
and the composition of substances) and <b>physics</b> (the study of the nature and properties of matter
and energy).
</div>

```html
... offered by the school are <b>chemistry</b> (the study ...
```

<div class="demo">
<i>Musa</i> is one of two or three genera in the family <i>Musaceae</i>;
it includes bananas and plantains.
</div>

```html
<i>Musa</i> is one of two or three genera in the family <i>Musaceae</i>;
it includes bananas and plantains.
```

<div class="demo">
You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.
</div>

```html
You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.
```

<div class="demo">
There is <del>nothing</del> <ins>no code</ins> either good or bad,
but <del>thinking</del> <ins>running it</ins> makes it so..
</div>

```html
There is <del>nothing</del> <ins>no code</ins> either good or bad,
but <del>thinking</del> <ins>running it</ins> makes it so..
```

<div class="demo">
<s>There will be a few tickets available at the box office tonight.</s> SOLD OUT!
</div>

```html
<s>There will be a few tickets available at the box office tonight.</s> SOLD OUT!
```

<div class="demo">
The <em>Pythagorean theorem</em> is often expressed as the following equation:
<var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
</div>

```html
The <em>Pythagorean theorem</em> is often expressed as the following equation:
<var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
```

<div class="demo">
Almost every developer's favorite molecule is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>,
also known as "caffeine."
</div>

```html
Almost every developer's favorite molecule is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>,
also known as "caffeine."
```

<div class="demo">
Start contributing to sloth.css now!<br >
<small>The project is licensed under MIT License.</small>
</div>

```html
Start contributing to sloth.css now!<br >
<small>The project is licensed under MIT License.</small>
```

<div class="demo">
Pog's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.
</div>

```html
Pog's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.
```

<div class="demo">
When Dave asks HAL to open the pod bay door, HAL answers:
<q cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
  I'm sorry, Dave. I'm afraid I can't do that.
</q>
</div>

```html
When Dave asks HAL to open the pod bay door, HAL answers:
<q cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
  I'm sorry, Dave. I'm afraid I can't do that.
</q>
```

<div class="demo">
More information can be found in <cite>[ISO-0000]</cite>.
</div>

```html
More information can be found in <cite>[ISO-0000]</cite>.
```

<div class="demo">
A <dfn>validator</dfn> is a program that checks for syntax errors in code or documents.
</div>

```html
A <dfn>validator</dfn> is a program that checks for syntax errors in code or documents.
```

<div class="demo">
It is a period of civil war. Rebel spaceships, striking from a hidden base,
have won their first victory against the evil Galactic Empire. During the
battle, <mark>Rebel spies managed to steal secret plans</mark> to the Empire's
ultimate weapon, the DEATH STAR, an armored space station with enough power to
destroy an entire planet.
</div>

```html
... During the
battle, <mark>Rebel spies managed to steal secret plans</mark> to the Empire's ultimate weapon ...
```

<div class="demo">
The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>,
where <var>l</var> represents the length, <var>w</var> the width and <var>h</var> the height of the box.
</div>

```html
The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>,
where <var>l</var> represents the length, <var>w</var> the width and <var>h</var> the height of the box.
```

<div class="demo">
The Cure will be celebrating their 40th anniversary on <time datetime="2018-07-07">July 7</time> in
London's Hyde Park. The concert starts at <time datetime="20:00">20:00</time> and you'll be able to enjoy
the band for at least <time datetime="PT2H30M">2h 30m</time>.
</div>

```html
The Cure will be celebrating their 40th anniversary on <time datetime="2018-07-07">July 7</time> in
London's Hyde Park. The concert starts at <time datetime="20:00">20:00</time> and you'll be able to enjoy
the band for at least <time datetime="PT2H30M">2h 30m</time>.
```
