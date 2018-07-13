// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

//const sayHello = () => console.log('HELLO');
//const sayHello = () => 'Hello';

//* Return Object
//const sayHello = () => ({msg: 'Hello'});

//* Single param doesn't need ()
//const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Victor', 'Rivera');

const users = ['Victor', 'Nick', 'Alex', 'Max', 'Sebastian'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

//Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);