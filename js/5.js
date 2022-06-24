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

// Topic: Template Litrals
const nm = "raj";
const age = 12;
// console.log("Hello " + nm + ", your age is " + age);
// console.log("Hello ", nm, "your age is ", age);
// template litral
const detail = `hello ${nm}, your age is ${age}`;
console.log(detail);

//Topic: Type Conversion Number, String, Boolean
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
