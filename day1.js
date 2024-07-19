// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var num1 = 29;
console.log(29); // Output: 29

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let str = "Hi, This is Day 1 of 30 Days JS challenge ";
console.log(str); // Output: Hi, This is Day 1 of 30 Days JS challenge

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const bool1 = true;
console.log(bool1); // Output: true

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num2 = 12; // Number
let str2 = "Vansh"; // String
let bool2 = false; // Boolean
let obj1 = {name: "Vansh", Number : 2005}; // Object
let arr1 = [1, 2, 3, 4, 5]; // Array

console.log(typeof num1); // Output: number
console.log(typeof str2); // Output: string
console.log(typeof bool2); // Output: boolean
console.log(typeof obj1); // Output: object
console.log(typeof arr1); // Output: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let val_tobe_updated = 1;
console.log(val_tobe_updated); // Output: 1
val_tobe_updated =2 ;
console.log(val_tobe_updated); // Output: 2

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constVar = 101;
console.log(constVar); // Output: Constant Value
// Uncommenting the next line will cause an error
// constVar = 102 ; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// Note I am using variables declared above from  line no. 24 to 28 

console.log("Value: ", num2, ", Type: ", typeof num2);
// Output: Value:  12, Type: number

console.log("Value: ", str2, ", Type: ", typeof str2);
// Output: Value:  Vansh, Type: string

console.log("Value: ", bool2, ", Type: ", typeof bool2);
// Output: Value:  false , Type: boolean

console.log("Value: ", obj1, ", Type: ", typeof obj1);
// Output: Value:  {name: "Vansh", Number : 2005} , Type: object

console.log("Value: ", arr1, ", Type: ", typeof arr1);
// Output: Value:  [1, 2, 3, 4, 5], Type: object (Arrays are a type of object in JavaScript)



// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let let_var_change = "Hello";
console.log(let_var_change); // Output: Hello
letVariable = "Hello,I am Vansh";
console.log(letVariable); // Output: Hello,I am Vansh

const cont_var_unchanged="Sun Rises in the East.";
console.log(cont_var_unchanged); // Output: Sun Rises in the East.
// Uncommenting the next line will cause an error
// cont_var_unchanged = "Sun Rises in the West."; // Error: Assignment to constant variable.