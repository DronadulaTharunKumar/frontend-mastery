# 🚀 Day 10 — CSS Grid

**Goal:** Learn CSS Grid well enough to build real website layouts and answer basic interview questions.

You already know **Flexbox**. Today you'll learn **Grid**, which is especially useful for **2-dimensional layouts** (rows + columns).

---

## 1. What is CSS Grid?

**CSS Grid is a CSS layout system used to arrange elements into rows and columns.**

Think:

```text
        Columns →
       1       2       3
   ┌───────┬───────┬───────┐
1  │   A   │   B   │   C   │
   ├───────┼───────┼───────┤
2  │   D   │   E   │   F   │
   └───────┴───────┴───────┘
        ↑
       Rows
```

### Flexbox vs Grid

| Flexbox                         | Grid                        |
| ------------------------------- | --------------------------- |
| Mainly 1-dimensional            | 2-dimensional               |
| Row **or** column               | Rows **and** columns        |
| Great for navigation, alignment | Great for page/card layouts |

**Interview trick:**

> Flexbox = one dimension
> Grid = two dimensions

---

# 2. `display: grid`

Create a Grid container:

```css
.container {
    display: grid;
}
```

Its direct children become **grid items**.

---

# 3. `grid-template-columns` ⭐⭐⭐

This defines the columns.

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}
```

Result:

```text
┌──────┬──────┬──────┐
│  A   │  B   │  C   │
├──────┼──────┼──────┤
│  D   │  E   │  F   │
└──────┴──────┴──────┘
```

Three values = **three columns**.

---

# 4. `fr` unit ⭐⭐⭐

`fr` means **fraction of available space**.

```css
grid-template-columns: 1fr 1fr 1fr;
```

This creates three equal columns.

```text
┌────────┬────────┬────────┐
│   A    │   B    │   C    │
│  1fr   │  1fr   │  1fr   │
└────────┴────────┴────────┘
```

You can also do:

```css
grid-template-columns: 2fr 1fr;
```

Meaning:

```text
┌──────────────────┬─────────┐
│                  │         │
│       2fr        │   1fr   │
│                  │         │
└──────────────────┴─────────┘
```

The first column gets approximately twice the available space of the second.

---

# 5. `grid-template-rows`

Controls row sizes.

```css
.container {
    display: grid;
    grid-template-rows: 100px 200px;
}
```

---

# 6. `gap` ⭐⭐⭐

Just like Flexbox:

```css
.container {
    display: grid;
    gap: 20px;
}
```

Creates space between rows and columns.

You can also use:

```css
row-gap: 20px;
column-gap: 30px;
```

---

# 7. `repeat()` ⭐⭐⭐

Instead of:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

write:

```css
grid-template-columns: repeat(4, 1fr);
```

Much cleaner.

### Meaning:

```text
repeat(4, 1fr)

4 times
↓
1fr 1fr 1fr 1fr
```

---

# 8. `minmax()` ⭐⭐⭐

Very useful for responsive layouts.

```css
grid-template-columns: repeat(3, minmax(200px, 1fr));
```

Meaning:

> Each column should be at least 200px but can grow up to 1fr.

---

# 9. Responsive Grid ⭐⭐⭐

One of the most useful patterns:

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

This allows the browser to automatically determine how many columns fit.

For example:

### Large screen

```text
┌────┐ ┌────┐ ┌────┐ ┌────┐
│ A  │ │ B  │ │ C  │ │ D  │
└────┘ └────┘ └────┘ └────┘
```

### Smaller screen

```text
┌────┐ ┌────┐
│ A  │ │ B  │
└────┘ └────┘
┌────┐ ┌────┐
│ C  │ │ D  │
└────┘ └────┘
```

This is a pattern you'll use frequently in modern frontend development.

---

# 10. `grid-column` ⭐⭐⭐

You can control how many columns an item occupies.

```css
.item {
    grid-column: span 2;
}
```

It occupies two columns.

```text
┌───────────────┬───────┐
│       A       │   B   │
│   span 2      │       │
└───────────────┴───────┘
```

You can also specify exact lines:

```css
.item {
    grid-column: 1 / 3;
}
```

This starts at grid line 1 and ends at line 3.

---

# 11. `grid-row`

Same concept for rows:

```css
.item {
    grid-row: span 2;
}
```

The item occupies two rows.

---

# 12. `justify-items`

Controls horizontal alignment of grid items **inside their grid areas**.

```css
.container {
    justify-items: center;
}
```

Common values:

```text
start
center
end
stretch
```

---

# 13. `align-items`

Controls vertical alignment of grid items inside their grid areas.

```css
.container {
    align-items: center;
}
```

---

# 14. `place-items` ⭐

Shorthand for:

```css
justify-items
align-items
```

Example:

```css
.container {
    place-items: center;
}
```

Very useful for centering grid content.

---

# 15. `justify-content` vs `justify-items`

This is a common interview question.

### `justify-items`

Controls **items inside their grid areas**.

### `justify-content`

Controls the **whole grid inside the container** when there is extra space.

Don't mix them up.

---

# 16. Grid Lines

Consider:

```css
grid-template-columns: 1fr 1fr 1fr;
```

There are **4 vertical grid lines**:

```text
1       2       3       4
│       │       │       │
├───────┼───────┼───────┤
```

That's why:

```css
grid-column: 1 / 3;
```

occupies the first two columns.

---

# 🧠 Day 10 Checkpoint

After completing the exercises, answer these **in your own words**:

```text
1. What is CSS Grid?

