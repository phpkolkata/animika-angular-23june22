// Topic: Primitive type vs Object (reference) type

// -: primitive types stores data in call stack
// -: Object types stores data in heap memory

// ex: primitive type (number, string, boolean)
let age = 20;
let name = "test";
const offline = true;

// ex: Object type
const me = {
  name: "raj",
  age: 30,
  family: ["suman", "riya"], // second level memory
};

const friend = me;
me.job = "teacher";

//both object will have job property, as we assinged address of the object to friend variable
// console.log(me);
// console.log(friend);

//note: we can copy object to new memory, so they can be treated seperately form each other

const friend2 = Object.assign({}, me); // copy 1st level of memory
me.hobby = "cricket";
me.family.push("rakesh");

console.log(me);
console.log(friend2);
