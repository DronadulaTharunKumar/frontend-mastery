# 🚀 Frontend Mastery — Day 2

## HTML Elements & Attributes

Today we're going deeper into HTML.

Yesterday you learned **what HTML is**. Today you'll learn how to use HTML properly to build structured pages.

### 🎯 Day 2 Goals

By the end of today, you should understand:

* HTML elements
* Opening/closing tags
* Nested elements
* Attributes
* `id` and `class`
* Links (`<a>`)
* Images (`<img>`)
* Lists
* Relative vs absolute paths
* Basic accessibility
* Proper HTML structure
* Interview questions

---

# 1. HTML Element vs HTML Tag

This distinction is important in interviews.

Consider:

```html
<h1>My Profile</h1>
```

There are:

```text
<h1>        → Opening tag
My Profile  → Content
</h1>       → Closing tag
```

Together:

> `<h1>My Profile</h1>` is an **HTML element**.

### Remember

```text
Tag      → <h1>
Element  → <h1>My Profile</h1>
```

---

# 2. Some Elements Don't Have Closing Tags

Some HTML elements are **void elements**.

For example:

```html
<img>
<br>
<hr>
<input>
<meta>
<link>
```

You don't write:

```html
<img></img>
```

Instead:

```html
<img src="profile.jpg" alt="Profile photo">
```

---

# 3. Nesting

HTML elements can be placed inside other elements.

Example:

```html
<div>
    <h2>Skills</h2>

    <ul>
        <li>Java</li>
        <li>Python</li>
    </ul>
</div>
```

Think of it like containers:

```text
div
│
├── h2
│
└── ul
    ├── li
    └── li
```

This concept becomes extremely important when you learn CSS and React.

---

# 4. Attributes 🔥

An attribute provides **additional information about an HTML element**.

Example:

```html
<a href="https://example.com">Visit Website</a>
```

Here:

```text
<a>       → element
href      → attribute
URL       → attribute value
```

General syntax:

```html
<element attribute="value">
```

Example:

```html
<img src="profile.jpg" alt="My profile photo">
```

There are two attributes:

```text
src → image location
alt → alternative text
```

---

# 5. `id` Attribute

`id` identifies a particular element.

Example:

```html
<h1 id="main-title">My Developer Profile</h1>
```

You should generally use an `id` when an element needs a **unique identifier**.

For example:

```html
<button id="contact-button">Contact Me</button>
```

There should normally be only one element with that particular `id` on a page.

---

# 6. `class` Attribute

`class` is used to group elements.

Example:

```html
<p class="skill">Java</p>
<p class="skill">Python</p>
<p class="skill">JavaScript</p>
```

Multiple elements can have the same class.

Think:

```text
id
 ↓
Unique identity

class
 ↓
Group/category
```

This becomes extremely important in CSS.

For example:

```css
.skill {
    color: blue;
}
```

All elements with:

```html
class="skill"
```

can receive that styling.

---

# 7. `id` vs `class` — Interview Concept

| `id`                            | `class`                   |
| ------------------------------- | ------------------------- |
| Usually unique                  | Can be reused             |
| Identifies one specific element | Groups elements           |
| `#` in CSS                      | `.` in CSS                |
| Useful for unique targets       | Useful for shared styling |

Example:

```html
<h1 id="title">Foodie</h1>

<p class="description">Order food</p>
<p class="description">Fast delivery</p>
```

---

# 8. Links — `<a>`

Links are created using the anchor element:

```html
<a href="https://www.google.com">Google</a>
```

`href` specifies where the link goes.

### Open in a new tab

```html
<a href="https://www.google.com" target="_blank">
    Google
</a>
```

But there's an important security/accessibility practice we'll learn:

```html
<a 
    href="https://www.google.com"
    target="_blank"
    rel="noopener noreferrer">
    Google
</a>
```

For now, remember:

```text
<a> → creates a hyperlink
href → destination
```

---

# 9. Internal Links

You can link to another page in your own project.

Suppose:

```text
website/
├── index.html
├── about.html
└── contact.html
```

From `index.html`:

```html
<a href="about.html">About</a>
<a href="contact.html">Contact</a>
```

These are **relative paths**.

---

# 10. Absolute vs Relative URL

### Absolute

Complete URL:

```html
<a href="https://github.com">GitHub</a>
```

### Relative

Points to a location inside your project:

```html
<a href="about.html">About</a>
```

Another example:

```html
<img src="images/profile.jpg" alt="Profile">
```

Here:

```text
images/
   └── profile.jpg
```

is relative to the current HTML file.

---

# 11. Images — `<img>`

Basic:

```html
<img src="profile.jpg" alt="Profile photo">
```

Two important attributes:

### `src`

Where the image comes from.

### `alt`

