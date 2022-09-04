// Description:
// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) //=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
// Arrays
// Algorithms



// Example:

array = [[1,2,3,1],
         [4,5,6,4],
         [7,8,9,7],
         [7,8,9,7]]

snail(array) // #=>
    // [1,2,3,1
    //       ,4
    //       ,7
    //       ,7,9,8,7, // Going R-L
    //  7,
    //  4,5,6,
    //      9,8] // Going R-L

P:
    // Add first row.
    // Traverse down right side (from each row get last element)
    // Traverse from R-L on bottom row (add each element except last, in reverse order)
    // Traverse up from left side (from each row except top and bottom, get 1st element)
    // The steps above create a box. Repeat steps above with the inner box.

function boxPath(arr) {
    let path=[]
    // First row:
    path = path.concat(arr[0])
    // Traverse down rightside:
    for (let row=1; row<arr.length; row++) {
        path = path.concat(arr[row].slice(-1))
    }
    // Traverse bottom from R-L, excluding right-most column
    path = path.concat(arr[arr.length-1].slice(0, -1).reverse())

    // Traverse up left side, excluding bottom & top row
    for (let row=arr.length-2; row>0; row--) {
        path = path.concat(arr[row][0])
    }
    return path
}

function getInnerBox(arr) {
    // Remove top and bottom rows
    arr = arr.slice(1, -1)
    // Remove first and last elements
    return arr.map( a => a.slice(1, -1))
}

function snail(arr) {
    path = []
    while (arr.length > 0) {
        path = path.concat(boxPath(arr))
        arr = getInnerBox(arr)
    }
    return path
}