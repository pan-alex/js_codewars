// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

//     Starts at minimum
//     Ascends one at a time until reaching the maximum, then
//     Decends one at a time until reaching the minimum
//     repeat until the string is the appropriate length

// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

// Notes:

//     length will always be non-negative
//     negative numbers can appear for minimum and maximum values
//     hyphens/dashes ("-") for negative numbers do count towards the length
//     the resulting string must be truncated to the exact length provided
//     return an empty string if maximum < minimum or length == 0
//     minimum and maximum can equal one another and result in a single number repeated for the length of the string

// P:
    // Loop: While string.length is less than length:
        // string += i
        // increment i until max, then decrement i until min, and increment again.
            // If i is less than max and greater than its previous value, increase i. If i is more than min and less than its previous value, increase

    // Edge cases:
        // if maximum < minimum or length == 0: return ''
        // if maximum == minimum return minimum

function ascendDescend(length, minimum, maximum) {
    if (length == 0 || maximum < minimum) return ''

    let result = new String(minimum)
    let i = minimum
    let z = (minimum == maximum) ? 0 : 1 // 1 for ascending, -1 for descending, 0 if min == max

    while (result.length < length) {
        if(i == maximum && z > 0) z = -1
        if(i == minimum && z < 0) z = 1
        i += z
        result += i
    }
    return result.slice(0, length)
  }



//   if (ascending) {
//     if (i < maximum) {
//         i += 1
//     } else {
//         i -= 1
//         ascending = false
//     }
// } else {
//     i = (i > minimum) ? i-1 : i+1
//     ascending = true
// }