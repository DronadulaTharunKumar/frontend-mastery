Excellent work. You understood the main idea of Day 6. A few answers need more precise wording for interviews.

# 🎤 Day 6 Checkpoint Evaluation

**Score: 9/10 ⭐ — PASSED**

| Q  | Topic                        |  Score |
| -- | ---------------------------- | -----: |
| 1  | Cascade                      | 9.5/10 |
| 2  | Specificity                  |   9/10 |
| 3  | Specificity order            |  10/10 |
| 4  | Same specificity             |   8/10 |
| 5  | Inheritance                  |   9/10 |
| 6  | Inherited properties         |  10/10 |
| 7  | Do all properties inherit?   |  10/10 |
| 8  | Inheritance vs specificity   | 7.5/10 |
| 9  | Descendant selector          |  10/10 |
| 10 | Child selector               |  10/10 |
| 11 | `!important`                 | 8.5/10 |
| 12 | Avoid excessive `!important` |   8/10 |

---

## 1. What is CSS Cascade? ✅

Your answer:

> cascade is a system that tell which rule will win.

Excellent.

### Interview-ready:

> **The CSS cascade is the process used by the browser to determine which CSS declaration should be applied when multiple rules target the same element.**

Your example is also correct.

---

## 2. What is specificity? ✅

Your answer:

> specificity can determine how strong target element is being selected.

Good idea, but say **selector**, not element.

### Interview-ready:

> **CSS specificity determines the priority of a selector when multiple CSS rules target the same element.**

---

## 3. Which has higher specificity? ✅

You said:

> ID have high specificity because it selects unique element.

Correct.

Remember our simplified order:

```text
ID
 ↓
Class
 ↓
Element
 ↓
Universal
```

### Interview-ready:

> **An ID selector has higher specificity than a class selector, which has higher specificity than an element selector.**

---

## 4. What happens when two selectors have the same specificity? 🟡

You said:

> then choose specificity order or source order.

The first part isn't necessary because we've already established that specificity is equal.

### Correct answer:

> **When two declarations have the same specificity, the declaration that appears later in the stylesheet generally wins. This is called source order.**

Example:

```css
p {
    color: red;
}

p {
    color: blue;
}
```

Result:

🔵 Blue.

---

# 5. What is inheritance? ✅

Your answer:

> child elements can inherit some property value from parent element CSS.

Correct.

### Interview-ready:

> **Inheritance is a CSS mechanism where certain properties are passed from a parent element to its descendants when the child doesn't have its own value for that property.**

---

# 6. Give two inherited properties. ✅

You answered:

> font-family and color.

Perfect.

Other examples include:

```text
line-height
font-size
```

**10/10**

---

# 7. Does every CSS property inherit? ✅

You said:

> no, only some can inherit.

Exactly.

### Interview-ready:

> **No. Only certain CSS properties inherit by default. Properties such as `color` and `font-family` commonly inherit, while properties such as `margin`, `padding`, and `border` do not normally inherit.**

---

# 8. Inheritance vs Specificity ⚠️

This was your weakest answer:

> inheritance can inherit property values, by using specificity we can select property value.

You understand both concepts, but the **difference isn't clear enough**.

### Interview-ready answer:

> **Inheritance determines whether a child element receives certain property values from its parent, while specificity determines which CSS rule has priority when multiple rules directly target an element.**

### Example:

```css
.parent {
    color: blue;
}

p {
    color: red;
}
```

The `<p>` gets **red** because it has a direct rule.

Think:

```text
Inheritance
Parent → Child

Specificity
Rule A vs Rule B
       ↓
    Which wins?
```

This distinction is important. ⭐

---

# 9. `.card p` ✅

You said:

> selecting a p element inside card class.

Correct.

### Interview-ready:

> **`.card p` is a descendant selector that selects all `<p>` elements inside an element with the `card` class, regardless of nesting level.**

---

# 10. `.card > p` ✅

You said:

> only selects child element not nested element.

Correct.

More precisely:

> **`.card > p` selects only `<p>` elements that are direct children of `.card`; it does not select deeply nested `<p>` elements.**

Perfect.

---

# 11. What does `!important` do? 🟡

You said:

> it tells CSS, consider this value as strong.

That's the right idea.

### Interview-ready:

> **`!important` gives a CSS declaration very high priority in the cascade and can override normal declarations.**

Example:

```css
p {
    color: red !important;
}
```

---

# 12. Why avoid excessive `!important`? 🟡

You said:

> because will work only sometimes not all times.

This needs correction.

`!important` **does work**, but excessive use creates problems.

### Interview-ready:

> **We should avoid excessive use of `!important` because it makes CSS harder to override, increases specificity conflicts, and makes the stylesheet difficult to maintain and debug.**

Think:

```text
Normal CSS
   ↓
Easy to override

!important everywhere
   ↓
Specificity battles 😵
   ↓
Hard to maintain
```

---

# 🏆 Day 6 Final Result

**9/10 — PASSED ✅**

More importantly, you can now reason about CSS instead of just memorizing properties.

You understand:

```text
CSS
│
├── Selectors
│
├── Cascade
│
├── Specificity
│
├── Source Order
│
├── Inheritance
│
├── Descendant Selector
│
├── Child Selector
│
└── !important
```

### Your main improvement

Remember this distinction:

> **Inheritance = where a value comes from.**
> **Specificity = which direct CSS rule wins.**

That one sentence will help you answer many CSS interview questions.

---

## 🚀 Day 7

Next we'll start **CSS Box Model**:

```text
┌──────────────────────────────┐
│           Margin             │
│   ┌──────────────────────┐   │
│   │       Border         │   │
│   │  ┌────────────────┐  │   │
│   │  │    Padding     │  │   │
│   │  │  ┌──────────┐  │  │   │
│   │  │  │ Content  │  │  │   │
│   │  │  └──────────┘  │  │   │
│   │  └────────────────┘  │   │
│   └──────────────────────┘   │
└──────────────────────────────┘
```

We'll build a **real card layout** and you'll learn `width`, `height`, `padding`, `border`, `margin`, `box-sizing`, and why elements sometimes become bigger than you expect.
