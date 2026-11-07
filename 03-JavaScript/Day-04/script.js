//Print numbers: Use a for loop to print numbers from 1 to 20.
for(let i=1;i<=20;i++){
    console.log(i);
}

//Even numbers: Print all even numbers from 1 to 50.
for(let i=1;i<=50;i++){
    if(i%2===0){
        console.log(i);
    }
}

//Sum of numbers: Calculate the sum of numbers from 1 to 10. Expected result: 55.
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

//Multiplication table: Print the multiplication table of a number (for example, 5).
for(let i=1;i<=10;i++){
    console.log(`5 X ${i} =${5*i}`);
}

//Reverse counting: Use a while loop to print numbers from 10 down to 1
let i=10;
while(i>=1)
{
    console.log(i);
    i--;
}

//Do-while: Demonstrate that a do...while loop 
// executes at least once when its condition is initially false.
let number=10;
do{
    console.log(number);
    number++;
}while(number<5);

//Break and continue: Print numbers from 1 to 10,
//  skip 5 using continue, and stop when the number reaches 8 using break.
for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    if(i===8)
    {
        break;
    }
    console.log(i);
}
