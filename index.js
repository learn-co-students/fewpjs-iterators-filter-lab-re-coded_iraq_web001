// Code your solution here
// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function findMatching(drivers, name) {
  return drivers.filter((driver) => driver.toLowerCase() == name.toLowerCase());
}
// console.log(findMatching(drivers, "Bobby"));
// console.log(findMatching(drivers, "Sammy"));

function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) => driver.startsWith(string));
}
// console.log(fuzzyMatch(drivers, "Sa"));
// console.log(fuzzyMatch(drivers, "y"));
// console.log(fuzzyMatch(drivers, "mm"));

const drivers1 = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string);
}

console.log(matchName(drivers1, "Bobby"));
