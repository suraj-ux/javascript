// here We learn About string

const userName = 'suraj';
const age = 29;
// console.log( 'His name is ' +userName+ ' his age is' + age); // this is a bad way to use string

console.log(`His Name is ${userName} his age is ${age}`); // This is a good way of string
 
const employeeName = new String("Mohan");

console.log(employeeName.toUpperCase());

// Here is the new intresting level of string that we use string and its alphabet position level

console.log(employeeName.__proto__);
console.log(employeeName.blink());