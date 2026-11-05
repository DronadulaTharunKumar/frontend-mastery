# JavaScript Day 4 — Loops

## 1. What is a loop?

A loop executes a block of code repeatedly while a condition is satisfied.

For example, instead of writing:

```
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

You can use a loop to print numbers from 1 to 5.

## 2. The `for` loop

A `for` loop is useful when you know how many times you want to repeat something.

Syntax:

```
for (initialization; condition; update) {
    // code to repeat
}
```

Example:

```
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```
1
2
3
4
5
```

Understand the three parts:

| Part        | Purpose                            |
| ----------- | ---------------------------------- |
| `let i = 1` | Starting value                     |
| `i <= 5`    | Condition to continue              |
| `i++`       | Increase by 1 after each iteration |

## 3. The `while` loop

A `while` loop repeats as long as its condition is true.

```
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

It produces the same output as the previous `for` loop.

Important: Remember to update the variable. Otherwise, you may create an infinite loop.

## 4. The `do...while` loop

This loop executes the code at least once, even if the condition is false.

```
let i = 10;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Output:

```
10
```

Why? The `do` block executes before JavaScript checks the condition.

## 5. Difference between the three loops

| Loop         | When to use                              |
| ------------ | ---------------------------------------- |
| `for`        | When the number of repetitions is known  |
| `while`      | When repetition depends on a condition   |
| `do...while` | When the code must execute at least once |

## 6. `break` and `continue`

`break` stops the loop completely.

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
```

Output: `1 2`

`continue` skips the current iteration and moves to the next one.

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

Output: `1 2 4 5`

## Day 4 — Practical exercises

Write the code yourself. Don't copy examples directly.

1. Print numbers: Use a `for` loop to print numbers from 1 to 20.
2. Even numbers: Print all even numbers from 1 to 50.
3. Sum of numbers: Calculate the sum of numbers from 1 to 10. Expected result: `55`.
4. Multiplication table: Print the multiplication table of a number (for example, 5).
5. Reverse counting: Use a `while` loop to print numbers from 10 down to 1.
6. Do-while: Demonstrate that a `do...while` loop executes at least once when its condition is initially false.
7. Break and continue: Print numbers from 1 to 10, skip 5 using `continue`, and stop when the number reaches 8 using `break`.

## Day 4 interview questions

1. What is a loop in JavaScript?
2. What are the three main types of loops you learned?
3. What is the difference between `while` and `do...while`?
4. What is an infinite loop?
5. What is the difference between `break` and `continue`?
6. When should we use a `for` loop?

Your task: Complete the seven exercises and answer the six interview questions. I'll evaluate your code and understanding before moving to Day 5: Functions.
