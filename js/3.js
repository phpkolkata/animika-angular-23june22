// point: var and let and const

// var - scopes to its nearest function - bad practice
// let - scopes to its block

// var scope
function myloop1() {
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log("out of loop area", i);
}
myloop1();

//let scope
function myloop2() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log("out of loop area", i);
}
// myloop2();

// const - for constant value, which never change
const url = "phpkolkata.com";
// url = "xyz.com";
console.log(url);

//-------------------------------------

// naming convesion of variables

// nominal approach
// let job1 = "operator";
// let job2 = "programmer";
// console.log("my first job was as ", job1);
// console.log("my second job is as ", job2);

// right approach
let myPreviousJob = "operator";
let myCurrentJob = "programmer";
console.log("my first job was as ", myPreviousJob);
console.log("my second job is as ", myCurrentJob);
