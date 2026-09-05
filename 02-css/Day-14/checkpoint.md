# Day 14 — CSS Professional UI & Responsive Design Checkpoint

## 1. What are CSS custom properties?

CSS custom properties are reusable variables defined using `--variable-name` and accessed using `var()`.

Example:

```css
:root {
    --primary-color: #2934b5;
}

button {
    background-color: var(--primary-color);
}
```

**Interview Answer:**
CSS custom properties allow us to store reusable values such as colors, spacing, and font sizes. They improve consistency, maintainability, and make it easier to update a design.

---

## 2. Why do we use `:root` for CSS variables?

`:root` represents the highest-level element of the document. Defining variables there makes them available throughout the page.

---

## 3. What is `clamp()`?

`clamp()` allows a CSS property to have a minimum value, preferred responsive value, and maximum value.

Syntax:

```css
font-size: clamp(minimum, preferred, maximum);
```

Example:

```css
h1 {
    font-size: clamp(2rem, 5vw, 3rem);
}
```

**Interview Answer:**
`clamp()` is useful for creating responsive values without requiring many media queries.

---

## 4. What is the difference between `min()`, `max()`, and `clamp()`?

* `min()` chooses the smaller value.
* `max()` chooses the larger value.
* `clamp()` keeps a value between a minimum and maximum while allowing a preferred responsive value.

---

## 5. Why do we use `max-width` with `margin: auto`?

Example:

```css
.container {
    max-width: 1200px;
    margin: auto;
}
```

It prevents content from becoming excessively wide on large screens and centers the container.

---

## 6. Why is `repeat(auto-fit, minmax())` useful?

Example:

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

It allows Grid columns to automatically adjust based on the available screen width.

This is especially useful for responsive cards.

---

## 7. Why should we use CSS variables for spacing?

A spacing system provides consistent distances throughout the website.

Example:

```css
:root {
    --space-small: 8px;
    --space-medium: 16px;
    --space-large: 24px;
}
```

This makes the design easier to maintain.

---

## 8. What is `line-height`?

`line-height` controls the vertical space between lines of text.

Example:

```css
p {
    line-height: 1.6;
}
```

It improves readability, especially for paragraphs.

---

## 9. What is `:focus-visible`?

`:focus-visible` applies styles when an element receives keyboard-visible focus.

Example:

```css
button:focus-visible {
    outline: 2px solid yellow;
}
```

It improves keyboard accessibility.

---

## 10. Why should we avoid excessive animations?

Too many animations can make a website distracting and can negatively affect usability.

Professional websites generally use subtle transitions and animations to improve interaction rather than distract users.

---

## 11. What is the purpose of a responsive breakpoint?

A breakpoint allows CSS to change the layout when the viewport reaches a particular size.

Example:

```css
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
    }
}
```

---

## 12. What makes a CSS design professional?

Important factors include:

* Consistent spacing
* Clear typography
* Responsive layouts
* Good color contrast
* Reusable variables
* Appropriate whitespace
* Subtle interactions
* Accessibility
* Maintainable CSS
* Consistent component styling

---

# Day 14 Practical Checkpoint

Before moving to Day 15, I should be able to:

* [x] Create CSS variables
* [x] Use `var()`
* [x] Use `clamp()`
* [x] Create responsive containers
* [x] Build responsive cards
* [x] Use CSS Grid
* [x] Use Flexbox
* [x] Create responsive hero sections
* [x] Create reusable buttons
* [x] Add hover effects
* [x] Add focus-visible states
* [x] Use pseudo-elements
* [x] Build a complete responsive landing page

## Day 14 Status

**Completed — 10/10**

## GitHub Evidence

Recommended commit:

```text
feat: complete day 14 css mini project
```
