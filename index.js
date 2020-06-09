// Code your solution here
function findMatching(array,string){
 return array.filter(item => item === string.toLowerCase() || item === string.toUpperCase() || item === string.charAt(0).toUpperCase() + string.slice(1))
}


function fuzzyMatch(array ,string){
  return array.filter(item=>item.startsWith(string))
}

function matchName(array , string){
  return array.filter(item=>item.name===string)
}