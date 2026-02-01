// TypeScript uses a structural type system 
// If two objects have the same shape, TypeScript considers them to be the same type.

type coordinates = {
    x: number;
    y: number;
}

function logCoords(coordinate: coordinates) {
    console.log(coordinate.x, coordinate.y)
}

let myCoord = {x: 10, y: 12}
// Even though myCoord never is never assigned the coordinates type, TypeScript doesn't throw an error
// because they have the same structure. ie a x and y assigned to numbers
logCoords(myCoord)

const myCoordWithZ = {x: 22, y: 24, z: 26}
logCoords(myCoordWithZ) // Still works because myCoordWithZ fulfills all of the object fields the coordinates interface requires

const color = { hex: "#187ABF", x: 22 }
logCoords(color) // Fails since color doesn't fulfill all of the fields


// Works exactly the same with instances of classes. As long as it fulfills all of the 
// interface's properties TypeScript doesn't error.
class VirtualCoord {
    x: number;
    y: number;
    z: number


    constructor(x: number, y: number, z: number) {
        this.x = x 
        this.y = y
        this.z = z
    }
}

const newVCoord = new VirtualCoord(12, 22, 25) 
logCoords(newVCoord)