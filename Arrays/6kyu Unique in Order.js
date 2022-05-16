// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// P: Iterable. E.g., string or array. Array may contain strings or numbers
    // Unclear if array elements are iterable / have length > 1

// R: Array with all repeated (duplicated & consecutive) elements deleted, and with all remaining elements in the same relative order


// E:

uniqueInOrder('AAAABBBCCDAABBB')   // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')    // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])    // [1,2,3]


// P:
    // Convert iterable to an array

    // One solution:
        // Loop through array. Check if value is the same as the previous value.
            // If unique, push to a new array
    // Second solution:
        // Use a filter to check that value is not the same as the previous value

var uniqueInOrder=function(iterable){
    if (typeof(iterable) === 'string') iterable = iterable.split('')

    let result = iterable.filter( (x, i) => {
        if (i===0) return true
        return x !== iterable[i - 1]
    })
    return result
}


// Refactored

var uniqueInOrder=function(iterable){
    return [...iterable].filter( (x, i) => x !== iterable[i - 1])
}