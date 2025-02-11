//Example 1 for Classes in ES6

// class person{
//     constructor(){
//         this.name = "CVRIT";
//     }
//     printName(){
//         console.log(this.name);
//     }
// }
// const persons = new person();//object creation
// persons.printName();


//Parent class
class human{
    constructor(){
        this.age = 30;
    }
    printAge(){
        console.log(this.age);
    }
}//child class
class person extends human{
    constructor(){
        super();
        this.age = 50;
        this.name = "CVR";
    }
    printName(){
        console.log(this.name);
        // console.log(this.age);
    }
}    const p1 = new person();//object creation
    p1.printName(); 
    p1.printAge();  
    

//Example 2 for Classes in ES6
// class User
// {
//     constructor(username, email, password)
//     {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     static countUsers()
//     {
//         console.log('There are 50 Users');
//     }
//     register()
//     {
//         console.log(this.username + ' is now registered');
//     }
// }
// let details = new User('CVR', 'cvr@cvr.ac.in','12345');
// details.register();
// User.countUsers();



// Parent class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound`);
//     }
// }
// // Child class inheriting from Animal
// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }
// // Creating instances of the classes
// let animal = new Animal('Animal');
// let dog = new Dog('Buddy');

// // Using methods from both classes
// animal.speak(); // Output: Animal makes a sound
// dog.speak();    // Output: Buddy barks
