// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("----------------------------");
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log("5 *", i, "=", 5 * i);
}
console.log("----------------------------");

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0,
    n = 1;
while (n <= 10) {
    sum += n;
    n++;
}
console.log("Sum of numbers from 1 to 10 :", sum);
console.log("----------------------------");
// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
console.log("----------------------------");

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
n = 1;
do {
    console.log(n);
    n++;
} while (n <= 5);
console.log("----------------------------");
// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
(n = 5), (i = 1);
let fact = 1;
do {
    fact *= i;
    i++;
} while (i <= n);
console.log("Factorial of", n, "=", fact);
console.log("----------------------------");

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
for (let i = 0; i < 5; i++) {
    var curr_row = ""; // can do by appending in a string
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
        curr_row += "*"; // each row will be printed in a single attempt
        if (j < i) {
            curr_row += " ";
            process.stdout.write(" ");
        }
    }
    // console.log(curr_row);
    console.log();
}
console.log("----------------------------");

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
console.log("----------------------------");
// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 7) {
        break;
    }
}
