// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


// P: A string of words (space separated); words are all lower case
// R: Return an array with the words sorted by their last letter. If the last letter is the same it should keep them in the original order.
// E:
last('man i need a taxi up to ubud') // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano') // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']

// P:
    // Split string on space
    // Apply sorting algorithm based on last letter of word
    // array.sort() will retain original order by default if the values are equal

function last(x){
    return x.split(' ').sort( (a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}
