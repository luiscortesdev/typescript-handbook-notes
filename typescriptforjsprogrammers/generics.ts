// Generics

// Provides variables to types that further describe what the type can contain.
// Mostly used in arrays

type StringArray = Array<string> // similar to string[]
type ObjectWithNameArray = Array<{name: string}> // Defines an array of objects with a name field

let myStrings: StringArray = ["Hello", "Hi"]
let myNames: ObjectWithNameArray = [{name: "John"}, {name: "Logan"}]

// Declare your own types that use generics
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();