// Topic: Declearation Function vs Expression function

// -: declearation function - we can call function before it decleares, it still works, coz of Hoisting

hello();

//Hoisting feature stores:
// var varibale without value
// decleartion function with value

function hello() {
  console.log("hello");
}

//expression function
// const hello = function () {
//   console.log("hello");
// };

//----------------------------
// Expression Function
//-: function expressin can not be called before it decleares
//-: using expression function is good practice, it forces us to decleare first and then use, which is good for nice structural programming
//-: functions are also a value, that you can store in a variable, ex-expression function

// TDZ - Temporal Dead Zone - for let const class etc
