// We can define functions using annotations

// The fn parameter is just a function with one string parameter
// that doesn't have a return value
function greeter(fn: (a: string) => void) {
    fn("Hello World")
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// We can also use types to define the function
type greeterFunction = (a: string) => void
function greeter2(fn: greeterFunction) {
    fn("Hello World")
}