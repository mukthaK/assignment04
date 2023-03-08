// IMPORT THE MODULE
import {add, sub, mul, div} from './modules/calculator.js';

let  num1, num2, op, result = 0;

 // COLLECT FIRST NUMBER FROM USER
 do {
    num1 = Number(prompt('Enter first number'));
    if (isNaN(num1)) {
        alert('Enter number');
    } else {
        break;
    }
} while (true);

 // COLLECT SECOND NUMBER FROM USER
do {
    num2 = Number(prompt('Enter second number'));
    if (isNaN(num2)) {
        alert('Enter number');
    } else {
        break;
    }
} while (true);

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
do {
    op = prompt('What operation would you like to perform? (+,-,*,/)');
    if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        alert('Please enter a valid operation (+,-,*,/)');
    } else {
        break;
    }
} while (true);

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
switch(op) {
    case '+':
        alert(add(num1, num2));
        break;
    case '-':
        alert(sub(num1, num2));
        break;
    case '*':
        alert(mul(num1, num2));
        break;
    case '/':
        alert(div(num1, num2));
        break;
    // default: alert('Please select the proper operation to be performed and run the application again!');  
    // It never goes to the default clause since the inputs are already validated  
}

