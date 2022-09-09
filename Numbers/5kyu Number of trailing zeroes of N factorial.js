// Description:

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html
// Examples

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
// Algorithms
// Logic
// Mathematics



// Copy the equation in the link provided in the kata:
    // Number of trailing zeros, Z for n! is:
    // Z = sum(floor(n/(5**k)) from k=1 to kmax
    // where kmax = floor(log5(n))

const logBase = (n, base) => Math.log(n) / Math.log(base)

function zeros(n) {
    let kmax = Math.floor( logBase(n, 5) )
    let Z = 0;
    for (let k=1; k <= kmax; k++) {
        Z += Math.floor(n / (5**k))
    }
    return Z
}


// Even simpler solution from a math nerd or something
function zeros(n) {
    return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
}