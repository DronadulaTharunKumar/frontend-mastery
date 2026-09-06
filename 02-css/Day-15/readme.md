# Day 15 — CSS Units & Sizing 🎯

Today we’ll learn **CSS units properly and practically**. This is important because professional responsive websites depend heavily on choosing the right units.

You already know basic `px`, `%`, `vw`, etc. Today we'll understand **when and why to use each one**.

---

## 1. Absolute vs Relative Units

CSS units are broadly divided into:

### Absolute units

The most common:

```css
px
```

Example:

```css
.card {
    border-radius: 8px;
    border: 1px solid #ddd;
}
```

`px` gives a predictable size.

### Relative units

Common ones:

```text
%
em
rem
vw
vh
vmin
vmax
```

These can adapt according to their reference.

---

# 2. `px`

You already use this frequently.

```css
.card {
    width: 300px;
    padding: 20px;
}
```

Good for things such as:

- borders
- small fixed spacing
- icons
- controlled component dimensions

But don't build an entire responsive website using fixed `px` widths.

❌

```css
.container {
    width: 1200px;
}
```

On a mobile screen, this can overflow.

Better:

```css
.container {
    width: 100%;
    max-width: 1200px;
}
```

---

# 3. `%` — Percentage

Percentage is relative to the **containing element** for many properties.

Example:

```css
.container {
    width: 80%;
}
```

If the parent/container available width is `1000px`:

```text
80% → 800px
```

This makes percentage useful for responsive layouts.

### Example

```css
.image {
    width: 100%;
}
```

The image can occupy the available width of its container.

---

# 4. `rem` ⭐

This is extremely important for professional CSS.

`rem` is relative to the **root (`html`) font size**.

Normally browsers use:

```css
html {
    font-size: 16px;
}
```

Therefore:

```text
1rem  = 16px
2rem  = 32px
1.5rem = 24px
```

Example:

```css
h1 {
    font-size: 2rem;
}

.card {
    padding: 1.5rem;
}
```

### Why use `rem`?

It makes typography and spacing more scalable and consistent.

---

# 5. `em`

`em` is relative to the **font size of the relevant element/context**.

For example:

```css
.parent {
    font-size: 20px;
}

.child {
    font-size: 2em;
}
```

The child can become:

```text
2 × 20px = 40px
```

`em` can be useful for component-relative sizing, but nested `em` calculations can become confusing.

For your roadmap:

> **Use `rem` as the default choice for scalable typography and spacing.**

---

# 6. `vw` — Viewport Width

`vw` means **1% of the viewport width**.

Example:

```css
h1 {
    font-size: 5vw;
}
```

If viewport width is:

```text
1000px
```

then:

```text
5vw = 50px
```

Useful for responsive sizing.

But this has a problem:

```css
h1 {
    font-size: 5vw;
}
```

On a very small screen, the text can become too small.

On a huge screen, it can become too large.

That's why we learned:

```css
font-size: clamp(2rem, 5vw, 3rem);
```

This gives:

```text
minimum → preferred → maximum
```

---

# 7. `vh` — Viewport Height

`vh` is based on viewport height.

```css
.hero {
    min-height: 100vh;
}
```

This means the hero should be at least approximately the height of the viewport.

Useful for:

- full-screen hero sections
- landing pages
- dashboard layouts

---

# 8. `vmin` and `vmax`

These are less commonly used but important to understand.

### `vmin`

Uses the smaller dimension of the viewport.

### `vmax`

Uses the larger dimension.

For example, if:

```text
viewport width  = 1200px
viewport height = 800px
```

Then approximately:

```text
1vmin = 8px
1vmax = 12px
```

---

# 9. `min()`

You learned this yesterday.

Example:

```css
.container {
    width: min(90%, 1200px);
}
```

Meaning:

> Use whichever value results in the smaller width.

This is very useful for responsive containers.

---

# 10. `max()`

Example:

```css
.hero {
    padding: max(20px, 5vw);
}
```

This means the padding won't become smaller than `20px`.

---

# 11. `clamp()` ⭐⭐⭐

One of the most useful modern CSS functions.

```css
h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
}
```

Think:

```text
clamp(MINIMUM, PREFERRED, MAXIMUM)
```

So:

```css
clamp(2rem, 5vw, 3.5rem)
```

means:

> Never smaller than `2rem`, preferably scale using `5vw`, and never exceed `3.5rem`.

---

# 12. Real Professional Example

Instead of:

```css
.hero h1 {
    font-size: 48px;
}
```

Use:

```css
.hero h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}
```

Instead of:

```css
.container {
    width: 1200px;
}
```

Use:

```css
.container {
    width: min(90%, 1200px);
    margin: auto;
}
```

Instead of:

```css
section {
    padding: 60px;
}
```

You can use:

```css
section {
    padding: clamp(32px, 6vw, 64px) 20px;
}
```

This is much more responsive.

---

# 13. Which Unit Should You Use?

| Unit | Relative to | Common use |
|---|---|---|
| `px` | Fixed CSS pixel | Borders, controlled sizes |
| `%` | Parent/container | Widths, flexible layouts |
| `rem` | Root font size | Typography, spacing |
| `em` | Element/context font size | Component-relative sizing |
| `vw` | Viewport width | Responsive sizing |
| `vh` | Viewport height | Full-screen sections |
| `vmin` | Smaller viewport dimension | Special responsive designs |
| `vmax` | Larger viewport dimension | Special responsive designs |

### Your practical rule

For your projects:

```text
Typography       → rem / clamp()
Spacing           → rem
Container widths  → % / max-width / min()
Responsive sizing → % / vw / clamp()
Full-screen       → vh / min-height
Borders           → px
```

---

