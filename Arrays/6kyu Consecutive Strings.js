// You are given an array (list) `strarr` of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// Examples:

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"


// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
// Note

// consecutive strings : follow one after another without an interruption
// Fundamentals


// P: strarr = array. Consists of strings
   // k = integer. Represents the number of consecutive strings to concatenate

// R: string. The longest k-concatenated string
    // If there is a tie, return the first.
    // If n (length of array) = 0, return ""
    // If k > n or k <= 0, return ""

// E:
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) // "ixoyx3452zzzzzzzzzzzz"
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) // ""
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) // ""

// P:
    // Do sanity checks:
        // If n = 0, k > n, or k <= 0, return ""
    // Otherwise, this means that n >= k and k > 1.
    // Begin looping through array (from i=0 to strarr.length - k) and concatenating each element (i) with the slice(i, i+k).
        // Store the longest length and string in vars longestLen, longestStr
        // Once looping is complete, return longestStr

function longestConsec(strarr, k) {
    if (strarr.length == 0 || k <= 0 || k > strarr.length) return ""

    let word = ''
    let longestLen = 0
    let longestStr = ''
    for (let i=0; i <= strarr.length-k; i++) {
        word = strarr.slice(i, i+k).join('')
        if (word.length > longestLen) {
            longestLen = word.length
            longestStr = word
        }
    }
    return longestStr
}