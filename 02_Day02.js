// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
let a = 8,
    b = 13;
let sum = a + b;
console.log(sum);
// Task 2: Write a program to subtract two numbers and log the result to the console.
let diff = a - b;
console.log(diff);
// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = a * b;
console.log(product);
// Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = a / b;
console.log(quotient);
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = a % b;
console.log(remainder);

// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
a += b;
console.log(a);
// Task 7: Use the -= operator to subtract from a variable and log the result to the console.
a -= b;
console.log(a);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let flag1 = a > b;
let flag2 = a < b;
console.log(flag1, flag2);
// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
flag1 = a >= b;
flag2 = a <= b;
console.log(flag1, flag2);
// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
var c = "10",
    d = 10;
flag1 = c == d;
flag2 = c === d;
console.log(flag1, flag2);

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (a < b && a % 2 == 0) {
    console.log("a is smaller than b & is even");
} else {
    console.log("else-condition executed");
}
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (a > b || a % 2 == 0) {
    console.log("a is greater than b or is even");
} else {
    console.log("else-condition executed");
}
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
flag1 = a === b;
flag2 = !(a === b); // negated the flag1-boolean condition
console.log(flag1, flag2);

// Activity 5: Ternary operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let ans = a >= 0 ? "a is positive" : "a is negative";
console.log(ans);
