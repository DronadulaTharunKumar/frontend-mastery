# 🚀 Day 13 — Advanced CSS Selectors & Pseudo-Classes

Day 12 is complete. Today we move from basic CSS effects into **writing more precise, professional CSS**.

## 🎯 Day 13 Goal

By the end of today, you should be able to:

* Select elements precisely
* Use attribute selectors
* Use child/descendant selectors
* Use pseudo-classes
* Use `:nth-child()`
* Use `:first-child` / `:last-child`
* Use `:focus`
* Use `:not()`
* Understand pseudo-elements
* Apply these concepts to your portfolio

---

# 1. Descendant Selector

Select elements **inside another element**.

```css
.card p {
    color: gray;
}
```

This selects every `<p>` inside `.card`.

```html
<div class="card">
    <p>This is selected.</p>
</div>
```

Think:

> `.card p` = find `p` anywhere inside `.card`.

---

# 2. Child Selector `>`

Select only **direct children**.

```css
.card > p {
    color: blue;
}
```

Example:

```html
<div class="card">
    <p>Selected</p>

    <div>
        <p>Not selected</p>
    </div>
</div>
```

Why?

The first `<p>` is a direct child.

The second `<p>` is inside another `<div>`.

### Difference

```css
.card p
```

= any descendant

```css
.card > p
```

= direct child only

---

# 3. Adjacent Sibling `+`

Select the element immediately after another element.

```css
h2 + p {
    color: blue;
}
```

```html
<h2>About</h2>
<p>This gets selected.</p>
<p>This doesn't.</p>
```

---

# 4. General Sibling `~`

Select sibling elements that come after another element.

```css
h2 ~ p {
    color: gray;
}
```

```html
<h2>About</h2>
<p>Selected</p>
<p>Also selected</p>
<p>Also selected</p>
```

---

# 5. Attribute Selectors

Very useful when working with forms.

```css
input[type="text"] {
    border: 1px solid blue;
}
```

Only:

```html
<input type="text">
```

gets selected.

You can also use:

```css
input[type="email"] {
    border-color: green;
}
```

---

# 6. `:first-child`

Select the first child.

```css
li:first-child {
    font-weight: bold;
}
```

Example:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Only **HTML** gets the style.

---

# 7. `:last-child`

```css
li:last-child {
    color: red;
}
```

Only **JavaScript** gets selected.

---

# 8. `:nth-child()`

This is extremely useful.

```css
li:nth-child(2) {
    color: blue;
}
```

Selects the second child.

You can also use:

```css
li:nth-child(odd) {
    background-color: #f5f5f5;
}
```

and:

```css
li:nth-child(even) {
    background-color: white;
}
```

---

# 9. `:not()`

Select everything **except** something.

```css
button:not(.primary) {
    background-color: gray;
}
```

This selects buttons that don't have the `primary` class.

Very useful in real projects.

---

# 10. `:focus`

You already learned hover.

Now learn keyboard/input focus.

```css
input:focus {
    border-color: blue;
    outline: none;
}
```

When the user clicks or tabs into the input, the style changes.

---

# 11. `:checked`

Useful for:

* Checkbox
* Radio button

Example:

```css
input:checked + label {
    font-weight: bold;
}
```

---

# 12. `:disabled`

```css
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

---

# 13. Pseudo-Elements

Don't confuse these with pseudo-classes.

### Pseudo-class

```css
button:hover
```

Describes a **state**.

### Pseudo-element

```css
h2::before
```

Targets a **part/additional generated content**.

Common pseudo-elements:

```text
::before
::after
::first-letter
::first-line
::selection
```

---

# 14. `::before`

Example:

```css
h2::before {
    content: "★ ";
}
```

Result:

```text
★ About Me
```

Important:

`::before` generally needs:

```css
content: "";
```

or some content value to generate the pseudo-element.

---

# 15. `::after`

```css
h2::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: #2934b5;
    margin: 10px auto;
}
```

This can create a small underline under headings.

---

# 🧪 Day 13 Exercise 1 — Selector Practice

Create this HTML:

```html
<div class="skills">
    <p>HTML</p>
    <p>CSS</p>
    <p>JavaScript</p>
    <p>Java</p>
    <p>SQL</p>
</div>
```

Write CSS to:

1. Make the first skill bold.
2. Make the last skill red.
3. Make the second skill blue.
4. Make odd skills have a light background.

**Don't copy the solution. Write it yourself.**

---

# 🧪 Exercise 2 — Form Selectors

Create:

```html
<form>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">

    <button type="submit">Submit</button>
</form>
```

Your task:

* Style text input
* Style email input differently
* Change border when input is focused
* Style the button when disabled

---

# 🧪 Exercise 3 — Pseudo-Element

Create:

```html
<h2>My Projects</h2>
```

Use `::after` to create a small line underneath the heading.

Requirements:

```text
        My Projects
        ───────────
```

Don't use an extra `<div>` for the line.

This is specifically to practice `::after`.

---

# 🏆 Day 13 Final Challenge

Upgrade your existing **Developer Portfolio**.

Add:

### Navigation

Use:

```css
nav a:hover
nav a:focus-visible
```

### Skills

Use:

```css
.skills-grid article:first-child
.skills-grid article:nth-child(...)
.skills-grid article:last-child
```

### Section headings

Use:

```css
section > h2::after
```

to create a professional underline.

### Buttons

Use:

```css
button:hover
button:focus-visible
button:disabled
```

---

# 🧠 Day 13 Interview Checkpoint

After completing the exercises, you should be able to answer:

1. What is the difference between `.card p` and `.card > p`?
2. What is an attribute selector?
3. What does `:first-child` do?
4. What does `:nth-child(2)` do?
5. What is `:not()`?
6. What is `:focus`?
7. Difference between `:hover` and `::before`?
8. What are pseudo-elements?
9. Why does `::before` usually need `content`?
10. Difference between pseudo-class and pseudo-element?

---

## 📌 Today's learning rule

**Don't memorize selectors. Understand what relationship/state they represent.**

For example:

```css
.card > p
```

Think:

> "Give me paragraphs that are direct children of `.card`."

That mental model will make advanced CSS much easier.

### Day 13 workflow

**Learn → Exercise 1 → Exercise 2 → Exercise 3 → Portfolio Challenge → Send me your code → Review → Interview checkpoint → GitHub proof**

Start with **Exercise 1** and send me your HTML + CSS. I'll review it before you move to Exercise 2.