Alternative text describing the image.

Example:

```html
<img 
    src="profile.jpg"
    alt="Tharun profile photo">
```

---

# 12. Why is `alt` Important?

Suppose the image doesn't load.

Instead of seeing only a broken image, the alternative text provides information.

More importantly, screen readers can read the `alt` text.

So:

```html
<img src="food.jpg" alt="Paneer biryani served in a bowl">
```

is better than:

```html
<img src="food.jpg" alt="image">
```

And don't write:

```html
<img src="food.jpg" alt="food food food">
```

The alt text should communicate the **purpose/content of the image**.

---

# 13. Lists

You already used `<ul>` yesterday.

### Unordered list

```html
<ul>
    <li>Java</li>
    <li>Python</li>
    <li>JavaScript</li>
</ul>
```

Result:

* Java
* Python
* JavaScript

---

### Ordered list

```html
<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>
```

Result:

1. Learn HTML
2. Learn CSS
3. Learn JavaScript

### When to use which?

```text
<ul> → order doesn't matter
<ol> → order/sequence matters
```

For example:

Shopping items:

```html
<ul>
    <li>Milk</li>
    <li>Rice</li>
    <li>Eggs</li>
</ul>
```

Steps to deploy:

```html
<ol>
    <li>Build</li>
    <li>Test</li>
    <li>Deploy</li>
</ol>
```

---

# 14. HTML Comments

Comments are ignored by the browser.

```html
<!-- This is a comment -->
```

Example:

```html
<!-- Skills section -->
<h2>Skills</h2>
```

Comments are useful for developers.

But don't use comments to explain extremely obvious things everywhere.

---

# 15. HTML Entities

Sometimes you need special characters.

For example:

```html
&copy;
```

displays:

©

Other examples:

```text
&nbsp; → non-breaking space
&lt;   → <
&gt;   → >
&amp;  → &
```

You don't need to memorize these now.

Just understand that HTML has special character representations.

---

# 16. Accessibility — Start Learning This Early

A professional frontend developer doesn't only make websites that **look good**.

The website should also be usable by people with disabilities.

For example, don't do:

```html
<div onclick="...">Contact</div>
```

when you really need a button.

Use:

```html
<button>Contact</button>
```

Why?

Because a real `<button>`:

* Has semantic meaning
* Works with keyboard interaction
* Works better with assistive technologies
* Behaves like a button

This is one reason **semantic HTML** matters.

We'll go much deeper into accessibility later.

---

# 🛠️ Day 2 Project

Now we're going to upgrade your Day 1 profile.

Create:

```text
01-html/
└── day-02/
    ├── index.html
    ├── about.html
    └── README.md
```

Your `index.html` should contain:

```text
My Developer Profile

About Me
    Short introduction

Skills
    Java
    Python
    C
    DSA

Projects
    House Price Prediction
    Flood Prediction

Useful Links
    GitHub
    LinkedIn

Navigation
    About
```

Your `about.html` should contain:

```text
About Me

Education
    B.Tech CSE (AI & ML)

Learning
    Frontend Development

Goals
    Become a professional frontend developer

Back to Home
```

### Requirements

You must use:

* `<h1>`
* `<h2>`
* `<p>`
* `<ul>`
* `<li>`
* `<a>`
* `href`
* `id`
* `class`
* `<img>`
* `alt`

For the image, you can use any local image.

---

# 🧪 Day 2 Practice Questions

Before looking at the answers, try them yourself.

### Q1

What is the difference between an HTML tag and an HTML element?

### Q2

What is an HTML attribute?

### Q3

What is the difference between `id` and `class`?

### Q4

What is the purpose of the `href` attribute?

### Q5

What is the difference between an absolute URL and a relative URL?

### Q6

Why is the `alt` attribute important?

### Q7

What's the difference between `<ul>` and `<ol>`?

### Q8

What are void elements? Give three examples.

### Q9

Why should we use `<button>` instead of a clickable `<div>` when creating a button?

### Q10

What does this do?

```html
<a href="about.html">About</a>
```

---

# 🎤 Interview Answer Technique

Remember our structure:

> **Definition → Why → Example → Use**

For example, don't answer:

> "Class is used for styling."

Instead:

**Definition:** A `class` is an HTML attribute used to assign one or more elements to a common group.

**Why:** It allows multiple elements to share styling or behavior.

**Example:**

```html
<p class="skill">Java</p>
<p class="skill">Python</p>
```

**Use:** Classes are commonly used for CSS styling and JavaScript element selection.

That's the level of answer I want you to practice.

---



**Your task now:** build the Day 2 project and answer **Q1–Q10 in your own words**. Don't worry about perfect English—I'll correct both your **technical answer and interview structure**, just like we did on Day 1.
