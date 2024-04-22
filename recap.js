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