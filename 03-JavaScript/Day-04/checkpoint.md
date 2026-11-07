Good work! Your Day 4 interview answers show that you understand the three main loops and how `break` and `continue` work.

Let's evaluate them.

## JavaScript Day 4 — Interview evaluation

Interview checkpoint

# 8.5/10

Good conceptual understanding. Improve the definition of an infinite loop.

### 1. What is a loop?

Correct

Your answer: A loop executes a block of code repeatedly while a condition is satisfied.

Interview-ready answer: A loop is a programming structure that repeatedly executes a block of code while a specified condition is true.

### 2. What are the three main types of loops?

Correct

- `for`
- `while`
- `do...while`

All correct.

### 3. Difference between `while` and `do...while`?

Correct

Your explanation is correct.

Interview-ready answer:

- `while`: Checks the condition before executing the loop body. It might execute zero times.
- `do...while`: Executes the loop body first and checks the condition afterward. It executes at least once.

### 4. What is an infinite loop?

Needs improvement

Your answer: A loop with no increment or decrement with a satisfying condition.

The idea is partly correct, but an infinite loop can happen even when there is an increment or decrement.

Interview-ready answer: An infinite loop is a loop that never terminates because its condition remains true or never becomes false.

Example:

```
while (true) {
    console.log("Running");
}
```

Even a `for` loop with an update can be infinite if the condition never becomes false.

### 5. Difference between `break` and `continue`?

Correct

- `break` terminates the entire loop.
- `continue` skips the current iteration and proceeds to the next iteration.

### 6. When should we use a `for` loop?

Correct

Interview-ready answer: We generally use a `for` loop when the number of iterations is known in advance.

Excellent effort! You have completed all seven Day 4 exercises. Most of your code is correct. I found one important mistake in your `do...while` exercise and one small formatting improvement.

## JavaScript Day 4 — Code review

## Exercise score

# 23/25

6 exercises correct

One exercise needs correction.

### Exercise 1 — Print numbers from 1 to 20

Correct · 3/3

Your loop boundaries and increment are correct.

### Exercise 2 — Even numbers from 1 to 50

Correct · 3/3

Correct use of the remainder operator:

```
if (i % 2 === 0)
```

This checks whether a number is divisible by 2.

### Exercise 3 — Sum from 1 to 10

Correct · 3/3

Your approach is correct.

```
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
```

Output: `55`

You correctly used an accumulator variable.

### Exercise 4 — Multiplication table

Correct · 3/3

Your multiplication logic is correct.

Small formatting improvement:

```
console.log(`5 x ${i} = ${5 * i}`);
```

This makes the output easier to read.

### Exercise 5 — Reverse counting

Correct · 3/3

Excellent use of `while` and decrement:

```
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
```

### Exercise 6 — Do-while

Needs correction · 0/4

Your code:

```
let number = 10;

do {
    console.log(number);
    i++;
} while (number < 5);
```

There are two problems:

1. You incremented `i`, but your loop variable is `number`.
2. The loop variable should be updated consistently.

The corrected version:

```
let number = 10;

do {
    console.log(number);
    number++;
} while (number < 5);
```

Output:

```
10
```

Why does it print 10?

1. JavaScript enters the `do` block first.
2. It prints `10`.
3. It increments `number` to `11`.
4. It checks `11 < 5`, which is false.
5. The loop stops.

This demonstrates the most important feature of `do...while`: it executes at least once.

### Exercise 7 — Break and continue

Correct · 5/5

Your code is correct.

Output:

```
1
2
3
4
6
7
```

- `continue` skips 5.
- `break` stops the loop when it reaches 8.

## Day 4 final assessment

# 23/25

Day 4 — Nearly complete

Your strengths:

- `for` loops
- `while` loops
- Accumulator logic
- `break` and `continue`

