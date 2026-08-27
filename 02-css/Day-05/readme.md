# 🚀 Day 5 — CSS Fundamentals

Today we officially start **CSS**.

You've built the HTML structure for your portfolio. Now we'll learn how to make it look professional.

Our learning sequence is:

```text
HTML
  ↓
CSS ← TODAY
  ↓
JavaScript
  ↓
Git/GitHub
  ↓
Responsive Design
  ↓
Advanced JavaScript
  ↓
React
  ↓
Real Projects
  ↓
AI-assisted development
```

**Important:** Don't use Bootstrap, Tailwind, or AI-generated CSS yet. I want you to understand raw CSS first.

---

# 🎯 Day 5 Goals

By the end of today, you should understand:

* What CSS is
* How CSS works
* Inline CSS
* Internal CSS
* External CSS ⭐
* CSS syntax
* Selectors
* Element selector
* Class selector
* ID selector
* Universal selector
* Basic colors
* Backgrounds
* Text styling
* How to connect CSS to HTML

---

# 1. What is CSS?

CSS stands for:

> **Cascading Style Sheets**

CSS controls the **presentation and appearance** of HTML elements.

HTML:

```html
<h1>My Portfolio</h1>
```

CSS:

```css
h1 {
    color: blue;
}
```

HTML tells the browser:

> "This is a heading."

CSS tells the browser:

> "Make this heading blue."

---

# 2. HTML vs CSS

Remember this:

```text
HTML
 ↓
Structure + Content

CSS
 ↓
Appearance + Layout

JavaScript
 ↓
Behavior + Interactivity
```

Example:

```html
<button>Contact Me</button>
```

HTML creates the button.

```css
button {
    background-color: blue;
    color: white;
}
```

CSS changes how it looks.

Later:

```javascript
button.addEventListener("click", ...)
```

JavaScript can make it behave interactively.

---

# 3. Three Ways to Add CSS

There are three common ways.

## A. Inline CSS

CSS directly inside an HTML element.

```html
<h1 style="color: blue;">
    My Portfolio
</h1>
```

### Problem

For a large website, this becomes difficult to maintain.

So we generally **avoid inline CSS for normal project development**.

---

# 4. Internal CSS

CSS inside the `<style>` element.

```html
<head>

    <style>

        h1 {
            color: blue;
        }

    </style>

</head>
```

Useful for small pages or demonstrations.

---

# 5. External CSS ⭐⭐⭐

This is what you'll mainly use in our projects.

Create:

```text
index.html
style.css
```

HTML:

```html
<link rel="stylesheet" href="style.css">
```

CSS:

```css
h1 {
    color: blue;
}
```

Structure:

```text
HTML
  ↓
<link>
  ↓
style.css
  ↓
CSS rules
```

### Interview-ready answer

> **External CSS stores styles in a separate `.css` file and connects it to HTML using the `<link>` element. It improves maintainability, reusability, and separation of structure from presentation.**

---

# 6. CSS Syntax

The basic CSS structure is:

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: blue;
    font-size: 32px;
}
```

Break it down:

```text
h1
↓
Selector

color
↓
Property

blue
↓
Value
```

Together:

```text
selector
   ↓
property: value;
```

---

# 7. CSS Selector

A selector tells CSS:

> **Which HTML element should I style?**

Example:

```css
h1 {
    color: red;
}
```

Means:

> Find all `<h1>` elements and make their text red.

---

# 8. Element Selector

Select an HTML element by its tag name.

HTML:

```html
<p>Hello</p>
<p>Welcome</p>
```

CSS:

```css
p {
    color: green;
}
```

Both paragraphs become green.

---

# 9. Class Selector ⭐

HTML:

```html
<p class="skill">Java</p>
<p class="skill">Python</p>
<p>HTML</p>
```

CSS:

```css
.skill {
    color: blue;
}
```

The `.` means:

> Select elements having this class.

```text
.skill
   ↓
class="skill"
```

Classes are commonly used when **multiple elements need the same styling**.

---

# 10. ID Selector

HTML:

```html
<section id="about">
    <h2>About Me</h2>
</section>
```

CSS:

```css
#about {
    background-color: lightgray;
}
```

The `#` means:

> Select the element with this ID.

```text
#about
   ↓
id="about"
```

### Important distinction

An `id` is intended to identify a specific element, while a `class` can be reused across multiple elements.

---

# 11. Universal Selector

The universal selector is:

```css
* {
    margin: 0;
}
```

`*` means:

> Select all elements.

You'll see this frequently in real projects.

But don't worry about `margin` yet—we'll properly learn the box model soon.

---

# 12. Selector Summary

Memorize this table:

| Selector  | Example  | Selects                     |
| --------- | -------- | --------------------------- |
| Element   | `p`      | All `<p>`                   |
| Class     | `.skill` | Elements with class `skill` |
| ID        | `#about` | Element with ID `about`     |
| Universal | `*`      | All elements                |

### Interview shortcut

```text
p
↓
Element

.skill
↓
Class

#about
↓
ID

*
↓
Everything
```

---

# 13. CSS Colors

You can specify colors in different ways.

### Named color

```css
h1 {
    color: blue;
}
```

### Hexadecimal

```css
h1 {
    color: #2934b5;
}
```

### RGB

```css
h1 {
    color: rgb(41, 52, 181);
}
```

For professional frontend development, you'll frequently encounter:

```text
HEX
RGB
RGBA
HSL
```

We'll learn these properly later.

---

# 14. `color`

`color` changes the **text color**.

```css
p {
    color: #333333;
}
```

---

# 15. `background-color`

Changes the background color.

```css
body {
    background-color: #f5f5f5;
}
```

---

# 16. Text Styling

### Font size

