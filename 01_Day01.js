// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var var1 = 4;
console.log(var1);
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let var2 = "arpeggios";
console.log(var2);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const var3 = true;
console.log(var3);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let v1 = 8,
    v2 = "yoinky",
    v3 = false,
    v4 = { name: "Shashank", country: "India" },
    v5 = [3, 6, 9, 12];
console.log(typeof v1, typeof v2, typeof v3, typeof v4, typeof v5);

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let var4 = "CR7";
console.log(var4);
var4 = "Messi";
console.log(var4);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const var5 = "Csus2";
// var5 = "Gsus4";
// Above line gives error.. while trying to reassign a const-variable

// ---------------------------------
// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// Primitive types ----------
var x1 = "Jazz",
    x2 = 7,
    x3 = true,
    x4 = undefined,
    x5 = null;
console.log(x1, typeof x1);
console.log(x2, typeof x2);
console.log(x3, typeof x3);
console.log(x4, typeof x4);
console.log(x5, typeof x5);
// Reference types ----------
var x6 = { name: "Yamal", age: 17 },
    x7 = ["e", "d", "c", "b", "a"],
    x8 = function (val) {
        console.log("val = ", val);
    };
console.log(x6, typeof x6);
console.log(x7, typeof x7);
console.log(x8, typeof x8);
