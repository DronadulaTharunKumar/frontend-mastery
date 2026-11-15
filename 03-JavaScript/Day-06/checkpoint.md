1.scope determine where a variable can be accessed inn the code
2.global variable can be accessed any where in th code it is declared out of the function and block,function scope :a variable declared inside the function with var can be accessed only inside the function,block scope:a variable declared inside the block with let or const cant accessd outside the block.
3.var:function scope while let and const are block scope 
4.logging or calling a variable or function before declaration, javascript automatically declare a variable before callling or logging.
5.period between entering  a scope and  point where  let or const variable variable are initialized
6.beacuse it hoist  undeclared variable
7.yes
8.prevent the mistakes like assigning value to undeclared variable which will create a global variable

Your **Day 6 interview answers are mostly correct.** You understand scope, hoisting, TDZ, and strict mode. A few answers need more precise wording to make them interview-ready.

## **Day 6 — Interview answer review**

| Q                                | Score  | Feedback                                                                                                                                                      |
| -------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Scope                         | 1/1    | Correct.                                                                                                                                                      |
| 2. Global, function, block scope | 1.5/2  | Correct idea. Global variables are accessible within their applicable scope, not literally everywhere in every JavaScript environment.                        |
| 3. `var`, `let`, `const`         | 0.75/1 | Correct basic distinction. Also remember `var` can be redeclared; `let` can be reassigned but not redeclared in the same scope; `const` cannot be reassigned. |
| 4. Hoisting                      | 0.5/1  | Needs correction: JavaScript processes declarations before execution, but it does not automatically initialize every variable.                                |
| 5. TDZ                           | 1/1    | Correct.                                                                                                                                                      |
| 6. Why `var` gives `undefined`   | 0.5/1  | The reason is that `var` is hoisted and initialized with `undefined`, not because it is an undeclared variable.                                               |
| 7. Function declarations         | 1/1    | Correct.                                                                                                                                                      |
| 8. Strict mode                   | 0.75/1 | Correct example, but strict mode also catches other unsafe or error-prone JavaScript behaviour.                                                               |

**Interview score**

# **7/9**

Good progress

## **Important corrections**

**Q4 — What is hoisting?**

Interview-ready answer:

> Hoisting is JavaScript's behaviour of processing declarations before executing the code. `var` variables are initialized with `undefined`, while `let` and `const` remain inaccessible until their initialization.

**Q6 — Why does&#x20;**`var`**&#x20;return&#x20;**`undefined`**&#x20;before assignment?**

> Because JavaScript hoists the `var` declaration and initializes it with `undefined`. The assigned value is set only when execution reaches the assignment statement.

**Q8 — What is strict mode?**

> Strict mode makes JavaScript execute with stricter rules. For example, it prevents assigning a value to an undeclared variable and helps catch certain coding mistakes.

## **Now submit your Day 6 coding exercises**

Your interview answers are reviewed. The remaining part is the practical coding test.

Please send your code for all seven exercises:

1. Global scope — access a global variable inside and outside a function.
2. Function scope — declare `var` inside a function and try accessing it outside.
3. Block scope — test `var`, `let`, and `const` inside an `if` block.
4. Hoisting — test `var`, `let`, and `const` before declaration. Run each separately.
5. Function declaration — call it before its definition.
6. Function expression — call it before initialization.
7. Strict mode — assign a value to an undeclared variable.

**Important:** For exercises 4 and 6, errors are expected in some tests. Don't worry if you see them.

I'll review your code, explain mistakes, and give you a practical score. After that, we'll move to Day 7 revision and the mini calculator project.

Excellent work! You have completed all **7 Day 6 coding exercises**. Your understanding of scope and hoisting is improving. Let's review each one.

## **Day 6 — Code review**

| Exercise                         | Result  | Score     |
| -------------------------------- | ------- | --------- |
| 1. Global scope                  | Correct | 2/2       |
| 2. Function scope                | Correct | 2/2       |
| 3. Block scope                   | Correct | 2/2       |
| 4. Hoisting                      | Correct | 3/3       |
| 5. Function declaration hoisting | Correct | 2/2       |
| 6. Function expression           | Correct | 2/2       |
| 7. Strict mode                   | Correct | 2/2       |
| **Total**                        |         | **15/15** |

### **Important observations**

**1. Global scope — Correct**

```
let name = "tharun";

function greet() {
    console.log(name);
}

greet();
console.log(name);
```

Both outputs are `tharun`. The function can access the variable from the outer scope.

**2. Function scope — Correct**

Your commented example correctly demonstrates that `sum` cannot be accessed outside the function.

```
function add(a, b) {
    var sum = a + b;
}

add(10, 20);
console.log(sum); // ReferenceError
```

**3. Block scope — Correct**

You demonstrated the important difference:

- `var` is accessible outside the `if` block.
- `let` is not accessible outside the block.
- `const` is not accessible outside the block.

**4. Hoisting — Correct**

You correctly identified all three behaviours:

| Variable | Access before declaration |
| -------- | ------------------------- |
| `var`    | `undefined`               |
| `let`    | ReferenceError            |
| `const`  | ReferenceError            |

**5. Function declaration — Correct**

Your function works even though you call it before its definition.

**6. Function expression — Correct**

Your `const divide` function expression cannot be accessed before initialization.

**7. Strict mode — Correct**

Your code correctly produces a `ReferenceError` because `myName` was never declared.

One improvement: place `"use strict";` at the very beginning of the JavaScript file, before other executable statements, so it applies to the entire script.

## **Day 6 final result**

**Coding score**

# **15/15**

Day 6 completed

Interview: 7/9 · Coding: 15/15

Your practical understanding is strong. Keep revising the difference between hoisting and initialization.

## **Next: JavaScript Day 7 — Revision and Mini Calculator**

We'll revise Days 1–6, then build a mini calculator using the concepts you've learned:

- Variables and data types
- Operators and type conversion
- Conditions
- Loops
- Functions
- Scope

**Before we start:** Are you ready for the Day 7 revision test?
