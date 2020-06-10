// Code your solution here

const findMatching= (drivers,name)=>{
  let result=drivers.filter(ele => ele.toLowerCase() == name.toLowerCase());
  return result;
};

const fuzzyMatch= (drivers,string)=>{
  let result=drivers.filter(ele => ele.charAt(0) == string.charAt(0));
  return result;
};

const matchName=(drivers,string)=>{
 let result=drivers.filter(ele => ele.name == string) ;
 return result;
};