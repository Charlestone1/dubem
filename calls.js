function firstFunction() {
  console.log("First Function Start");
  secondFunction();
  console.log("First Function End");
}

function secondFunction() {
  console.log("Second Function Start");
  thirdFunction();
  console.log("Second Function End");
}

function thirdFunction() {
  console.log("Third Function Executing");
}

firstFunction();

function mouse() {
  return 5;
}
// const mice = () => 5;
const mice2 = () => {
  console.log(5);
  return 45;
};
const mice = (num) => {
  return num;
};

console.log(mice());

const person = {
  name: "Gozie",
  greet: function () {
    console.log(this.name);
  },
};

const person2 = {
  name: "Gozie",
  greet: () => {
    console.log("This is today");
  },
};

person2.greet();
