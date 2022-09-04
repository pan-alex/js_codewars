// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071

// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil


// P: A number
// R: The next largest number that can be made using those numbers
    // If there is none, return -1
    // If the same number can be made by swapping repeated digits, return that number. E.g., 414 -> 414
// E:
nextBigger(12)   // returns 21
nextBigger(513)  // returns 531
nextBigger(2017) // returns 2071
nextBigger(531) // returns -1

// P:
    // Test for solvability:
        // If all numbers are descending in order, there is no solution -> return -1
        // To test for ascending-ness:
            // For each element in string except first:
                // Check if the value is larger than the previous element
                // If yes, return true. Else continue. If no ascending values found return false.
    // Test for repetition:
        // If any numbers are repeated they can be "swapped" to give the input = output
            // Split string and create set. If length is different, a number is repeated
    // Swap numbers:
        // Find the right-most set of numbers that are in ascending order and swap them.
        // The only numbers that matter are the ones that make up the right-most sequence with an ascending number (e.g., 987654123) -> only "23" matters -> "32"


    // // Find if any numbers are repeated:
    // let unique = new Set(str.split(''))
    // if (unique.size !== str.length) return n


function hasSolution(str) {
    // A string has a solution if it contains a sequence with ascending or equal numbers
    let solvable = false;
    for (let i=str.length-1; i > 0; i--) {
        if (str[i] > str[i-1]) {
            solvable = true;
            break;
        }
    }
    return solvable;
}

function nextBigger(n){
    str = String(n)
    if (!hasSolution(str)) return -1

    // Find shortest right-most sequence that is solvable:
    let numbersToSwap;
    for (var i=str.length-1; i >= 0; i--) {
        if (hasSolution(str.slice(i))) {
            numbersToSwap = str.slice(i)
            break;
        }
    }

    // Sort numbers and then swap until number is larger than the original value.
    let swapped = numbersToSwap.split('').sort( (a, b) => a - b);
    console.log(swapped)
    for (let j=1; j < swapped.length; j++) {
        let temp = swapped[0];
        swapped[0] = swapped[j];
        swapped[j] = temp;
        if (swapped.join('') > numbersToSwap) break;
    }

    return +(str.slice(0, i) + swapped.join(''))
}