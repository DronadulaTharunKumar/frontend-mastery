# Day 16 — Interview Checkpoint

## 1. What is CSS architecture?

CSS architecture is the organization of CSS into logical sections such as reset, variables, global styles, layout, components, utilities, and responsive styles.

## 2. What is the DRY principle?

DRY means **Don't Repeat Yourself**. It means avoiding repeated CSS by creating reusable styles.

## 3. What is a component class?

A component class represents a reusable UI component.

Example:

```css
.button { }
.card { }
.navbar { }
```

## 4. What is a modifier class?

A modifier changes or extends the appearance of a component.

Example:

```css
.button-primary { }
.button-secondary { }
```

Used together:

```html
<a class="button button-primary">Contact</a>
```

## 5. What is a utility class?

A utility class performs a small, specific reusable task.

Example:

```css
.text-center {
    text-align: center;
}
```

## 6. What is CSS specificity?

Specificity determines which CSS rule has priority when multiple rules target the same element.

Basic order:

```text
ID > Class > Element
```

## 7. What happens when two selectors have the same specificity?

The rule that appears later in the CSS wins.

## 8. Why should unnecessary specificity be avoided?

High specificity makes CSS harder to override and maintain.

## 9. Why should `!important` generally be avoided?

It overrides normal CSS priority and can make CSS conflicts difficult to manage.

## 10. Why should component and utility styles be separated?

Components define the appearance and structure of a UI component, while utilities provide small reusable behaviors or styles.

## 11. What is the benefit of CSS variables?

They allow commonly used values such as colors, spacing, and border radius to be defined once and reused throughout the stylesheet.

## 12. What did I build?

I built a portfolio-style page demonstrating:

* CSS architecture
* Reusable components
* Buttons and modifiers
* Cards
* Utility classes
* CSS variables
* Flexbox
* Responsive design

## ⭐ Key Interview Point

A maintainable CSS system should prefer:

```text
Low specificity
Reusable components
Utility classes
CSS variables
DRY principles
Clear naming
```

## ✅ Day 16 Complete

**Next:** Day 17 — Advanced CSS Layout & Positioning
