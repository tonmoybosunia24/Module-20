// console.log(4 / 2);
// console.log(98 / 2);
// console.log(13 / 2);
// console.log(18 % 2);
function isEven(number){
       var reminder = number % 2;
       // console.log(reminder);
       if(reminder === 0){
              // console.log("Number is even")
              return true;
       }
       else{
              // console.log("Number is Odd")
              return false;
       }
}
var myNumber = isEven(48);
console.log(myNumber)
