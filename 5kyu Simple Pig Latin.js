// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    // Assume that puncuation marks are separated by spaces as in the example above.
    // Split string into array separated by spaces.
    // For each element (word):
        // check if values are alphabet characters only.
            // If yes, split/reverse/join + add "ay"
            // If not, ignore it (as per assumption about puncuation above)
    // join words.
    return str.split(' ')
            .map( word => {
                return /[A-Za-z]/.test(word) ? word.slice(1) + word.split('')[0] + 'ay' : word})
            .join(' ')
  }