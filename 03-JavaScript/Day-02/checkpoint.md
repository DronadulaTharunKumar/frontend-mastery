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

