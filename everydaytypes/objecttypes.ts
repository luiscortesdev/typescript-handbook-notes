// We can define an object's type by listing its properties and types.
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Some object properties might not always exist. We can define these as optional using a "?".
// If we try to access that property, TypeScript will force us to make sure it isn't undefined.
function printFullName(person: {firstName: string; middleName?: string; lastName: string}) { 
    console.log(person.firstName, person.middleName, person.lastName)
    // console.log(person.middleName.toUpperCase()) Errors because middleName could be undefined.
    console.log(person.middleName?.toUpperCase()) // Modern way to ensure the property exists.
}
printFullName({firstName: "Bob", lastName: "Guy"}) // Won't error even though there isn't a middle name.

