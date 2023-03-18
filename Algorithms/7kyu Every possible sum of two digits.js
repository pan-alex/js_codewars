// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]

// Therefore the result must be:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

// Algorithms



// P: sums = int

// R: array. Contains all possible sums of two digits from `sums`.
    // The order of the digits is from adding up the digits left to right.

// E:
number(156) // [ 6, 7, 11 ]
number(81596) //[ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]
// P:
    // Split `sums` into an array of numbers
    // Double loop:
        // 1st number: start from i=0 to end -1
            // 2nd number: start from j=i+1 to end
            // add arr[i] + arr[j] and store result in array



function digits(num){
    arr = num.toString().split('')
    result = []
    for (let i=0; i < arr.length-1; i++) {
        for (let j=i+1; j < arr.length; j++) {
            result.push(+arr[i] + +arr[j])
        }
    }
    return result;
}