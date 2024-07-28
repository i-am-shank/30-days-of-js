// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [2, 4, 6, 8, 10, 12, 14];
console.log("Array :", arr);
console.log("---------------------------");
// Task 2: Access the first and last elements of the array and log them to the console.
console.log("First & last elements are :", arr[0], arr[arr.length - 1]);
console.log("---------------------------");

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array
arr.push(7);
console.log("Updated arr :", arr);
console.log("---------------------------");
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log("Updated arr :", arr);
console.log("---------------------------");
// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log("Updated arr :", arr);
console.log("---------------------------");
// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(13);
console.log("Updated arr :", arr);
console.log("---------------------------");

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr2 = arr.map((ele) => ele * 2);
console.log("Mapped array :", arr2);
console.log("---------------------------");
// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arr3 = arr.filter(function (ele) {
    return ele % 2 == 0;
});
console.log("Filtered array :", arr3);
console.log("---------------------------");
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumArr = arr.reduce((acc, ele) => {
    return acc + ele;
}, 0);
console.log("Sum of arr :", sumArr);
console.log("---------------------------");

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (ele of arr) {
    console.log(ele);
}
console.log("---------------------------");
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(function (ele) {
    console.log(ele);
});
console.log("---------------------------");

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
arr4 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(arr4);
console.log("---------------------------");
// Task 13: Access and log a specific element from the two-dimensional array.
console.log("2nd element of 2nd row :", arr4[1][1]);
