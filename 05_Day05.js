// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEven(n) {
    if (n % 2 == 0) {
        console.log(n, "is even.");
    } else {
        console.log(n, "is odd.");
    }
}
isEven(8);
isEven(13);
console.log("----------------------------------");
// Task 2: Write a function to calculate the square of a number and return the result
function square(n) {
    let ans = n * n;
    return ans;
}
let n2 = square(7);
console.log(n2);
console.log("----------------------------------");

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console
const findMax = function (a, b) {
    if (a >= b) {
        return a;
    }
    return b;
};
console.log(findMax(8, 13));
console.log("----------------------------------");
// Task 4: Write a function to concatenate two strings and return the result.
function concatStrings(a, b) {
    let ans = a + b;
    return ans;
}
console.log(concatStrings("Foot", "ball"));
console.log("----------------------------------");

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result
const sum = (a, b) => {
    return a + b;
};
console.log(sum(8, 13));
console.log("----------------------------------");
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkChar = (s, ch) => {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ch) {
            return true;
        }
    }
    return false;
};
if (checkChar("hello", "h")) {
    console.log("string has the character.");
} else {
    console.log("string doesn't have the character.");
}
console.log("----------------------------------");

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (a, b) => {
    a * b;
};
console.log(product(8, 7));
console.log("----------------------------------");
// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name, age = 20) => {
    console.log(
        `Hola ${name}, "Here's an invitation for your ${age}th birthday's afterparty concert.`
    );
};
greet("Yoinky");
console.log("----------------------------------");

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const funct1 = () => {
    console.log("funct1 called!");
};
const funct2 = (funct, n) => {
    for (let i = 0; i < n; i++) {
        funct();
    }
};
funct2(funct1, 4);
console.log("----------------------------------");
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const square2 = (n) => {
    n * n;
};
const sumOfDigits = (n) => {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        n /= 10;
    }
    return sum;
};
const sumOfDigitsOfSquare = (f1, f2, value) => {
    let ans1 = f1(value);
    let ans2 = f2(ans1);
    return ans2;
};
let ans = sumOfDigitsOfSquare(square2, sumOfDigits, 7);
console.log(ans);
