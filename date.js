


exports.getDay=function(){
var today=new Date();

  //  console.log(today); 
// 2022-08-10T12:56:55.103Z ---today gives us date in this form , hence we add options to fetch only desired result

var options={
    weekday:"long",
  month :"long",
  day:"numeric",
};


 return today.toLocaleDateString("en-us",options);

}