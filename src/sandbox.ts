// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// console.log(inputs);

// inputs.forEach((input) => {
//   console.log(input);
// });

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(7.5));

// Arrays

// let names = ["luigi", "mario", "yoshi"];
// names.push("toad");
// // names.push(3)
// names[0] = "toad";

// let mixed = ["ken", 4, "chun-li", 8, 9];
// mixed.push("ryu");
// mixed.push(10);

// objects

// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 30,
// };

// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// age ="luigi"
// age = 30;

// isLoggedIn=24
// isLoggedIn = true;

// arrays

// let ninjas: string[] = [];
// ninjas.push("luigi");
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
//  union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push("luigi");
// mixed.push(20);
// mixed.push(true);

// objetcs
// let ninjaOne: object;S

// ninjaOne = { name: "ninja", age: 30 };

// let ninjaTwo: {
//   name: string;
//   age: number;
//   beltColor: string;
// };
// ninjaTwo = { name: "ninjaTwo", age: 20, beltColor: "white" };

// let age: any = 25;
// age = true;
// console.log(age);

// age = "hello";
// console.log(age);

// age = {
//   name: "+ninjaTwo",
// };
// console.log(age);

// let greet: Function;

// greet ='hello'

// greet = () => {
//   console.log("hello again");
// };

// const add = (a: number, b: number, c: number | string = 10) => {
//   console.log(a + b);
//   console.log(c);
// };
// add(5, 10, "20");
// const minus = (a: number, b: number, c: number | string = 10) => {
//   return a + b;
// };

// let result = minus(5, 10);

// function Signature

// example 1

// let greet: (a: string, b: string) => void;

// greet = (a: string, b: string) => {};
// console.log(`${name} says {greetings}`);

// // example 2

// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// };
// // example 3
// let logDeatils: (obj: { name: string; age: number }) => void;

// type person = { name: string; age: number };

// logDeatils = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// };
