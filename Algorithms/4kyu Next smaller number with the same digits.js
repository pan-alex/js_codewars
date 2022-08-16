// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

//     some tests will include very large numbers.
//     test data only employs positive integers.

// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
// Strings
// Mathematics
// Algorithms

// P: A positive integer

// R: The next smallest positive digit containing the same digits.
    // If there is none, return -1.
    // Numbers with leading 0s do not count.

    // E:
    // nextSmaller(21) == 12
    // nextSmaller(531) == 513
    // nextSmaller(2071) == 2017

    // nextSmaller(9) == -1
    // nextSmaller(111) == -1
    // nextSmaller(135) == -1
    // nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

    // nextSmaller(702) == 207
    // nextSmaller(207) == -1
    // nextSmaller(2078) == -1
    // nextSmaller(2070) == 2007
    // nextSmaller(2170) == 2107

    // nextSmaller(907) --> 970 x; 709; 790 // It is possible that all numbers need to be swapped.

    // 51678633805 -> Shortest sequence that is not ascending: 805.
        // Sort in descending order, then swap position 0 and 1: 850 -> 580
        // Solution: 51678633580

    // 196459 -> Shortest sequence that is not ascending: 6459
        // Sort in descending order, then swap position 0 and i until the value is smaller than the sequence: 9654 -> 6954 -> 5964
        // Solution: 195964

// P:
    // If length 1 or contains only 1 digit: No solution exists.
    // If each digit is ascending from left to right (ignoring solutions that require a leading 0): no solution exists.
        // If 0 is in i=1, then ignore it because it can't be swapped to make a smaller number.
    // Seems that this can generally be solved by:
        // Check if there is a solution. If yes:
            // Remove the 1st digit and check again & continue until No.
            // Use the smallest sequence, x, that has a solution as the set of digits to swap.
        // Sort these numbers in descending order. Then swap positions 0 and i until the value is smaller than x.
        // Concatenate this sequence with the remainder of the digits.



function isAscending(seq) {
    return seq.join('') == seq.slice().sort( (a,b) => a - b).join('')
}

function hasSolution(nAsArrayCopy) {
    while (nAsArrayCopy[1] == 0) { // If 0 is in i=1, then ignore it (for solution testing) because it can't be swapped to make a smaller number.
        nAsArrayCopy.splice(1, 1)
    }
    if (nAsArrayCopy.length < 2) return false
    return !isAscending(nAsArrayCopy)
}


function nextSmaller(n) {
    let nAsArray = n.toString().split('')
    if (!hasSolution(nAsArray.slice())) return -1;

    // Find the shortest sequence that contains a possible solution (i.e., not ascending)
    let seq = nAsArray.slice();
    if (seq.length > 2) {
        for (let i=1; i < nAsArray.length-1; i++) {
            let testSeq = nAsArray.slice(i)
            if (isAscending(testSeq)) break;
            seq = testSeq
        }
    }

    // Sort this sequence in descending order. Then swap positions 0 and i until the value is smaller than seq.
    let sorted = seq.slice().sort( (a, b) => b - a)
    for (let i=1; i < seq.length; i++) {
        let temp;
        temp = sorted[0];
        sorted[0] = sorted[i];
        sorted[i] = temp;
        if (sorted.join('') < seq.join('')) break;
    }

    nextSmallerArray = nAsArray.slice(0, nAsArray.length-seq.length).concat(sorted)
    return +nextSmallerArray.join('')
}