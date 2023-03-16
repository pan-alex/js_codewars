

// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

// For Example:

//     By applying a move to the string "where", the result is the string "here".
//     By applying a move to the string "a", the result is an empty string "".

// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.
// Notes

//     Both strings consist of lowercase latin letters.
//     If the string is already empty, you cannot perform any more delete operations.

// Fundamentals


// P: s, t = strings. Consist of lowercase letters

// R: The minimum number of moves that it would take to make s = t if deleting the first character from either of the strings.

// E:
shiftLeft("test", "west") // 2
shiftLeft("test", "yes") // 7
shiftLeft("b", "ab") // 1
shiftLeft('abacabadabacaba', 'abacabadacaba') // 10


// P:
    // Start by comparing whether the right-most characters match (i.e., reverse and loop over the strings)
    // Once they stop matching, calculate the number of remaining characters. That is the minimum number of moves


function shiftLeft(s, t){
    arr1 = s.split('').reverse()
    arr2 = t.split('').reverse()
    nMoves = s.length + t.length

    for (let i=0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) nMoves -= 2
        else break
    }

    return nMoves
}


abacabadabacaba
  abacabadacaba
acaba
acaba