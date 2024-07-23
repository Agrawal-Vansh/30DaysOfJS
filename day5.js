// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function odd_even(num)
{
    if(num%2===1)
        console.log(`${num} is odd`);
    else if(num%2===0)
        console.log(`${num} is even`);
    else
        console.log(`Not a valid number`);
}
odd_even(1)//output: 1 is odd
odd_even(0) // output: 0 is even
odd_even("String")// output: Not a valid number


// Task 2: Write a function to calculate the square of a number and return the result.

function square(num)
{
    if(isNaN(num))
        console.log(`Not a number`);
    else    
        return num*num;
}
let num=2;
let sqnum=square(num);
let sqstr=square(`string`); // return undefined log not a number
console.log(`square of ${num} is ${sqnum}`);


// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let  findMax = function(num1, num2) {
    let max = (num1 > num2) ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is ${max}`);
    return max;
};

findMax(1, 2); // The maximum of 1 and 2 is 2
findMax(30, 25); // The maximum of 20 and 25 is 30

// Task 4: Write a function expression to concatenate two strings and return the result.

let strconcat=(str1,str2) => str1+str2;
let str=strconcat("Hello","World");
console.log(`concatination of "Hello" and "World" is ${str}`);  // Output: concatination of "Hello" and "World" is HelloWorld


// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let num_sum=(num1,num2) =>num1+num2;
console.log(`Sum of 5  and 6 is ${num_sum(5,6)}`); // output: Sum of 5  and 6 is 11

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let contain=(str,char)=> str.includes(char);
console.log(`checking if Hello contains l ${contain("Hello",'l')}`);
console.log(`checking if Hello contains L ${contain("Hello",'L')}`);



// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let product=(num1,num2=1)=>num1*num2;
console.log(`product of 5 and 6 is ${product(5,6)}`);
console.log(`product of 5 (only one arg ) is ${product(5)}`);


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name,age=18)
{
    return `Hello ${name}.Your age is ${age}`
}

console.log(greet("Vansh ",19));
console.log(greet("Ayush"));



// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, num)  {
    for (let i = 0; i < num; i++) {
        func();
    }
};

greet2=()=>console.log('Hi vansh');
repeatFunction(greet2,2);


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function highorder(func1, func2, value) {
    return func2(func1(value));
}

function double(x) {
    return x * 2;
}

let ans=highorder(square,double,3);
console.log(ans); //output 18





// Feature Request:

// Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.