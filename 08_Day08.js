// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name1 = "Archa";
let age1 = 20;
console.log(`My sister's name is ${name1}, & she is ${age1} years old.`);
console.log("-----------------------------------");
// Task 2: Create a mutli-line string using template literals and log it to the console.
console.log(`Hey, 
  So some random thoughts :
  I just want to learn playing arpeggios at keys,
  and along with that, also about some music symbols.`);
console.log("-----------------------------------");

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers of numbers and log them to the console.
let arr = [3, 6, 9, 12, 15, 18, 21, 24];
[a, b] = arr;
console.log("1st & 2nd elements are :", a, "&", b);
console.log("-----------------------------------");
// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    name: "Miles: The Autobiography",
    author: "Miles Davis with Quincy Jones",
    publish_year: 1989,
};
let printBookDetails = ({ name, author }) => {
    console.log("Name & author of book :", name, ",", author);
};
printBookDetails(book);
console.log("-----------------------------------");

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log("Array with spread operator :");
let arr2 = [...arr, 2, 4];
console.log(arr2);
console.log("-----------------------------------");
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(a = 0, ...arr) {
    let ans = a;
    for (ele of arr) {
        ans += ele;
    }
    return ans;
}
console.log("Sum of first 5 natural nos. :", sum(1, 2, 3, 4, 5));
console.log("-----------------------------------");

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a, b = 1) {
    let ans = a * b;
    return ans;
}
console.log("product(8) :", product(8));
console.log("product(8, 13) :", product(8, 13));
console.log("-----------------------------------");

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let calculator = { sum, product };
console.log("Calculator-object :", calculator);
console.log("-----------------------------------");
// Task 9: Create an object with computed property names based on variables and log the object to the console.
let num1 = 8;
let num2 = 13;
let calculator2 = {
    ["num1"]: num1,
    ["num2"]: num2,
    ["sum"]: sum,
    ["product"]: product,
};
console.log("Calculator-object 2 :", calculator2);
