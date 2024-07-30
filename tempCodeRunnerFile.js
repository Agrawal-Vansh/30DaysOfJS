
// // Activity 5: Object Iteration

// // Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
// for (let prop in book) {
//     console.log(`${prop}: ${book[prop]}`);
// }
// // Output:
// // title: The Courage to be disliked
// // author: Ichiro Kishimi and Fumitake Koga
// // year: 2020
// // getDetails: function() { return `${this.title} by ${this.author}`; }
// // updateYear: function(newYear) { this.year = newYear; }
// // getTitleAndYear: function() { return `${this.title} was published in ${this.year}`; }

// // Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
// console.log(Object.keys(book)); // Output: [ 'title', 'author', 'year', 'getDetails', 'updateYear', 'getTitleAndYear' ]
// console.log(Object.values(book)); 
// // Output: 
// // [ 'The Courage to be disliked',
// // 'Ichiro Kishimi and Fumitake Koga',
// // 2020,
// // [Function],
// // [Function],
// // [Function] ]

// // Feature Request

// // 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// const newBook = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getDetails: function() {
//         return `${this.title} by ${this.author}`;
//     },
//     updateYear: function(newYear) {
//         this.year = newYear;
//     },
//     getTitleAndYear: function() {
//         return `${this.title} was published in ${this.year}`;
//     }
// };
// console.log(newBook); // Output: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, getDetails: [Function], updateYear: [Function], getTitleAndYear: [Function] }
// console.log(newBook.getDetails()); // Output: To Kill a Mockingbird by Harper Lee
// newBook.updateYear(2000);
// console.log(newBook); // Output: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 2000, getDetails: [Function], updateYear: [Function], getTitleAndYear: [Function] }
// console.log(newBook.getTitleAndYear()); // Output: To Kill a Mockingbird was published in 2000

// // 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// const anotherLibrary = {
//     name: "Town Library",
//     books: [
//         { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//         { title: "Moby Dick", author: "Herman Melville", year: 1851 },
//         { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
//     ],
//     getLibraryDetails: function() {
//         console.log(`Library Name: ${this.name}`);
//         this.books.forEach(book => console.log(`${book.title} by ${book.author}, published in ${book.year}`));
//     }
// };
// anotherLibrary.getLibraryDetails();
// // Output: 
// // Library Name: Town Library
// // The Great Gatsby by F. Scott Fitzgerald, published in 1925
// // Moby Dick by Herman Melville, published in 1851
// // Pride and Prejudice by Jane Austen, published in 1813

// // 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.
// const yetAnotherBook = {
//     title: "War and Peace",
//     author: "Leo Tolstoy",
//     year: 1869
// };
// for (let prop in yetAnotherBook) {
//     console.log(`${prop}: ${yetAnotherBook[prop]}`);
// }
// // Output:
// // title: War and Peace
// // author: Leo Tolstoy
// // year: 1869

// console.log(Object.keys(yetAnotherBook)); // Output: [ 'title', 'author', 'year' ]
// console.log(Object.values(yetAnotherBook)); // Output: [ 'War and Peace', 'Leo Tolstoy', 1869 ]
