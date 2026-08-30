# 🚀 Day 9 — CSS Flexbox

Today is a **major milestone** in your frontend journey.

Until Day 8, you learned how elements behave and how to position them. From today, you'll learn how to build **real responsive layouts** using **Flexbox**.

### 🎯 Day 9 goals

By the end of today, you should understand:

```text
Flexbox
│
├── display: flex
├── flex-direction
├── justify-content
├── align-items
├── flex-wrap
├── gap
├── align-content
│
└── Flex items
    ├── flex-grow
    ├── flex-shrink
    └── flex-basis
```

---

# 1. What is Flexbox?

**Flexbox** is a CSS layout system used to arrange elements in **one dimension** — either a row or a column.

Example:

```text
┌────────┐  ┌────────┐  ┌────────┐
│   A    │  │   B    │  │   C    │
└────────┘  └────────┘  └────────┘
```

Instead of manually using margins or `position: absolute`, Flexbox lets CSS handle the layout.

---

# 2. `display: flex` ⭐⭐⭐

You create a flex container:

```css
.container {
    display: flex;
}
```

The children automatically become **flex items**.

HTML:

```html
<div class="container">
    <div>Box 1</div>
    <div>Box 2</div>
    <div>Box 3</div>
</div>
```

By default:

```text
Box 1   Box 2   Box 3
```

---

# 3. Main Axis and Cross Axis ⭐⭐⭐

This is extremely important.

With:

```css
.container {
    display: flex;
    flex-direction: row;
}
```

the main axis is horizontal:

```text
MAIN AXIS →
```

and the cross axis is vertical:

```text
       ↑
       │
CROSS  │
AXIS   │
       ↓
```

Don't memorize blindly.

### Rule:

> `justify-content` → controls the **main axis**

> `align-items` → controls the **cross axis**

---

# 4. `flex-direction`

Controls the direction of flex items.

### `row` — default

```css
flex-direction: row;
```

```text
A  B  C
→
```

### `row-reverse`

```css
flex-direction: row-reverse;
```

```text
C  B  A
```

### `column`

```css
flex-direction: column;
```

```text
A
B
C
```

### `column-reverse`

```css
flex-direction: column-reverse;
```

```text
C
B
A
```

---

# 5. `justify-content` ⭐⭐⭐

Controls how items are distributed along the **main axis**.

Example:

```css
.container {
    display: flex;
    justify-content: center;
}
```

Result:

```text
        A   B   C
```

Important values:

### `flex-start`

```text
A B C
```

### `center`

```text
      A B C
```

### `flex-end`

```text
            A B C
```

### `space-between`

```text
A        B        C
```

### `space-around`

```text
  A      B      C
```

### `space-evenly`

```text
    A    B    C
```

---

# 6. `align-items` ⭐⭐⭐

Controls items along the **cross axis**.

For a row:

```css
.container {
    display: flex;
    align-items: center;
}
```

It vertically centers the items.

This is one of the most common CSS patterns:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

It centers content horizontally **and** vertically when the axes are the usual row/column directions.

---

# 7. `gap` ⭐⭐⭐

Creates space **between flex items**.

```css
.container {
    display: flex;
    gap: 20px;
}
```

Instead of doing:

```css
margin-right: 20px;
```

on every item, you can use:

```css
gap: 20px;
```

Example:

```text
A    20px    B    20px    C
```

Very commonly used in modern CSS.

---

# 8. `flex-wrap`

By default, flex items try to remain on one line.

```css
flex-wrap: nowrap;
```

If you want them to move to another line:

```css
flex-wrap: wrap;
```

Example:

```text
A  B  C  D
E  F  G  H
```

This is extremely useful for responsive cards.

---

# 9. `align-content`

Don't confuse:

```css
align-items
```

with:

```css
align-content
```

### `align-items`

Controls alignment of items on the **cross axis**.

### `align-content`

Controls the spacing/alignment of **multiple flex lines** when wrapping occurs.

You'll use `align-items` much more often.

---

# 10. Flex Item Properties

These properties are applied to the **children**, not the container.

---

## `flex-grow`

Controls how much an item can grow when extra space is available.

```css
.item {
    flex-grow: 1;
}
```

Example:

```text
A        B        C
```

If all have:

```css
flex-grow: 1;
```

they can share available extra space equally.

---

## `flex-shrink`

Controls how much an item can shrink when there isn't enough space.

```css
.item {
    flex-shrink: 1;
}
```

Default is generally:

```css
flex-shrink: 1;
```

---

## `flex-basis`

Defines the initial main-axis size of a flex item.

```css
.item {
    flex-basis: 200px;
}
```

Think:

> "Start this item at around 200px along the main axis."

---

# 11. `flex` shorthand ⭐

Instead of:

```css
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
```

you can write:

```css
.item {
    flex: 1 1 200px;
}
```

You'll see this frequently in real projects.

---

# 🧠 Most Important Flexbox Pattern

Memorize this:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

You'll use this **again and again**.

---

# 🛠️ Day 9 Practical Project

Create:

