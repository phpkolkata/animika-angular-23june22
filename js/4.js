// Topic: Objects and Primitive Data types

// -: in javascript every value is either Object or Primitive Data

//ex: primitive: stores values directly in it
let name = "raj";
let age = 22;
let isActive = false;
console.log(name, age);

//ex: Objects {key:value,key:value} : stores memory location in it
let me = {
  name: "suman",
  age: 32,
  isActive: false,
};

console.log(me.name, me.age);

// -: js supports Dynamic Typing: we don't need to define data types, it automattically takes as per given value

let x = "test"; // string
x = 30; // number
console.log(typeof x); // to know type of var, typeof
