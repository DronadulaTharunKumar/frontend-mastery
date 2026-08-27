Excellent. 🔥 **Day 5 checkpoint passed.** Your answers show that you understood the concepts rather than just copying the syntax.

# 🎤 Day 5 Interview Evaluation

## Overall: **9.4/10 ⭐**

| #  | Topic                     |  Score |
| -- | ------------------------- | -----: |
| 1  | What is CSS?              | 9.5/10 |
| 2  | Why CSS?                  |   9/10 |
| 3  | Ways to apply CSS         |  10/10 |
| 4  | External CSS              | 9.5/10 |
| 5  | CSS syntax                |   9/10 |
| 6  | Selector                  | 9.5/10 |
| 7  | Element selector          |  10/10 |
| 8  | Class selector            |  10/10 |
| 9  | ID selector               |  10/10 |
| 10 | Class vs ID               |   9/10 |
| 11 | Universal selector        |  10/10 |
| 12 | Color vs background-color |  10/10 |
| 13 | External CSS connection   |  10/10 |
| 14 | font-size                 | 8.5/10 |
| 15 | text-align                | 9.5/10 |

---

# Let's make your answers interview-ready

## 1. What is CSS?

### Your answer

> CSS stands for cascading style sheet, it controls the appearance and presentation of HTML elements.

✅ Correct.

### Interview-ready

> **CSS stands for Cascading Style Sheets. It is used to control the appearance, presentation, and layout of HTML elements.**

**9.5/10**

---

# 2. Why do we use CSS?

Your answer:

> CSS used for styling the HTML elements.

Correct, but slightly short.

### Interview-ready

> **CSS is used to control the appearance and layout of HTML elements, including colors, fonts, spacing, positioning, and responsive design.**

**9/10**

---

# 3. Three ways to apply CSS

🔥 Excellent.

You correctly explained:

```text
Inline
Internal
External
```

### Interview-ready

> **CSS can be applied in three ways: inline CSS using the `style` attribute, internal CSS using a `<style>` element, and external CSS using a separate `.css` file connected through a `<link>` element.**

**10/10**

---

# 4. Why external CSS?

Your answer is correct.

Improve your wording:

### Interview-ready

> **External CSS is preferred for larger projects because it separates presentation from HTML structure, improves maintainability, promotes reuse, and keeps the code organized.**

**9.5/10**

Remember:

```text
External CSS
     ↓
Separation
     ↓
Reusable
     ↓
Maintainable
     ↓
Organized
```

---

# 5. CSS syntax

You said:

> selector { property:value; }

✅ Correct.

### Interview-ready

> **A CSS rule consists of a selector followed by a declaration block containing one or more property-value pairs.**

Example:

```css
p {
    color: blue;
    font-size: 16px;
}
```

**9/10**

---

# 6. What is a selector?

Your answer:

> Selector tells CSS which HTML element to control.

✅ Very good.

### Interview-ready

> **A CSS selector specifies which HTML elements a CSS rule should be applied to.**

**9.5/10**

---

# 7. Element selector

Your answer:

> Element selector selects all elements using tag name.

✅ Perfect.

Example:

```css
p {
    color: red;
}
```

This selects all `<p>` elements.

**10/10**

---

# 8. Class selector

Your answer:

> Class selector select elements using `.classname`.

✅ Correct.

Example:

```css
.skill {
    color: blue;
}
```

**10/10**

---

# 9. ID selector

Your answer:

> ID selector can select element using `#id`.

✅ Correct.

Example:

```css
#aboutProfile {
    background-color: yellow;
}
```

**10/10**

---

# 10. Class vs ID

Your answer:

> Class selector selects multiple elements while ID selector only select single element.

🟢 Conceptually correct.

One important nuance:

An ID is **intended to be unique within a document**. CSS technically can match multiple elements if invalid HTML contains duplicate IDs, but you should not do that.

### Interview-ready

> **A class is reusable and can be assigned to multiple elements, while an ID is intended to uniquely identify a particular element within a document.**

Example:

```html
<p class="skill">Java</p>
<p class="skill">Python</p>
```

But:

```html
<section id="about">
```

**9/10**

---

# 11. Universal selector

Your answer:

> `*` means universal selector, it selects all elements.

🔥 Perfect.

```css
* {
    margin: 0;
}
```

**10/10**

---

# 12. `color` vs `background-color`

Perfect.

> `color` changes text color.

> `background-color` changes background color.

**10/10**

---

# 13. External CSS

You correctly gave the actual syntax:

```html
<link rel="stylesheet" href="style.css">
```

🔥 Excellent.

### Interview-ready

> **We connect an external CSS file to HTML using the `<link>` element with `rel="stylesheet"` and the CSS file path specified in `href`.**

**10/10**

---

# 14. What does `font-size` do?

Your answer:

> It can control the font size using pixels.

Mostly correct.

The important point is that **`font-size` controls the size of text**, and `px` is only one possible unit.

For example:

```css
h1 {
    font-size: 32px;
}
```

You can also use:

```css
font-size: 2rem;
font-size: 1.5em;
font-size: 100%;
```

We'll learn these units later.

### Interview-ready

> **The `font-size` property controls the size of text. It can use units such as `px`, `rem`, `em`, and percentages.**

**8.5/10**

---

# 15. `text-align`

Your answer:

> Text can align with values left, right, center and justify.

✅ Correct.

### Interview-ready

> **The `text-align` property controls the horizontal alignment of inline content within its containing block. Common values include `left`, `right`, `center`, and `justify`.**

**9.5/10**

---

# 🏆 DAY 5 COMPLETE

### **9.4/10 — PASSED ✅**

You now understand:

```text
CSS
│
├── Syntax
├── Selectors
│   ├── Element
│   ├── Class
│   ├── ID
│   └── Universal
│
├── Colors
├── Backgrounds
├── Fonts
├── Text alignment
│
└── External CSS
```

---

# ⚠️ One important thing before Day 6

Don't worry if you can't remember every CSS property.

A professional developer doesn't memorize hundreds of properties.

You should understand:

> **What the property does, when to use it, and how to find the correct syntax.**

That's much more important.

---

