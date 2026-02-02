// TypeScript supports other less common primitive types.

// From ES2020 and newer, there is a JS primitive called BigInt

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);
// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;


// There is also the ability to create globally unique references via the function Symbol()

// Each variable is a special unique reference
const firstName = Symbol("name");
const secondName = Symbol("name");
 
// Therefore, this comparison will never evaluate to true.
if (firstName === secondName) {
    console.log("I will never be logged :(")
}