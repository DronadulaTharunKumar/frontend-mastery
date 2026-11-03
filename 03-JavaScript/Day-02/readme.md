# JavaScript Day 2 — Operators, Type Conversion and Equality

JavaScript Phase 1 · Day 2 of 48

Welcome back, Tharun!

In Day 1, you learned variables, data types and basic arithmetic. Today, we'll understand how JavaScript compares values, evaluates conditions and converts one data type into another.

Today's learning objectives:

1. Arithmetic operators revision.
2. Comparison operators.
3. Logical operators.
4. Assignment operators.
5. Type conversion.
6. Difference between `==` and `===`.
7. Practical coding exercises and interview questions.

## 1. Arithmetic Operators

Arithmetic operators perform mathematical calculations.

```
let a = 20;
let b = 5;

console.log(a + b);  // 25
console.log(a - b);  // 15
console.log(a * b);  // 100
console.log(a / b);  // 4
console.log(a % b);  // 0
console.log(a ** b); // 3200000
```

| Operator | Meaning        | Example       |
| -------- | -------------- | ------------- |
| `+`      | Addition       | `10 + 5 = 15` |
| `-`      | Subtraction    | `10 - 5 = 5`  |
| `*`      | Multiplication | `10 * 5 = 50` |
| `/`      | Division       | `10 / 5 = 2`  |
| `%`      | Remainder      | `10 % 3 = 1`  |
| `**`     | Exponentiation | `2 ** 3 = 8`  |

### Important: The `+` operator

JavaScript uses `+` for both addition and string concatenation.

```
console.log(10 + 20);     // 30
console.log("10" + 20);   // "1020"
console.log("Hello " + "Tharun"); // Hello Tharun
```

When one operand is a string, `+` generally performs string concatenation after converting the other operand to a string.

## 2. Comparison Operators

Comparison operators compare two values and return a Boolean result: `true` or `false`.

```
let a = 10;
let b = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= b);  // false
console.log(a <= b);  // true
console.log(a == b);  // false
console.log(a != b);  // true
```

| Operator | Meaning                  |
| -------- | ------------------------ |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |
| `==`     | Loose equality           |
| `!=`     | Loose inequality         |
| `===`    | Strict equality          |
| `!==`    | Strict inequality        |

### Example: Age eligibility

```
let age = 22;

console.log(age >= 18);
```

Output:

```
true
```

This comparison is useful when checking eligibility, minimum order amounts, marks and other conditions.

## 3. Loose Equality (`==`) vs Strict Equality (`===`)

This is one of the most important JavaScript concepts.

### Loose equality — `==`

It compares values after performing type conversion when necessary.

```
console.log(10 == "10");
```

Output:

```
true
```

Why?

- First value: number `10`
- Second value: string `"10"`
- JavaScript converts the string to a number for comparison.
- Both values become equivalent.

### Strict equality — `===`

It compares both the value and the data type without performing implicit type conversion.

```
console.log(10 === "10");
```

Output:

```
false
```

Why?

- First value is a number.
- Second value is a string.
- Their types are different.

Visual comparison

# true

`10 == "10"`

Type conversion allowed

# false

`10 === "10"`

Types must match

Interview answer:

`==` compares values after possible type conversion, whereas `===` compares both value and type without implicit conversion. We generally prefer `===` because it avoids unexpected results.

## 4. Logical Operators

Logical operators combine or reverse Boolean conditions.

There are three important logical operators.

### A. AND (`&&`)

Returns true only when both conditions are true.

```
let age = 22;
let hasDegree = true;

console.log(age >= 18 && hasDegree);
```

Output: `true`

AND truth table

| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

### B. OR (`||`)

Returns true if at least one condition is true.

```
let hasEmail = false;
let hasPhone = true;

console.log(hasEmail || hasPhone);
```

Output: `true`

### C. NOT (`!`)

Reverses a Boolean value.

```
let isLoggedIn = false;

console.log(!isLoggedIn);
```

Output: `true`

### Practical example: Login eligibility

```
let username = "Tharun";
let passwordCorrect = true;

let loginSuccess = username === "Tharun" && passwordCorrect;

console.log(loginSuccess);
```

Output: `true`

## 5. Assignment Operators

Assignment operators assign or update variable values.

```
let total = 100;

total += 50;
console.log(total); // 150

total -= 20;
console.log(total); // 130

total *= 2;
console.log(total); // 260

total /= 2;
console.log(total); // 130

total %= 10;
console.log(total); // 0
```

