// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// Strings
// Algorithms


// P: Input: String.
    // Input is a string containing comment characters and newlines.
    // markers: Array of characters to use as comment characters

// R: String: Return the input string with everything "commented out" removed. Any whitespaces at the end of the line should also be stripped.

// E:
solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]) // "apples, plums\npears\noranges"
solution("Q @b\nu\ne -e f g", ["@", "-"]) // "Q\nu\ne"

// P:
    // Split on newline
    // For each line, split on comment markers & only keep 1st element
    // Trim whitespace at end of each line
    // Join together with newline

function solution(input, markers) {
    let pattern = RegExp('[' + markers.join('') + ']', 'g')
    let arr = input.split('\n').map( x => x.split(pattern)[0].trim())
    return arr.join('\n')
};