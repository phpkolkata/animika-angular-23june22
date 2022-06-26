//  Topic: Functions;

// javascript has DEA Functions (unofficial, my concept)
// D-Declearation
// E-Expression
// A-Arrow

//point: Declearation Function
// function sayHello() {
//   console.log("hello");
// }
// sayHello(); //calling function

// function fruitProcessor(apple, orange) {
//   const juice = `Juice with ${apple} apples and ${orange} oranges`;
//   return juice;
// }
// // console.log(fruitProcessor(2, 3));
// const juice = fruitProcessor(2, 3);
// console.log(juice);

//point: Expression Function
// const sayHello = function () {
//   console.log("hello");
// };
// sayHello();

// const fruitProcessor = function (apple, orange) {
//   const juice = `Juice with ${apple} apples and ${orange} oranges`;
//   return juice;
// };
// console.log(fruitProcessor(2, 3));
// const juice = fruitProcessor(2, 3);
// console.log(juice);

// point: Arrow function
// ()=>{}
// -: no pranthesis required
// -: return can be called implicitly
// -: 'function' keyword in not required
// -: no curly braces

// ex: verion 1
// const fruitProcessor = (apple, orange) => {
//   const juice = `Juice with ${apple} apples and ${orange} oranges`;
//   return juice;
// };

// ex: verion 2
const fruitProcessor = (apple, orange) =>
  `Juice with ${apple} apples and ${orange} oranges`;

console.log(fruitProcessor(2, 3));
