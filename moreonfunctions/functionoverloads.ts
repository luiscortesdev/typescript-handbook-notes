// We can make a function accept a variety of argument counts and types by overloading it.
// HOWEVER, always prefer unions instead of overloads when possible

// Here the first two functions are the overloads that actually count while the last one is just the implementation
// to satisfy the overloads above it.
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
// Implementation of the above overloads we always have the first parameter, but the other two aren't required.
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// This doesn't work because none of the overloads have two required parameters. That is all
// TypeScript cares about when overloading functions.
const d3 = makeDate(1, 3);


// Another example of incorrect overload function use
function fn(x: string): void;
function fn() {
  // ...
}
// Expected to be able to call with zero arguments. But can't because TypeScript only cares about the overloads
fn();


function fn2(x?: string): void;
function fn2() {
  // ...
}
// This works though because the overload's x parameter is now optional
fn2();


function fn3(x: boolean): void;
function fn3(x: string): void;
// This one fails because x is defined as a string when the implementation uses a boolean
function fn3(x: boolean) {}

function fn4(x: string): string;
function fn4(x: number): boolean;
// Return type isn't right in the implementation
function fn4(x: string | number) {
    return "oops";
}