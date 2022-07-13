// Topic: Arguments Keyword
// -: "arguments" keyword is available to declaration function and regular/expression function

// Declearation function
function hi(x, y) {
  //   console.log("hi");
  console.log(arguments);
}
// hi(12, 30);

// expression function
const hello = function (x, y) {
  console.log(arguments);
};
hello(22, 33);

// arrow function (will not work)
const bye = (x, y) => {
  console.log(arguments);
};
// bye(22, 33);

// modern js
const test = function (x, y, ...z) {
  console.log(z);
};

test(2, 3, 4, 5, 6, 7);
