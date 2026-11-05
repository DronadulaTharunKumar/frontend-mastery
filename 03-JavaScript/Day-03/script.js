//Exercise 1 — Age checker

//Declare an age. Print whether the person is an adult or a minor.

let age=21;
if(age>=18){
    console.log("adult");
}
else{
    console.log("minor");
}


//Exercise 2 — Grade calculator

//Use marks to print A for 90+, B for 75–89, C for 50–74, and Fail below 50.

let marks=80;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=75){
    console.log("Grade B");
}
else if(marks>=50){
    console.log("Grade C");
}
else{
    console.log("Fail")
}

//Exercise 3 — Login and offer

//Require login and a cart total of at least ₹2,000 before printing that the customer is eligible.
let isLoggedIn=true;
let cartValue=5000;
if(isLoggedIn){
    if(cartValue>=2000){
        console.log("Eligible for offer");
    }
    else{
        console.log("Minimum cart value not Reached");
    }
}
else{
    console.log("User not Logged In");
}

/*
Exercise 4 — Day of the week

Use switch to print the weekday for numbers 1–7. Print Invalid day for other numbers.
*/
let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
    
}

/*
Exercise 5 — Ternary operator

Use a ternary operator to determine whether a number is even or odd.
*/
let number=5;
console.log(number%2===0?"Even":"Odd");
