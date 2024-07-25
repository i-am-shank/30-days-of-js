// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 4;
if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if (age >= 18) {
    console.log("eligible");
} else {
    console.log("ineligible");
}
// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let n1 = 4,
    n2 = 7,
    n3 = 3;
console.log("Largest no. in ", n1, n2, n3, ":-");
if (n1 >= n2 && n1 >= n3) {
    console.log(n1);
} else {
    if (n2 >= n3) {
        console.log(n2);
    } else {
        console.log(n3);
    }
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
        break;
}
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let marks = 97;
switch (true) {
    case marks >= 90:
        console.log("A");
        break;
    case marks >= 80:
        console.log("B");
        break;
    case marks >= 70:
        console.log("C");
        break;
    case marks < 33:
        console.log("F");
        break;
    default:
        console.log("D");
        break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let x = 13;
let ans = x % 2 === 0 ? "even" : "odd";
console.log(ans);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("leap year");
        } else {
            console.log("not a leap year");
        }
    } else {
        console.log("leap year");
    }
} else {
    console.log("not a leap year");
}
