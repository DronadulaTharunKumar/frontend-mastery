# Day 11 – Interview Checkpoint

## 1. What is Responsive Web Design?

Responsive web design is an approach where a website adapts its layout, content, and components to different screen sizes and devices.

## 2. Why do we use the viewport meta tag?

It tells the browser how to control the webpage's dimensions and scaling on different devices.

## 3. What is the difference between fixed and flexible units?

Fixed units such as `px` represent a fixed size, while flexible units such as `%`, `rem`, `vw`, `vh`, and `fr` can adapt based on their context or available space.

## 4. What is `max-width`?

`max-width` sets the maximum width an element can reach.

For example:

```css
.container {
    max-width: 1200px;
}
```

The element can become smaller than 1200px but should not exceed it.

## 5. What is a media query?

A media query allows CSS rules to be applied based on conditions such as viewport width.

## 6. What does `@media (max-width: 768px)` mean?

It applies the CSS rules when the viewport width is 768px or less.

## 7. What is the difference between `min-width` and `max-width`?

`min-width` is commonly used to apply styles from a minimum screen width upward.

`max-width` is commonly used to apply styles up to a maximum screen width.

## 8. What is mobile-first design?

Mobile-first design means developing the website for smaller screens first and then progressively adding styles for larger screens.

## 9. How can we make images responsive?

A common approach is:

```css
img {
    max-width: 100%;
    height: auto;
}
```

## 10. How can CSS Grid create responsive cards without multiple media queries?

We can use:

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

This allows the browser to automatically fit as many columns as possible based on the available space.

## 11. What can happen when using fixed widths on mobile?

A fixed width can be larger than the available screen width and cause horizontal overflow.

## 12. Why use `max-width` with `margin: auto`?

For example:

```css
.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}
```

This allows the container to use available space while preventing it from becoming excessively wide and centers it horizontally.

---

# 🎯 Key Interview Points

* Responsive design adapts to different screen sizes.
* Media queries apply CSS based on conditions.
* Mobile-first starts development from smaller screens.
* Flexible units help create adaptable layouts.
* `max-width` prevents excessive element width.
* `auto-fit` and `minmax()` are useful for responsive Grid layouts.
* `max-width: 100%` helps prevent images from overflowing.
* Fixed widths can cause horizontal scrolling on small screens.
