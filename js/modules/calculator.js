// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calc = (num1, num2, op) => {
    switch (op) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return 0;
    }
};

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (num1, num2) => {
    return (calc(num1, num2, '+'));
};
// SUBTRACT FUNCTION
const sub = (num1, num2) => {
    return (calc(num1, num2, '-'));
}
// MULTIPLY FUNCTION
const mul = (num1, num2) => {
    return (calc(num1, num2, '*'));
}
// DIVIDE FUNCTION
const div = (num1, num2) => {
    return (calc(num1, num2, '/'));
}
// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, sub, mul, div};