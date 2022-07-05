const nm = "raj";

const first = () => {
  let a = 1;
  const b = second(4, 5);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();
