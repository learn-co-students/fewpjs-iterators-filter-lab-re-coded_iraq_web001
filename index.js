// Code your solution here
    
 const findMatching = (drivers, string) => drivers.filter(name =>  name.toLowerCase() === string.toLowerCase() )

const fuzzyMatch = (drivers, string) => drivers.filter(name =>  name.toLowerCase().startsWith(string.toLowerCase()) )

const matchName = (drivers, string) => drivers.filter(driver => driver.name === string )