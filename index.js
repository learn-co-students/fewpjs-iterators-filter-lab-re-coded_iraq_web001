function findMatching(drivers, string){
  let matchingList = drivers.filter(driver => {
    return driver.toUpperCase() === string.toUpperCase();
  });
  return matchingList;
}

function fuzzyMatch(drivers, string){
  return drivers.filter(driver => driver.startsWith(string));
}

function matchName(drivers, string){
  return drivers.filter(driver => driver.name === string);
}