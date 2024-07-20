// Operators
// Tasks/Activities:

// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let num1=2;
let num2=3;
let sum=num1+num2;
console.log(sum); //output 5

// Task 2: Write a program to subtract two numbers and log the result to the console.
let diff=num2-num1;
console.log(diff);//output 1

// Task 3: Write a program to multiply two numbers and log the result to the console.
let mul=num2*num1;
console.log(mul);//output 6

// Task 4: Write a program to divide two numbers and log the result to the console.
let div=num2/num1;
console.log(div);//output 1.5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let rem=num2%num1;
console.log(rem);//output 1


// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
num1+=3
console.log(num1); //output 5 (now num1 is 2+3=5)

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
num2-=1;
console.log(num2);//output 2 (now num2 is 3-1=2)

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log(num1>num2); //output true
console.log(num1<num2); //output false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(num1>=num2); //output true
console.log(num1<=num2); //output false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let numstr='2';
console.log(num2==numstr); //output true
console.log(num2===numstr);//output false

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

if(num1==1 && num2==2)
    console.log("If condition met"); // will not excecute as if is false 
else
    console.log("Else condition met"); // output: Else condition met

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if(num1==1 ||  num2==2)
    console.log("If condition met"); // output: If condition met
else
    console.log("Else condition met"); //will not excecute as if is true

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
if(num1!=1)
    console.log("num1 is not equal to 1"); //output: num1 is not equal to 1

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
num1>0?console.log("num1 is positive"):console.log("num1 is negative"); //output num1 is positive


// Feature Request:

// Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

// Same as activity 1

// Comparison and Logical Operations Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

// same as activity 2 and 3


// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

// Same as activity 4
