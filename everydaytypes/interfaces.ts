// Interfaces are another way to give objects type annotations.
interface Point {
    x: number;
    y: number;
}
 
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });


// The main difference between types and interfaces is that an interface can be extended with new properties while a type cannot.

interface Car {
    manufacturer: string;
    mileage: number;
}

// SUV is extending the Car interface with new properties
interface SUV extends Car {
    numberOfDoors: number;
}

// On the other hand, Bear is just the Animal and Bear type.
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}


// Interfaces can also be directly given new properties later on.
interface Window {
    title: string;
}
// Here we are giving Window new properties of sizeX and sizeY
interface Window {
    sizeX: number
    sizeY: number
}

// Types cannot be given new properties after being defined.
type Building = {
    address: string;
}
// TypeScript throws an error here.
type Building = {
    floors: number;
}