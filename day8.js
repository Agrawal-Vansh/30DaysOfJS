// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Vansh";
const age = 18;
const greeting = `Hello, I am  is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, I am is Vansh and I am 18 years old.

// Task 2: Create a multi-line string using template literals and log it to the console.
const multilineString = `This is a multi-line string.
It spans multiple lines.
Each line is preserved.`;
console.log(multilineString);
// Output:
// This is a multi-line string.
// It spans multiple lines.
// Each line is preserved.

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second); // Output: 1 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Atomic Habits ",
    author: "James Clear",
    year: 1925
};
const { title, author } = book;
console.log(`The title of the book is ${title} and it is written by ${author}`); // Output: The title of the book is Atomic Habits  and it is written by James Clear

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
    return args.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sum(1, 2, 3, 4,5)); // Output: 15

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(6, 2)); // Output: 12
console.log(multiply(5)); // Output: 5

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
    name,
    age,
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};
console.log(person); // Output: { name: 'Vansh', age: 18, greet: [Function: greet] }
person.greet(); // Output: Hi, I'm Vansh and I'm 18 years old.

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "hobby";
const personWithComputedProp = { [propName]: "reading"};
console.log(personWithComputedProp); // Output: { hobby: 'reading' }

