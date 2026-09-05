# 🚀 Day 14 Mini Project — Developer Learning Landing Page

Now you will combine **everything you've learned through Day 14** into one small professional webpage.

The goal is **not to make it huge**. The goal is to prove that you can independently structure and style a responsive UI.

---

## 🎯 Project Goal

Build a landing page for a fictional learning platform called:

**CodePath Academy**

Tagline:

> Learn. Build. Become a Developer.

Your page should look like a **modern developer-learning platform landing page**.

---

# 1. Page Structure

Your HTML should contain these sections:

```text
Header
   ├── Logo
   └── Navigation

Hero
   ├── Label
   ├── Main heading
   ├── Description
   └── Buttons
       └── Visual/Card

Features
   ├── Feature Card 1
   ├── Feature Card 2
   └── Feature Card 3

Learning Paths
   ├── Frontend
   ├── Java Backend
   └── AI / ML

CTA
   ├── Heading
   ├── Description
   └── Button

Footer
```

---

# 2. Header Requirements

Create:

```text
CodePath Academy        Home  Courses  About  Contact
```

Requirements:

* Use `<header>`
* Use `<nav>`
* Use semantic HTML
* Flexbox
* Proper spacing
* Maximum content width
* Navigation links
* Hover effect
* Focus-visible effect

---

# 3. Hero Section ⭐

This is the main section.

### Content

**Label:**

```text
START YOUR JOURNEY
```

**Heading:**

```text
Build Skills. Build Projects. Build Your Career.
```

**Description:**

```text
Learn modern development skills through practical projects
and become ready for real-world opportunities.
```

Buttons:

```text
Start Learning
Explore Courses
```

### Layout

Desktop:

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│  START YOUR JOURNEY             ┌───────────────┐   │
│                                 │               │   │
│  Build Skills. Build            │   Developer  │   │
│  Projects. Build Your Career.   │   Learning   │   │
│                                 │               │   │
│  Description                    │   HTML CSS    │   │
│                                 │   Java JS     │   │
│  [Start Learning] [Explore]     │               │   │
│                                 └───────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Use **Flexbox or Grid**.

---

# 4. Features Section

Create three cards.

### Card 1

**Practical Learning**

> Learn by building real-world projects.

### Card 2

**Interview Preparation**

> Develop the skills required to crack technical interviews.

### Card 3

**Career Focused**

> Build projects and skills that strengthen your portfolio.

Use:

```text
CSS Grid
padding
border
border-radius
box-shadow
transition
:hover
```

---

# 5. Learning Paths Section

Create three learning-path cards.

### Frontend Development

```text
HTML
CSS
JavaScript
React
```

### Java Backend

```text
Java
JDBC
Servlets
Spring Boot
SQL
```

### AI / ML

```text
Python
NumPy
Pandas
Scikit-learn
GenAI
```

**Important:** These are just displayed as learning-path content. Don't implement the technologies themselves.

---

# 6. CTA Section

Create a section encouraging the visitor to start learning.

### Heading

```text
Ready to Start Building?
```

### Description

```text
Turn your knowledge into real projects and take the next step in your developer journey.
```

Button:

```text
Start Learning
```

Make this section visually different from the other sections.

---

# 7. Footer

Include:

```text
© 2026 CodePath Academy
```

You can also add:

```text
Built with HTML & CSS
```

Use semantic `<footer>`.

---

# 🎨 Design Specification

Use the same design system you've been developing.

### Colors

```css
--primary-color: #2934b5;
--secondary-color: #ffcc00;
--background-color: #f5f7fa;
--text-color: #222;
--white: #fff;
--border-color: #ddd;
```

You can add additional colors if necessary, but **don't create unnecessary colors**.

---

# 📏 Spacing System

Use CSS variables:

```css
--space-small: 8px;
--space-medium: 16px;
--space-large: 24px;
--space-xlarge: 32px;
--space-xxlarge: 48px;
```

You may add another spacing value if genuinely needed.

---

# 🔤 Typography

Use:

```css
font-family: Arial, sans-serif;
```

Main heading must use:

```css
clamp()
```

For example, your own suitable values such as:

```text
minimum → preferred → maximum
```

Don't copy the exact values from Exercise 3.

---

# 📱 Responsive Requirements

Your website **must work on:**

```text
Desktop
Tablet
Mobile
```

Use:

```css
@media (max-width: 768px)
```

### Desktop

Header:

```text
Logo                  Navigation
```

Hero:

```text
Content               Visual
```

Cards:

```text
Card    Card    Card
```

### Mobile

Header:

```text
Logo
Navigation
```

Hero:

```text
Content
Visual
```

Cards:

```text
Card
Card
Card
```

Learning paths:

```text
Path
Path
Path
```

---

# ✨ Interaction Requirements

Add subtle interactions.

### Navigation

```text
:hover
:focus-visible
```

### Buttons

```text
:hover
:focus-visible
transition
translateY()
```

### Cards

```text
:hover
transform
box-shadow
transition
```

Keep animations **subtle and professional**.

---

# 🧠 CSS Concepts You Must Use

Your project must demonstrate:

### Fundamentals

* [ ] CSS variables
* [ ] Box sizing
* [ ] Margin
* [ ] Padding
* [ ] Colors
* [ ] Typography

### Layout

* [ ] Flexbox
* [ ] CSS Grid
* [ ] `max-width`
* [ ] `margin: auto`
* [ ] `gap`

### Responsive CSS

* [ ] `%`
* [ ] `rem`
* [ ] `vw` or another relative unit
* [ ] `clamp()`
* [ ] Media query

### Advanced selectors

Use at least **two** of:

```text
:nth-child()
:first-child
:last-child
:not()
```

### Pseudo-elements

Use at least one:

```text
::before
::after
```

### UI

* [ ] Cards
* [ ] Buttons
* [ ] Borders
* [ ] Border-radius
* [ ] Box-shadow
* [ ] Hover effects
* [ ] Focus states

---

# 🚫 Restrictions

For this mini-project:

**Do NOT use:**

* ❌ Bootstrap
* ❌ Tailwind
* ❌ JavaScript
* ❌ React
* ❌ copied templates
* ❌ AI-generated complete code

You should build it yourself.

You **can use AI after writing your code** to review/debug it — that's the learning workflow we're following:

> **Learn → Write → Test → Review → Fix → Explain**

---

# 📁 Required Project Structure

Create:

```text
day-14-mini-project/
│
├── index.html
├── style.css
└── README.md
```

For now, focus on:

```text
index.html
style.css
```

Don't create the README until I review your project.

---

## 🏆 Completion Criteria

I'll review your project on:

| Area                       |   Weight |
| -------------------------- | -------: |
| HTML structure & semantics |      15% |
| CSS organization           |      15% |
| Flexbox/Grid               |      15% |
| Responsive design          |      15% |
| CSS variables & spacing    |      10% |
| Typography & `clamp()`     |      10% |
| Selectors/pseudo-elements  |       5% |
| UI/visual quality          |      10% |
| Accessibility              |       5% |
| **Total**                  | **100%** |

### Target

**90%+ = Day 14 project complete ✅**

And importantly, **I won't give you the solution upfront**. You build it independently, send me your `index.html` + `style.css`, and I'll review it like a **frontend developer code review + interview assessment**.