2. What is the difference between Grid and Flexbox?

3. What does display: grid do?

4. What does grid-template-columns do?

5. What does grid-template-rows do?

6. What does the fr unit mean?

7. What does gap do in Grid?

8. What does repeat() do?

9. What does minmax() do?

10. What does auto-fit do?

11. What does grid-column: span 2 mean?

12. What does grid-row: span 2 mean?

13. What are grid lines?

14. What does justify-items do?

15. What does align-items do in Grid?

16. What does place-items: center do?

17. What is the difference between justify-items
    and justify-content?

18. When would you choose Grid over Flexbox?

19. How can you create a responsive card grid
    without manually specifying the number of columns?

20. ⭐ Explain this:
    repeat(auto-fit, minmax(250px, 1fr))
```

# 🚀 Day 10 — CSS Grid Complete Practice

You should complete these **8 exercises**. Together they cover the important Grid concepts you need at your current level.

---

## 🧪 Exercise 1 — Basic Grid

### Concepts covered

* `display: grid`
* `grid-template-columns`
* `grid-template-rows`
* `gap`

Create **6 boxes**:

```text
Box 1 | Box 2 | Box 3
Box 4 | Box 5 | Box 6
```

Requirements:

* 3 columns
* 2 rows
* 20px gap
* Give every box a visible border
* Give the boxes different content

**Don't use Flexbox.**

---

# 🧪 Exercise 2 — `fr` Unit & Unequal Columns

### Concepts covered

* `fr`
* `grid-template-columns`

Create this layout:

```text
┌───────────────────────┬──────────────┐
│                       │              │
│       Main Content    │    Sidebar   │
│                       │              │
└───────────────────────┴──────────────┘
```

Requirements:

```text
Main Content → 2fr
Sidebar      → 1fr
```

Your CSS should use:

```css
grid-template-columns: 2fr 1fr;
```

Then try:

```css
grid-template-columns: 1fr 2fr;
```

and observe the difference.

---

# 🧪 Exercise 3 — Grid Item Spanning ⭐

### Concepts covered

* Grid lines
* `grid-column`
* `grid-row`
* `span`

Create:

```text
┌─────────────────────────────┐
│          Header             │
├──────────────┬──────────────┤
│              │              │
│   Sidebar    │    Main      │
│              │              │
├──────────────┴──────────────┤
│          Footer             │
└─────────────────────────────┘
```

Requirements:

* Create a 3-column grid.
* Make the Header span all columns.
* Make the Footer span all columns.
* Make the Sidebar occupy one column.
* Make Main occupy the remaining columns.

You must practice:

```css
grid-column: span 3;
```

and/or grid line positioning.

---

# 🧪 Exercise 4 — Grid Alignment ⭐

### Concepts covered

* `justify-items`
* `align-items`
* `place-items`
* `justify-content`
* `align-content`

Create a container containing several boxes.

Practice each property **one at a time**.

For example:

```css
justify-items: center;
```

Then:

```css
align-items: center;
```

Then:

```css
place-items: center;
```

Then experiment with:

```css
justify-content: center;
```

and:

```css
align-content: center;
```

### Your goal

Understand the difference between:

```text
item inside grid area
        VS
entire grid inside container
```

This distinction is important for interviews.

---

# 🧪 Exercise 5 — Responsive Skills Grid ⭐⭐⭐

### Concepts covered

* `repeat()`
* `auto-fit`
* `minmax()`
* `fr`
* `gap`
* responsive design

Create 8 skill cards:

```text
HTML
CSS
JavaScript
Java
Python
SQL
Git
React
```

Use:

```css
grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
);
```

### Important

Don't specify:

```css
grid-template-columns: repeat(4, 1fr);
```

Your grid must automatically adapt.

Test it by resizing the browser:

```text
Desktop:

