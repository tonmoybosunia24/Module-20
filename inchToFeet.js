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