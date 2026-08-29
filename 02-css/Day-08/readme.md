# 🚀 Day 8 — CSS Display & Positioning

Today is **very important** because you'll learn how elements behave on a webpage and how to control their position.

By the end of today, you should understand:

```text
display
├── block
├── inline
├── inline-block
└── none

position
├── static
├── relative
├── absolute
├── fixed
└── sticky
```

---

# Part 1 — `display`

## 1. `display: block`

Block elements normally:

* Start on a new line
* Take the available width
* Allow `width`, `height`, `margin`, and `padding`

Examples:

```html
<div>Box 1</div>
<div>Box 2</div>
<p>Paragraph</p>
<h2>Heading</h2>
```

Think:

```text
┌─────────────────────────────┐
│ Box 1                       │
└─────────────────────────────┘
┌─────────────────────────────┐
│ Box 2                       │
└─────────────────────────────┘
```

Example:

```css
.box {
    display: block;
}
```

`div` is block-level by default.

---

# 2. `display: inline`

Inline elements stay on the **same line** if there is enough space.

Examples:

```html
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
```

They behave roughly like:

```text
Home   About   Contact
```

Common inline elements:

```text
<a>
<span>
<strong>
<em>
```

### Important

With normal inline layout, `width` and `height` don't behave like they do on block-level elements.

---

# 3. `display: inline-block` ⭐

This is a combination of inline + block behavior.

```css
.box {
    display: inline-block;
    width: 150px;
    height: 100px;
}
```

The elements can sit next to each other:

```text
┌──────────┐  ┌──────────┐  ┌──────────┐
│   Box 1  │  │   Box 2  │  │   Box 3  │
└──────────┘  └──────────┘  └──────────┘
```

And unlike normal inline elements, you can control their width and height.

---

# 4. `display: none`

This completely removes the element from the page layout.

```css
.box {
    display: none;
}
```

The element:

```text
❌ Not visible
❌ Doesn't occupy space
```

Important distinction:

```css
display: none;
```

vs.

```css
visibility: hidden;
```

`visibility: hidden` hides the element but **still keeps its space**.

---

# 🧠 Quick Comparison

| Display        | New line? | Width/Height?               |
| -------------- | --------- | --------------------------- |
| `block`        | Yes       | ✅                           |
| `inline`       | No        | Usually not as expected     |
| `inline-block` | No        | ✅                           |
| `none`         | —         | Element removed from layout |

---

# Part 2 — CSS `position`

Now we move to positioning.

The default is:

```css
position: static;
```

---

# 5. `position: static`

This is the default positioning.

```css
.box {
    position: static;
}
```

The element follows the normal document flow.

For example:

```text
Box 1
Box 2
Box 3
```

You generally don't use `top`, `left`, etc. to move a static element.

---

# 6. `position: relative` ⭐⭐⭐

This is extremely important.

```css
.box {
    position: relative;
    top: 20px;
    left: 30px;
}
```

The element moves relative to **its original position**.

Imagine:

```text
Original:

┌───────┐
│ Box   │
└───────┘

After:

       ↓ 20px
          ┌───────┐
          │ Box   │
          └───────┘
             → 30px
```

### Important:

The original space is still reserved.

---

# 7. `position: absolute` ⭐⭐⭐

This is one of the most important concepts.

```css
.box {
    position: absolute;
    top: 20px;
    right: 20px;
}
```

An absolutely positioned element is removed from the normal document flow.

It is positioned relative to its **nearest positioned ancestor**.

Usually we create:

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
}
```

Example:

```html
<div class="card">
    <span class="badge">NEW</span>
    <h2>Product</h2>
</div>
```

CSS:

```css
.card {
    position: relative;
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

Now:

```text
┌─────────────────────────────┐
│                    ┌──────┐ │
│                    │ NEW  │ │
│                    └──────┘ │
│                             │
│       Product               │
│                             │
└─────────────────────────────┘
```

This pattern is used **everywhere** in real frontend development.

---

# ⭐ Remember This Rule

When you see:

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
}
```

Think:

> **The child is positioned relative to the parent.**

This is a very common interview question.

---

# 8. `position: fixed`

A fixed element is positioned relative to the **viewport**.

Example:

```css
.chat-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
}
```

It stays in that location even when you scroll.

Think of:

```text
                    Page
                     ↓
              ┌─────────────┐
              │             │
              │             │
              │             │
              │        💬   │ ← fixed
              └─────────────┘
