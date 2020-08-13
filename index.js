// Code your solution here
function findMatching (arr,string){

  let filter = arr.filter(elem=>{
    return string.toLowerCase()===elem.toLowerCase();
  })
  return filter
}

function fuzzyMatch(arr,string){
  let filter = arr.filter(elem=>{
    return elem.toLowerCase().startsWith(string.toLowerCase())
  })
  return filter

}
function matchName(arr,string){

  let filter = arr.filter(elem=>{
    return string.toLowerCase() === elem.name.toLowerCase();
  })

  return filter;
}