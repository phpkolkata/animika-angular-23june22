// Topic: Modern Operators

// Array Destructuring
// -: array destructuring is ES6 feature
// -: unpack array into seperate variables

// ex: 1
const arr = [1, 2, 3];
// normal way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// array destructuring
// const [x, y, z] = arr; // x=1,y=2,z=3
// const [x, y] = arr; // x=1,y=2
const [x, , z] = arr; // x=1,z=3
// console.log(x); //1

//variable switching
let nm = "raj";
let job = "teacher";
[nm, job] = [job, nm];
console.log(nm);

// ex:2
// use case of array destructuring
function order() {
  return [20, 30];
}
[p1, p2] = order();
console.log(p1);

// ex:3 nested destructuring
const nested = [2, 4, [44, 55]];
const [i, , gg] = nested; // i=2, gg=[44,55]
// console.log(gg);
const [j, , [m, n]] = nested; // j=2, m=44, n =55

//ex:4 default value in destructuring
const friends = ["raj", "suman"];
const [f1, f2, f3 = "no friend"] = friends;
console.log(f3);
