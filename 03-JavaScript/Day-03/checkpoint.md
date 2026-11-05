Good attempt! Your answers show that you understand the basic purpose of conditional statements. Let's evaluate them and improve your interview explanations.

## JavaScript Day 3 — Interview evaluation

Interview checkpoint score

# 8.5/10

Good understanding; a few explanations need more precision.

### 1. What is a conditional statement?

Correct

Your answer: Used to check a condition before an action.

Better interview answer: A conditional statement controls the execution of code based on whether a condition evaluates to `true` or `false`.

### 2. Difference between `if` and `if...else`?

Correct

Your explanation is right.

Better interview answer:

- `if`: Executes its block only when the condition is true. If false, it skips the block.
- `if...else`: Executes the `if` block when true and the `else` block when false.

### 3. How does `else if` work?

Partially correct

You understood that it checks multiple conditions in sequence.

Better interview answer: `else if` checks additional conditions when the previous condition is false. It executes the first matching true block and skips the remaining branches.

### 4. Why do we use `break` in a `switch` statement?

Correct

Your answer is correct.

Better interview answer: `break` terminates the current switch case and prevents execution from falling through into subsequent cases.

### 5. What is the ternary operator?

Correct

You understood its purpose. Just improve the wording.

Better interview answer: The ternary operator is a shorthand for `if...else`. It evaluates a condition and returns one of two expressions depending on whether the condition is true or false.

```
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
```

Excellent work! You have completed all five JavaScript Day 3 exercises. Your code is logically correct, and you used all the required conditional structures independently.

## Day 3 — Code evaluation

## Exercise score

# 25/25

All five exercises correct

Your code meets the requirements. Minor professional coding improvements are suggested below.

### 1. Age checker

5/5 — Correct

```
if (age >= 18) {
    console.log("adult");
} else {
    console.log("minor");
}
```

Correct condition and proper use of `if...else`.

### 2. Grade calculator

5/5 — Correct

Your conditions are in the correct order: 90, 75, 50, then `else`.

For example, `marks = 80` correctly prints `Grade B`.

Professional improvement: Consider validating that marks are between 0 and 100 before assigning a grade. Otherwise, a value such as `-5` would also print `Fail`.

### 3. Login and offer

5/5 — Correct

Your nested `if` structure correctly checks login first and cart value second.

For `isLoggedIn = true` and `cartValue = 5000`, it prints `Eligible for offer`.

You could also write this using one combined condition:

```
if (isLoggedIn && cartValue >= 2000) {
    console.log("Eligible for offer");
} else {
    console.log("Not eligible for offer");
}
```

Both approaches are valid. Your original version provides more specific messages.

### 4. Day of the week

5/5 — Correct

You correctly used:

- Seven cases.
- `break` after each case.
- `default` for invalid values.

For `day = 2`, the output is `Tuesday`.

### 5. Even or odd

5/5 — Correct

```
console.log(number % 2 === 0 ? "Even" : "Odd");
```

Excellent use of the remainder operator and ternary operator.

For `number = 5`, the output is `Odd`.

## Day 3 final assessment

# 100/100

You successfully demonstrated:

- `if` and `else`
- `else if`
- Nested conditions
- `switch` and `break`
- Ternary operator

Day 3 is complete. Let's continue with your roadmap.

