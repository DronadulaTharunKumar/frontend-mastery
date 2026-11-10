//Exercise 1 — Greeting

//Create a function named greet that prints a welcome message. Call it three times.

// function greet(){
//     console.log("welcome");
// }
// greet();

//Exercise 2 — Addition

//Create an add function that accepts two parameters and returns their sum.

function add(a,b){
    return a+b;
}
 console.log(add(10,20));

 //Exercise 3 — Multiplication

//Create a function that accepts two numbers and returns their product.

function product(a,b){
    return a*b;
}
console.log(product(10,20));

//Exercise 4 — Return vs console.log

//Create a function that returns the square of a number. Store the result in a variable and print it.

function square(a){
    return a*a;
}
let result=square(5);
console.log(result);

//Exercise 5 — Function expression

//Create a function expression that calculates the area of a rectangle.

const rectangleArea=function(len,wid){
    return len*wid;
}
let area=rectangleArea(5,10);
console.log(area);

//Exercise 6 — Arrow function

//Create an arrow function that checks whether a number is even.

const isEven=(a)=>{ 
    return a%2===0;
};
if(isEven(4)){
    console.log("even");
}
else{
    console.log("not a even");
}

//Exercise 7 — Default parameters

//Create a greeting function with a default name of Guest.

const greet=(name="Guest")=>{
   console.log("welcome " + name);
};
greet("tharun");

//Exercise 8 — Practical bill calculator

//Create a function accepting price and quantity. Return the subtotal and call it with two different products.
const subTotal=(price,quantity)=>price*quantity;
console.log(subTotal(33,2));
console.log(subTotal(50,10));
    

