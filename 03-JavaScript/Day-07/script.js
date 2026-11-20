// Your program should:
// 1. Declare two numbers.
// 2. Declare an operator.
// 3. Create a function named calculate.
// 4. Use if...else if to identify the operator.
// 5. Support +, -, *, /, %.
// 6. Handle division by zero.
// 7. Return the result from the function.
// 8. Print the result using console.log().

const calculate=function(a,operator,b){
    if(operator==='+'){
        return a+b;
    }
    else if(operator==='-'){
        return a-b;
    }
    else if(operator==='*'){
        return a*b;
    }
    else if(operator==='/'){
        // if(b===0)
        // {
        // //     return "Error: Division by zero is not allowed.";
        // }
        //else{
        return a/b;
        //}
    }
    else if(operator==='%'){
        return a%b;
    }
    else{
        return "Invalid operator";
    }

}
let a=20;
let b=5;
console.log(calculate(a,'+',b));
console.log(calculate(a,'-',b));
console.log(calculate(a,'*',b));
console.log(calculate(a,'/',b));
console.log(calculate(a,'%',6));
console.log(calculate(a,'/',0));
