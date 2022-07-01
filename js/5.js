// Topic: Opertors

// - Mathmatical Operators
// - Comparision Operators
// - Logical Operators
// - Assignment Operators
// - String Operators
// - Type Operators
// etc etc

// -: Operator Precedence (Priority Index)
// -: Google - mdn javascript operator precedence

const x = 30;
const y = 40;
const z = 10;

console.log(x - z > y - z);

// Topic: Template Litrals - ``
const nm = "raj";
const age = 12;
// console.log("Hello " + nm + ", your age is " + age);
// console.log("Hello ", nm, "your age is ", age);
// template litral
const detail = `hello ${nm}, your age is ${age}`;
console.log(detail);

//Topic: Type Conversion - which is explicityly/manually convert from one type to another
// ex: Number(), String, Boolean
let num1 = "12";
let num2 = 8;
// const total = num1 + num2;
// const total = Number(num1) + num2;
const total = +num1 + num2;

console.log(total);

//Topic: Truthy & Falsy value
const bool = 10;
console.log(Boolean(bool));
console.log("undefined", Boolean(undefined));
console.log("nul", Boolean(null));
console.log("0", Boolean(0));
console.log("", Boolean(""));
console.log("raj", Boolean("raj"));
console.log("{}", Boolean({}));

// -: 5 falsy values - 0, '', undefined, null, NaN

// Topic: Type Coercion - javascript converts 'type' automatically behind the scene for us.

// Type Coercion in case of Number or String
console.log("i m " + 23 + "year old"); // will convert 23 into string
console.log("10" - 5); // will convert into number, result is 5
console.log("20" / "2"); // will convert into number, result is 10

// Type Coercion in case of boolean, happens in 2 situations
// 1. logical context, (if condition)
// 2. logical operator (and, or, !)

// ex:
const money = 10;
if (money) {
  // money type changes to true or false
  console.log("don't spend it all");
} else {
  console.log("go get a job");
}
