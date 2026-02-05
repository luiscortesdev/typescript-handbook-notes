// We use objects a lot in JavaScript and there are three ways to annotate them

// We can do it anonymously at the function
function greet(person: { firstName: string; lastName: string; age: number }) {
    console.log(`Hello, ${person.firstName}`)
}

// We can do it with an interface

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function greet2(person: Person) {
    console.log(`Hello, ${person.firstName}`)
}

// Finally, we can use a type
type Person2 = {
    firstName: string;
    lastName: string;
    age: number;
}

function greet3(person: Person2) {
    console.log(`Hello, ${person.firstName}`)
}