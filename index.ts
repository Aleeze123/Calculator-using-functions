
//  Set up two variables containing number values.
const num1:number = 10;
const num2:number = 5;

// Set up a variable to hold an operator (+ or -).
let operator = '+';

//Create a function that takes two numbers and an operator as parameters, performs the corresponding operation, and returns the result
function calculate(num1: number, num2: number, operator: string): number {
    return operator === '+' ? num1 + num2 : num1 - num2;
}

// Call the function and output the result
console.log(`Result of ${num1} ${operator} ${num2} is:`, calculate(num1, num2, operator));

// Update the operator value
operator = '-';

// Call the function again with updated arguments and output the result using console.log
console.log(`Result of ${num1} ${operator} ${num2} is:`, calculate(num1, num2, operator));