```css
h1 {
    font-size: 40px;
}
```

### Font family

```css
body {
    font-family: Arial, sans-serif;
}
```

### Font weight

```css
h1 {
    font-weight: bold;
}
```

You can also use:

```css
font-weight: 700;
```

### Text alignment

```css
h1 {
    text-align: center;
}
```

Common values:

```text
left
center
right
justify
```

---

# 17. CSS Comments

CSS comments are:

```css
/* This is a CSS comment */
```

Example:

```css
/* Main heading */
h1 {
    color: blue;
}
```

---

# 🛠️ DAY 5 PROJECT

Today we're going to style your **Day 4 Developer Profile**.

Create:

```text
day-05/
│
├── index.html
├── style.css
├── README.md
└── checkpoint.md
```

---

# 18. Connect CSS to HTML

In your `index.html`, inside `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

For example:

```html
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>My Developer Profile</title>

    <link rel="stylesheet" href="style.css">

</head>
```

---

# 19. Your First `style.css`

Start with this:

```css
/* Global styles */

body {
    background-color: #f5f7fa;
    color: #222222;
    font-family: Arial, sans-serif;
}

/* Header */

header {
    background-color: #2934b5;
    color: white;
    text-align: center;
}

/* Navigation */

nav {
    background-color: #222222;
    text-align: center;
}

nav a {
    color: white;
}

/* Section headings */

h2 {
    color: #2934b5;
}

/* Skills */

.skill {
    color: #333333;
}

/* Projects */

.project {
    background-color: white;
}

/* Footer */

footer {
    background-color: #222222;
    color: white;
}
```

Don't worry if this looks basic.

**Today is about understanding CSS, not making a fancy website.**

---

# 🧪 Your Day 5 Challenge

Now **modify the CSS yourself**.

Don't simply copy my CSS.

## Challenge 1 — Body

Change:

* background color
* font family
* text color

---

## Challenge 2 — Header

Make your header:

* Different background color
* Center aligned
* Better-looking heading

---

## Challenge 3 — Navigation

Style:

```html
<nav>
```

and its links.

Try:

```css
nav a {
    text-decoration: none;
}
```

You'll learn `text-decoration` properly later.

---

## Challenge 4 — Skills

Your existing HTML has:

```html
<li class="skill">Java</li>
<li class="skill">Python</li>
<li class="skill">C</li>
```

Use:

```css
.skill {
    ...
}
```

to style them.

---

## Challenge 5 — Projects

You have:

```html
<article class="project">
```

Use:

```css
.project {
    ...
}
```

to style both project articles.

---

## Challenge 6 — ID Selector

Your HTML contains:

```html
<section id="aboutProfile">
```

Try:

```css
#aboutProfile {
    ...
}
```

Change its background or text appearance.

---

# 🧠 Very Important: Class vs ID

This is one of the most common interview questions.

### Class

```html
<div class="card"></div>
<div class="card"></div>
<div class="card"></div>
```

```css
.card {
    ...
}
```

Multiple elements can use the same class.

### ID

```html
<section id="about"></section>
```

```css
#about {
    ...
}
```

An ID is intended to uniquely identify an element.

### Easy interview answer

> **A class is reusable and is commonly used to style multiple elements, while an ID identifies a specific element and should generally be unique within the document.**

---

# 🎤 Day 5 Interview Checkpoint

After completing the project, answer these **without looking at the lesson**:

### Q1.

What is CSS?

### Q2.

Why do we use CSS?

### Q3.

What are the three ways to apply CSS?

### Q4.

Which method is preferred for large projects and why?

### Q5.

What is CSS syntax?

### Q6.

What is a CSS selector?

### Q7.

What is an element selector?

### Q8.

What is a class selector?

### Q9.

What is an ID selector?

### Q10.

What is the difference between class and ID?

### Q11.

What does the universal selector `*` do?

### Q12.

What is the difference between `color` and `background-color`?

### Q13.

How do you connect an external CSS file to HTML?

### Q14.

What is the purpose of `font-size`?

### Q15.

What is `text-align` used for?

---

# 🧠 Interview Answer Formula

Continue using the formula we've established:

```text
Definition
   ↓
Purpose
   ↓
Example
   ↓
Real-world use
```

For example:

### ❌ Weak answer

> CSS is used for styling.

### ✅ Interview-ready

> **CSS stands for Cascading Style Sheets. It is used to control the presentation, appearance, and layout of HTML elements. For example, we can use CSS to change colors, fonts, spacing, and positioning. It allows us to separate presentation from the HTML structure.**

That's the level we're targeting.

---

# 📁 GitHub Proof for Day 5

After you finish:

```text
day-05/
│
├── index.html
├── style.css
├── README.md
└── checkpoint.md
```

Your GitHub learning history is becoming:

```text
day-01
HTML Fundamentals
       ↓
day-02
HTML Elements & Attributes
       ↓
day-03
HTML Forms
       ↓
day-04
Semantic HTML
       ↓
day-05
CSS Fundamentals ⭐
```

For `README.md`, document:

* What you learned
* CSS syntax
* CSS selectors
* Three ways to apply CSS
* Colors
* Text styling
* Project description
* Technologies
* Learning status

For `checkpoint.md`:

```text
Question
↓
My Answer
↓
Interview-Ready Answer
↓
Score
```

---

## ⚠️ One rule for Day 5

**Do not use AI to generate your `style.css`.**

You can ask me to **explain a CSS property**, but first try writing the CSS yourself.

We're specifically training you to reach the point where later you can use AI to build websites **without becoming dependent on AI**.

Once you finish the CSS and send me your `index.html + style.css`, I'll review it like a frontend code reviewer and then we'll do your **Day 5 interview checkpoint**.
