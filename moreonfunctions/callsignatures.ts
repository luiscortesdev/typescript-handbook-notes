// Functions can also have descriptions

// Define a function that can have a description and a function attached
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    // use the description of fn and call it
    console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
    return someArg > 3;
}

// give myFunc a description
myFunc.description = "default description";
// call do something
doSomething(myFunc);