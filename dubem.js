let today;
// console.log(today);
logToday();
// today = "Tuesday";
// console.log(today);

function logToday() {
  console.log("today is Tuesday");
}

const Ada = "Is a girl";
const dayx = ["Mon", "Tue", "Wed"];
const objs = {
  name: " Gozie",
  age: 26,
  height: 44,
};

const length = "Genesys  Academy";

// console.log(Ada.length);
// console.log(dayx);
// console.log(objs);

// functions

function wordGuesser() {
  console.log("You guesed wrong");
}

wordGuesser();

function add() {
  const number1 = 5;
  const number2 = 7;
  return number1 + number2;
}
add();
console.log(add());

function add2(num1, num2) {
  const thistype = typeof num1;
  const thistype2 = typeof num2;

  if (thistype === "number" && thistype2 === "number") {
    return num1 + num2;
  }

  return "This is not a number";
  // console.log(thistype);
  // console.log(thistype2);
}

// const addCon = add(4, 5);
// console.log(add2(2, 3));
console.log(add2(true, 3));
// console.log(add2("Hello", "My name is Dubem"));

// Functions -> Arrow functions -> Call stack -> Return Values, Conditional Execution, Conditionals, Loops

// const testFunct = wordGuesser();

// console.log(testFunct);
// console.log(addCon);

const ad = document.getElementById("added");

// ad.innerHTML = testFunct;
