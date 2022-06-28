// Topic: Array Practice
// ex:1
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1992, 1981, 1988, 2000];
// const age1 = calcAge(years);//invalid, array passing
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];

console.log(ages);

// ex:2 - array in array
const rajArray = ["raj", "singh", 2022 - 1991, "teacher", ["suman", "pradip"]];
console.log(rajArray);