[HTML] [CSS] [JS] [Java]


Tablet:

[HTML] [CSS]
[JS]   [Java]


Mobile:

[HTML]
[CSS]
[JS]
[Java]
```

The exact number of columns depends on available width.

---

# 🧪 Exercise 6 — `minmax()` Comparison

### Concepts covered

* `minmax()`
* responsive sizing

Create 6 cards.

First use:

```css
grid-template-columns: repeat(3, 1fr);
```

Then change it to:

```css
grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
);
```

Compare both.

Answer in your own words:

> Why is the second approach more useful for responsive layouts?

---

# 🧪 Exercise 7 — Real Website Layout ⭐⭐⭐

Now combine everything you've learned.

Create a **Developer Portfolio Dashboard**:

```text
┌─────────────────────────────────────────────┐
│                  HEADER                     │
├──────────────┬──────────────────────────────┤
│              │                              │
│   SIDEBAR    │          ABOUT ME            │
│              │                              │
│              ├──────────────────────────────┤
│              │                              │
│              │          SKILLS              │
│              │                              │
├──────────────┴──────────────────────────────┤
│                  PROJECTS                   │
├─────────────────────────────────────────────┤
│                  FOOTER                     │
└─────────────────────────────────────────────┘
```

### Include

**Header**

* Developer Portfolio

**Sidebar**

* Home
* About
* Skills
* Projects
* Contact

**About**

* Short introduction

**Skills**

* HTML
* CSS
* JavaScript
* Java

**Projects**

* House Price Prediction
* Flood Prediction
* Foodie

**Footer**

* GitHub
* LinkedIn
* Copyright

### Requirements

You must use CSS Grid for the major layout.

Use:

* `grid-template-columns`
* `grid-template-rows`
* `gap`
* `fr`
* `grid-column`
* `grid-row`

---

# 🧪 Exercise 8 — Final Challenge 🔥

This is the most important exercise.

Build a **responsive developer portfolio homepage from scratch**.

You already learned:

```text
HTML
 ├── Semantic HTML
 ├── Forms
 ├── Links
 └── Structure

CSS
 ├── Selectors
 ├── Cascade
 ├── Specificity
 ├── Inheritance
 ├── Box Model
 ├── Display
 ├── Position
 ├── Flexbox
 └── Grid ← TODAY
```

Use your previous knowledge to create a complete page.

### Required sections

```text
Header
Navigation
Hero/About
Skills
Projects
Contact
Footer
```

### Skills

Use **Grid**.

### Navigation

Use **Flexbox**.

### Project cards

Use **Grid**.

### Contact section

Use **Flexbox**.

### Overall page

Use proper **semantic HTML**.

### Responsive

The page should work on:

```text
Desktop
Tablet
Mobile
```

You can use media queries where necessary.

---

# 🧠 What Day 10 Now Covers

| Concept           | Exercise |
| ----------------- | -------- |
| `display: grid`   | 1        |
| Columns           | 1, 2     |
| Rows              | 1        |
| `fr`              | 2        |
| `gap`             | 1, 5     |
| `repeat()`        | 5        |
| Grid lines        | 3        |
| `grid-column`     | 3        |
| `grid-row`        | 3        |
| `span`            | 3        |
| `justify-items`   | 4        |
| `align-items`     | 4        |
| `place-items`     | 4        |
| `justify-content` | 4        |
| `align-content`   | 4        |
| `minmax()`        | 5, 6     |
| `auto-fit`        | 5        |
| Responsive Grid   | 5, 6, 8  |
| Grid + Flexbox    | 8        |
| Real-world layout | 7, 8     |

So **yes — this version is much closer to a complete Day 10 practice session.**

### 📁 Your Day 10 folder

```text
day-10/
│
├── exercise-1/
├── exercise-2/
├── exercise-3/
├── exercise-4/
├── exercise-5/
├── exercise-6/
├── exercise-7/
├── exercise-8/
│
├── README.md
└── checkpoint.md
```

You **don't need to create separate folders** if that feels inconvenient. You can also use:

```text
day-10/
├── index.html
├── style.css
├── README.md
└── checkpoint.md
```

and put all exercises in one HTML file with separate sections.

### 🎯 My recommendation

Since your goal is to become **job-ready**, use the **single `index.html` + `style.css` approach for Exercises 1–6**, then make **Exercise 7 and 8 separate mini-projects**.

That gives you both **concept practice + portfolio-quality practice**.

**Complete the exercises yourself first. Don't worry if the CSS isn't perfect. Send me your code afterward, and I'll review it before we mark Day 10 complete.**

