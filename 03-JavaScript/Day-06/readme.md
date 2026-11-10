# JavaScript Day 6 — Scope, Hoisting and Temporal Dead Zone

These are important JavaScript concepts for interviews and real-world debugging.

## 1. What is scope?

Scope determines where a variable can be accessed in your code.

There are three important types:

### A. Global scope

A variable declared outside functions and blocks can generally be accessed throughout its accessible script scope.

```
let name = "Tharun";

function greet() {
    console.log(name);
}

greet();
console.log(name);
```

Both statements can access `name`.

### B. Function scope

Variables declared with `var` inside a function are accessible within that function, but not outside it.

```
function test() {
    var message = "Hello";
    console.log(message);
}

test();

// console.log(message); // ReferenceError
```

### C. Block scope

Variables declared with `let` and `const` inside `{}` are accessible only within that block.

```
if (true) {
    let age = 21;
    const city = "Nellore";

    console.log(age);
    console.log(city);
}

// console.log(age);  // ReferenceError
// console.log(city); // ReferenceError
```

Remember:

| Keyword | Scope          |
| ------- | -------------- |
| `var`   | Function scope |
| `let`   | Block scope    |
| `const` | Block scope    |

## 2. What is hoisting?

Hoisting is JavaScript's behaviour of processing declarations before executing code.

Example with `var`:

```
console.log(age);

var age = 21;
```

Output:

```
undefined
```

JavaScript behaves conceptually like this:

```
var age;

console.log(age);

age = 21;
```

Important: JavaScript hoists the declaration, not the assigned value.

With `let`:

```
console.log(age);

let age = 21;
```

This produces a `ReferenceError` because `age` is in its Temporal Dead Zone.

## 3. Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and the point where a `let` or `const` variable is initialized.

```
{
    // TDZ starts here

    let age = 21; // TDZ ends here

    console.log(age);
}
```

Accessing the variable before initialization causes a `ReferenceError`.

## 4. Hoisting with function declarations

Function declarations are also hoisted.

```
greet();

function greet() {
    console.log("Hello JavaScript");
}
```

Output:

```
Hello JavaScript
```

But a function expression assigned to `const` cannot be called before initialization.

```
// greet(); // ReferenceError

const greet = function() {
    console.log("Hello");
};
```

## 5. Strict mode

Strict mode helps catch certain JavaScript mistakes.

```
"use strict";

x = 10; // ReferenceError: x is not defined
```

Without strict mode, assigning to an undeclared variable in a non-module script may create a global variable. Strict mode prevents that.

## Day 6 — Coding exercises

Create `javascript-day-06` in your GitHub learning repository.

1. Global scope: Declare a global variable and access it inside and outside a function.
2. Function scope: Declare a variable using `var` inside a function. Try accessing it outside.
3. Block scope: Declare variables using `var`, `let`, and `const` inside an `if` block. Test which variables can be accessed outside.
4. Hoisting: Test `var`, `let`, and `const` by logging each variable before its declaration. Run each test separately.
5. Function hoisting: Call a function declaration before defining it.
6. Function expression: Test calling a function expression before its initialization.
7. Strict mode: Write `"use strict"` and try assigning a value to an undeclared variable.

## Day 6 interview questions

1. What is scope in JavaScript?
2. What are global, function and block scope?
3. Difference between `var`, `let` and `const`?
4. What is hoisting?
5. What is the Temporal Dead Zone?
6. Why does `var` return `undefined` when accessed before assignment?
7. Are function declarations hoisted?
8. What is strict mode?

Your task: Understand the examples, write the seven exercises independently, and answer the eight interview questions. I'll review both before we proceed to Day 7 revision and the mini calculator project.
