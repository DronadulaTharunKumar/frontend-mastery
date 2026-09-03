# Day 12 — Interview Checkpoint

## CSS Transitions & Animations

### 1. What is a CSS transition?

A CSS transition makes a change between two CSS states happen smoothly over a specified amount of time.

Example:

```css
button {
    transition: background-color 0.3s ease;
}
```

---

### 2. What is the difference between transition and animation?

**Transition** usually works when an element changes from one state to another, such as normal → hover.

**Animation** can automatically run through multiple states using `@keyframes`.

---

### 3. What does `:hover` do?

`:hover` applies CSS styles when the user places the mouse pointer over an element.

Example:

```css
button:hover {
    transform: scale(1.05);
}
```

---

### 4. What does `transform` do?

`transform` changes the visual position, size, rotation, or shape of an element without changing the normal document layout.

Common functions include:

* `scale()`
* `translate()`
* `translateY()`
* `rotate()`

---

### 5. What does `scale(1.05)` mean?

It makes the element approximately 5% larger than its original size.

---

### 6. What does `translateY(-3px)` do?

It moves an element 3 pixels upward along the Y-axis.

---

### 7. What is `opacity`?

`opacity` controls how transparent an element is.

```css
opacity: 0;
```

means completely transparent.

```css
opacity: 1;
```

means completely visible.

---

### 8. What is `box-shadow`?

`box-shadow` adds a shadow around an element and can create visual depth.

Example:

```css
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
```

---

### 9. What is `@keyframes`?

`@keyframes` defines the stages of a CSS animation.

Example:

```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
```

---

### 10. How do you apply a keyframe animation?

Use the `animation` property.

```css
header h1 {
    animation: fadeIn 1s ease-in-out;
}
```

Here:

* `fadeIn` → animation name
* `1s` → duration
* `ease-in-out` → timing function

---

### 11. What does `infinite` mean in CSS animation?

It makes the animation repeat continuously.

Example:

```css
animation: spin 1s linear infinite;
```

---

### 12. Why should animations be used carefully?

Too many animations can make a website distracting and difficult to use.

Professional websites generally use subtle animations to improve user experience.

---

## 🎯 Day 12 Interview Questions

### Beginner

* What is CSS transition?
* What is CSS animation?
* What is `:hover`?
* What is `transform`?
* What is `opacity`?
* What is `box-shadow`?

### Intermediate

* Difference between transition and animation?
* Explain `scale()`.
* Explain `translateY()`.
* What are `@keyframes`?
* What does `animation: spin 1s linear infinite` mean?
* Why should `transform` generally be preferred for simple movement effects?

### Practical

**Question:** How would you create a card that moves slightly upward when the user hovers over it?

```css
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}
```

---

## 🧪 Self-Test

Before moving to Day 13, I should be able to explain:

* [ ] `transition`
* [ ] `:hover`
* [ ] `transform`
* [ ] `scale()`
* [ ] `translateY()`
* [ ] `rotate()`
* [ ] `opacity`
* [ ] `box-shadow`
* [ ] `@keyframes`
* [ ] `animation`
* [ ] Transition vs animation
* [ ] Why professional websites use subtle animations

## 🏆 Completion

**Day 12 — CSS Transitions & Animations: COMPLETED**
