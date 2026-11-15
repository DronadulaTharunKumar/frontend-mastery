//1.Global scope: Declare a global variable and access it inside and outside a function.
let name="tharun";
function greet(){
    console.log(name);
}
greet();
console.log(name);


//2.Function scope: Declare a variable using var inside a function. Try accessing it outside.
    // function add(a,b){
    //     var sum=a+b;
    // }
    // add(10,20);
    // console.log(sum);
//output-ReferenceError: sum is not defined

//3.Block scope: Declare variables using var, let, and const inside an if block. 
// Test which variables can be accessed outside.
let age=21;
if(age==21){
    let isMinor=false;
    var isMajor=true;
    const isEligibleForVote=true;
}
//console.log(isMinor);         //ReferenceError: isMinor is not defined
console.log(isMajor);           //true
//console.log(isEligibleForVote); //ReferenceError: isEligibleForVote is not defined

//4.Hoisting: Test var, let, and const by logging each variable before its declaration. 
// Run each test separately.

/*console.log(gender);
var gender="male";          //output-undefind
*/

/*console.log(gender);        //ReferenceError: Cannot access 'gender' before initialization
let gender="male";
*/

/*console.log(gender);        //ReferenceError: Cannot access 'gender' before initialization
const gender="male";
*/


//5.Function hoisting: Call a function declaration before defining it.
multiply(10,2);
function multiply(a,b)
{
    console.log(a*b);
}

//6.Function expression: Test calling a function expression before its initialization.
//divide(10,2);                //ReferenceError: Cannot access 'divide' before initialization
const divide=function(a,b){
    console.log(a/b);
};

//7.Strict mode: Write "use strict" and try assigning a value to an undeclared variable.
"use strict";

myName = "Tharun"; // Error: myName is not defined

console.log(myName);



