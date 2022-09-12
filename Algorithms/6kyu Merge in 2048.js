// Remember the game 2048? http://gabrielecirulli.github.io/2048/

// The main part of this game is merging identical tiles in a row.

//     Implement a function that models the process of merging all of the tile values in a single row.
//     This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
//     A given tile can only merge once.
//     Empty grid squares are represented as zeros.
//     Your function should work on arrays containing arbitrary number of elements.

// Examples

// merge([2,0,2,2])  -->  [4,2,0,0]


// Games
// Arrays
// Algorithms

// P: Array of numbers with arbitrary length
    // Each number represents the value of a square
    // 0 represents an empty square
    // Numbers are powers of 2

// R:
    // Array of numbers with length 4
        // Merge matching / adjacent numbers toward the front of the array
        // Each tile can only be merged once

// E:
merge([4,4,8,16])  //  [8,8,16,0]
merge([8,8,16,0])  //  [16,16,0,0]
merge([16,16,0,0]) //  [32,0,0,0]

// P:
    // Remove 0s as they have no effect
    // Create an empty array
    // Loop through array:
        // Check if a number is adjacent to the same number
            // If so, push the sum of those numbers to the new array
            // Increment i by 1 (skip the next element, since it is merged)
    // Zero pad result

function merge(line) {
    let len = line.length;
    let arr = [];
    line = line.filter(x => x !== 0);
    for (let i=0; i < line.length; i++) {
        if (line[i] === line[i+1]) {
            arr.push(line[i]*2)
            i++
        } else {
            arr.push(line[i])
        }
    }
    return arr.concat( Array(len - arr.length).fill(0) )
  };