```text
frontend-learning/
└── day-09/
    ├── index.html
    ├── style.css
    ├── README.md
    └── checkpoint.md
```

## `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 9 - Flexbox</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <h1>Flexbox Practice</h1>
    </header>

    <nav>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>

        <section id="skills">

            <h2>My Skills</h2>

            <div class="skills-container">

                <div class="skill-card">
                    <h3>Java</h3>
                    <p>Core Java and OOP</p>
                </div>

                <div class="skill-card">
                    <h3>HTML</h3>
                    <p>Semantic HTML</p>
                </div>

                <div class="skill-card">
                    <h3>CSS</h3>
                    <p>Responsive styling</p>
                </div>

                <div class="skill-card">
                    <h3>JavaScript</h3>
                    <p>Learning fundamentals</p>
                </div>

            </div>

        </section>

        <section id="projects">

            <h2>Projects</h2>

            <div class="project-container">

                <article class="project-card">
                    <h3>House Price Prediction</h3>
                    <p>
                        Machine learning project for predicting house prices.
                    </p>
                    <button>View Project</button>
                </article>

                <article class="project-card">
                    <h3>Flood Prediction</h3>
                    <p>
                        Machine learning project for predicting flood events.
                    </p>
                    <button>View Project</button>
                </article>

            </div>

        </section>

        <section id="contact">

            <h2>Contact</h2>

            <div class="contact-box">
                <p>Email: developer@example.com</p>
                <button>Contact Me</button>
            </div>

        </section>

    </main>

</body>
</html>
```

---

# `style.css`

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
    padding: 30px;
    text-align: center;
    background-color: #2934b5;
    color: white;
}

nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 15px;
    background-color: #222;
}

nav a {
    color: white;
    text-decoration: none;
}

main {
    max-width: 1000px;
    margin: auto;
    padding: 30px;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
}


/* Skills */

.skills-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.skill-card {
    width: 200px;
    padding: 20px;
    text-align: center;
    background-color: white;
    border: 2px solid #2934b5;
}


/* Projects */

.project-container {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
}

.project-card {
    flex: 1 1 300px;
    padding: 25px;
    background-color: white;
    border: 2px solid #2934b5;
}

.project-card button {
    padding: 10px 20px;
}


/* Contact */

.contact-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    background-color: white;
    border: 2px solid #2934b5;
}
```

---

# 🧪 Experiments — Do These Yourself

Don't just run the final code.

### Experiment 1

Change:

```css
justify-content: center;
```

to:

```css
justify-content: space-between;
```

Observe.

Then try:

```css
justify-content: space-evenly;
```

---

### Experiment 2

Change:

```css
flex-direction: row;
```

You need to add it yourself:

```css
.skills-container {
    display: flex;
    flex-direction: column;
}
```

Observe.

Then change it back to:

```css
flex-direction: row;
```

---

### Experiment 3

Remove:

```css
flex-wrap: wrap;
```

Make the browser window smaller.

Then restore it.

Understand **why wrapping matters for responsive design**.

---

### Experiment 4 ⭐

For `.contact-box`, change:

```css
align-items: center;
```

to:

```css
align-items: flex-start;
```

Then:

```css
align-items: flex-end;
```

Observe the vertical alignment.

---

### Experiment 5 ⭐⭐⭐

Create this:

```css
.test-container {
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
}
```

Put three boxes inside it.

Your goal:

```text
┌─────────────────────────────┐
│                             │
│        A   B   C            │
│                             │
└─────────────────────────────┘
```

**Center them horizontally and vertically using only Flexbox.**

---

# 🧠 Day 9 Challenge

Answer **without running the code first**.

### Q1

What is Flexbox?

### Q2

What does `display: flex` do?

### Q3

What is the main axis?

### Q4

What is the cross axis?

### Q5

What does `flex-direction` control?

### Q6

What does `justify-content` control?

### Q7

What does `align-items` control?

### Q8

What is the difference between `justify-content` and `align-items`?

### Q9

What does `gap` do?

### Q10

What is the purpose of `flex-wrap`?

### Q11

What is the difference between `align-items` and `align-content`?

### Q12

What does `flex-grow` do?

### Q13

What does `flex-shrink` do?

### Q14

What does `flex-basis` do?

### Q15 ⭐

How would you center an element horizontally and vertically using Flexbox?

### Q16 ⭐

What is the difference between `row` and `column`?

### Q17 ⭐

Are `justify-content` and `align-items` applied to the flex container or flex item?

### Q18 ⭐

If `flex-direction: column`, which direction becomes the main axis?

---

## 📌 Day 9 GitHub Proof

For your job-hiring proof, don't upload only the code.

Your Day 9 folder should contain:

```text
day-09/
├── index.html
├── style.css
├── README.md
└── checkpoint.md
```

And your `README.md` should document:

```text
Topics learned
Practical exercises
What I understood
Challenge
Screenshots (optional)
Completion status
```

After you answer the **18 questions**, I'll evaluate them and give you the **Day 9 `checkpoint.md` with polished interview-ready answers**, just like we did for Day 8.
