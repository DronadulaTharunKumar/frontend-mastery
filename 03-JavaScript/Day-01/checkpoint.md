Good attempt, Tharun! You're able to explain most JavaScript fundamentals in your own words. Let's review your six interview answers, correct a few technical details, and learn `==` versus `===` before moving forward.

# JavaScript Day 1 — Interview Answer Review

Current theory checkpoint

# 4 / 6 answers substantially correct

Your understanding is developing well. Answers 2 and 4 need more precise wording, and answer 6 is still to be learned.

## 1. What is JavaScript?

Correct

Your answer: JavaScript adds interactions, calculations, validations and dynamic content.

Improved interview answer:

JavaScript is a programming language used to make websites interactive and dynamic. It can handle user interactions, calculations, form validation and dynamic content updates.

Small correction: JavaScript is not just a backend programming language. It runs in browsers and can also run on the backend using environments such as Node.js.

## 2. Difference between `let`, `const` and `var`

Needs improvement

You correctly identified reassignment, but all three keywords can be used to declare variables. The main difference is their reassignment rules and scope.

| Keyword | Reassignment | Scope          |
| ------- | ------------ | -------------- |
| `let`   | Allowed      | Block scope    |
| `const` | Not allowed  | Block scope    |
| `var`   | Allowed      | Function scope |

Improved interview answer:

`let` and `const` are commonly used in modern JavaScript. `let` allows reassignment, while `const` prevents reassignment. `var` is the older declaration keyword and is function-scoped rather than block-scoped.

Example:

```
let age = 22;
age = 23; // Allowed

const country = "India";
// country = "USA"; // TypeError

var city = "Nellore";
city = "Vijayawada"; // Allowed
```

## 3. What are primitive data types?

Partially correct

You listed strings, numbers, booleans, null and undefined, but also included objects and arrays. Objects and arrays are non-primitive values.

JavaScript has seven primitive types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Objects and arrays are non-primitive; arrays are a specialized kind of object.

Improved interview answer:

Primitive data types represent single values, such as text, numbers, booleans or the absence of a value. JavaScript has seven primitive types. Objects and arrays are non-primitive values.

## 4. Difference between `null` and `undefined`

Almost correct

Your answer is close. Remember that `undefined` does not always mean a variable was never assigned; it can also result from accessing a missing object property or from a function that returns no value.

```
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null
```

- `undefined` generally means a value is missing or hasn't been provided.
- `null` represents an intentional absence of a value.

Improved interview answer:

`undefined` usually indicates that a value has not been provided, whereas `null` is a value deliberately assigned to represent no value.

## 5. Purpose of `typeof`

Correct

Your answer: to represent the type of a variable.

More precise wording: The `typeof` operator returns a string indicating the type of a value.

```
console.log(typeof "Hello"); // "string"
console.log(typeof 25);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"
```

One important exception:

```
console.log(typeof null); // "object"
```

This is a historical JavaScript quirk.

## 6. Difference between `==` and `===`

Let's learn this now.

- `==` compares values after allowing type conversion in many cases.
- `===` compares both value and type without type conversion.

```
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

Why?

With `==`, JavaScript converts the string `"5"` to a number for this comparison. With `===`, one operand is a number and the other is a string, so they are not strictly equal.

Interview answer:

`==` is the loose equality operator, which may convert types before comparing. `===` is the strict equality operator, which compares both value and type. In most JavaScript code, prefer `===` because its behavior is more predictable.

## Your quick practice

Answer these three questions without looking at the explanations above.

1\. What is the output?

console.log(10 == "10");

true

false

TypeError

2\. What is the output?

console.log(10 === "10");

true

false

undefined

3\. Which is the best default choice for comparing values when you want to avoid implicit type conversion?

\=

\==

\===

Check answers

After this, send your coding exercises (1–6) when ready. We still need to review your actual code before marking JavaScript Day 1 complete.
