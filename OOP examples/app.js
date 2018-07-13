// // Person constructor

// function Person(firstName,lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// // Calculate Age
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// //Get Marries
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const vic = new Person('Victor', 'Rivera', '5-24-1995');
// vic.getsMarried('Marquez'); 

// console.log(vic.getFullName());


// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
//     greeting(){
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }

//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName){
//         this.lastName = newLastName;
//     }

//     static addNumbers(x,y){
//         return x+y;
//     }
// }

//const vic = new Person('Victor', 'Rivera', '5-24-1995');

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const John = new Customer('John', 'Smith', '555-555-5555', 'Standard');
console.log(John.greeting());
console.log(Customer.getMembershipCost());
