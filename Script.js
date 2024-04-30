// Recap.js


// Variable
var myName = "khan";
// Math Operation
// Shorthand
// ++ --
// Array
var friends = ["Tonmoy", "Sohan", "Shamim", "Karim"];
var indexof = friends.indexOf("Sohan");
var thirdOfFriend = friends[2]
friends[3] = "Arif;"
// console.log(thirdOfFriend)
// console.log(indexof)
// console.log(friends)

// Conditionals
// <, >, >=, <=, ==, !=, !==

if(friends.length < 2){
       console.log("Fokir Tor Kuno Friends Nai")
}
else{
       // console.log("I Have Many Friends")
}

// loop
var number = 0;
while(number < 7){
       // console.log(number)
       number++;
}
for(var number = 0; number < 10; number++){
       // console.log(number);
}

// Function

function ismoonup(time){
       if(time < 8){
              // console.log("Akno Cad Ude nai")
       }
       else if(time > 8){
              // console.log("Akn To Cad Udthce")
       }
       return time;
}
var currnettime = ismoonup(9);
// console.log(currnettime);

// Object

var jantus = (
       height = "60",
       romanticism = "heavy",
       baapErTaka = "Borolok"
)


// Var-Let-Const.js


let age = 11;
// let age = 12;
const countryname = "Bangladesh";

console.log(countryname);


// Inch-To-Feet.js

// const myInches = 48;
// const myFeet = myInches / 12;
// console.log(myFeet)
function inchToFeet(inch){
       console.log("Inch :", inch)
       var feet = inch / 12;
       return feet;
}
var totalFeet = inchToFeet(60);
console.log("Feet", totalFeet)
var nanaFeet = inchToFeet(144);
console.log("Feet :", nanaFeet);
function mileToKm(mile){
       console.log("Mile :", mile);
       const kilomiter = mile * 1.60934;
       return kilomiter;
}
var Totalkilomiter = mileToKm(2);
console.log(Totalkilomiter);


// If-Even.js


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


// Leap-Year.js


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


// Find-Odd-Sum


// function findOddSum(numbers){
//        let sum = 0;
//        for(var i = 0; i < numbers.length; i++){
//               // const index = i;
//               const element = numbers[i];
//               sum = sum + element;
//               console.log(element, sum)
//        }
//        return sum;
// }
// const myNumbers = [12, 65, 91, 75, 44];
// findOddSum(myNumbers);


// function getSumOfAnArray(Numbers){
//        var sum = 0
//        for(i = 0; i < Numbers.length; i++){
//               var element = Numbers[i];
//               sum = sum + Numbers[i];
//               console.log(element, sum);
//        }
//        return sum;
// }
// function getOddNumberOfAnArray(numbers){
//        const oddNumber = [];
//        for(let i = 0; i < numbers.length; i++){
//               var element = numbers[i];
//               if(element % 2 != 0){
//                      // console.log(element)
//                      oddNumber.push(element)
//               }
//        }
//        return oddNumber;
// }
// var myNumbers = [45, 50, 55, 60, 65, 70, 75];
// const oddNumber = getOddNumberOfAnArray(myNumbers);
// console.log(oddNumber)
// const oddNumberSum =  getSumOfAnArray(oddNumber);
// console.log(oddNumberSum)


// Sum-Of-Numbers


function someOfNumber(numbers){
       let sum = 0;
       for(i = 1; i <= numbers; i++){
              sum = sum + i;
              console.log(i, sum);
       }
       return sum;
}
let totalsum = someOfNumber(7);
console.log(totalsum);


// Multipication-Of-Number.js


function factorial(numbers){
       let result = 1;
       for(let i = numbers; i >= 1; i--){
              result = result * i;
       }
       return result;
}
var tatal = factorial(7);
console.log(tatal)


// Factorial-While.js


function whilenumber(Number){
       var sum = 1; 
       var i = 1;
       while(i <= Number){
              sum = sum * i;
              i++
       }
       return sum;
}
var result = whilenumber(7);
console.log(result)