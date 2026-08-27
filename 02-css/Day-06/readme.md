# 🚀 Day 6 — CSS Cascade, Specificity & Inheritance

Today is important because this is where you stop thinking of CSS as just:

> "Write a property and it changes the element."

You'll learn **why one CSS rule wins over another**.

---

# 🎯 Day 6 Goals

By the end of today, you should understand:

```text
CSS Cascade
      ↓
Specificity
      ↓
Inheritance
      ↓
Source Order
      ↓
!important
```

And you'll be able to predict which CSS rule will actually apply.

---

# 1. The CSS Cascade

The word **Cascading** in CSS is important.

Suppose you write:

```css
p {
    color: red;
}

p {
    color: blue;
}
```

What color will the paragraph be?

### Answer:

🔵 **Blue**

Why?

Both selectors have the same specificity.

So the later rule wins.

```text
First rule
    ↓
red

Second rule
    ↓
blue ← WINS
```

This is part of the **cascade**.

---

# 2. Why Does CSS Need a Cascade?

Imagine a large project where CSS comes from:

```text
Browser defaults
      ↓
External stylesheet
      ↓
Component styles
      ↓
Specific selectors
      ↓
Inline styles
```

Many rules may target the same element.

CSS needs a system to determine:

> **Which rule should win?**

That's where the cascade comes in.

---

# 3. Specificity ⭐⭐⭐

Specificity determines how strongly a selector targets an element.

For now, remember this simplified order:

```text
ID
 ↓
Class / Attribute / Pseudo-class
 ↓
Element
 ↓
Universal
```

Or:

```text
#id
 ↓
.class
 ↓
element
 ↓
*
```

---

# 4. Example

HTML:

```html
<p id="message" class="text">
    Hello
</p>
```

CSS:

```css
p {
    color: red;
}

.text {
    color: blue;
}

#message {
    color: green;
}
```

Which color wins?

🟢 **Green**

Because:

```text
p
↓
Element

.text
↓
Class

#message
↓
ID ← strongest of these
```

---

# 5. Specificity Mental Model

For now use:

```text
ID = 100
Class = 10
Element = 1
```

This is a **learning model**, not the complete formal CSS specificity system.

Example:

```css
p {
    color: red;
}
```

Think:

```text
1
```

---

```css
.text {
    color: blue;
}
```

Think:

```text
10
```

---

```css
#message {
    color: green;
}
```

Think:

```text
100
```

Therefore:

```text
100 > 10 > 1
```

ID wins.

---

# 6. Combining Selectors

Now consider:

```css
p.text {
    color: blue;
}
```

This contains:

```text
element → p
class   → .text
```

So its specificity is stronger than:

```css
p {
    color: red;
}
```

because:

```text
p.text
 ↓
element + class
```

---

# 7. Descendant Selectors

You can target an element based on where it appears.

HTML:

```html
<div class="profile">
    <p>Hello</p>
</div>
```

CSS:

```css
.profile p {
    color: blue;
}
```

Meaning:

> Select `<p>` elements inside an element with class `profile`.

The space is important:

```text
.profile p
         ↑
       inside
```

---

# 8. Another Example

```html
<div class="card">
    <h2>Product</h2>
    <p>Price: ₹500</p>
</div>
```

CSS:

```css
.card p {
    color: green;
}
```

Only the paragraph inside `.card` is targeted.

---

# 9. Direct Child Selector

You can use:

```css
.card > p {
    color: red;
}
```

The `>` means:

> Direct child.

Example:

```html
<div class="card">
    <p>Direct child</p>

    <div>
        <p>Nested paragraph</p>
    </div>
</div>
```

This:

```css
.card > p
```

selects:

```text
Direct child ← YES
```

but not:

```text
Nested paragraph ← NO
```

We'll practice these more later.

---

# 10. Inheritance ⭐

Inheritance is different from specificity.

Some CSS properties can be inherited from a parent element.

Example:

```html
<div>
    <p>Hello</p>
</div>
```

CSS:

```css
div {
    color: blue;
}
```

The `<p>` will normally inherit the text color.

Conceptually:

```text
div
color: blue
   ↓
   ↓ inheritance
   ↓
p
color: blue
```

You didn't directly style the `<p>`.

It inherited the property from its parent.

---

# 11. What Properties Commonly Inherit?

Common examples include:

```text
color
font-family
font-size
line-height
```

But not every CSS property inherits.

For example:

```text
background-color
border
margin
padding
```

don't normally inherit from the parent.

Don't try to memorize the complete list today.

---

# 12. Example of Inheritance

HTML:

```html
<div class="profile">
    <h2>About Me</h2>
    <p>I am a developer.</p>
</div>
```

CSS:

```css
.profile {
    color: blue;
}
```