| Operator | Equivalent  |
| -------- | ----------- |
| `x += 5` | `x = x + 5` |
| `x -= 5` | `x = x - 5` |
| `x *= 5` | `x = x * 5` |
| `x /= 5` | `x = x / 5` |
| `x %= 5` | `x = x % 5` |

## 6. Type Conversion

Type conversion means changing a value from one data type to another.

There are two main types:

- Explicit conversion: You convert the value yourself.
- Implicit conversion: JavaScript converts the value automatically.

### A. String to Number

Use `Number()`.

```
let price = "500";

let result = Number(price);

console.log(result);
console.log(typeof result);
```

Output:

```
500
number
```

### B. Number to String

Use `String()`.

```
let age = 22;

let result = String(age);

console.log(result);
console.log(typeof result);
```

Output:

```
22
string
```

### C. Convert to Boolean

Use `Boolean()`.

```
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
```

### Important: Truthy and Falsy values

Falsy values in JavaScript include:

- `false`
- `0` and `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `0n`

Most other values are truthy, including `"0"`, `"false"` and empty arrays `[]`.

### D. Implicit conversion

JavaScript can automatically convert types.

```
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5
```

Notice:

- With `+`, the string is concatenated.
- With `-`, `*` and `/`, JavaScript converts the numeric string into a number.

### E. Invalid numeric conversion

```
let result = Number("Hello");

console.log(result);        // NaN
console.log(typeof result); // number
```

`NaN` means Not-a-Number. Interestingly, its data type is still `number`.

## 7. Practical Project — Product Purchase Calculator

Let's apply today's concepts to an e-commerce purchase.

```
const productName = "Laptop";
const price = 50000;
const quantity = 2;

const subtotal = price * quantity;
const discount = subtotal * 0.10;
const finalAmount = subtotal - discount;

const isEligible = finalAmount >= 50000;

console.log("Product:", productName);
console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);
console.log("Eligible for offer:", isEligible);
```

Output:

```
Product: Laptop
Subtotal: 100000
Discount: 10000
Final Amount: 90000
Eligible for offer: true
```

This combines arithmetic, comparison and Boolean values.

# 8. Day 2 Coding Exercises

Now it's your turn. Create a new folder:

```
javascript-day-02/
├── index.html
├── script.js
└── README.md
```

You can reuse the HTML structure from Day 1.

Exercise 1 — Arithmetic operators

Declare two numbers and calculate addition, subtraction, multiplication, division, remainder and exponentiation.

Exercise 2 — Comparison operators

Declare your age and check:

- Is your age greater than 18?
- Is your age less than 30?
- Is your age exactly 21?
- Is your age not equal to 25?

Exercise 3 — Equality

Predict and then test these expressions:

```
console.log(10 == "10");
console.log(10 === "10");
console.log(0 == false);
console.log(0 === false);
console.log(1 != "1");
console.log(1 !== "1");
```

Explain why the results differ.

Exercise 4 — Logical operators

Create variables:

```
let age = 22;
let hasDegree = true;
let hasExperience = false;
```

Check:

1. Age is at least 18 AND has a degree.
2. Has experience OR has a degree.
3. Does NOT have experience.

Exercise 5 — Type conversion

Convert and print:

- `"250"` into a number.
- `100` into a string.
- `1` into a Boolean.
- `0` into a Boolean.
- `"Hello"` into a number.

Print both the values and their types.

Exercise 6 — Shopping eligibility

Create a shopping eligibility program:

- `cartTotal = 2500`
- `isLoggedIn = true`
- `hasCoupon = false`

Check whether the customer is eligible for a discount using logical operators. Define your own sensible eligibility rule and explain it.

# 9. Day 2 Interview Checkpoint

Try answering these in simple English:

1. What are comparison operators?
2. What is the difference between `==` and `===`?
3. What is the difference between `&&` and `||`?
4. What is type conversion?
5. What is the difference between implicit and explicit conversion?
6. What is `NaN`?
7. What are truthy and falsy values?

## Day 2 progress tracker

Day 2 checklist

## 7/7

Understand arithmetic and comparison operators

Understand loose and strict equality

Understand logical operators

Understand assignment operators

Understand explicit and implicit conversion

Complete six coding exercises

Answer seven interview questions

Your learning rule: First predict the output, then execute the code, then explain why you got that output. This habit will improve your JavaScript problem-solving skills.

Send me your six exercise solutions and interview answers when ready. I'll review them, correct mistakes and give you a score before Day 3: Conditional Statements (`if`, `else if`, `else`, `switch`).
