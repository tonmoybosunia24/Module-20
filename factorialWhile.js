
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