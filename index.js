// while loop

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for loop
for (let siri = 0; siri < 10; siri++) {
  console.log("is a BEAST:", siri);
}

// for of loop
const iterable = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (const value of iterable) {
  console.log("value is", value);
}

const babeName = "Pioneer";
for (const charact of babeName) {
  console.log("Name is spelt with", charact);
}

// for in loop
const user = {
  name: "JohnPaul",
  age: "26",
  city: "Asaba",
};
for (const key in user) {
  //   console.log(key);
  console.log("The key is ${key} and the value is ${user[key]}");
}
