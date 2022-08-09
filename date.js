// console.log(module);


exports.getDay=function(){
var today=new Date();
   
    
var options={
    weekday:"long",
  month :"long",
  day:"numeric",
};
 return today.toLocaleDateString("en-us",options);

}
exports.getDate=function(){
var today=new Date();
   
    
var options={
    weekday:"long",
 
};
 return today.toLocaleDateString("en-us",options);

}

// console.log(exports);