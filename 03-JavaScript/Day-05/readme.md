
# JavaScript Day 5 — Functions

## 1. What is a function?

A function is a reusable block of code designed to perform a particular task.

For example, imagine you need to calculate the sum of two numbers many times.

Without a function:

```
let a = 10;
let b = 20;
console.log(a + b);

let x = 50;
let y = 30;
console.log(x + y);
```

With a function:

```
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 30);
```

Output:

```
30
80
```

You write the logic once and reuse it.

## 2. Function declaration

Syntax:

```
function functionName(parameters) {
    // code
}
```

Example:

```
function greet() {
    console.log("Welcome to JavaScript");
}

greet();
```

Important terms:

- `function` — keyword used to declare a function.
- `greet` — function name.
- `()` — holds parameters.
- `{}` — contains the function body.
- `greet()` — function call that executes it.

## 3. Parameters and arguments

These two terms are important for interviews.

```
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

- `a` and `b` are parameters — variables listed in the function definition.
- `10` and `20` are arguments — actual values passed during the function call.

## 4. Return statement

A function can return a value instead of printing it.

```
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output: `30`

Important difference:

| `console.log()`                      | `return`                          |
| ------------------------------------ | --------------------------------- |
| Displays a value in the console      | Sends a value back to the caller  |
| Does not return that displayed value | Can be stored or reused           |
| Used for output/debugging            | Used to produce a function result |

Example:

```
function calculateTotal(price, quantity) {
    return price * quantity;
}

let bill = calculateTotal(500, 3);
console.log(bill); // 1500
```

## 5. Function expression

You can store a function inside a variable.

```
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 4));
```

Output: `20`

Here, the function is assigned to the variable `multiply`.

## 6. Arrow functions

Arrow functions provide a shorter syntax.

```
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

For a single expression, you can shorten it further:

```
const add = (a, b) => a + b;

console.log(add(10, 20));
```

Both produce `30`.

## 7. Default parameters

A default parameter provides a value when an argument is not supplied.

```
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Tharun");
greet();
```

Output:

```
Hello Tharun
Hello Guest
```

## 8. Scope basics

A variable declared inside a function is generally accessible only inside that function.

```
function test() {
    let message = "Hello";
    console.log(message);
}

test();

// console.log(message); // ReferenceError
```

The variable `message` is local to the function.

## Day 5 — Practical exercises

Create `javascript-day-05` in your learning repository.

## Your coding checklist

Exercise 1 — Greeting

Create a function named greet that prints a welcome message. Call it three times.

Exercise 2 — Addition

Create an add function that accepts two parameters and returns their sum.

Exercise 3 — Multiplication

Create a function that accepts two numbers and returns their product.

Exercise 4 — Return vs console.log

Create a function that returns the square of a number. Store the result in a variable and print it.

Exercise 5 — Function expression

Create a function expression that calculates the area of a rectangle.

Exercise 6 — Arrow function

Create an arrow function that checks whether a number is even.

Exercise 7 — Default parameters

Create a greeting function with a default name of Guest.

Exercise 8 — Practical bill calculator

Create a function accepting price and quantity. Return the subtotal and call it with two different products.

Completed

## 0/8

## Day 5 interview questions

After completing your code, answer these:

1. What is a function in JavaScript?
2. What is the difference between parameters and arguments?
3. What is the purpose of the `return` statement?
4. Difference between `return` and `console.log()`?
5. What is a function expression?
6. What is an arrow function?
7. What are default parameters?
8. What is function scope?

Your task: First understand these concepts, then write the eight exercises independently. Send me your code and interview answers for review. We'll complete Day 5 before moving to Day 6: Scope, Hoisting and Temporal Dead Zone.
