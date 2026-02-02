// TypeScript is more aggressive than javascript in what it considers "errors"

const user = {
    name: "Steve",
    location: "NY"
}

console.log(user.age) // This logs undefined, but typescript assumes this is an error and underlines it.


// This is really good for catching silly errors in our code.
const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();

function coinFlip() {
    return Math.random < 0.5 // We meant to call Math.random()
}
coinFlip()

const value = Math.random() < 0.5 ? "heads": "tails"
if (value !== "tails") {
    print("IT'S TAILS")
} else if (value === "heads") {
    // Since value will always be heads if it's not tails,
    // TypeScript assumes this was a mistake and throws an error.
}