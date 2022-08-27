// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


// Split string into array
// Create set with the array
// Check if length is the same as the original string.

function hasUniqueChars(str){
    let uniques = new Set(str)
    return uniques.size === str.length
}