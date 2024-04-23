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

   