//Example 1 for Classes in ES6

class person{
    constructor(){
        this.name = "CVRIT";
    }
    printName(){
        console.log(this.name);
    }
}
const persons = new person();//object creation
persons.printName();


//Parent class
// class human{
//     constructor(){
//         this.age = 30;
//     }
//     printAge(){
//         console.log(this.age);
//     }
// }//child class
// class person extends human{
//     constructor(){
//         super();
//         this.age = 50;
//         this.name = "CVR";
//     }
//     printName(){
//         console.log(this.name);
//     }
// }const p1 = new person();//object creation
//     p1.printName();    p1.printAge();


//Example 2 for Classes in ES6
// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     static countUsers() {
//         console.log('There are 50 Users');
//     }

//     register() {
//         console.log(this.username + ' is now registered');
//     }
// }

// // Create an instance of the User class
// let details = new User('CVR', 'cvr@cvr.ac.in', '12345');

// // Call the instance method
// details.register();

// // Call the static method
// User.countUsers();







// // Inheritance in ES6
// class Member extends User
// {
//     constructor(username, email, password, memberpackage)
//     super(username, email, password);
//     this.package = memberpackage;
// }
// getPackage()
// {
//     console.log(this.username + 'is subscribed to the standard package');
// }
// }


// let it = new member('IT-B', 'itb@cvr.ac.in', '123');
// it.getPackage();