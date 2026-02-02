// Discriminated unions are when every type on a union contains a common property with literal types

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square // The Shape type can either be a Circle or Square interface


function computeArea(shape: Shape) {
    // We can use the kind property that the Square and Circle interfaces have to narrow down the shape's type
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } else {
        return shape.sideLength ** 2
    }
}