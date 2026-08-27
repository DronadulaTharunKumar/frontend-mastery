# 🚀 Day 4 — Semantic HTML & Professional Page Structure

Today we're moving from **"I know HTML tags"** to **"I can structure a real professional webpage."**

Your Day 3 was forms. Today you'll learn how professional websites are organized **before we start CSS**.

---

# 🎯 Day 4 Goals

By the end of today, you should understand:

```text
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

And you should be able to answer:

> **Why should we use semantic HTML instead of putting everything inside `<div>`?**

---

# 1. What is Semantic HTML?

Semantic HTML means using an HTML element that **clearly describes the meaning/purpose of its content**.

For example:

```html
<header>
    Website Header
</header>
```

Immediately, we understand that this is the header.

Compare it with:

```html
<div>
    Website Header
</div>
```

`<div>` doesn't tell us what the content means.

### Easy interview definition

> **Semantic HTML uses meaningful HTML elements that clearly describe the purpose and structure of their content.**

---

# 2. `<header>`

`<header>` represents introductory content for a page or section.

Example:

```html
<header>
    <h1>My Developer Portfolio</h1>
    <p>Frontend Developer</p>
</header>
```

It commonly contains:

* Logo
* Website title
* Introduction
* Navigation in some designs

---

# 3. `<nav>`

`<nav>` represents a section containing **navigation links**.

Example:

```html
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="projects.html">Projects</a>
    <a href="contact.html">Contact</a>
</nav>
```

### Interview answer

> **The `<nav>` element represents a section of navigation links that help users move between important pages or sections of a website.**

---

# 4. `<main>`

`<main>` contains the **main unique content of the webpage**.

Example:

```html
<main>
    <h1>My Portfolio</h1>
    <p>Welcome to my portfolio.</p>
</main>
```

A page should normally have **one main element** representing its primary content.

---

# 5. `<section>`

`<section>` represents a **thematically related group of content**.

For your portfolio:

```html
<section>
    <h2>About Me</h2>
    <p>I am a CSE graduate...</p>
</section>

<section>
    <h2>Skills</h2>
    <p>Java, Python, HTML...</p>
</section>
```

Think:

```text
<section>
    ↓
One meaningful topic
```

Examples:

* About
* Skills
* Education
* Projects
* Contact

---

# 6. `<article>`

`<article>` represents **self-contained content** that could potentially stand on its own.

Example:

```html
<article>
    <h2>House Price Prediction</h2>
    <p>
        A machine learning project for predicting house prices.
    </p>
</article>
```

Another example:

```html
<article>
    <h2>Flood Prediction</h2>
    <p>
        A machine learning project for predicting floods.
    </p>
</article>
```

### Easy way to remember

> **Section = group of related content**

> **Article = independent/self-contained content**

---

# 7. `<aside>`

`<aside>` represents content that is **related to the main content but not part of its primary flow**.

Example:

```html
<aside>
    <h2>Quick Information</h2>
    <p>Currently learning Frontend Development.</p>
</aside>
```

Common examples:

* Sidebar
* Related links
* Additional information
* Advertisements
* Author information

---

# 8. `<footer>`

`<footer>` represents footer information for a page or section.

Example:

```html
<footer>
    <p>© 2026 Tharun Kumar</p>
    <a href="https://github.com/DronadulaTharunKumar">
        GitHub
    </a>
</footer>
```

Common content:

* Copyright
* Contact information
* Social links
* Legal links

---

# 🧠 The Most Important Structure

A professional webpage might look like:

```text
<body>

    <header>
        Logo
        Website title
    </header>

    <nav>
        Home
        About
        Projects
        Contact
    </nav>

    <main>

        <section>
            About Me
        </section>

        <section>
            Skills
        </section>

        <section>
            Projects

            <article>
                Project 1
            </article>

            <article>
                Project 2
            </article>

        </section>

        <aside>
            Additional information
        </aside>

    </main>

    <footer>
        Copyright
    </footer>

</body>
```

🔥 **Memorize this structure.**

---

# 9. Semantic vs Non-Semantic

### Non-semantic

```html
<div>
    <div>
        <div>
            My Projects
        </div>
    </div>
</div>
```

The browser doesn't know the meaning of those containers.

### Semantic

```html
<main>
    <section>
        <h2>My Projects</h2>

        <article>
            House Price Prediction
        </article>

        <article>
            Flood Prediction
        </article>
    </section>
