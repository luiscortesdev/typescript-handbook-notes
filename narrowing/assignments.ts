// As we know, TypeScript automatically assigns types to variables.

let x = Math.random() < 0.5 ? 10 : "hello world!"; // x could be a string or number so its type is string | number
   
x = 1; // Reassign x to 1
console.log(x);
           
x = "goodbye!";
console.log(x);

x = true // Throws an error because true is a boolean type not a string or number type