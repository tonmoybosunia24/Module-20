function factorial(numbers){
       let result = 1;
       for(let i = numbers; i >= 1; i--){
              result = result * i;
       }
       return result;
}
var tatal = factorial(7);
console.log(tatal)