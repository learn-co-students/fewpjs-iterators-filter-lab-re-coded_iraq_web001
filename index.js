const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(x,str){
  let y = x.filter(e => e.toUpperCase() === str.toUpperCase())
  return y
}
console.log(findMatching(drivers,"bobby"))
function fuzzyMatch(x,str){
  let y = x.filter(e => e.charAt(0)===str.charAt(0))
  return y
}
function matchName(x,str){
  let y = x.filter(e => e.name === str)
  return y
}
