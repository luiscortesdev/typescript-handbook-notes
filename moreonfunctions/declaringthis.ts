// TypeScript will infer what this' type should be in a function

// Hover over admin
const user = {
    id: 123,
    
    admin: false,
    becomeAdmin: function () {
        
        this.admin = true;
    },
};

interface User {
    id: number;
    admin: boolean;
    becomeAdmin: () => void;
}


// We can use this to define what the parameter's type is
interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();

// Now, down here we know that the this is referring to a value of type User
const admins = db.filterUsers(function (this: User) {
    return this.admin;
});