Good work! You answered all 7 JavaScript Day 2 interview questions. Your understanding is mostly correct. Let's evaluate each answer and improve it for interviews.

## Day 2 — Interview Answer Evaluation

## Your score

# 12/14

Strong understanding. Improve precision and interview wording.

1\. What are comparison operators?

Correct

Your answer: They are used to compare values of variables.

Interview-ready answer: Comparison operators compare two values and return a Boolean result: `true` or `false`.

Examples: `>`, `<`, `>=`, `<=`, `===`, `!==`.

2\. Difference between `==` and `===`?

Correct

Your answer is correct. The technical term is type coercion, rather than type conversation.

Interview-ready answer:

- `==` compares values after possible type conversion.
- `===` compares both value and type without implicit type conversion.

Example:

```
console.log(10 == "10");  // true
console.log(10 === "10"); // false
```

3\. Difference between `&&` and `||`?

Correct

Interview-ready answer:

- `&&` (AND): the result is true when both conditions are true.
- `||` (OR): the result is true when at least one condition is true.

For beginners, remember: AND requires both; OR requires at least one.

4\. What is type conversion?

Correct

Interview-ready answer: Type conversion is the process of converting a value from one data type to another, such as converting a string into a number.

```
let price = Number("250");
console.log(price); // 250
```

5\. Implicit vs explicit conversion?

Correct

Interview-ready answer:

- Implicit conversion: JavaScript converts a value's type automatically.
- Explicit conversion: The programmer deliberately converts the type using methods such as `Number()`, `String()` or `Boolean()`.

Examples:

```
console.log("5" + 2);       // "52" — implicit
console.log(Number("5")+2); // 7 — explicit
```

6\. What is NaN?

Needs improvement

Your answer: “Not a number.”

That is the full form, but you need to explain its meaning.

Interview-ready answer: `NaN` stands for Not-a-Number. It represents an invalid or unrepresentable numeric result, and its JavaScript type is still `"number"`.

```
console.log(Number("Hello"));       // NaN
console.log(typeof NaN);            // "number"
console.log(Number.isNaN(NaN));     // true
```

7\. What are truthy and falsy values?

Partially correct

You correctly listed several falsy values. One correction: `" "` (a string containing a space) is truthy, not falsy. The empty string `""` is falsy.

The falsy values in JavaScript are:

- `false`
- `0`, `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `0n`

Interview-ready answer: Truthy values behave like `true` in Boolean contexts, while falsy values behave like `false`.

Examples:

```
console.log(Boolean(" "));  // true
console.log(Boolean(""));   // false
console.log(Boolean("0"));  // true
console.log(Boolean(0));    // false
```
Your Day 2 quiz answer B is correct! ✅

The output is:

```
true
false
number
```

- `" "` is truthy because it contains a space.
- `""` is falsy because it is an empty string.
- `typeof NaN` returns `"number"`.

Now let's review your Day 2 exercises before moving to Day 3.

## JavaScript Day 2 — Exercise evaluation

## Overall assessment

Good progress

You have demonstrated a good understanding of arithmetic, comparisons, equality, logical operators and type conversion. Your main correction is in the final shopping eligibility exercise.

### Exercise 1 — Arithmetic operators

Correct · 6/6

With `a = 20` and `b = 5`, your outputs are:

| Operation      | Output    |
| -------------- | --------- |
| Addition       | 25        |
| Subtraction    | 15        |
| Multiplication | 100       |
| Division       | 4         |
| Remainder      | 0         |
| Exponentiation | 3,200,000 |

Your exponentiation is correct: \\(20^5 = 3{,}200{,}000\\).

### Exercise 2 — Comparison operators

Correct · 4/4

For `age = 21`, all four expressions return `true`:

- `age > 18`
- `age < 30`
- `age === 21`
- `age != 25`

Improvement: Prefer `!==` over `!=` when you want to compare both value and type strictly.

### Exercise 3 — Equality operators

Correct · 6/6

All six predicted results are correct.

Your comments show that you understand the difference between loose and strict equality. You should also be able to explain why:

- `10 == "10"` is `true` because loose equality allows type conversion.
- `10 === "10"` is `false` because the types differ.
- `0 == false` is `true` because loose equality converts the values for comparison.
- `0 === false` is `false` because a number and a Boolean are different types.
- `1 != "1"` is `false` because loose inequality converts the values before comparing.
- `1 !== "1"` is `true` because strict inequality detects the type difference.

### Exercise 4 — Logical operators

Correct · 3/3

All three expressions are correct:

```
age >= 18 && hasDegree       // true
hasExperience || hasDegree   // true
!hasExperience               // true
```

One small note: your reassignment `age = 22` is valid because `age` was declared earlier with `let`.

### Exercise 5 — Type conversion

Correct · 5/5

Your conversion code is correct.

| Expression        | Value   | Type        |
| ----------------- | ------- | ----------- |
| `Number("250")`   | `250`   | `"number"`  |
| `String(100)`     | `"100"` | `"string"`  |
| `Boolean(1)`      | `true`  | `"boolean"` |
| `Boolean(0)`      | `false` | `"boolean"` |
| `Number("Hello")` | `NaN`   | `"number"`  |

Good use of template literals to print both the value and its type.

### Exercise 6 — Shopping eligibility

Needs correction

Your code:

```
console.log("Eligible for a discount:" + (isLoggedIn && hasCoupon) && cartTotal >= 2000);
```

The issue is operator precedence. JavaScript evaluates the string concatenation with `+` before the logical AND `&&`. As a result, this expression doesn't test eligibility as you intended.

If your rule is that a customer must be logged in, have a coupon, and spend at least ₹2,000, write:

```
let eligible = isLoggedIn && hasCoupon && cartTotal >= 2000;

console.log("Eligible for a discount:", eligible);
```

Expected output:

```
Eligible for a discount: false
```

Why? The customer is logged in and meets the cart minimum, but `hasCoupon` is `false`.

Important: Define the business rule first, then combine the conditions with logical operators.

## Day 2 final score

## Day 2 exercises

# 24/27

Strong work. Review the shopping expression and operator precedence.

Your quiz and exercises show that you're ready to proceed to Day 3.
