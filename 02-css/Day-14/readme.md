## 🚀 Day 14 — CSS Professional Layout & UI Design

Day 13 is complete. Now we move from **learning individual CSS features → combining them to build professional UI**.

### 🎯 Day 14 Goal

By the end of today, you should be able to build a professional-looking **responsive landing page** using:

* CSS variables
* `clamp()`
* `min()`, `max()`
* Professional spacing
* Typography
* `max-width` containers
* CSS architecture
* Cards and buttons
* Shadows and borders
* Responsive layouts
* Hover/focus states
* Mobile-first design

---

# 1. CSS Variables

Instead of repeatedly writing the same colors:

```css
color: #2934b5;
background-color: #2934b5;
border-color: #2934b5;
```

create reusable variables:

```css
:root {
    --primary-color: #2934b5;
    --secondary-color: #ffcc00;
    --text-color: #222;
    --background-color: #f5f7fa;
    --white: #ffffff;
}
```

Then:

```css
button {
    background-color: var(--primary-color);
    color: var(--white);
}
```

### Why use variables?

If you later change:

```css
--primary-color: #2934b5;
```

to:

```css
--primary-color: #1d4ed8;
```

all components using that variable update automatically.

---

# 2. Professional Container

Instead of allowing content to stretch across the entire screen:

```css
.container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
}
```

This is a very common professional layout pattern.

Think:

```text
Desktop

| screen                                      |
|                                             |
|    |------ 1200px container ------|         |
|    |                              |         |
|    |         CONTENT              |         |
|    |                              |         |
|    |------------------------------|         |
|                                             |
```

---

# 3. `clamp()`

This is an important modern CSS feature.

```css
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}
```

It means:

```text
minimum → preferred → maximum
  2rem      5vw        4rem
```

The font can grow/shrink depending on screen size but won't become smaller than `2rem` or larger than `4rem`.

This reduces the need for many media queries.

---

# 4. Professional Spacing

Avoid random values everywhere:

```css
margin: 17px;
padding: 23px;
gap: 19px;
```

Instead, create a spacing system:

```css
:root {
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 40px;
    --space-xxl: 64px;
}
```

Then:

```css
.card {
    padding: var(--space-lg);
}
```

This keeps your UI consistent.

---

# 5. Typography

A professional website needs hierarchy.

```css
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}

h2 {
    font-size: 2rem;
}

p {
    line-height: 1.6;
}
```

Important properties:

```text
font-family
font-size
font-weight
line-height
letter-spacing
text-align
```

### Very important

Don't focus only on `font-size`.

**`line-height` is extremely important for readability.**

---

# 6. Card Design

A professional card might look like:

```css
.card {
    padding: 24px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

Notice:

```text
padding
border
border-radius
box-shadow
```

These four properties are frequently used together.

---

# 7. Button Design

Instead of:

```css
button {
    padding: 10px;
}
```

create a reusable button:

```css
.button {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s ease,
                background-color 0.2s ease;
}

.button:hover {
    transform: translateY(-2px);
}
```

---

# 8. `min()`, `max()` and `clamp()`

These three are worth remembering.

### `min()`

Uses the smaller value:

```css
width: min(90%, 1200px);
```

Meaning:

> Use 90% of the available width, but never exceed 1200px.

### `max()`

Uses the larger value:

```css
padding: max(20px, 5vw);
```

### `clamp()`

Keeps a value between minimum and maximum:

```css
font-size: clamp(2rem, 5vw, 4rem);
```

---

# 🧠 Day 14 Exercise 1

Create this HTML:

```html
<div class="container">
    <h1>Build Better Websites</h1>
    <p>
        Learn modern frontend development and build
        professional responsive websites.
    </p>

    <a href="#" class="button">Start Learning</a>
</div>
```

Create CSS using:

### Requirements

1. Create CSS variables for:

   * primary color
   * secondary color
   * text color
   * background color

2. `.container`

   * `max-width`
   * centered using `margin`
   * padding

3. `h1`

   * use `clamp()`

4. Paragraph

   * readable `line-height`

5. `.button`

   * padding
   * border-radius
   * background color
   * transition

6. `.button:hover`

   * change background
   * slight movement using `translateY()`

### 🎯 Important

**Don't copy my solution.**

Write it yourself and send me your **HTML + CSS**.

I'll review it like a senior frontend developer and then we'll move to **Exercise 2 → Exercise 3 → Day 14 project → interview checkpoint**.
