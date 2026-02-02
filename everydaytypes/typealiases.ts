// If we want to refer to complex types mutiple times, it's probably better to define a new type.

type Coordinate = {
    longitude: number;
    latitude: number
}

function printCoord(coord: Coordinate) {
    console.log(coord.latitude, coord.longitude)
}

printCoord({latitude: 37.4221, longitude: -122.0853})


// You can also use this on union types or even primitives.
type ID = number | string;
type myString = string;

let name: myString = "hello"
let myId: ID = 0