```

Common uses:

* Floating buttons
* Chat buttons
* Back-to-top buttons
* Fixed navigation

---

# 9. `position: sticky` ⭐⭐

Sticky positioning is very useful for navigation bars.

```css
nav {
    position: sticky;
    top: 0;
}
```

It behaves normally at first.

When you scroll and reach:

```text
top: 0
```

it sticks to the top.

Common use:

```text
Navigation bar
↓
position: sticky
top: 0
```

---

# 🧠 Position Comparison

| Position   | Normal flow? | Reference                   |
| ---------- | ------------ | --------------------------- |
| `static`   | ✅            | Normal document flow        |
| `relative` | ✅            | Its original position       |
| `absolute` | ❌            | Nearest positioned ancestor |
| `fixed`    | ❌            | Viewport                    |
| `sticky`   | ✅/sticky     | Scroll/container context    |

---

# 🛠️ Day 8 Practical

Create:

```text
day-08/
├── index.html
├── style.css
└── README.md
```

## `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 8 - Display and Position</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <h1>CSS Display & Positioning</h1>
    </header>

    <nav>
        <a href="#display">Display</a>
        <a href="#position">Position</a>
    </nav>

    <main>

        <section id="display">

            <h2>Display Types</h2>

            <div class="block-box">Block 1</div>
            <div class="block-box">Block 2</div>

            <div class="inline-box">Inline 1</div>
            <div class="inline-box">Inline 2</div>

            <div class="inline-block-box">Inline Block 1</div>
            <div class="inline-block-box">Inline Block 2</div>

        </section>

        <section id="position">

            <h2>Positioning</h2>

            <div class="card">
                <span class="badge">NEW</span>

                <h3>Frontend Developer</h3>

                <p>
                    Learning CSS positioning step by step.
                </p>
            </div>

        </section>

        <div class="content">
            <p>Scroll down to test sticky and fixed positioning.</p>
            <p>Practice makes CSS easier.</p>
            <p>Keep scrolling...</p>
            <p>Keep scrolling...</p>
            <p>Keep scrolling...</p>
            <p>Keep scrolling...</p>
            <p>Keep scrolling...</p>
            <p>Keep scrolling...</p>
            <p>Keep scrolling...</p>
            <p>Keep scrolling...</p>
        </div>

    </main>

    <button class="floating-button">💬</button>

</body>
</html>
```

---

# `style.css`

Start with:

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f7fa;
}

header {
    text-align: center;
    padding: 30px;
    background-color: #2934b5;
    color: white;
}

nav {
    background-color: #222;
    padding: 15px;
    text-align: center;

    position: sticky;
    top: 0;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
}


/* Display */

.block-box {
    display: block;
    background-color: lightblue;
    padding: 15px;
    margin: 10px;
}

.inline-box {
    display: inline;
    background-color: lightgreen;
}

.inline-block-box {
    display: inline-block;
    width: 150px;
    height: 80px;
    padding: 20px;
    margin: 10px;
    background-color: lightcoral;
}


/* Position */

.card {
    position: relative;

    width: 350px;
    padding: 30px;
    margin: 50px auto;

    background-color: white;
    border: 2px solid #2934b5;
}

.badge {
    position: absolute;

    top: 10px;
    right: 10px;

    padding: 5px 10px;
    background-color: #2934b5;
    color: white;
}

.floating-button {
    position: fixed;

    right: 20px;
    bottom: 20px;

    padding: 15px;
    border: none;
    border-radius: 50%;
}

.content {
    height: 800px;
    padding: 30px;
}
```

---

# 🧪 Experiment 1 — Display

Change:

```css
.block-box {
    display: block;
}
```

to:

```css
.block-box {
    display: inline;
}
```

Observe the difference.

Then try:

```css
.block-box {
    display: inline-block;
    width: 150px;
    height: 80px;
}
```

Observe again.

---

# 🧪 Experiment 2 — Relative Position

Change:

```css
.card {
    position: relative;
}
```

to:

```css
.card {
    position: relative;
    top: 30px;
    left: 30px;
}
```

Notice that the card moves but its original space remains reserved.

---

# 🧪 Experiment 3 — Absolute Position ⭐

Temporarily remove:

```css
.card {
    position: relative;
}
```

and see where the `NEW` badge goes.

Then restore:

```css
.card {
    position: relative;
}
```

Now the badge stays positioned relative to the card.

This experiment is **very important**.

---

# 🧪 Experiment 4 — Fixed

Change:

```css
.floating-button {
    position: fixed;
}
```

to:

```css
.floating-button {
    position: static;
}
```

Scroll the page.

Then restore:

```css
position: fixed;
```

Notice that the button stays at the same viewport location while scrolling.

---

# 🧪 Experiment 5 — Sticky

Your navbar already has:

```css
nav {
    position: sticky;
    top: 0;
}
```

Scroll the page.

The navbar should stick to the top.

---

# 🧠 Day 8 Challenge

Don't run these first. Think.

### Q1

What is the difference between:

```css
display: none;
```

and:

```css
visibility: hidden;
```

### Q2

What is the difference between `block` and `inline`?

### Q3

Why do we commonly use:

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
}
```

### Q4

What is an absolutely positioned element positioned relative to?

### Q5

What is `position: fixed` relative to?

### Q6

What is `position: sticky` commonly used for?

### Q7

Does `position: relative` remove an element from normal document flow?

### Q8

Does `position: absolute` remove an element from normal document flow?

### Q9

What does this do?

```css
position: absolute;
top: 0;
right: 0;
```

### Q10

What is the difference between `relative` and `absolute`?

---

## 🎤 Interview Tip

Remember this structure:

> **Relative = move from original position.**
> **Absolute = remove from normal flow and position relative to a positioned ancestor.**
> **Fixed = attach to viewport.**
> **Sticky = behaves normally until a scroll threshold, then sticks.**

Complete the practical experiments first, then send me your **10 answers**. I'll evaluate Day 8 just like we did for Days 6 and 7.
