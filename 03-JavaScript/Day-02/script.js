/*Exercise 1 — Arithmetic operators

Declare two numbers and calculate addition, subtraction, multiplication, division, remainder and exponentiation.
*/

let a=20;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


/*Exercise 2 — Comparison operators

Declare your age and check:
- Is your age greater than 18?
- Is your age less than 30?
- Is your age exactly 21?
- Is your age not equal to 25?
*/

let age=21;
console.log(age>18);
console.log(age<30);
console.log(age===21);
console.log(age!=25);


/*Exercise 3 — Equality

Predict and then test these expressions:
console.log(10 == "10");
console.log(10 === "10");
console.log(0 == false);
console.log(0 === false);
console.log(1 != "1");
console.log(1 !== "1");


Explain why the results differ.*/

console.log(10 == "10");        //true
console.log(10 === "10");       //false
console.log(0 == false);        //true
console.log(0 === false);       //false
console.log(1 != "1");          //false
console.log(1 !== "1");         //true



/*Exercise 4 — Logical operators

Create variables:
let age = 22;
let hasDegree = true;
let hasExperience = false;


Check:
1. Age is at least 18 AND has a degree.
2. Has experience OR has a degree.
3. Does NOT have experience.
*/
age = 22;
let hasDegree = true;
let hasExperience = false;
console.log(age>=18 && hasDegree);
console.log(hasExperience || hasDegree);
console.log(! hasExperience);


/*Exercise 5 — Type conversion

Convert and print:
- "250" into a number.
- 100 into a string.
- 1 into a Boolean.
- 0 into a Boolean.
- "Hello" into a number.
Print both the values and their types.*/


console.log(`Type:${typeof Number("250")} Value:${Number("250")} `);
console.log(`Type:${typeof String(100)} Value:${String(100)} `);
console.log(`Type:${typeof Boolean(1)} Value:${Boolean(1)} `);
console.log(`Type:${typeof Boolean(0)} Value:${Boolean(0)} `);
console.log(`Type:${typeof Number("Hello")} Value:${Number("Hello")} `);

/*Create a shopping eligibility program:
- cartTotal = 2500
- isLoggedIn = true
- hasCoupon = false
Check whether the customer is eligible for a discount using logical operators.
 Define your own sensible eligibility rule and explain it.*/

 let cartTotal=2500;
 let isLoggedIn=true;
 let hasCoupon=false;
let eligible = isLoggedIn && hasCoupon && cartTotal >= 2000;

console.log("Eligible for a discount:", eligible);
