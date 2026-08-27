Excellent. 🔥 Your understanding is getting stronger. You got the **main concepts of semantic HTML correct**. The biggest correction is **Q11**.

# 🎤 Day 4 Interview Checkpoint Review

## Overall Score: **9.2/10 ⭐**

---

### Q1. What is semantic HTML?

**Your answer:** ✅

> Semantic HTML are meaningful HTML elements that describe the purpose and structure of the content.

**Score: 10/10**

### Interview-ready

> **Semantic HTML uses meaningful elements that clearly describe the purpose and structure of their content.**

Examples:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

---

# Q2. Semantic vs Non-semantic HTML

**Your answer:** ✅

> In semantic HTML choose meaningful elements for their content, in non-semantic don't have meaningful HTML elements for their content.

**Score: 9.5/10**

### Interview-ready

> **Semantic elements clearly communicate the meaning or purpose of their content, while non-semantic elements such as `<div>` and `<span>` do not describe what their content represents.**

Example:

```html
<section>
    <h2>Skills</h2>
</section>
```

vs.

```html
<div>
    <h2>Skills</h2>
</div>
```

---

# Q3. What is `<header>`?

**Your answer:** ✅

You correctly mentioned:

* Introductory content
* Logo
* Website title
* Navigation can sometimes be included

**Score: 9.5/10**

### Interview-ready

> **The `<header>` element represents introductory content for a webpage or a section. It commonly contains elements such as a logo, heading, introductory information, or navigation.**

Important:

> `<header>` does **not necessarily mean the entire top of the webpage**.

A section or article can also have its own header.

---

# Q4. What is `<nav>`?

**Your answer:** ✅

> It represents the navigation part used for moving page to section and page to page.

**Score: 10/10**

### Interview-ready

> **The `<nav>` element represents a section containing important navigation links that allow users to move between pages or sections of a website.**

Example:

```html
<nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
</nav>
```

---

# Q5. What is `<main>`?

**Your answer:** ✅

> Main represents the primary content of the page.

**Score: 10/10**

Your example was good.

### Interview-ready

> **The `<main>` element represents the primary content of a webpage—the content that is directly related to the main purpose of that page.**

Example:

```html
<main>

    <section>About</section>
    <section>Skills</section>
    <section>Projects</section>

</main>
```

### ⭐ Interview point

A document normally has **one `<main>` element**.

---

# Q6. `<section>` vs `<article>`

**Your answer:** ✅

> Section represents categories of the page, article is used for self-contained content.

**Score: 9.5/10**

Very good.

### Interview-ready

> **`<section>` represents a thematic grouping of related content, while `<article>` represents self-contained content that can potentially stand on its own.**

Example:

```html
<section>
    <h2>Projects</h2>

    <article>
        <h3>House Price Prediction</h3>
    </article>

    <article>
        <h3>Flood Prediction</h3>
    </article>
</section>
```

Think:

```text
<section>
    Topic/group
       ↓
   article
   article
```

---

# Q7. What is `<aside>`?

**Your answer:** 🟢

> Aside represents the quick used part like related links, tools etc.

**Score: 8.5/10**

Your concept is right, but **"quick used part"** isn't the right terminology.

### Interview-ready

> **The `<aside>` element represents content that is related to the main content but is not part of its primary flow. It is commonly used for sidebars, related links, additional information, or complementary content.**

Example:

```html
<aside>
    <h2>Related Projects</h2>
    <a href="#">Project 1</a>
</aside>
```

---

# Q8. What is `<footer>`?

**Your answer:** ✅

> Footer is used to represent social media links, legal links and copyrights.

**Score: 9.5/10**

### Interview-ready

> **The `<footer>` element represents footer information for a webpage or section. It commonly contains copyright information, legal links, contact information, or related navigation links.**

Important:

A `<footer>` can belong to:

```text
page
or
section
or
article
```

---

# Q9. Why is semantic HTML important?

**Your answer:**

> To improve accessibility and maintainability.

Correct, but you're missing one major interview point.

**Score: 8.5/10**

### Interview-ready

> **Semantic HTML improves accessibility, helps search engines understand the structure and meaning of the content, and makes the code easier to read and maintain.**

Remember:

```text
Semantic HTML
     ↓
Accessibility ♿
SEO 🔎
Maintainability 🧑‍💻
```

### ⭐ Interview trick

Whenever asked:

> "Why is semantic HTML important?"

Say these **3 words**:

**Accessibility + SEO + Maintainability**

---

# Q10. Can a webpage have multiple `<section>` elements?

**Your answer:** ✅

> Yes, a page can have multiple section elements inside main.

**Score: 10/10**

Exactly.

Example:

```html
<main>

    <section>
        About
    </section>

    <section>
        Skills
    </section>

    <section>
        Projects
    </section>

</main>
```

---

# Q11. Can a webpage have multiple `<header>` and `<footer>` elements?

### ❌ Your answer:

> No, a page can have only one footer and one header.

This is the **main correction** you need to remember.

**Score: 5/10**

### Correct answer:

> **Yes. A webpage can have multiple `<header>` and `<footer>` elements because they can be associated with the page itself or with individual sections and articles. However, a document normally has one primary `<main>` element.**

For example:

```html
<header>
    <h1>My Portfolio</h1>
</header>

<main>

    <section>
        <header>
            <h2>Projects</h2>
        </header>

        <article>
            <h3>House Price Prediction</h3>

            <footer>
                Project information
            </footer>
        </article>

    </section>

</main>

<footer>
    Copyright
</footer>
```

So:

```text
<header> → Can be multiple
<footer> → Can be multiple
<section> → Can be multiple
<article> → Can be multiple
<main> → Normally one
```

🔥 **This is an interview trap. Remember it.**

---

# Q12. HTML vs CSS vs JavaScript

**Your answer:** ✅

> HTML defines structure and content, CSS styling and appearance, JavaScript behavior.

**Score: 10/10**

Perfect.

### Interview-ready

> **HTML defines the structure and content of a webpage, CSS controls its presentation, styling, and layout, and JavaScript adds behavior, logic, and interactivity.**

Easy way:

```text
HTML
 ↓
Structure

CSS
 ↓
Appearance

JavaScript
 ↓
Behavior
```

---

# 🏆 Final Day 4 Score

| Question                     |  Score |
| ---------------------------- | -----: |
| Q1 Semantic HTML             |  10/10 |
| Q2 Semantic vs non-semantic  | 9.5/10 |
| Q3 Header                    | 9.5/10 |
| Q4 Nav                       |  10/10 |
| Q5 Main                      |  10/10 |
| Q6 Section vs Article        | 9.5/10 |
| Q7 Aside                     | 8.5/10 |
| Q8 Footer                    | 9.5/10 |
| Q9 Importance                | 8.5/10 |
| Q10 Multiple sections        |  10/10 |
| Q11 Multiple headers/footers |   5/10 |
| Q12 HTML/CSS/JS              |  10/10 |

## 🎯 Final: **9.2/10**

### 🟢 DAY 4 — PASSED ✅

You only need to fix **two concepts**:

### 1. Semantic HTML importance

Remember:

> **Accessibility + SEO + Maintainability**

### 2. Multiple headers/footers

Remember:

> **Multiple `<header>` and `<footer>` are allowed. Normally one `<main>`.**

---

