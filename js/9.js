// Topic: Array - is a datastructure to store multiple data
const friend1 = "raj";
const friend2 = "suman";
const friend3 = "pradip";

// method 1: Array using litral []
const friends = ["raj", "suman", "pradip"]; // friends = #9488585
console.log(friends);
console.log(`I have ${friends.length} friends`);
console.log(friends[2]); //pradip
console.log(friends[friends.length - 1]); //pradip

friends[2] = "animika"; //valid
// friends = ["bob"]; //invalid
console.log(friends);

//method 2: another way of creating array using Array function (class constructor)
const me = new Array("raj", 22, true, null);
console.log(me);
