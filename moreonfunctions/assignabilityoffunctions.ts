// We can assign functions to different types

// Here we assign a function to return void, BUT that doesn't it mean it is FORCED to return NOTHING

type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
};
const f2: voidFunc = () => true;
const f3: voidFunc = function () {
    return true;
};

// Hover over each f and you will see they retain their () => void type
const v1 = f1();
const v2 = f2();
const v3 = f3();

console.log(v1, v2, v3) // logs true for each

// This behavior exists, so that some js functions still work.
const src = [1, 2, 3];
const dst = [0];

// Array.push technically returns a number and returns it. But forEach expects a function in it that doesn't return.
// Even though, we are technically returning something to forEach, TypeScript still treats it as returning void.
src.forEach((el) => dst.push(el));

// However, if we give a function a return type of void, then it can never return something.
function f4(): void {
    return true;
}

const f5 = function (): void {
    return true;
};