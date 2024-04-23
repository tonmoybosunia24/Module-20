function isleapYear(year){
       var reminder = year % 4;
       if(reminder === 0){
              return true;
       }
       else{
              return false;
       }
}
var leapyear = isleapYear(1999);
console.log(leapyear)