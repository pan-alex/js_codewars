// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

//     + Addition
//     - Subtraction
//     * Multiplication
//     // Integer Division

// Your Work (Task)

// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
// Examples (Input => Output)

// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""


function dotCalculator (equation) {
	// Split input on the operators
    // Store the operator in an object and map it to the actual mathematic function
    // Get length of 0th and 2nd element
    // Do math
    const operations = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '//' : (a, b) => Math.floor(a / b),
    }
    let eq = equation.split(/([+\-*//]+)/); // More complicated than .split(' ') but works if there is no space.
    numOfDots = operations[eq[1]](eq[0].trim().length, eq[2].trim().length)
    return '.'.repeat(numOfDots)
}