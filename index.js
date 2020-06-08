function findMatching(drivers, name) {
   return drivers.filter(driver => driver.toUpperCase() == name.toUpperCase());
 }
 
 function fuzzyMatch(drivers, initial) {
   return drivers.filter(
     driver => driver[0].toUpperCase() == initial[0].toUpperCase()
   );
 }
 function matchName(drivers, name) {
   return drivers.filter(driver => driver.name == name);
 }