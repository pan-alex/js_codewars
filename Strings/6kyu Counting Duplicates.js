// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// Loop through string:
    // Check if text.slice(i+1) includes text[i].
    // If yes:
        // increment counter
        // Replace all values of text[i] in the string



function duplicateCount(text){
    let counter = 0;
    text = text.toLowerCase()
    let i = 0;
    while (i < text.length) {
        if (text.slice(i+1).includes(text[i])){
            const regex = new RegExp(text[i], 'g');
            text = text.replace(regex, '');
            counter += 1;
        } else {
            i++;
        }
    }
    return counter
}



// Regex solution
function duplicateCount(text){
    text = text.toLowerCase().split('').sort().join('');
    let matches = text.match(/([\s\S])\1+/g) || [];
    return matches.length;
  }