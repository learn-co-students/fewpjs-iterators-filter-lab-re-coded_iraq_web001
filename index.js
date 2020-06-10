// Code your solution here
function findMatching(drivers,str){
    let arr=[]
  arr=drivers.filter((driver) => driver.toLowerCase()===str.toLowerCase(),str)
  return arr
  }
function fuzzyMatch(drivers,str){
  let arr=[]
arr=drivers.filter((driver) => driver[0]===str[0],str)
return arr
}
function matchName(drivers,str){
  let arr=[]
arr=drivers.filter((driver) => driver.name===str,str)
return arr
}
