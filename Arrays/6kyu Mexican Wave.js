// Introduction

// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

// Task

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// Rules

//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Good luck and enjoy!
// Kata Series

// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

// Arrays
// Strings
// Fundamentals



// P: str = string. Consists of lowercase letters and whitespaces. May be empty.

// R: Array. Each element (of index i), of the array is the string with the `i`th element capitalized.
    // However, any whitespaces should be ignored.
    // No stipulations are made regarding performance

// E:
wave('codewars') // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
wave ('two words') // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
wave(" gap ") // [" Gap ", " gAp ", " gaP "]
wave("a   bba") // ["A   bba", "a   Bba", "a   bBa", "a   bbA"]

// P:
// Method 1 ()
    // Create an array, arr, of length n-s (where n is length of the string and s is the number of whitespaces) where each element contains str.
    // Loop through each element of array:
        // i = ith element of the array
        // j = ith element of the array + number of whitespaces to skip
        // Check if arr[i] is a whitespace. If yes, skip element and add +1 to j.
        // If not a whitespace, replace that letter with the uppercase letter

function wave(str){
    let len = str.replace(/ /g, '').length
    let arr = Array(len).fill(str)
    let j=0

    for (let i=0; i < len; i++) {
        while (arr[i][j] == ' ') j++
        arr[i] = str.slice(0, j) + str.slice(j, j+1).toUpperCase() + str.slice(j+1)
        j++
    }
    return arr
}

// Method 2
    // Create an array of length n where each element contains str.
    // Loop through each element and make the ith element uppercase.
    // Filter any elements that are equal to str (i.e., toUpperCase had no effect).

function wave(str){
    arr = [...str].map( (_, i) => {
        return str.slice(0, i) + str.slice(i, i+1).toUpperCase() + str.slice(i+1)
    })
    arr.filter( x => x != str)
    return arr
}

// Method 3
    // Loop through each character in the string
    // If it is a lowercase letter, form the string with that letter as uppercase
    // Push the result to an array

function wave(str){
    let arr = []
    for (let i=0; i < str.length; i++) {
        if(/[a-z]/.test(str[i])) {
            arr.push(str.slice(0, i) + str.slice(i, i+1).toUpperCase() + str.slice(i+1))
        }
    }
    return arr
}

