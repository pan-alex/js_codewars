// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.



// P: An array of integers, arr
// R: Integer. The number of missing values needed to make arr a consecutive sequence.
// E:
consecutive([2, 4, 6]) // 2 -> 3 and 5 are needed to make this consecutive
consecutive([4, 8, 6])
consecutive([1,2,3,4]) // 0 -> if there are no gaps return 0.
consecutive([]) // 0 -> if empty return 0
consecutive([1]) // 0 -> if only 1 element return 0

// P:
    // Loop over length of array
        // Get the difference between the value of i+1 and i.
        // Increase a counter by that difference - 1.
    // Return the value of the counter
    // As a reduce


function consecutive(arr) {
    if (arr.length <= 1) return 0
    arr.sort( (a, b) => a - b)
    let counter = 0;
    for (let i=0; i < arr.length - 1; i++) {
        counter += (arr[i+1] - arr[i]) - 1;
    }
    return counter
}


// As a reduce
function consecutive(arr) {
    arr.sort( (a, b) => a - b)
    return arr.reduce( (acc, x, i, arr) => {
        if (i < arr.length - 1) {
            acc += (arr[i+1] - x) - 1
        }
        return acc
    }, 0)
}


// P:
    // O(1) solution:
        // Get difference between array length and the min/max values + 1.
        // E: [2, 4, 6, 8]; min: 2, max 8, diff = 6, length 4; 6 - 4 + 1 -> missing values = 3
        // E: [1, 9]; min: 1, max: 9, diff = 8, length: 2; 8 - 2 + 1 -> missing values = 7
        // E: [1, 2, 3, 4]; min: 1, max: 4, diff = 3, length = 4; 3 - 4 + 1 -> missing values = 0;


function consecutive(arr) {
     if (arr.length < 2) return 0
     return (Math.max(...arr) - Math.min(...arr) - arr.length)
}