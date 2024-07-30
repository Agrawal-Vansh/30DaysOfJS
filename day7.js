
// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "The Courage to be disliked ",
    author: "Ichiro Kishimi and Fumitake Koga",
    year: 2020
};
console.log(book); // Output: { title: 'The Courage to be disliked', author: 'Ichiro Kishimi and Fumitake Koga', year: 2020 }

// Task 2: Access and log the title and author properties of the book object.
console.log(book["title"]); // Output: The Courage to be disliked
console.log(book.author); // Output: Ichiro Kishimi and Fumitake Koga

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails()); // Output: The Courage to be disliked by Ichiro Kishimi and Fumitake Koga

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = (newYear)=>this.year = newYear;
book.updateYear(2024);
console.log(book); // Output: { title: 'The Courage to be disliked', author: 'Ichiro Kishimi and Fumitake Koga', year: 2024, getDetails: [Function], updateYear: [Function] }

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "Vansh's Library",
    books: [
        { title: "The Courage to be disliked", author: "Ichiro Kishimi and Fumitake Koga", year: 2020 },
        { title: "Atomic Habits", author: "James clear", year: 2000 },
        { title: "1984", author: "George Orwell", year: 1949 }
    ]
};
console.log(library); // Output: { name: 'Vansh's Library', books: [ [Object], [Object], [Object] ] }

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name); // Output: Vansh's Library
library.books.forEach(book => console.log(book.title));
// Output:
// The Courage to be disliked
// Atomic Habits
// 1984

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function() {
    return `${this.title} was published in ${this.year}`;
};
console.log(book.getTitleAndYear()); // Output: The Courage to be disliked was published in 2020

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Output:
// title: The Courage to be disliked
// author: Ichiro Kishimi and Fumitake Koga
// year: 2020
// getDetails: function() { return `${this.title} by ${this.author}`; }
// updateYear: function(newYear) { this.year = newYear; }
// getTitleAndYear: function() { return `${this.title} was published in ${this.year}`; }

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book)); // Output: [ 'title', 'author', 'year', 'getDetails', 'updateYear', 'getTitleAndYear' ]
console.log(Object.values(book)); 
// Output: 
// [ 'The Courage to be disliked',
// 'Ichiro Kishimi and Fumitake Koga',
// 2020,
// [Function],
// [Function],
// [Function] ]
