# JavaScript Day 1 — Introduction, Variables and Data Types

JavaScript Phase 1 · Day 1 of 48

Welcome to JavaScript! You've completed your HTML and CSS learning roadmap. Now we'll learn how to make websites interactive.

Today's goal is to understand JavaScript fundamentals and write your first JavaScript programs independently.

## 1. What is JavaScript?

A website generally uses three technologies:

HTML — Structure

Creates headings, paragraphs, buttons, forms and images.

CSS — Appearance

Controls colors, spacing, layouts, animations and responsiveness.

JavaScript — Behaviour

Adds interactions, calculations, validation and dynamic content.

For example, consider a button:

- HTML creates the button.
- CSS styles the button.
- JavaScript decides what happens when someone clicks it.

JavaScript is also used in backend development with Node.js, but we'll start with browser JavaScript.

## 2. Set up your JavaScript project

Create this folder:

```
javascript-day-01/
├── index.html
├── style.css
└── script.js
```

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Day 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Learning JavaScript</h1>
    <p>My first JavaScript program.</p>

    <script src="script.js"></script>
</body>
</html>
```

script.js

```
console.log("Hello, JavaScript!");
console.log("I am learning JavaScript.");
```

Open `index.html` in your browser. Then:

1. Right-click the page.
2. Select Inspect.
3. Open the Console tab.
4. Check the output.

[웹브라우저 빈 페이지(about:blank) 열기 | 메모엔진](https://images.openai.com/static-rsc-4/5lQQ6Ts1kgZ7MjeDNFgY-L3qremZbxblXw_joJwmYHDMxla13taQpVTjKsSC5FcdWmS6SZZ1MqdOOMqOpINungbwn9M05-h90Nkj8nE3JQl9i5Ll5vEoefuABxx7yIa6DzwYmlxwgtKoFGzmWl7cx5wRTyDHyKP-d9scb87_S4I?purpose=inline)

[memoengine.com](https://www.memoengine.com/blog/%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%20%EB%B9%88%20%ED%8E%98%EC%9D%B4%EC%A7%80%28about-blank%29%20%EC%97%B4%EA%B8%B0/?utm_source=chatgpt.com)

`console.log()` displays information in the browser console. It is commonly used for testing and debugging.

## 3. Variables in JavaScript

A variable is a named storage location for a value.

Example:

```
let name = "Tharun";
let age = 23;

console.log(name);
console.log(age);
```

There are three ways to declare variables:

### A. `let`

Use `let` when you expect the value to change.

```
let age = 23;

age = 24;

console.log(age);
```

Output:

```
24
```

### B. `const`

Use `const` when you don't want to reassign the variable.

```
const country = "India";

console.log(country);
```

This is not allowed:

```
const country = "India";
country = "USA";
```

It produces a `TypeError`.

Important: `const` prevents reassignment, but objects and arrays declared with `const` can still have their contents changed. We'll learn that later.

### C. `var`

`var` is the older way to declare variables.

```
var city = "Nellore";

console.log(city);
```

For modern JavaScript, prefer `let` and `const`. Avoid `var` in new code because its function-scoping and redeclaration behavior can cause confusion.

Remember:

| Keyword | Reassignment | Scope    |
| ------- | ------------ | -------- |
| `let`   | Allowed      | Block    |
| `const` | Not allowed  | Block    |
| `var`   | Allowed      | Function |

## 4. Data Types in JavaScript

A data type describes what kind of value a variable stores.

JavaScript has several built-in data types.

### A. String

Used for text.

```
let name = "Tharun";
let city = 'Nellore';

console.log(name);
console.log(city);
```

Strings can use single quotes, double quotes or backticks.

### B. Number

Used for integers and decimal numbers.

```
let age = 23;
let salary = 25000.50;

console.log(age);
console.log(salary);
```

### C. Boolean

Only two values:

```
let isStudent = true;
let isPlaced = false;

console.log(isStudent);
console.log(isPlaced);
```

### D. Undefined

A variable declared without assigning a value has the value `undefined`.

```
let marks;

console.log(marks);
```

Output:

```
undefined
```

### E. Null

Represents an intentional absence of a value.

```
let selectedProduct = null;

console.log(selectedProduct);
```

### F. Object

Stores related data using key-value pairs.

```
let student = {
    name: "Tharun",
    age: 23,
    branch: "CSE"
};

console.log(student);
console.log(student.name);
```

### G. Array

Stores multiple values in an ordered collection.

```
let skills = ["Java", "HTML", "CSS", "JavaScript"];

console.log(skills);
console.log(skills[0]);
```

Array indexing starts from `0`.

## 5. Check the Data Type Using `typeof`

JavaScript provides the `typeof` operator.

```
let name = "Tharun";
let age = 23;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```

Output:

```
string
number
boolean
```

One important JavaScript quirk:

```
console.log(typeof null);
```

Output:

```
object
```

This is a historical JavaScript behavior. Although `null` is a primitive value, `typeof null` returns `"object"`.

## 6. JavaScript Operators

Operators perform operations on values.

### Arithmetic operators

```
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |
| `**`     | Exponentiation |

### Assignment operators

```
let total = 100;

total += 50; // total = total + 50
total -= 20; // total = total - 20
total *= 2;  // total = total * 2

console.log(total); // 260
```

### Increment and decrement

```
let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5
```

## 7. Template Literals

Template literals make it easier to combine text and variables.

```
let name = "Tharun";
let age = 23;

console.log(`My name is ${name} and my age is ${age}.`);
```

Output:

```
My name is Tharun and my age is 23.
```

Template literals use backticks (`` ` ``), not ordinary quotation marks.

## 8. Practical Example — Shopping Bill

Let's combine variables, numbers and arithmetic operators.

```
const productName = "Laptop";
const price = 45000;
const quantity = 2;

const totalAmount = price * quantity;

console.log(`Product: ${productName}`);
console.log(`Price: ₹${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: ₹${totalAmount}`);
```

Output:

```
Product: Laptop
Price: ₹45000
Quantity: 2
Total: ₹90000
```

This is the foundation for calculations in your Foodie food-delivery application.

## 9. Day 1 Practice Exercises

Your turn — write the code yourself

Create a `script.js` file and solve these six exercises.

Exercise 1 — Personal Information

Declare variables for:

- Your name
- Your age
- Your city
- Your degree
- Whether you are a graduate

Print all the information using `console.log()`.

Exercise 2 — Data Types

Create five variables containing:

- A string
- A number
- A boolean
- `null`
- An undefined value

Print their values and data types using `typeof`.

Exercise 3 — Simple Calculator

Declare two numbers and calculate:

- Addition
- Subtraction
- Multiplication
- Division
- Remainder

Exercise 4 — Variable Reassignment

1. Declare `let marks = 75`.
2. Change it to `85`.
3. Print the updated value.
4. Declare a `const` variable and try to reassign it. Observe the error, then remove the reassignment.

Exercise 5 — Shopping Bill

Create a shopping bill with:

- Product name
- Product price
- Quantity
- Total amount

Print a formatted bill using template literals.

Exercise 6 — Student Result

Create variables for three subject marks. Calculate:

- Total marks
- Average marks

Print both results.

## 10. Interview Checkpoint

Try answering these questions in your own words:

1. What is JavaScript, and why do we use it?
2. What is the difference between `let`, `const` and `var`?
3. What are primitive data types?
4. What is the difference between `null` and `undefined`?
5. What is the purpose of `typeof`?
6. What is the difference between `==` and `===`? (We'll study this in detail on Day 2.)

