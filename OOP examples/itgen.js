//* Iterator Example

// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length ?
//             {value: names[nextIndex++], done: false} :
//             {done: true}
//         }
//     }
// }

// // Create an array of names
// const namesArr = ['Victor', 'Alex', 'Nick', 'Max', 'Sebastian'];

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


//* Generator Example
// function* sayNames(){
//     yield 'Jack';
//     yield 'Victor';
//     yield 'John';
// }

// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

//ID Creator
function* createIDs(){
    let index = 1;
    while(true){
        yield index++;
    }
}
const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
