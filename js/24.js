// Topic: For-Of-Loop

// - we don't need to give general loop params (initialization, condition, increment)
// ex:

const friends = ["a", "b", "c", "d"];

for (const f of friends) {
  console.log(f);
}

// ex: 2; this loop don't give us key of array, so we can use on trick - Array.entries()
console.log(friends.entries());

for (const f of friends.entries()) {
  console.log(`key - ${f[0]}, value - ${f[1]}`);
}

// ex: 3 array destructure for key/value

for (const [k, v] of friends.entries()) {
  console.log(`key - ${k}, value - ${v}`);
}
