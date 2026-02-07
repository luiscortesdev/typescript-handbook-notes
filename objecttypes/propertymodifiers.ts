// We can give more information about a property within our annotations.

// We can define a property as optional using a question mark "?"
interface PaintOptions {
    shape: string;
    xPos?: number;
    yPos?: number;
}

// TypeScript will give optional parameters their type plus a union of null.
// Therefore, we will need to check if exists before accessing its value.
function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
}

// xPos and yPos do not need to be added to our function calls.
paintShape({ shape: "circle" });
paintShape({ shape: "circle", xPos: 100 });
paintShape({ shape: "circle", yPos: 100 });
paintShape({ shape: "circle", xPos: 100, yPos: 100 });

// Or we can destructure our object and assign default values.
function paintShapeDestructure({ shape, xPos=0, yPos=0 }: PaintOptions) {
    console.log(xPos, yPos)
}
paintShapeDestructure({ shape: "circle", xPos: 100, yPos: 100 });

// Unfortunately, you cannot do type annotations within destructing patterns,
// but you can assign it outside.

// This doesn't work
function getSum({ x: number, y: number }) {
    console.log(x)
}

// This is what you should do instead.
function getSumFixed({ x, y }: { x: number, y: number }) {
    return x+y
}
console.log(getSumFixed({x: 100, y: 150}))


// We can define some properties to be readonly. TypeScript will throw an 
// error if we try to change it.
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    
    // But we can't re-assign it.
    obj.prop = "hello";
}

// However, it does not make a property completely unmutable. Its contents can still change.
interface Home {
    readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}
 
function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    home.resident = {
        name: "Victor the Evictor",
        age: 42,
    };
}

// Furthermore, TypeScript can still allow readonly properties to change to changeable
// properties through aliasing. Readonly is meant to be a signal of intent and documentation during
// development. It cannot be fully relied upon.

interface Person {
    name: string;
    age: number;
}
 
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}
 
let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};
 
// We can assign a readonlyPerson to become a writeable person.
let readonlyPerson: ReadonlyPerson = writablePerson;

// Now, we can reassign and change the age property directly even though it is supposed to be read only
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'


// We can use index signatures to describe the types of possible values.
function getNumberArray() {
    let res = []
    for (let i=0; i < 10; i++) {
        res.push(Math.floor(Math.random() * 10))
    }
    return res
}

// A number array that when accessed with an index number returns a number
interface NumberArray {
    [index: number]: number;
}

let numArray = getNumberArray()
const secondNum = numArray[1]

// TypeScript can ensure that other properties exist on the type you are returning
interface NumberDictionary {
    [index: string]: number; // Here we are saying every index/key returns a number
    
    length: number; // ok
    name: string; // A name property returning a string doesn't make sense
}

// It's fine though if we say it can be a number or string.
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

// We can also make every index/key readonly.
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Bob", "Jeff", "Tom"];
myArray[2] = "Mallory"; // Doesn't work because the array is readonly for every index.