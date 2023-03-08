//STEP 1
function halfNumber(num) {
    return `Half of ${num} is ${num/2}.`;
}
console.log(halfNumber(5));

//STEP 2
function squareNumber(num) {
    return `The result of squaring the number ${num} is ${num*num}.`;
}
console.log(squareNumber(3));

//STEP 3
function percentOf(num1, num2){
    let perc = (num1/num2)*100;
    return `${num1} is ${perc}% of ${num2}.`;
}
console.log(percentOf(2, 4));

//STEP 4
function findModulus(num1, num2){
    let mod = num2 % num1;
    return `${mod} is the modulus of ${num1} and ${num2}.`;
}
console.log(findModulus(4, 10));
