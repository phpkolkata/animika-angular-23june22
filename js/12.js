// Topic: Object Method
// window.name = "test";
const rajObject = {
  firstName: "raj",
  lastName: "singh",
  birthYear: 1991,
  job: "teacher",
  friends: ["suamn", "pradip"],
  calcAge: function () {
    // return 2022 - this.birthYear;
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  //   calcAge2() {
  //     return "test";
  //   },

  calcAge3(birthYear) {
    return 2022 - birthYear;
  },

  getSummary() {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName}, birth year is ${this.birthYear} and i am a ${this.job}`
    );
  },
};

// cpu usage - slow down speed
// console.log(rajObject.calcAge());
// console.log(rajObject.calcAge());
// console.log(rajObject.calcAge());

// better approach for speed
// console.log(rajObject.calcAge());
// console.log(rajObject.age);
// console.log(rajObject.age);

// console.log(rajObject.calcAge2());

// console.log(rajObject.calcAge3(1991)); //work
console.log(rajObject["calcAge3"](1991)); //work

rajObject.getSummary();
