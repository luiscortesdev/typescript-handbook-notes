// Interfaces are used to create types for objects
interface User {
    name: string;
    id: number;
}

// We can use that interface here to ensure user conforms to the User interface
const user: User = {
    name: "Jeff",
    id: 0
}

// Throws an error because "username" does not exist of the User interface
const user2: User = {
    username: "Hayes",
    id: 1
}

// We can use interfaces to define what properties an instance of a class should have.
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

const userInstance: User = new UserAccount("Tommy", 2)

// We can use interfaces with function parameters.
function getUserName(user: User) {
    return user.username // Returns an error because username doesn't exist on User interface
}

// And function return values
function getAdminUser(): User {
    
    return {
        name: "Patrick",
        id: 12 
    }
}

// Returns an error because uid doesn't exist on User interface
// and that's the interface the function returns.
const adminUser = getAdminUser()
console.log(console.log(adminUser.uid))