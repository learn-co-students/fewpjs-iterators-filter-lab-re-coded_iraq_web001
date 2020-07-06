// Code your solution here
function findMatching(dr,st){
  return dr.filter(function(driverName){
    return driverName.toLowerCase()=== st.toLowerCase()
  })
}
function fuzzyMatch(dr, st){
  let name = st.length
  return dr.filter(function (drName) {
    return drName.slice(0, name) === st
  })
}
function matchName(dr, st){
  return dr.filter(function(driver) {
    return driver.name.toLowerCase() === st.toLowerCase()

  })
}
