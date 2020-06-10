// Code your solution here


 function findMatching (arr,string){

  let filtered = arr.filter(elem=>{
    return string.toLowerCase()===elem.toLowerCase();
  })
  return filtered
}

function fuzzyMatch(arr,string){
  let filtered = arr.filter(elem=>{
    return elem.toLowerCase().startsWith(string.toLowerCase())
  })
  return filtered

}
function matchName(arr,string){

  let filtered = arr.filter(elem=>{
    return string.toLowerCase() === elem.name.toLowerCase();
  })

  return filtered;
}