</main>
```

Now the structure communicates meaning.

---

# 10. Why Semantic HTML Matters

There are **three important reasons**.

### 1. Accessibility ♿

Screen readers can better understand the page structure.

### 2. SEO 🔎

Search engines can better understand the structure and meaning of your content.

### 3. Maintainability 🧑‍💻

Developers can understand the purpose of each part of the page more easily.

### Interview-ready answer

> **Semantic HTML improves accessibility, helps search engines understand page structure, and makes the code easier for developers to read and maintain.**

---

# 🧠 Important: Semantic ≠ Visual

This is a common beginner mistake.

`<header>` does **not** automatically mean:

> "Put this at the top with a particular design."

`<footer>` does **not** automatically mean:

> "Make this look like a footer."

HTML defines **meaning and structure**.

CSS will later define:

```text
color
size
spacing
position
layout
animation
```

Remember:

```text
HTML
 ↓
Structure + Meaning

CSS
 ↓
Appearance + Layout

JavaScript
 ↓
Behavior + Interaction
```

This is one of the most important concepts in frontend development.

---

# 🛠️ DAY 4 PROJECT

We're going to rebuild your **Developer Profile** from Day 1 using semantic HTML.

Create:

```text
day-04/
├── index.html
├── README.md
└── checkpoint.md
```

## Your `index.html`

**Don't copy blindly. Type it yourself and understand each section.**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Tharun Kumar - Developer Profile</title>
</head>

<body>

    <header>
        <h1>Developer Profile</h1>

        <p>
            CSE (AI & ML) Graduate | Aspiring Full Stack Developer
        </p>
    </header>

    <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>

        <section id="about">
            <h2>About Me</h2>

            <p>
                I am a B.Tech CSE (AI & ML) graduate from SVCE,
                Tirupati, currently learning frontend development
                and building my skills toward becoming a Full Stack
                Developer.
            </p>
        </section>

        <section id="skills">
            <h2>Skills</h2>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
        </section>

        <section id="projects">
            <h2>Projects</h2>

            <article>
                <h3>House Price Prediction</h3>

                <p>
                    A machine learning project for predicting
                    house prices using historical property data.
                </p>
            </article>

            <article>
                <h3>Flood Prediction</h3>

                <p>
                    A machine learning project for predicting
                    flood conditions using environmental data.
                </p>
            </article>

        </section>

        <aside>
            <h2>Currently Learning</h2>

            <p>
                Frontend Development — HTML, CSS and JavaScript.
            </p>
        </aside>

    </main>

    <footer id="contact">

        <h2>Contact</h2>

        <p>
            GitHub:
            <a href="https://github.com/DronadulaTharunKumar">
                GitHub Profile
            </a>
        </p>

        <p>
            © 2026 Tharun Kumar
        </p>

    </footer>

</body>

</html>
```

---

# 🧪 Your Day 4 Challenge

Don't just copy the above.

Modify the page and add:

### 1️⃣ Education section

```text
Education
↓
B.Tech CSE (AI & ML)
SVCE, Tirupati
```

### 2️⃣ Experience / Learning section

Add what you're currently learning.

### 3️⃣ Three projects

You already have:

* House Price Prediction
* Flood Prediction

Add **one more project** from your existing work.

### 4️⃣ Navigation

Make sure these links work:

```text
About
Skills
Education
Projects
Contact
```

Use IDs:

```html
<a href="#projects">Projects</a>
```

and:

```html
<section id="projects">
```

---

# 🎤 Day 4 Interview Checkpoint

After finishing the project, **don't look up answers**.

Answer these in your own words:

### Q1.

What is semantic HTML?

### Q2.

What is the difference between semantic and non-semantic HTML?

### Q3.

What is the purpose of `<header>`?

### Q4.

What is the purpose of `<nav>`?

### Q5.

What is the purpose of `<main>`?

### Q6.

What is the difference between `<section>` and `<article>`?

### Q7.

What is `<aside>` used for?

### Q8.

What is `<footer>` used for?

### Q9.

Why is semantic HTML important?

### Q10.

Can a webpage have multiple `<section>` elements?

### Q11.

Can a webpage have multiple `<header>` and `<footer>` elements?

### Q12.

What is the difference between HTML, CSS and JavaScript?

---

## 🧠 Interview Answer Formula

Continue using the structure you've been practicing:

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

**Q: What is semantic HTML?**

Don't just say:

> "Semantic HTML gives meaning."

Instead build the answer:

```text
WHAT?
Semantic HTML uses meaningful elements.

WHY?
It communicates the purpose of content.

EXAMPLE?
<header>, <nav>, <main>, <section>, <article>, <footer>

BENEFIT?
Accessibility, SEO and maintainability.
```

That is the level I'm expecting from you.

---

