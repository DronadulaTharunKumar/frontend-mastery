

# JavaScript Day 3 — Conditional Statements

Today you'll learn how to make a program take different actions depending on a condition. This is a core skill for login validation, shopping discounts, exam results and eligibility checks.

## 1. The `if` statement

An `if` statement executes a block of code only when its condition is true.

```
let age = 21;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

Output:

```
You are eligible to vote.
```

If `age` were `16`, the condition would be false and nothing would print.

## 2. The `if...else` statement

Use `else` when you want one action if a condition is true and another if it is false.

```
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output: `Minor`

### How it works

Check condition

Is `age >= 18`?

True

Print `Adult`

False

Print `Minor`

## 3. The `if...else if...else` statement

Use this when there are multiple possible outcomes.

```
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

Output: `Grade B`

JavaScript checks conditions from top to bottom. When it finds the first true condition, it executes that block and skips the remaining branches.

Important: The order matters. Check higher thresholds first when assigning grades.

## 4. Nested `if` statements

An `if` statement can be placed inside another `if` statement.

```
let isLoggedIn = true;
let cartTotal = 2500;

if (isLoggedIn) {
    if (cartTotal >= 2000) {
        console.log("Eligible for the offer");
    } else {
        console.log("Minimum cart value not reached");
    }
} else {
    console.log("Please log in first");
}
```

This checks login first, then checks the cart value.

## 5. The `switch` statement

Use `switch` when you want to match one value against several specific cases.

```
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

Output: `Tuesday`

- `case` defines a possible matching value.
- `break` exits the switch after a match.
- `default` runs if no case matches.

## 6. The ternary operator

The ternary operator is a shorter way to choose between two expressions.

```
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output: `Adult`

General structure:

```
condition ? valueIfTrue : valueIfFalse;
```

Use it for simple two-way decisions. For complicated logic, ordinary `if...else` statements are usually easier to read.

## Day 3 — Your exercises

Create a folder named `javascript-day-03` containing `index.html`, `script.js`, and `README.md`. Write the JavaScript yourself and send me your code for review.

## Practice checklist

Tick each exercise as you complete it.

Exercise 1 — Age checker

Declare an age. Print whether the person is an adult or a minor.

Exercise 2 — Grade calculator

Use marks to print A for 90+, B for 75–89, C for 50–74, and Fail below 50.

Exercise 3 — Login and offer

Require login and a cart total of at least ₹2,000 before printing that the customer is eligible.

Exercise 4 — Day of the week

Use switch to print the weekday for numbers 1–7. Print Invalid day for other numbers.

Exercise 5 — Ternary operator

Use a ternary operator to determine whether a number is even or odd.

5 of 5 completed

### Day 3 interview checkpoint

After the exercises, answer these in your own words:

1. What is a conditional statement?
2. What is the difference between `if` and `if...else`?
3. How does `else if` work?
4. Why do we use `break` in a `switch` statement?
5. What is the ternary operator, and when should we use it?

Your next step: Complete the five exercises and send me your code. I'll check the logic, output, readability and interview understanding before we move to Day 4: loops.
