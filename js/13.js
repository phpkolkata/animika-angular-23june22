// Topic: Loop;

// console.log("lifting weight repeatation 1");
// console.log("lifting weight repeatation 2");
// console.log("lifting weight repeatation 3");
// console.log("lifting weight repeatation 4");
// console.log("lifting weight repeatation 5");

//normal loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`lifting weight repeatation ${rep}`);
}

// Topic: Looping array, breaking and continuing
const rajArray = ["Raj", "Singh", 1991, "teacher", ["suman", "pradip"], true];

// console.log(rajArray[0]);
// console.log(rajArray[1]);
// console.log(rajArray[2]);

//arry looping
for (let i = 0; i < rajArray.length; i++) {
  console.log(rajArray[i]);
}

//creating parallel array for storing type of rajArray
const rajType = [];
for (let i = 0; i < rajArray.length; i++) {
  //   rajType[i] = typeof rajArray[i];
  rajType.push(typeof rajArray[i]); // same as above
}
console.log(rajType);

//continue in loop
// ex:1
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// ex:2

for(let i=0;i<rajArray.length;i++){

}

hw: - 
// 1. loop rajArray and print only string data, using continue
// 2. loop rajArray and stop loop if it finds any number data, using break
// 3. loop rajArray backwards
// 4. practice while loop