Both:

```text
<h2>
<p>
```

may inherit the blue text color.

---

# 13. Inheritance vs Specificity

This distinction is important.

Suppose:

```css
.profile {
    color: blue;
}

p {
    color: red;
}
```

HTML:

```html
<div class="profile">
    <p>Hello</p>
</div>
```

The paragraph becomes:

🔴 **Red**

Why?

Because the paragraph has a direct rule:

```css
p {
    color: red;
}
```

That beats the inherited value.

Think:

```text
Parent inheritance
       ↓
     blue

Direct rule
       ↓
     red ← wins
```

---

# 14. Source Order

Suppose:

```css
p {
    color: red;
}

p {
    color: blue;
}
```

Both selectors have equal specificity.

The later rule wins.

```text
red
 ↓
blue ← wins
```

This is called **source order**.

---

# 15. `!important` ⚠️

You can write:

```css
p {
    color: red !important;
}
```

This gives the declaration very high priority within the cascade.

But:

## 🚨 Don't use `!important` everywhere.

Beginners often do:

```css
color: red !important;
```

because something isn't working.

That's usually a sign that the CSS should be fixed properly.

Use `!important` only when you have a legitimate reason.

For now:

> **Understand it, but don't depend on it.**

---

# 🧠 Your First Specificity Challenge

Consider:

```html
<p id="intro" class="text">
    Hello World
</p>
```

CSS:

```css
p {
    color: red;
}

.text {
    color: blue;
}

#intro {
    color: green;
}
```

What will the color be?

Don't run it.

Think:

```text
p → 1
.text → 10
#intro → 100
```

Answer:

🟢 **Green**

---

# 🧪 Challenge 2

```html
<p class="message">
    Hello
</p>
```

CSS:

```css
p {
    color: red;
}

.message {
    color: blue;
}

p {
    color: green;
}
```

Which color?

Think:

```text
p → 1
.message → 10
p → 1
```

Therefore:

🔵 **Blue**

The class beats both element selectors.

---

# 🧪 Challenge 3

```html
<div class="box">
    <p>Hello</p>
</div>
```

CSS:

```css
.box {
    color: blue;
}

.box p {
    color: red;
}
```

What color?

🔴 **Red**

Because:

```text
.box
 ↓
class specificity

.box p
 ↓
class + element
```

---

# 🧪 Challenge 4 — Source Order

```css
.title {
    color: red;
}

.title {
    color: blue;
}
```

What color?

🔵 **Blue**

Same selector → same specificity → later rule wins.

---

# 🛠️ Day 6 Practical Exercise

Take your Day 5 project.

Add this to your CSS temporarily:

```css
h2 {
    color: red;
}

.skill {
    color: blue;
}

#skills {
    color: green;
}
```

Then inspect what happens.

Now create a test section:

```html
<section id="specificity-test">
    <h2 class="special-title">Specificity Test</h2>
</section>
```

Add:

```css
h2 {
    color: red;
}

.special-title {
    color: blue;
}

#specificity-test h2 {
    color: green;
}
```

Observe which rule wins.

---

# 🔥 Day 6 Interview Questions

Don't answer yet by looking above.

After doing the exercise, answer:

### Q1.

What does "cascade" mean in CSS?

### Q2.

What is CSS specificity?

### Q3.

Which has higher specificity: element, class, or ID?

### Q4.

What happens when two selectors have the same specificity?

### Q5.

What is CSS inheritance?

### Q6.

Give two examples of CSS properties that commonly inherit.

### Q7.

Does every CSS property inherit?

### Q8.

What is the difference between inheritance and specificity?

### Q9.

What does the space in `.card p` mean?

### Q10.

What does `>` mean in `.card > p`?

### Q11.

What does `!important` do?

### Q12.

Why should we avoid excessive use of `!important`?

---

# 📁 GitHub — Day 6

Update your repository:

```text
day-06/
├── index.html
├── style.css
├── specificity-test.html
├── README.md
└── checkpoint.md
```

In `README.md`, document:

```text
Day 6 – CSS Cascade, Specificity & Inheritance

Topics:
- Cascade
- Specificity
- Element selector
- Class selector
- ID selector
- Descendant selector
- Child selector
- Inheritance
- Source order
- !important

Practical:
- Specificity test
- Inheritance test
```

In `checkpoint.md`:

```text
Question
My Answer
Interview-Ready Answer
Score
```

---

## 🎯 Day 6 Rule

**Don't move to Day 7 until you can predict CSS conflicts without running the code.**

That's the difference between:

> "I know CSS syntax."

and

> **"I understand how CSS actually works."**

Complete the practical exercise, answer the **12 checkpoint questions**, and send them to me. I'll review them just like Day 5.
