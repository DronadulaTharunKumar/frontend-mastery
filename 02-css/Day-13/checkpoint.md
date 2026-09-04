Absolutely. Here is your **Day 13 `checkpoint.md`** written in a professional **interview-style Q&A format**, based on your own answers and the concepts you learned.

# Day 13 — CSS Advanced Selectors & Pseudo-Classes/Pseudo-Elements

## Interview Checkpoint

### 1. What is the difference between `.card p` and `.card > p`?

**Answer:**

`.card p` selects all `<p>` elements that are descendants of an element having the `.card` class, including nested elements.

`.card > p` selects only `<p>` elements that are direct children of `.card`.

**Example:**

```css
.card p {
    color: blue;
}

.card > p {
    color: red;
}
```

---

### 2. What is an element selector in CSS?

**Answer:**

An element selector selects HTML elements based on their tag name.

For example:

```css
p {
    color: blue;
}
```

This selects all `<p>` elements on the page.

---

### 3. What does `:first-child` do?

**Answer:**

`:first-child` is a pseudo-class that selects an element only when it is the first child of its parent.

**Example:**

```css
.card:first-child {
    border: 2px solid blue;
}
```

---

### 4. What is `:nth-child()`?

**Answer:**

`:nth-child()` is a pseudo-class used to select children based on their position or pattern.

**Example:**

```css
.card:nth-child(2) {
    background-color: lightgray;
}
```

This selects the second child.

It can also be used with patterns:

```css
.card:nth-child(odd) {
    background-color: #f0f0f0;
}

.card:nth-child(even) {
    background-color: #e0e0e0;
}
```

---

### 5. What does the `:not()` pseudo-class do?

**Answer:**

`:not()` selects elements that do **not** match the specified selector.

**Example:**

```css
a:not(.button) {
    color: blue;
}
```

This selects `<a>` elements that do not have the `.button` class.

---

### 6. What is the `:focus` pseudo-class?

**Answer:**

`:focus` is a pseudo-class that applies styles when an element receives focus.

This commonly happens when a user clicks an interactive element or navigates to it using the keyboard, such as by pressing the **Tab** key.

**Example:**

```css
.button:focus {
    outline: 2px solid yellow;
}
```

It is important for **keyboard accessibility**.

---

### 7. What is the difference between `:hover` and `::before`?

**Answer:**

`:hover` is a **pseudo-class** that applies styles based on the state of an element when the mouse pointer is over it.

`::before` is a **pseudo-element** that creates a generated pseudo-element before the actual content of an element.

**Example:**

```css
button:hover {
    background-color: yellow;
}

.card::before {
    content: "★";
}
```

---

### 8. Give some examples of CSS pseudo-elements.

**Answer:**

Common pseudo-elements include:

```text
::before
::after
::first-letter
::first-line
::selection
```

They are useful for styling specific portions of an element or generating additional content.

---

### 9. Why are `::before` and `::after` commonly used?

**Answer:**

They are commonly used to generate additional decorative content without adding extra HTML elements.

For example:

```css
h2::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
}
```

This can be used to create a decorative underline below a heading.

---

### 10. What is the difference between a pseudo-class and a pseudo-element?

**Answer:**

A **pseudo-class** is used to style an element based on its state, condition, or position.

Examples:

```css
:hover
:focus
:first-child
:nth-child()
:not()
```

A **pseudo-element** is used to style a specific part of an element or generate additional content.

Examples:

```css
::before
::after
::first-letter
::first-line
::selection
```

**In short:**

```text
Pseudo-class  → state, condition, or position
                :hover
                :focus
                :nth-child()

Pseudo-element → part or generated content
                 ::before
                 ::after
                 ::first-letter
```

---

## Practical Concepts Demonstrated

During Day 13, I implemented:

* Advanced CSS selectors
* Descendant selectors
* Child selectors
* `:first-child`
* `:last-child`
* `:nth-child()`
* `:not()`
* `:focus-visible`
* `::after`
* CSS generated content
* Keyboard accessibility
* Responsive CSS
* CSS transitions and animations
* Reduced-motion accessibility

## Interview Key Point

**Remember:**

> **Pseudo-class = state/condition/position**

> **Pseudo-element = specific part or generated content**

## Day 13 Status

* [x] Advanced Selectors
* [x] Pseudo-classes
* [x] Pseudo-elements
* [x] Accessibility Focus
* [x] Practical Portfolio Implementation
* [x] Interview Checkpoint

**Day 13 — Completed**

This is ready to save as **`checkpoint.md`** in your Day 13 GitHub folder.
