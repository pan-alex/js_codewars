// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    // Function repeats each letter x times where x is its position in the string. Additionally the first instance is upper case and the repeats are lowercase (so the actual number of repeats is x - 1).

    // Convert string to array
    arr = s.split('')
    // for each element in array, make lowercase and repeat x - 1 times, then concatenate to the uppercase verssion of the letter
    let accumArray = arr.map( 
        (letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i)
    )
    //concatenate all inputs separated by '-'
    return accumArray.join('-')
}