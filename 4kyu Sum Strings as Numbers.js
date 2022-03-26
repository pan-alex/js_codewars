// 4 kyu
// Sum Strings as Numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// The simple String(+a + +b) does not work for very large numbers where JS automatically switches to scientific notation.
// Instead:
    // Convert each string into an array.
    // Starting at the rightmost value (i.e., reverse array):
        // Add the numbers, if > 10, add 1 to the next cell.
        // If 1 array runs out of length then end.


function sumStrings(a,b) { 
    a = a.split('').reverse(); // Reverse arrays so that smallest numbers are on the left side. (makes iteration easier)
    b = b.split('').reverse();
    let result = [];

    a.push(0); // Include a leading 0 in case the last operation gives a value >= 10
    b.push(0); 

    // if A shorter, fill with extra 0s. If b shorter, fill with extra 0s.
    let len = b.length;
    if (a.length < b.length) {
        let zeros = Array(b.length - a.length).fill(0)
        a = a.concat(zeros)
    } else if (b.length < a.length) {
        len = a.length
        let zeros = Array(a.length - b.length).fill(0)
        b = b.concat(zeros)
    }
    
    // Do the math on each digit. If the value is >= 10, carry the 1 to the next "digit"
    for(i=0; i < len; i++) {
        num = +a[i] + +b[i];
        if (num >= 10) {
            a[i+1] = +a[i+1] + 1;
            num -= 10
        }
        result.push(num)
    }
    result = result.reverse().join('').replace(/\b0+/g, '')  // Reverse back to original order. Join to sting & remove leading zero
    return result
}



// Someone else's solution: apparently there is a BigInt function that deals with Bit Ints.

function sumStrings(a,b) { 
    return (BigInt(a) + BigInt(b)).toString();
  }