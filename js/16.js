// Topic: "this" keyword/var

// -: special var which is created for every EC (execution context), so you can say every function

// -: takes the value of, or point to its owner

// -: "this" is not static, it is dynamic, it depends on how the function is being called, and then it's value defined, when the function is actually called

// ex:1 in case of method calling
const std = {
  name: "raj",
  sayHello: function () {
    console.log(`hello ${this.name} `);
  },
};
// std.sayHello(); // this = std
// -------------------

//"this" keyword is not supported by arrow function
// ex: 2
// console.log(window);
// this.name = "xyz";
// window.name = "xyz";
// name = "xyz";
const std2 = {
  name: "raj",
  // recommended
  sayHello: function () {
    console.log(`hello ${this.name} `);
  },
  sayHi: () => {
    console.log(`hi ${this.name} `);
  },
};

// std2.sayHello();
// std2.sayHi();
//--------------------------------

// ex:3
// const std3 = {
//   nm: "raj",
//   hello: function () {
//     console.log("hello ", this.nm);
//     const bye = function () {
//       console.log("bye", this.nm);// undefined
//     };
//     bye();
//   },
//   hi: function () {
//     console.log("hi ", this.nm);
//   },
// };

// std3.hello();
// std3.hi();
//---------------------------------------
// ex:3 (solution 1 - use seperate value to store this )
// const std3 = {
//   nm: "raj",
//   hello: function () {
//     console.log("hello ", this.nm);
//     const self = this;
//     const bye = function () {
//       console.log("bye", self.nm);
//     };
//     bye();
//   },
//   hi: function () {
//     console.log("hi ", this.nm);
//   },
// };

// std3.hello();
// std3.hi();
//-------------------------------------
// ex:3 (solution 2 - use arrow function and take laxical advantage )
const std3 = {
  nm: "raj",
  hello: function () {
    console.log("hello ", this.nm);
    const bye = () => {
      console.log("bye", this.nm);
    };
    bye();
  },
  hi: function () {
    console.log("hi ", this.nm);
  },
};

std3.hello();
std3.hi();
//------------------------------------
// ex:4
const std4 = {
  name: "suman",
};

std4.sayHello = std2.sayHello;
std4.sayHello(); // hello suman
//-----------------------

//ex:5
const hello = std2.sayHello;
hello(); //hello undefined

//-: in case of global scope
// this = window;

//-: in case of decleartive function scope
// this = undefined
// function hello() {
//   console.log(this); // undefined
// }
// hello();

// -: in case of arrow funciton
//no support
//laxical calling

// -: better approach is regular/expression function for the use of "this"
