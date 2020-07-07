// Code your solution here
function findMatching(array, string) {
  return array.filter(element => element === string.toLowerCase() || element === string.toUpperCase() || element === string.charAt(0).toUpperCase() + string.slice(1))
}

function fuzzyMatch(array, string) {
  return array.filter(item => item.startsWith(string))
}

function matchName(arrayOfObjects, string) {
  return arrayOfObjects.filter(obj => obj.name === string)
}
