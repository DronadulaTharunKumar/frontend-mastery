# Day 9 — CSS Flexbox

## Interview Checkpoint

### 1. What is Flexbox?

Flexbox is a CSS layout system used to arrange elements in one dimension, either in a row or a column.

### 2. What does `display: flex` do?

`display: flex` makes an element a flex container and its direct children become flex items.

### 3. What is the main axis?

The main axis is the primary direction in which flex items are arranged. It is determined by `flex-direction`.

### 4. What is the cross axis?

The cross axis is perpendicular to the main axis.

### 5. What does `flex-direction` control?

`flex-direction` controls the direction in which flex items are arranged.

Common values are `row`, `row-reverse`, `column`, and `column-reverse`.

### 6. What does `justify-content` control?

`justify-content` controls the alignment and distribution of flex items along the main axis.

### 7. What does `align-items` control?

`align-items` controls the alignment of flex items along the cross axis.

### 8. What is the difference between `justify-content` and `align-items`?

`justify-content` controls the main axis, while `align-items` controls the cross axis.

### 9. What does `gap` do?

`gap` creates space between flex items.

### 10. What is `flex-wrap`?

`flex-wrap` controls whether flex items remain on one line or wrap onto multiple lines when there is not enough space.

### 11. What is the difference between `align-items` and `align-content`?

`align-items` controls the alignment of flex items along the cross axis.

`align-content` controls the spacing and alignment of multiple flex lines along the cross axis when wrapping occurs.

### 12. What does `flex-grow` do?

`flex-grow` controls how much a flex item can grow when extra space is available.

### 13. What does `flex-shrink` do?

`flex-shrink` controls how much a flex item can shrink when there is not enough space in the flex container.

### 14. What does `flex-basis` do?

`flex-basis` specifies the initial size of a flex item along the main axis before remaining space is distributed.

### 15. How do you center an element horizontally and vertically using Flexbox?

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### 16. What is the difference between `row` and `column`?

With `row`, flex items are arranged horizontally.

With `column`, flex items are arranged vertically.

### 17. Where are `justify-content` and `align-items` applied?

They are applied to the flex container, not directly to the flex items.

### 18. If `flex-direction: column`, which direction is the main axis?

The vertical direction becomes the main axis.

---

## 🧪 Practical Exercises Completed

* [x] Flexbox navigation bar
* [x] Flexbox skill cards
* [x] Flexbox project cards
* [x] Horizontal and vertical centering
* [x] Developer profile layout
* [x] `flex-wrap` practice
* [x] `gap` practice
* [x] `justify-content` practice
* [x] `align-items` practice

## 🏆 Day 9 Status

* [x] Concepts learned
* [x] Practical exercises completed
* [x] Interview checkpoint completed
* [x] Answers reviewed
* [x] Ready for GitHub

**Score: 9.5/10**
