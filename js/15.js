// Topic: Scope chain & laxical scoping
const nm = "raj"; // global scope

function first() {
  const age = 30; // function scope
  if (age >= 30) {
    const decade = 3; // block scope
    var mature = true; // function scope first()
  }

  function second() {
    const job = "teacher";
    console.log(`hi, my name is ${nm}, age is ${age}, and I am a ${job}`);
  }
  second();
}

first();

// scope chain of js follows laxical scoping
