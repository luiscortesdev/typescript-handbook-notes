// Typescript can be compiled into different versions of JavaScript.

// So this function in TypeScript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());


// Ends up compiling into this older ES5 version using .concat() if we tell it to do so.
// @ts-ignore
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());


// This behavior can be changed using the target property in tsconfig.json. Nowadays, it defaults to esnext.