// Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array.

//For example
// arr = ['Hello','World','Codewars','Katas']
// with n = 3 should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always.


// P:
    // An array containing strings. Will never be empty. Will it ever contain non-strings?
    // An integer, N, representing the Nth longest string to find in the array. Will always be greater than 0. Will it ever be greater than the array?
// R: String. The Nth longest element in the array. If there is a tie in length, order them in terms of their index position.
// E:
longest(['Hello','World','Codewars','Katas'],3) // 'World'. 1 = 'Codewars', 2 = 'Hello' (because it comes before 'World' in the array)
longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4) // 'aa' --> 1 = 'gggg', 2 = 'eee', 3 = 'hhh', 4 = 'aa'
longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'],1) // 'a'
longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'],1) //'a'


// P:
    // Do an array sort. When there is a tie, Array.sort() will preserve the original position => Doesn't work

    // Make an array map of lengths.
    // Find maximum value and then remove it from both arrays. Repeat n times

function longest(arr, n) {
    lengths = arr.map( x => x.length)
    let longest;
    for (let i=1; i < n; i++) {
        longest = lengths.indexOf(Math.max(...lengths))
        arr.splice(longest, 1)
        lengths.splice(longest, 1)
    }
    return arr[lengths.indexOf(Math.max(...lengths))]
}


// Solution that makes use of sort
function longest(arr, n) {
    const copy = arr.concat()
    return copy.sort((a,b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b))[n-1]
}


// Lodash solution
const _ = require('lodash');

function longest(arr, n) {
    return _.sortBy(arr, s => -s.length)[n-1];
}