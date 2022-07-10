// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


// P:
    // Loop through array: count 0s and delete them.
    // Push zeros to end of array.

// Use sort function? If a == 0, return 1 else return 0.

function moveZeros(arr) {
    return arr.sort( (a, b) => b === 0 ? -1 : 0)
}


function moveZeros(arr) {
    let arr2 = arr.filter( a => a !== 0)
    const n = arr.length - arr2.length
    return arr2.concat(Array(n).fill(0))
}
moveZeros([1,2,0,1,0,1,0,3,0,1])

// Example:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



