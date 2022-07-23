// Topic: Optional Chaining (Obj.property?.property)

// -: chaining is used between obj and property with dot sign(.), ex: obj.prop
// -: optional chaining symbol is ? before .(dot) sign, ex: obj.prop?.prop
// -: it checks left side poperty, if not available, it returns undefined and breaks the chain to avoid error

// ex:
const res = {
  name: "restaurant",
  type: "veg",
  hours: {
    sun: {
      open: "12 pm",
      close: "1 am",
    },
    mon: {
      open: "11 pm",
      close: "2 am",
    },
    tue: {
      open: "10 pm",
      close: "3 am",
    },
    wed: {
      close: "10am",
    },
  },
  hello(nm) {
    console.log(nm);
  },
};

// console.log(res.hours.wed?.open);
console.log(res.hours.thu?.open);
res.hello?.("raj"); // if hello method avaialbe then calling
res.hi?.("raj");

const weeks = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];

for (const day of weeks) {
  const isOpen = res.hours[day]?.open || "closed";
  //   const isOpen = res.hours[day]?.open ? "open" : "closed";
  console.log(`on ${day} - ${isOpen}`);
}

// ex: 2 Optional chaining in Array

const users = [
  { name: "raj", age: 22 },
  { name: "jack", age: 2 },
];

console.log(users[1].name);
console.log(users[2]?.name);
