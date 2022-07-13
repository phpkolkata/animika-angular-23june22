// Topic: Object Destructuring

const restaurant = {
  name: "KFC",
  type: "non-veg",
  starter: ["a", "b", "c"],
  mainCourse: ["x", "y", "z"],
  openingHours: {
    sun: {
      open: "11am",
      close: "9pm",
    },
    mon: {
      open: "10am",
      close: "10pm",
    },
  },
};

// -: just like array destructuring
// -: it needs to be same property name as object has
// -: so, arrangment/order is not important

// ex:1
// const { name, openingHours } = restaurant;
// console.log(openingHours);

// ex:2 if you want to rename property, {propertyname:new name}
const { name: restaurantName } = restaurant;
console.log(restaurantName);

// ex:3 default value
const { mainCourse = [] } = restaurant;
console.log(mainCourse);

// ex:4 mutating variable
let name = "some restaurnat";
let type = "veggy";
// const { name, type } = restaurant; // error, redeclaring variable
({ name, type } = restaurant); // mutating available variable using () trick, avoid block scope collision
console.log(type);

// ex:5 break way
// const { openingHours } = restaurant;
// const {
//   sun: { open, close },
// } = openingHours;

//direct breaking
const {
  openingHours: {
    sun: { open, close },
  },
} = restaurant;
console.log(open, close);

//-------------------

// ex: function with destructuring arguments

// normal object in arguments
// function log(obj) {
//   console.log(obj.name, obj.type);
// }

// object destrucing in arguments
// function log({ name, type }) {
//   console.log(name, type);
// }

// destructuring with default value
function log({ name = "rest", type = "veggy" }) {
  console.log(name, type);
}

log({ type: "veg", name: "kfc" });
