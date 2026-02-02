// The stricness of the TypeScript compiler can be modified. However, stricter is usually better.
// Setting "strict" to true in tsconfig.json makes TypeScript follow all of the rules.
// But we can still make TypeScript rules by setting their flags to false.

// Turning the noImplicitAny property to false will allow this code to run. Usually, TypeScript throws
// an error here.
function fn(n) {
    console.log(n)
}

// JavaScript allows null and undefined to be assignable to any other type. This can lead to countless bugs.
// But it can make writing some code easier and can be disabled by setting the strictNullChecks flag to 
// false.

// This is example of strictNullChecks
declare const loggedInUsername: string;
 
const users = [
    { name: "Oby", age: 12 },
    { name: "Heera", age: 32 },
];
 
const loggedInUser = users.find((u) => u.name === loggedInUsername);
// We might never find a name that matches loggedInUsername, so TypeScript throws an error. AKA loggedInUser
// might be undefined.
console.log(loggedInUser.age);