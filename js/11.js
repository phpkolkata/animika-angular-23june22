// Topic: Object - you can store mulitple values, just like array, but with user defined names instead of numbers

// ex: Array example [value,value,value]
const rajArray = ["raj", "singh", 2022 - 1991, "teacher", ["suman", "pradip"]];
console.log(rajArray);

console.log(rajArray[1]); //brings last name

//ex: Object example - object created by object litrals {key:value,key:value}
const rajObject = {
  firstName: "raj",
  lastName: "singh",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["suamn", "pradip"],
};

const sumanObject = {
  firstName: "raj",
  lastName: "singh",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["suamn", "pradip"],
};

// const obj = [rajObject, sumanObject];

// -: dot (.) vs Bracket Notation(expression friendly)
console.log(rajObject.lastName); //using dot notation
console.log(rajObject["lastName"]); //using bracket notation

const key = "first";
console.log(rajObject[key + "Name"]); //in bracket notation we can use expressions

console.log(rajObject["friends"][0]);
console.log(rajObject["friends"][1]);
