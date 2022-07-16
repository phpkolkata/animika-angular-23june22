// Topic: Spread Operator (...)-
//-: Unpacks the iterables (Array, Object, Strings, Map, Sets)
// -: spread operator is used to spread out array elements, it takes elements out of the array and place/write it individually

// ex: 1
// const arr = [3, 4, 5];
// const newArr = [1, 2, ...arr];
// console.log(newArr); // 1,2,3,4,5

// ex:2 copy array, just like objet.assign, no memory address copying, shallow copy
// const arr = [1, 2, 3];
// const arr2 = arr; // copying address of the array
// const arr3 = [...arr]; // copying value of the array

// arr.push(4);
// console.log(arr2);

//ex:3 merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
//-------------------------------------------------------------

// point: Spread Operators for String Iterables
const nm = "raj";
// console.log(...nm);
const newName = [...nm, " ", "G"];
// console.log(...newName);
// console.log(`hi ${...newName}`); // template litral don't support iterables

//point: spread operators in functions, while passing value to a function params

// ex: 1;
function hello(nm, age) {
  console.log(`Hello ${nm}, your age is ${age}`);
}
// hello("raj", 22);
const me = ["raj", 22];
// hello(...me); // hello('raj',22);

// ex:2
function hi(nm, age) {
  console.log(`Hi ${nm}, your age is ${age}`);
}
// const user = [prompt("what is your name?"), prompt("what is your age?")];
// hi(...user);

//-------------------------------------
//point: Spread Operators for Objects

ex: 1;
const restDetail = { name: "my restaurant", type: "veg" };
const myRest = { ...restDetail, address: "kolkata", phone: "1212121" };
console.log(myRest);

ex: 2;
const rest = { name: "my restaurant", type: "veg" };
const rest2 = { ...rest }; //copying value only, no reference
