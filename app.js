"use strict";

const plusNumbers = (a,b) => {
    return a + b;
}
console.log(plusNumbers(4,3));

const findBigNumber = (a,b) => {
    if (a > b){
        return 'a katta';
    }
    else {
        return 'b katta';
    }
}

console.log(findBigNumber(5,7)); 

const findTypeNumber = (a) => {
    if(a % 2 ==0 ){
        return 'juft';
    }
    else{
        return 'toq';
    }
}
console.log(findTypeNumber(5));

const fizzBuzzFunc = (a) => {
    if (a % 3 === 0){
        return 'Fizz';
    } else if (a % 5 === 0) {
        return 'Buzz';
    } else {
        return 'FizzBuzz';
    }
}
console.log(fizzBuzzFunc());