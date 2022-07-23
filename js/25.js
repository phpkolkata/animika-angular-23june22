// Topic: Enhanced Object Litrals

// string litrals - ``
//  Array litrals - []
// object litrals - {}

//  we can use OBject Litrals in more advanced way in ES6

// ex: 1 - if method/properties in object  don't have name, it automattically takes the method/property name as its key

const friends = [
  { name: "a", age: 11 },
  { name: "b", age: 12 },
  { name: "c", age: 10 },
];

// const me = {
//   name: "raj",
//   age: 12,
//   friends: friends,
// sayHello : function(){
//     console.log('hello');
// }
// };

const me = {
  name: "raj",
  age: 12,
  friends,
  sayHello() {
    console.log("hello");
  },
};

me.sayHello();
console.log(me.friends);

// ex:2 computed property names, using square bracket []

const me2 = {
  name: "raj",
  [`test-${7 - 5}`]: "some test daata",
};
console.log(me2);
console.log(me2["test-2"]);
