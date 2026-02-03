// Rest parameters are a way to handle an unbounded number of arguments

// In this function, n is the first parameter and m takes the rest of the parameters
// and stores them as an array of numbers.
function multiply(n: number, ...m: number[]) {
    // Go through each number in m and mutiply it by n
    return m.map((num) => n * num);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);


// Rest Arguments provide a variable number of arguments to a function using the spread syntax.

// Example of using the spread syntax
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2); // Pushes all of arr2 into arr1

// TypeScript assumes that arrays can change even with the const
// We can define each value in the args as a const to fix this
const args = [8, 5]
const angle = Math.atan2(...args) // Doesn't work because TypeScript assumes args could change something other than 2 values

const argsFixed = [8, 5] as const
const angleFixed = Math.atan2(...argsFixed)