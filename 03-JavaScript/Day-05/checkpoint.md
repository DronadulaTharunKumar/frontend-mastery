Good work! You have answered all 8 JavaScript Day 5 interview questions. Your understanding is strong. Let's evaluate and improve your answers for technical interviews.

## JavaScript Day 5 — Interview evaluation

Interview checkpoint

# 9/10

Strong understanding

### 1. What is a function?

Correct

Your answer: A reusable block of code to perform a specific task.

Interview-ready answer: A function is a reusable block of code designed to perform a specific task. It helps avoid code repetition and improves code organization.

### 2. Parameters vs arguments

Correct

Your explanation is accurate.

```
function add(a, b) {  // a and b are parameters
    return a + b;
}

add(10, 20);          // 10 and 20 are arguments
```

### 3. Purpose of `return`

Correct

Interview-ready answer: The `return` statement sends a value back from a function to the place where the function was called. It also ends the function's execution.

### 4. `return` vs `console.log()`

Correct

You understood the difference.

- `console.log()` displays information in the console.
- `return` sends a result back to the caller so it can be reused.

### 5. What is a function expression?

Correct

Interview-ready answer: A function expression is a function assigned to a variable.

```
const multiply = function(a, b) {
    return a * b;
};
```

### 6. What is an arrow function?

Correct

Your answer is correct.

Interview-ready answer: An arrow function is a shorter syntax for writing functions in JavaScript, using the `=>` operator.

### 7. What are default parameters?

Correct

Interview-ready answer: Default parameters provide predefined values to function parameters when no argument or `undefined` is passed.

### 8. What is function scope?

Almost correct

Your answer: A variable declared in a function can be accessed inside the function only.

This is correct for a locally declared variable, but let's make it more precise.

Interview-ready answer: Function scope means variables declared with `var` inside a function are accessible throughout that function but not outside it. Variables declared with `let` and `const` also follow block scope.

Example:

```
function test() {
    let message = "Hello";
    console.log(message);
}

test();

// console.log(message); // ReferenceError
```

## Day 5 status

Interview checkpoint passed

Your interview score is 9/10.

Excellent! Your Day 5 code is very good. You have successfully implemented function declarations, function expressions, arrow functions, parameters, return values and default parameters.

## JavaScript Day 5 — Code evaluation

## Exercise score

# 24/25

All 8 exercises attempted

Correct logic throughout, with a small improvement needed in Exercise 7.

### Exercise-by-exercise review

| Exercise              | Score | Evaluation                    |
| --------------------- | ----- | ----------------------------- |
| 1. Greeting           | 3/3   | Correct, but commented out    |
| 2. Addition           | 3/3   | Correct                       |
| 3. Multiplication     | 3/3   | Correct                       |
| 4. Square function    | 3/3   | Correct                       |
| 5. Rectangle area     | 3/3   | Correct                       |
| 6. Arrow function     | 3/3   | Correct                       |
| 7. Default parameters | 2/3   | Correct, but test the default |
| 8. Bill calculator    | 4/4   | Correct                       |

### Important improvements

1\. Exercise 1 — Greeting

Your code is correct, but all its lines are commented out. Remove the comments to execute it.

```
function greet() {
    console.log("Welcome");
}

greet();
greet();
greet();
```

2\. Exercise 7 — Default parameters

You called:

```
greet("tharun");
```

This tests the supplied argument, not the default value.

Also test:

```
greet();
```

Expected output:

```
welcome Guest
```

3\. Exercise 8 — Bill calculator

Your arrow function is concise and correct:

```
const subTotal = (price, quantity) => price * quantity;

console.log(subTotal(33, 2));  // 66
console.log(subTotal(50, 10)); // 500
```

Good use of implicit return in an arrow function.

## Day 5 final assessment

Day 5 complete

- Interview checkpoint: 9/10
- Coding exercises: 24/25

You are making good progress. Keep practising independently.

