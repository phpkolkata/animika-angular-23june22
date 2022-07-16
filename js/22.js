// Topic: Rest Pattern (...) - usable in Destructuring & Function Parameters
// packs the Iterables (Array, Object, Strings, Map, Sets)
// Rest pattern is just opposite of Spread Operator
// they both share same type of syntax format is ...
//note: if ... is on left side of = sign, then it is  rest pattern
//note: if ... is on right side of = sign, then it is spread operator

// ex: 1 Rest with Array

// spread operator (right side)
const arr = [1, 2, 3, ...[4, 5]];
console.log(arr);

// rest Pattern (left side)
const [a, b, ...others] = arr;
console.log(a, b);
console.log(others);
//-----------------------------

// ex: 2 Rest with Object
const res = {
  name: "restaurant",
  type: "veg",
  hours: {
    sun: {
      open: "12 pm",
      close: "1 am",
    },
    mon: {
      open: "11 pm",
      close: "2 am",
    },
    tue: {
      open: "10 pm",
      close: "3 am",
    },
  },
};

const { sun, ...weekdays } = res.hours;
console.log(sun);
console.log(weekdays);

//--------------------

// ex: 3 Rest with functions
const hello = function (...names) {
  console.log(`hello `, names);
};
hello("a", "b", "c");
