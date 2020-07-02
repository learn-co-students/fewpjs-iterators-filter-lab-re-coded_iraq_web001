
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function findMatching(drivers, name) {
  return drivers.filter((driver) => driver.toLowerCase() == name.toLowerCase());
}
function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) => driver.startsWith(string));
}
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
