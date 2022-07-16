// Topic: Short Circuiting (And - Or) Operator
//-: - we think, logical operators alwasy returns Boolean, WRONG, it can return any data type

//point: Or Operator Short Circuiting
// ex: 1
console.log(3 || "raj"); // 3
console.log("" || "raj"); // raj
console.log(undefined || null); //null, both falsy, but have to return something, so it goes 2nd param and return it
console.log(undefined || "" || 0 || "raj" || 23 || null); // raj

//---------------------------

const me = {
  name: "raj",
  //   age: 33,

  //   sayHi: function () {
  //     console.log(`hi ${this.name}`);
  //   },
};

//if condition
// let age;
// if(me.age){
//     age = me.age
// }
// else{
//     age = 18
// }

// turnary operator
// const age = me.age ? me.age : 18; // turnary
// console.log(age);

//ex: 2 use case
//short circuit with OR operator
const age = me.age || 18;
console.log(age);
//---------------------------

//point: And operator short Circuiting
// ex: 1
console.log(0 && "raj"); //0
console.log(7 && "raj"); // raj
console.log(7 && "raj" && null && true); // null

// ex: 2 use case
// if (me.sayHi) {
//   me.sayHi();
// }

me.sayHi && me.sayHi();

//--------------------------

// point: nullish coalecing (??)- '' , 0 is not falsy value
const years = 0;
console.log(years || 18); // 18
console.log(years ?? 18); // 0 - nullish coalacing operator will look for null and undefined values only as falsy value
