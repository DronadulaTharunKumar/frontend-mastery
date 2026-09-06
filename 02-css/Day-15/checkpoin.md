# Day 15 — CSS Units & Sizing

## 🎯 Topics Covered

* CSS absolute and relative units
* `px`
* `%`
* `rem`
* `em`
* `vw`
* `vh`
* `vmin`
* `vmax`
* `min()`
* `max()`
* `clamp()`
* Responsive sizing
* Professional CSS unit selection
* Responsive containers
* Responsive typography
* CSS sizing best practices

---

## 🧠 Interview Questions & Answers

### 1. What is the difference between `px` and `rem`?

`px` is an absolute CSS unit, while `rem` is relative to the root (`html`) element's font size.

Normally:

```text
1rem = 16px
```

---

### 2. What does `%` mean in CSS?

`%` is a relative unit. Its reference depends on the CSS property and its containing element.

For example, percentage width is generally calculated relative to the containing block.

---

### 3. What is the default value of `1rem`?

Normally:

```text
1rem = 16px
```

because browsers usually have a default root font size of `16px`.

---

### 4. What does `1vw` mean?

`1vw` means **1% of the viewport width**.

Example:

```css
width: 50vw;
```

means approximately 50% of the viewport width.

---

### 5. What does `1vh` mean?

`1vh` means **1% of the viewport height**.

Example:

```css
min-height: 100vh;
```

makes an element at least as tall as the viewport.

---

### 6. How can you create a responsive container?

One approach is:

```css
.container {
    width: min(90%, 1200px);
    margin: 0 auto;
}
```

This allows the container to remain responsive while preventing it from becoming wider than `1200px`.

---

### 7. What is `clamp()`?

`clamp()` allows a value to have a minimum, preferred, and maximum value.

Syntax:

```css
clamp(minimum, preferred, maximum)
```

Example:

```css
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}
```

The font size can grow responsively but stays between `2rem` and `4rem`.

---

### 8. Why is `clamp()` useful?

`clamp()` is useful for creating responsive values without requiring many media queries.

It is especially useful for:

* Font sizes
* Spacing
* Widths
* Responsive headings
* Hero sections

---

### 9. What problem can a fixed width cause?

A fixed width can become larger than the available screen width and cause horizontal overflow on smaller devices.

Example:

```css
.card {
    width: 600px;
}
```

This may not fit properly on a mobile screen.

---

### 10. Why is `width: min(90%, 1200px)` useful?

It combines a flexible percentage width with a maximum limit.

```css
width: min(90%, 1200px);
```

The element uses the smaller of:

```text
90% of available width
1200px
```

This creates a responsive container.

---

### 11. Which units would you choose for different situations?

| Use case                    | Recommended unit      |
| --------------------------- | --------------------- |
| Borders                     | `px`                  |
| Normal typography           | `rem`                 |
| Responsive typography       | `clamp()`             |
| Spacing                     | `rem`                 |
| Responsive widths           | `%`                   |
| Maximum container width     | `max-width` / `min()` |
| Viewport width based sizing | `vw`                  |
| Full-screen sections        | `vh` / `min-height`   |

---

### 12. Does `transform` change normal document flow?

No.

For example:

```css
.card:hover {
    transform: translateY(-3px);
}
```

The card visually moves, but its original position in the document flow remains unchanged.

This makes `transform` useful for hover animations.

---

## 🔢 Common `rem` Conversions

Assuming:

```text
1rem = 16px
```

```text
0.25rem = 4px
0.5rem  = 8px
0.75rem = 12px
1rem    = 16px
1.25rem = 20px
1.5rem  = 24px
1.75rem = 28px
2rem    = 32px
2.25rem = 36px
2.5rem  = 40px
3rem    = 48px
3.5rem  = 56px
4rem    = 64px
```

---

## 📐 `clamp()` Examples

```css
font-size: clamp(1.5rem, 4vw, 2rem);
```

Range:

```text
24px → responsive → 32px
```

```css
font-size: clamp(1rem, 2.5vw, 1.25rem);
```

Range:

```text
16px → responsive → 20px
```

```css
font-size: clamp(2rem, 5vw, 4rem);
```

Range:

```text
32px → responsive → 64px
```

---

## 🛠️ Practical Work Completed

During Day 15, I created responsive CSS exercises using:

* CSS variables
* `rem`
* `%`
* `vw`
* `vh`
* `min()`
* `clamp()`
* Responsive cards
* Responsive typography
* Responsive containers
* Hover effects
* CSS transitions

---

## 💡 Key Learning

CSS units should be selected based on the purpose of the property rather than using `px` everywhere.

A professional approach is:

```text
Typography → rem / clamp()
Spacing → rem
Borders → px
Containers → % / min() / max-width
Responsive sizing → % / vw / clamp()
Full-screen layouts → vh / min-height
```

---

## 🤔 Self-Assessment

* [x] Understand absolute and relative units
* [x] Understand `px`
* [x] Understand `%`
* [x] Understand `rem`
* [x] Understand `em`
* [x] Understand `vw`
* [x] Understand `vh`
* [x] Understand `vmin` and `vmax`
* [x] Understand `min()`
* [x] Understand `max()`
* [x] Understand `clamp()`
* [x] Build responsive sizing
* [x] Apply professional unit selection
* [x] Complete practical exercises
* [x] Complete interview checkpoint

## ✅ Day 15 Status

**Completed**

### Next

**Day 16 — CSS Architecture & Maintainable CSS**
